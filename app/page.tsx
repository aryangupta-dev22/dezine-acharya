"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Brain,
  DraftingCompass,
  Lightbulb,
  Mail,
  MapPin,
  Palette,
  Phone,
  Shirt,
  Sparkles,
  Users,
  Wifi,
  Wallet,
  X,
  Quote,
  Target,
  Eye,
  Star,
  Award,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statCounts, setStatCounts] = useState({
    aspirants: 0,
    exams: 0,
    years: 0,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("hero-stats");
    if (!target) return;
    let started = false;
    let rafId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const duration = 1400;
        const start = performance.now();
        const max = { aspirants: 100000, exams: 3, years: 12 };
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setStatCounts({
            aspirants: Math.round(max.aspirants * eased),
            exams: Math.round(max.exams * eased),
            years: Math.round(max.years * eased),
          });
          if (progress < 1) rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(target);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
    script.onload = () => {
      (window as Window & { AOS?: { init: (c: object) => void } }).AOS?.init({
        duration: 200,
        easing: "ease-out-cubic",
        offset: 10,
        once: false,
      });
    };
    document.body.appendChild(script);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-white text-[#2A1A1A] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        .f-play { font-family: 'Playfair Display', serif; }
        .f-corm  { font-family: 'Cormorant Garamond', serif; }
        .f-dm    { font-family: 'DM Sans', sans-serif; }

        .nav-link { position: relative; }
        .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1.5px; background:#C9922A; transition:width .3s; }
        .nav-link:hover::after { width:100%; }

        .shimmer-bar {
          background: linear-gradient(90deg, #C9922A 0%, #E8B84B 45%, #C9922A 100%);
          background-size: 400px 100%;
          animation: shimmer 2.8s linear infinite;
        }
        @keyframes shimmer { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }

        @keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        .float-anim { animation: float-y 6s ease-in-out infinite; }

        @keyframes scroll-bounce { 0%,100%{transform:translateX(-50%) translateY(0);opacity:.4} 50%{transform:translateX(-50%) translateY(8px);opacity:.75} }
        .scroll-hint { animation: scroll-bounce 1.7s ease-in-out infinite; }

        @keyframes wa-bounce { 0%{transform:scale(0) rotate(-180deg);opacity:0} 60%{transform:scale(1.15) rotate(8deg);opacity:1} 80%{transform:scale(.93) rotate(-4deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
        @keyframes wa-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.55)} 60%{box-shadow:0 0 0 14px rgba(37,211,102,0)} }
        @keyframes wa-ring   { 0%,100%{transform:rotate(0)} 15%{transform:rotate(-12deg)} 30%{transform:rotate(12deg)} 45%{transform:rotate(-6deg)} 60%{transform:rotate(0)} }
        .wa-fab { animation: wa-bounce .7s cubic-bezier(.34,1.56,.64,1) 1.2s both, wa-pulse 2.4s ease-in-out 2s infinite; transition:transform .2s; }
        .wa-fab:hover { transform:scale(1.1); }
        .wa-fab:hover svg { animation: wa-ring .65s ease; }
        .wa-wrap:hover .wa-tip { opacity:1; transform:translateX(0); }

        .vision-card { position:relative; }
        .vision-card::before { content:''; position:absolute; top:0; right:0; width:90px; height:90px; border-bottom:1px solid rgba(201,146,42,.3); border-left:1px solid rgba(201,146,42,.3); }
        .vision-card::after  { content:''; position:absolute; bottom:0; left:0; width:64px; height:64px; border-top:1px solid rgba(201,146,42,.2); border-right:1px solid rgba(201,146,42,.2); }

        .course-card { overflow:hidden; position:relative; }
        .course-card::after { content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 35%,rgba(255,255,255,.07) 50%,transparent 65%); transform:translateX(-100%); transition:transform .55s; pointer-events:none; }
        .course-card:hover::after { transform:translateX(100%); }

        .prob-card { transition:border-color .3s,transform .3s,box-shadow .3s; }
        .prob-card:hover { box-shadow:-4px 0 18px rgba(201,146,42,.22); transform:translateX(4px); border-color:#6B1A1A; }

        .sol-row { transition:background .2s; }
        .sol-row:hover { background:#FDFAF6; }
        .sol-icon { transition:transform .25s; }
        .sol-row:hover .sol-icon { transform:scale(1.18); }

        .t-card::before { content:'"'; font-family:'Cormorant Garamond',serif; font-size:6rem; color:#C9922A; opacity:.22; position:absolute; top:0; left:14px; line-height:1; pointer-events:none; }

        .ft-link { display:flex; align-items:center; gap:8px; }
        .ft-link::before { content:''; width:4px; height:4px; border-radius:50%; background:#C9922A; opacity:.6; flex-shrink:0; transition:opacity .2s; }
        .ft-link:hover::before { opacity:1; }

        .letter-rule { border:none; border-top:1.5px solid #C9922A; opacity:.35; }

        .contact-panel {
          border-left: 3px solid #C9922A;
          background: linear-gradient(180deg, #FFFCF8 0%, #FDF6EC 100%);
          box-shadow: 0 8px 24px rgba(74, 14, 14, 0.08);
        }
        .contact-row { display: flex; align-items: flex-start; gap: 12px; padding: 8px 0; }
        .contact-row + .contact-row { border-top: 1px dashed rgba(201, 146, 42, 0.28); }
        .contact-ic {
          width: 26px; height: 26px; border-radius: 999px; display: inline-flex;
          align-items: center; justify-content: center; background: #fff;
          border: 1px solid rgba(201, 146, 42, 0.45); color: #6B1A1A;
          font-size: .82rem; line-height: 1; flex-shrink: 0; margin-top: 1px;
        }
        .contact-link { color: #6B1A1A; font-weight: 600; text-decoration: none; transition: color .2s ease, text-decoration-color .2s ease; }
        .contact-link:hover { color: #4A0E0E; text-decoration: underline; text-underline-offset: 3px; }

        /* Team card */
        .team-card { transition: transform .3s, box-shadow .3s; }
        .team-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(74,14,14,.14); }
        .team-avatar { background: linear-gradient(135deg, #FDF6EC 0%, #f5e6d0 100%); }

        /* VM card */
        .vm-card { position: relative; overflow: hidden; }
        .vm-card::before { content:''; position:absolute; top:-30px; right:-30px; width:120px; height:120px; border-radius:50%; background:rgba(201,146,42,.08); pointer-events:none; }

        /* Course category card */
        .cat-card { transition: transform .3s, box-shadow .3s, border-color .3s; }
        .cat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(74,14,14,.12); border-color: #C9922A; }

        /* Exam pill */
        .exam-pill { transition: background .25s, color .25s, transform .2s; cursor: default; }
        .exam-pill:hover { background: #6B1A1A; color: #E8B84B; transform: translateY(-2px); }

        /* Differentiator badge */
        .diff-badge { background: linear-gradient(135deg,#4A0E0E,#6B1A1A); }
      `}</style>

      {/* WhatsApp FAB */}
      <div className="wa-wrap fixed bottom-7 right-7 z-[300] flex flex-col items-end gap-2">
        <div className="wa-tip opacity-0 pointer-events-none translate-x-2 transition-all duration-300 bg-white text-[#2A1A1A] text-sm f-dm font-medium px-4 py-2 rounded shadow-xl border border-gray-100 whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
        <a
          href="https://wa.me/918860615795?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-fab w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16.002 2.667C8.638 2.667 2.667 8.637 2.667 16c0 2.358.63 4.666 1.826 6.684L2.667 29.333l6.84-1.794A13.282 13.282 0 0016.002 29.333c7.364 0 13.331-5.97 13.331-13.333 0-7.363-5.967-13.333-13.331-13.333zm0 24.267a11.004 11.004 0 01-5.608-1.535l-.402-.24-4.061 1.065 1.082-3.952-.262-.415A10.964 10.964 0 015.002 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.04-8.224c-.33-.165-1.953-.963-2.257-1.073-.304-.11-.524-.165-.745.165-.22.33-.854 1.073-1.046 1.293-.192.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.638-.98-.875-1.642-1.956-1.834-2.286-.192-.33-.02-.508.145-.672.148-.147.33-.385.494-.577.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.577-.083-.165-.745-1.797-1.02-2.46-.27-.647-.545-.56-.745-.57-.192-.01-.412-.012-.633-.012-.22 0-.577.082-.879.412-.302.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.554 5.638 4.985.788.34 1.403.544 1.882.696.791.252 1.51.216 2.079.131.634-.094 1.953-.799 2.228-1.57.275-.77.275-1.43.192-1.569-.082-.137-.302-.22-.632-.385z" />
          </svg>
        </a>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-3 left-4 right-4 z-50 h-[60px] md:h-[68px] flex items-center justify-between px-4 md:px-10 bg-white/95 backdrop-blur-md border-[#f0e0d0] rounded-xl transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-[0_4px_20px_rgba(0,0,0,0.25)]"}`}
      >
        <a href="#hero">
          <Image
            src="/logo-new.webp"
            alt="Dezine Acharya"
            width={90}
            height={44}
            className="w-[130px] relative top-1 object-contain"
            priority
          />
        </a>
        <div className="hidden lg:flex items-center gap-9">
          {[
            ["#about", "About"],
            ["#courses", "Courses"],
            ["#team", "Our Team"],
            ["#parents", "For Parents"],
            ["#community", "Community"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="nav-link f-dm text-[13px] font-medium tracking-[.14em] uppercase text-[#6B1A1A] hover:text-[#C9922A] transition-colors duration-200 no-underline"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="f-dm text-[.75rem] tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-6 py-2.5 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 no-underline"
          >
            Enroll Now
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-6 h-0.5 bg-[#6B1A1A]" />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[200] bg-white flex-col items-center justify-center gap-8 px-10 ${menuOpen ? "flex" : "hidden"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 bg-transparent border-0 text-2xl text-[#6B1A1A] cursor-pointer"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        {[
          ["#about", "About"],
          ["#courses", "Courses"],
          ["#team", "Our Team"],
          ["#parents", "For Parents"],
          ["#community", "Community"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="f-dm text-xl tracking-[.12em] uppercase text-[#6B1A1A] no-underline"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="f-dm text-[.85rem] tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-10 py-3 no-underline"
        >
          Enroll Now
        </a>
      </div>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section
        id="hero"
        className="min-h-screen flex items-center pt-[50px] md:pt-[72px] relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FDF6EC]"
      >
        <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#FDF6EC] opacity-70 pointer-events-none float-anim" />
        <div className="absolute right-[10%] top-[12%] w-px h-[70%] bg-gradient-to-b from-transparent via-[#C9922A] to-transparent opacity-15 pointer-events-none" />
        <div
          className="absolute left-[4%] bottom-[14%] w-24 h-24 border border-[#C9922A]/20 rotate-45 pointer-events-none"
          data-aos="fade-in"
          data-aos-delay="700"
        />
        <div
          className="absolute left-[6%] bottom-[20%] w-12 h-12 border border-[#C9922A]/15 rotate-45 pointer-events-none"
          data-aos="fade-in"
          data-aos-delay="500"
        />

        <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center w-full relative z-10">
          {/* Left */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <p
              className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Design Education — Redefined
            </p>
            <h1
              className="f-play font-black text-5xl md:text-[4rem] leading-[1.08] text-[#4A0E0E]"
              data-aos="fade-right"
              data-aos-delay="180"
            >
              Where Design
            </h1>
            <h1
              className="f-corm font-light italic text-5xl md:text-[4rem] leading-[1.08] text-[#C9922A] my-1"
              data-aos="fade-right"
              data-aos-delay="220"
            >
              is Discovered,
            </h1>
            <h1
              className="f-play font-black text-5xl md:text-[4rem] leading-[1.08] text-[#4A0E0E] mb-7"
              data-aos="fade-right"
              data-aos-delay="260"
            >
              Not Drilled.
            </h1>
            <div
              className="shimmer-bar h-[3px] w-20 rounded-full mb-8"
              data-aos="fade-right"
              data-aos-delay="320"
            />
            <p
              className="f-dm text-[.97rem] leading-relaxed text-[#8A6A5A] font-light max-w-[440px] mb-10 mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="360"
            >
              We are not a coaching factory. Dezine Acharya is a{" "}
              <strong className="text-[#6B1A1A] font-semibold">
                guided mentorship ecosystem
              </strong>{" "}
              — a team of experienced design educators helping aspirants crack{" "}
              <strong className="text-[#6B1A1A] font-semibold">
                NID, NIFT, UCEED, NATA &amp; CEED
              </strong>{" "}
              through creative clarity, not rote drilling.
            </p>
            <div
              className="flex gap-4 flex-wrap mb-12 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="420"
            >
              <a
                href="#contact"
                className="f-dm text-[.8rem] tracking-[.16em] uppercase bg-[#6B1A1A] text-white px-9 py-4 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline"
              >
                Begin Your Journey
              </a>
              <a
                href="#about"
                className="f-dm text-[.8rem] tracking-[.16em] uppercase border border-[#6B1A1A] text-[#6B1A1A] px-9 py-4 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline"
              >
                Our Approach
              </a>
            </div>
            <div
              id="hero-stats"
              className="flex gap-4 sm:gap-8 lg:gap-10 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {[
                [`${statCounts.aspirants.toLocaleString()}+`, "Aspirants Goal"],
                [String(statCounts.exams), "Design Streams"],
                [`${statCounts.years}+`, "Years Experience"],
              ].map(([num, lbl]) => (
                <div key={lbl} className="text-center lg:text-left">
                  <div className="font-bold text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.6rem] text-[#6B1A1A] leading-none">
                    {num}
                  </div>
                  <div className="text-[.58rem] sm:text-[.64rem] md:text-[.7rem] tracking-[.18em] uppercase text-[#8A6A5A] mt-1">
                    {lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Vision & Mission card */}
          <div className="relative" data-aos="fade-left" data-aos-delay="250">
            <div className="vision-card bg-gradient-to-br from-[#6B1A1A] to-[#4A0E0E] p-11 overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <Eye size={18} className="text-[#C9922A]" />
                <p className="f-dm text-[.68rem] tracking-[.3em] uppercase text-[#C9922A] opacity-90">
                  Vision
                </p>
              </div>
              <blockquote className="f-corm font-light italic text-[1.45rem] leading-relaxed text-white/90 mb-8 pb-8 border-b border-[#C9922A]/20">
                &ldquo;To democratize design education in India — making quality
                mentorship accessible, inspiring, and greed-free.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mb-4">
                <Target size={18} className="text-[#C9922A]" />
                <p className="f-dm text-[.68rem] tracking-[.3em] uppercase text-[#C9922A] opacity-90">
                  Mission
                </p>
              </div>
              <p className="f-corm font-light italic text-[1.2rem] leading-relaxed text-white/80 mb-8">
                &ldquo;To guide 1 lakh design aspirants through a
                human-centered, experience-driven model — where design is{" "}
                <em className="text-[#E8B84B] not-italic">discovered</em>, not
                taught.&rdquo;
              </p>
              <div className="border-t border-[#C9922A]/25 pt-6 flex gap-3 flex-wrap">
                {["NID", "NIFT", "UCEED", "NATA", "CEED"].map((e) => (
                  <span
                    key={e}
                    className="f-dm text-[.75rem] tracking-[.18em] uppercase border border-[#C9922A]/50 text-[#E8B84B] px-4 py-1.5"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-[#C9922A] translate-x-3 translate-y-3 -z-10 opacity-15" />
          </div>
        </div>

        <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="f-dm text-[.62rem] tracking-[.28em] uppercase text-[#6B1A1A] opacity-50">
            Scroll
          </span>
          <div className="w-px h-9 bg-gradient-to-b from-[#6B1A1A] to-transparent opacity-40" />
        </div>
      </section>

      {/* ═══════════════════════════════ DIFFERENTIATOR STRIP ═══════════════════════════════ */}
      <section className="py-10 px-6 md:px-10 bg-[#4A0E0E]" data-aos="fade-up">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {[
            { icon: Users, label: "Expert Faculty Team" },
            { icon: Brain, label: "Design Thinking First" },
            { icon: Wallet, label: "Transparent & Affordable" },
            { icon: Sparkles, label: "Not a Coaching Factory" },
            { icon: Award, label: "Guided Career Path" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon size={18} className="text-[#E8B84B]" />
              <span className="f-dm text-[.8rem] tracking-[.14em] uppercase text-white/80">
                {item.label}
              </span>
              {i < 4 && (
                <span className="hidden md:block w-px h-5 bg-[#C9922A]/30 ml-6" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ COURSES ═══════════════════════════════ */}
      <section
        id="courses"
        className="py-20 md:py-24 px-4 md:px-10 bg-[#FDF6EC]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">
              What We Offer
            </p>
            <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E] mb-5">
              Our Course Streams
            </h2>
            <p className="f-dm text-[.97rem] text-[#8A6A5A] font-light max-w-lg mx-auto leading-relaxed">
              Three focused streams — each with a dedicated faculty, tailored
              curriculum, and a clear roadmap to India&apos;s most prestigious
              institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Design Stream */}
            <div
              className="cat-card bg-white border border-[#f0e0d0] p-4 md:p-10 flex flex-col"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-14 h-14 rounded-full bg-[#FDF6EC] border border-[#C9922A]/30 flex items-center justify-center mb-7">
                <Palette
                  size={26}
                  strokeWidth={1.8}
                  className="text-[#C9922A]"
                />
              </div>
              <p className="f-dm text-[.68rem] tracking-[.28em] uppercase text-[#C9922A] mb-3">
                Stream 01
              </p>
              <h3 className="f-play font-bold text-[2rem] text-[#4A0E0E] mb-4">
                Design
              </h3>
              <p className="f-dm text-[.9rem] leading-relaxed text-[#8A6A5A] font-light mb-7 flex-1">
                For students passionate about product, communication, and
                interaction design. Our curriculum blends design theory,
                ideation, and portfolio-building with deep focus on entrance
                patterns.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  { code: "NID", full: "National Institute of Design" },
                  {
                    code: "UCEED",
                    full: "Undergraduate Common Entrance Exam for Design",
                  },
                  {
                    code: "CEED",
                    full: "Common Entrance Exam for Design (PG)",
                  },
                ].map((e) => (
                  <div
                    key={e.code}
                    className="exam-pill group flex items-center gap-3 bg-[#FDF6EC] border border-[#C9922A]/25 px-4 py-2.5"
                  >
                    <ChevronRight size={13} className="text-[#C9922A]" />
                    <div>
                      <span className="f-dm text-[.8rem] font-semibold text-[#6B1A1A] group-hover:text-white tracking-wide">
                        {e.code}
                      </span>
                      <span className="f-dm text-[.7rem] text-[#8A6A5A] ml-2">
                        {e.full.length > 30
                          ? e.full.substring(0, 30) + "…"
                          : e.full}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="f-dm text-[.75rem] tracking-[.14em] uppercase text-center border border-[#6B1A1A] text-[#6B1A1A] px-6 py-3 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline"
              >
                Explore Design Stream
              </a>
            </div>

            {/* Fashion Stream — featured */}
            <div
              className="cat-card course-card bg-[#6B1A1A] border border-[#6B1A1A] p-4 md:p-10 flex flex-col relative"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <div className="w-14 h-14 rounded-full bg-[#4A0E0E] border border-[#C9922A]/40 flex items-center justify-center mb-7">
                <Shirt size={26} strokeWidth={1.8} className="text-[#E8B84B]" />
              </div>
              <p className="f-dm text-[.68rem] tracking-[.28em] uppercase text-[#E8B84B] opacity-80 mb-3">
                Stream 02
              </p>
              <h3 className="f-play font-bold text-[2rem] text-[#E8B84B] mb-4">
                Fashion
              </h3>
              <p className="f-dm text-[.9rem] leading-relaxed text-white/75 font-light mb-7 flex-1">
                For creative minds drawn to fashion, textiles, and visual
                culture. We go beyond sketching — developing taste, situational
                judgment, aesthetic vocabulary, and original expression.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  {
                    code: "NIFT",
                    full: "National Institute of Fashion Technology",
                  },
                ].map((e) => (
                  <div
                    key={e.code}
                    className="flex items-center gap-3 bg-[#4A0E0E]/50 border border-[#C9922A]/30 px-4 py-2.5"
                  >
                    <ChevronRight size={13} className="text-[#E8B84B]" />
                    <div>
                      <span className="f-dm text-[.8rem] font-semibold text-[#E8B84B] tracking-wide">
                        {e.code}
                      </span>
                      <span className="f-dm text-[.7rem] text-white/55 ml-2">
                        {e.full}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="f-dm text-[.75rem] tracking-[.14em] uppercase text-center bg-[#C9922A] text-[#4A0E0E] font-semibold px-6 py-3 hover:bg-[#E8B84B] transition-all duration-300 no-underline"
              >
                Explore Fashion Stream
              </a>
            </div>

            {/* Architecture Stream */}
            <div
              className="cat-card bg-white border border-[#f0e0d0] p-4 md:p-10 flex flex-col"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <div className="w-14 h-14 rounded-full bg-[#FDF6EC] border border-[#C9922A]/30 flex items-center justify-center mb-7">
                <DraftingCompass
                  size={26}
                  strokeWidth={1.8}
                  className="text-[#C9922A]"
                />
              </div>
              <p className="f-dm text-[.68rem] tracking-[.28em] uppercase text-[#C9922A] mb-3">
                Stream 03
              </p>
              <h3 className="f-play font-bold text-[2rem] text-[#4A0E0E] mb-4">
                Architecture
              </h3>
              <p className="f-dm text-[.9rem] leading-relaxed text-[#8A6A5A] font-light mb-7 flex-1">
                For aspirants with a spatial sensibility and love for built
                environments. Our mentors train drawing ability, aesthetic
                sensitivity, critical thinking and maths — the full spectrum.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  {
                    code: "NATA",
                    full: "National Aptitude Test in Architecture",
                  },
                  {
                    code: "JEE B.Arch",
                    full: "Paper 2 — IIT / NIT Architecture",
                  },
                ].map((e) => (
                  <div
                    key={e.code}
                    className="exam-pill group flex items-center gap-3 bg-[#FDF6EC] border border-[#C9922A]/25 px-4 py-2.5"
                  >
                    <ChevronRight size={13} className="text-[#C9922A]" />
                    <div>
                      <span className="f-dm text-[.8rem] font-semibold text-[#6B1A1A] group-hover:text-white tracking-wide">
                        {e.code}
                      </span>
                      <span className="f-dm text-[.7rem] text-[#8A6A5A] ml-2">
                        {e.full.length > 32
                          ? e.full.substring(0, 32) + "…"
                          : e.full}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="f-dm text-[.75rem] tracking-[.14em] uppercase text-center border border-[#6B1A1A] text-[#6B1A1A] px-6 py-3 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline"
              >
                Explore Architecture Stream
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ ABOUT ═══════════════════════════════ */}
      <section id="about" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {/* Problems */}
          <div data-aos="fade-right" data-aos-duration="800">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">
              The Challenge
            </p>
            <h2 className="f-play font-bold text-3xl md:text-[2.5rem] text-[#4A0E0E] mb-9">
              What&apos;s Broken in Design Coaching
            </h2>
            <div className="space-y-4">
              {[
                "Coaching factories dominate — high fees, low mentorship, zero personal attention.",
                "Students rely on imitation instead of developing genuine creative voice.",
                "Real design thinking exposure is completely absent from most prep programs.",
                `No emotional or career guidance — students are reduced to "draw and score."`,
              ].map((p, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 80}
                  className="prob-card border-l-[3px] border-[#C9922A] bg-[#FDF6EC] pl-6 py-5"
                >
                  <span className="f-corm text-[#C9922A] text-xl mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="f-dm text-[.93rem] leading-relaxed text-[#2A1A1A] font-light">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Solutions */}
          <div data-aos="fade-left" data-aos-duration="800">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">
              Our Solution
            </p>
            <h2 className="f-play font-bold text-3xl md:text-[2.5rem] text-[#4A0E0E] mb-9">
              The Dezine Acharya Difference
            </h2>
            {[
              {
                icon: Users,
                title: "Mentorship, Not Teaching",
                desc: "A team of mentors — not a single figure — each bringing specialised domain expertise and personalised creative guidance.",
              },
              {
                icon: Brain,
                title: "Think, Don't Rote",
                desc: "A curriculum built on design thinking, analytical reasoning, and original creativity — not repetitive drills.",
              },
              {
                icon: Wallet,
                title: "Affordable & Transparent",
                desc: "We reject the big-institute model. No inflated fees, no middlemen — just honest mentorship at fair cost.",
              },
              {
                icon: Sparkles,
                title: "Community-Driven Growth",
                desc: "Peer feedback, collaborative critique, and shared growth across multiple learning platforms.",
              },
              {
                icon: Wifi,
                title: "Always Accessible",
                desc: "YouTube, Instagram and live communities — design education without walls or gatekeeping.",
              },
            ].map((s, i) => (
              <div
                key={s.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`sol-row flex items-start gap-4 py-5 px-3 -mx-3 ${i < 4 ? "border-b border-[#f0e8e0]" : ""}`}
              >
                <span className="sol-icon text-[#C9922A] text-2xl shrink-0 mt-0.5">
                  <s.icon size={22} strokeWidth={2} />
                </span>
                <div>
                  <div className="f-dm font-semibold text-[.93rem] text-[#6B1A1A] mb-1">
                    {s.title}
                  </div>
                  <div className="f-dm text-[.88rem] text-[#8A6A5A] leading-relaxed font-light">
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ MISSION SECTION ═══════════════════════════════ */}
      <section
        id="approach"
        className="py-24 px-6 md:px-10 relative overflow-hidden bg-gradient-to-br from-[#4A0E0E] to-[#6B1A1A]"
      >
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-[#C9922A]/12 pointer-events-none float-anim"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute -bottom-16 left-[8%] w-64 h-64 rounded-full border border-[#C9922A]/8 pointer-events-none" />

        <div
          className="max-w-[900px] mx-auto text-center relative z-10"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            <div
              className="vm-card bg-white/8 border border-[#C9922A]/25 px-8 py-6 max-w-[380px] text-left"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-2 mb-3">
                <Eye size={16} className="text-[#C9922A]" />
                <span className="f-dm text-[.68rem] tracking-[.3em] uppercase text-[#C9922A]">
                  Our Vision
                </span>
              </div>
              <p className="f-corm italic text-[1.15rem] text-white/85 leading-relaxed">
                To democratize design education in India — making quality
                mentorship accessible, inspiring, and greed-free.
              </p>
            </div>
            <div
              className="vm-card bg-white/8 border border-[#C9922A]/25 px-8 py-6 max-w-[380px] text-left"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target size={16} className="text-[#C9922A]" />
                <span className="f-dm text-[.68rem] tracking-[.3em] uppercase text-[#C9922A]">
                  Our Mission
                </span>
              </div>
              <p className="f-corm italic text-[1.15rem] text-white/85 leading-relaxed">
                To guide 1 lakh design aspirants through a human-centered,
                experience-driven model — where design is{" "}
                <em className="text-[#E8B84B] not-italic">discovered</em>, not
                taught.
              </p>
            </div>
          </div>
          <div
            className="flex justify-center gap-4 flex-wrap"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://www.instagram.com/dezine_acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="f-dm text-[.8rem] tracking-[.15em] uppercase text-white border border-white/20 bg-white/10 px-8 py-3.5 hover:bg-white/20 transition-all duration-300 no-underline"
            >
              Follow on Instagram
            </a>
            <a
              href="#contact"
              className="f-dm text-[.8rem] tracking-[.15em] uppercase bg-[#C9922A] text-[#4A0E0E] font-semibold px-8 py-3.5 hover:bg-[#E8B84B] transition-all duration-300 no-underline"
            >
              Join the Movement
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TEAM ═══════════════════════════════ */}
      <section id="team" className="py-20 md:py-24 px-3 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">
              The Minds Behind
            </p>
            <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E] mb-5">
              Our Expert Team
            </h2>
            <p className="f-dm text-[.97rem] text-[#8A6A5A] font-light max-w-[560px] mx-auto leading-relaxed">
              We are not one person — we are a collective of experienced design
              educators, each bringing deep domain expertise and a shared belief
              in mentorship over mass-coaching.
            </p>
          </div>

          {/* Lead Mentor — full width card */}
          <div className="mb-10" data-aos="fade-up" data-aos-delay="50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-gradient-to-br from-[#4A0E0E] to-[#6B1A1A] overflow-hidden">
              <div className="relative flex justify-center items-end bg-[#3A0A0A] min-h-[320px] md:min-h-[400px]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[68%] bg-[#4A0E0E]/60 rounded" />
                <Image
                  src="/avatar.png"
                  alt="Amit Singh"
                  width={280}
                  height={450}
                  className="relative z-10 w-full max-w-[280px] drop-shadow-2xl float-anim object-contain"
                />
                <div className="absolute top-5 left-5">
                  <span className="diff-badge f-dm text-[.65rem] tracking-[.18em] uppercase text-[#E8B84B] px-4 py-1.5 border border-[#C9922A]/50">
                    Lead Mentor
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-12 flex flex-col justify-center">
                <p className="f-dm text-[.68rem] tracking-[.3em] uppercase text-[#C9922A] opacity-80 mb-4">
                  Founder &amp; Lead Mentor
                </p>
                <h3 className="f-play font-bold text-[2.2rem] text-white mb-1">
                  Amit Singh
                </h3>
                <p className="f-corm italic text-[2rem] text-[#C9922A] mb-6">
                  The Modern Dronacharya for Design Thinkers
                </p>
                <p className="f-dm text-[.93rem] leading-[1.9] text-white/70 font-light mb-5">
                  An alumnus of the{" "}
                  <strong className="text-white/90 font-semibold">
                    National Institute of Design (NID)
                  </strong>
                  , Amit brings over{" "}
                  <strong className="text-white/90 font-semibold">
                    12+ years
                  </strong>{" "}
                  of design mentoring experience. His philosophy-driven approach
                  has transformed how hundreds of students perceive creativity —
                  from exam panic to genuine design vision.
                </p>
                <p className="f-dm text-[.93rem] leading-[1.9] text-white/70 font-light mb-8">
                  At Dezine Acharya, Amit leads with purpose — building not just
                  a coaching brand, but a{" "}
                  <strong className="text-white/90 font-semibold">
                    design movement
                  </strong>{" "}
                  where a capable team walks alongside every aspirant.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {[
                    "NID Alumnus",
                    "12+ Yrs Mentoring",
                    "Philosophy-Driven",
                    "All Design Exams",
                  ].map((t) => (
                    <span
                      key={t}
                      className="f-dm text-[.72rem] tracking-[.12em] uppercase bg-[#3A0A0A] text-[#C9922A] border border-[#C9922A]/35 px-4 py-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                name: "Priya Verma",
                role: "Fashion & NIFT Specialist",
                stream: "Fashion",
                exp: "8+ Yrs",
                tags: ["NIFT", "Fashion Theory", "Styling"],
                bio: "Former NIFT faculty with a deep understanding of fashion communication, portfolio building and CAT exam strategy.",
              },
              {
                name: "Rahul Kapoor",
                role: "Architecture & NATA Expert",
                stream: "Architecture",
                exp: "10+ Yrs",
                tags: ["NATA", "JEE B.Arch", "Freehand Drawing"],
                bio: "Trained architect with extensive experience coaching spatial design, freehand drawing, and architecture aptitude.",
              },
              {
                name: "Sneha Joshi",
                role: "Design Thinking Mentor",
                stream: "Design",
                exp: "7+ Yrs",
                tags: ["UCEED", "CEED", "Visualization"],
                bio: "Specialist in UCEED and CEED preparation — focuses on analytical reasoning, visualization, and creative problem-solving.",
              },
            ].map((member, i) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="team-card border border-[#f0e0d0] bg-white overflow-hidden"
              >
                <div className="team-avatar h-[160px] flex items-end justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6EC] to-[#f5e6d0]" />
                  <div className="absolute top-4 right-4">
                    <span className="f-dm text-[.6rem] tracking-[.14em] uppercase border border-[#C9922A]/50 text-[#6B1A1A] px-3 py-1 bg-white/70">
                      {member.stream}
                    </span>
                  </div>
                  {/* Placeholder avatar illustration */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-[#6B1A1A]/10 border-2 border-[#C9922A]/30 flex items-center justify-center mb-4">
                    <Users
                      size={36}
                      strokeWidth={1.4}
                      className="text-[#6B1A1A]/40"
                    />
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="f-play font-bold text-[1.2rem] text-[#4A0E0E]">
                        {member.name}
                      </h4>
                      <p className="f-corm italic text-[1rem] text-[#C9922A]">
                        {member.role}
                      </p>
                    </div>
                    <span className="f-dm text-[.68rem] tracking-[.1em] uppercase bg-[#FDF6EC] border border-[#C9922A]/30 text-[#6B1A1A] px-2.5 py-1 shrink-0 ml-2">
                      {member.exp}
                    </span>
                  </div>
                  <p className="f-dm text-[.88rem] leading-relaxed text-[#8A6A5A] font-light mb-5">
                    {member.bio}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {member.tags.map((t) => (
                      <span
                        key={t}
                        className="f-dm text-[.68rem] tracking-[.1em] uppercase bg-[#FDF6EC] text-[#6B1A1A] border border-[#C9922A]/20 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PARENTS LETTER ═══════════════════════════════ */}
      <section id="parents" className="py-24 px-4 md:px-10 bg-[#FDF6EC]">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">
            A Message for Parents
          </p>
          <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E]">
            Dear Parents,
          </h2>
        </div>
        <div
          className="max-w-[820px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="900"
        >
          <div className="bg-white border border-[#f0e0d0] shadow-[0_8px_48px_rgba(0,0,0,.07)] px-4 md:px-16 py-12">
            <div className="flex justify-between items-start mb-2">
              <Image
                src="/logo-new.webp"
                alt="Dezine Acharya"
                width={120}
                height={52}
                className="w-auto object-contain"
              />
            </div>
            <hr className="letter-rule mb-9 mt-2" />
            <p className="f-dm text-[1rem] font-medium text-[#2A1A1A] mb-6">
              Dear Parents,
            </p>
            <div className="space-y-5 f-dm text-[.95rem] leading-[1.95] text-[#2A1A1A] font-light">
              <p>
                If your child aspires to build a career in{" "}
                <strong className="font-bold">
                  Fashion, Design, or Architecture
                </strong>
                , choosing the right direction after school can often feel
                confusing and overwhelming.
              </p>
              <p>
                At <strong className="font-bold">Dezine Acharya</strong>, we are
                not a large coaching franchise with mass batches and inflated
                fees. We are a{" "}
                <strong className="font-bold">team of dedicated mentors</strong>{" "}
                — each expert in their stream — providing guided, personalised
                career support for premier institutes such as{" "}
                <strong className="font-bold">
                  NID, NIFT, UCEED, NATA, CEED
                </strong>{" "}
                and leading architecture colleges.
              </p>
              <p>
                Unlike the coaching giants in the JEE/NEET space that prioritize
                volume over value, our approach is grounded in{" "}
                <strong className="font-bold">
                  one-on-one creative guidance
                </strong>
                . We help students discover their strengths, develop their
                creative voice, and make confident career decisions aligned with
                their true potential — not just exam scores.
              </p>
              <p>
                We understand that every parent wants clarity, security, and the
                right future for their child. With our{" "}
                <strong className="font-bold">
                  team of experienced faculty
                </strong>{" "}
                and a transparent, affordable fee structure, we ensure students
                move forward with confidence, purpose, and a clear design
                vision.
              </p>
              <p>
                We warmly invite you to visit our{" "}
                <strong className="font-bold">Dwarka Centre</strong> for a
                personal consultation and experience our mentorship approach
                firsthand.
              </p>
            </div>
            <div className="contact-panel mt-9 px-6 py-5">
              <div className="contact-row">
                <span className="contact-ic">
                  <MapPin size={14} />
                </span>
                <p className="f-dm text-[.93rem] text-[#2A1A1A]">
                  Dwarka Centre, Delhi
                </p>
              </div>
              <div className="contact-row">
                <span className="contact-ic">
                  <Phone size={14} />
                </span>
                <p className="f-dm text-[.93rem] text-[#2A1A1A]">
                  Call to schedule a consultation:{" "}
                  <a href="tel:+918860615795" className="contact-link">
                    8860615795
                  </a>
                </p>
              </div>
              <div className="contact-row">
                <span className="contact-ic">
                  <Mail size={14} />
                </span>
                <p className="f-dm text-[.93rem] text-[#2A1A1A]">
                  <a
                    href="mailto:admin@dezineacharya.com"
                    className="contact-link"
                  >
                    admin@dezineacharya.com
                  </a>
                </p>
              </div>
            </div>
            <hr className="letter-rule mt-10 mb-4" />
            <p className="f-dm text-[.78rem] text-[#8A6A5A] text-center">
              Plot No. 101, First Floor Above Levi&apos;s Showroom, Sector 7,
              Dwarka, Delhi - 110777
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TESTIMONIALS ═══════════════════════════════ */}
      <section id="community" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">
              Student Voices
            </p>
            <h2 className="f-play font-bold text-3xl md:text-[2.8rem] text-[#4A0E0E]">
              What Our Aspirants Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Aanya Sharma",
                exam: "NID Aspirant",
                text: "Dezine Acharya changed how I see design. It's not a coaching factory — it's a space where you actually learn to think. Having multiple mentors who each understood their domain was a game-changer.",
              },
              {
                name: "Rohan Mehta",
                exam: "UCEED Qualifier",
                text: "The mentorship here is personal and real. My faculty pushed my creative limits while making sure I stayed true to my own vision. The team's collective expertise covers every angle of preparation.",
              },
              {
                name: "Priya Nair",
                exam: "NIFT Aspirant",
                text: "The community aspect is incredible. Getting peer feedback and learning together made the journey less lonely. The fashion stream mentor understood exactly what NIFT looks for — it showed.",
              },
            ].map((t, i) => (
              <div
                key={t.name}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="t-card relative bg-white border border-[#f0e0d0] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="f-corm italic text-[1.1rem] leading-relaxed text-[#2A1A1A] mt-10 mb-6">
                  {t.text}
                </p>
                <div className="border-t border-[#f0e0d0] pt-4 flex justify-between items-center">
                  <span className="f-dm font-semibold text-[.88rem] text-[#6B1A1A]">
                    {t.name}
                  </span>
                  <span className="f-dm text-[.7rem] tracking-[.14em] uppercase text-[#C9922A]">
                    {t.exam}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA / CONTACT ═══════════════════════════════ */}
      <section
        id="contact"
        className="py-24 px-6 md:px-10 bg-[#FDF6EC] text-center"
      >
        <div className="max-w-[700px] mx-auto" data-aos="fade-up">
          <div className="flex items-center gap-4 justify-center mb-9">
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#C9922A]" />
            <span className="f-corm text-[#C9922A] text-2xl">
              <Sparkles size={20} />
            </span>
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#C9922A]" />
          </div>
          <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E] mb-6">
            Ready to Begin Your Design Journey?
          </h2>
          <p className="f-dm text-[.97rem] text-[#8A6A5A] leading-relaxed font-light mb-10">
            Join a growing community of design aspirants who believe in{" "}
            <span className="text-[#6B1A1A] font-medium">
              thinking over drilling
            </span>
            ,{" "}
            <span className="text-[#6B1A1A] font-medium">
              mentorship over marking
            </span>
            , and design as a genuinely transformative pursuit. Our team is
            ready to guide you.
          </p>
          <div
            className="flex gap-4 justify-center flex-wrap mb-12"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <a
              href="https://wa.me/918860615795?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
              target="_blank"
              className="f-dm text-[.82rem] tracking-[.16em] uppercase bg-[#6B1A1A] text-white px-10 py-4 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline"
            >
              Enroll Now
            </a>
            <a
              href="https://www.instagram.com/dezine_acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="f-dm text-[.82rem] tracking-[.16em] uppercase border border-[#6B1A1A] text-[#6B1A1A] px-10 py-4 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@dezineacharya"
              target="_blank"
              rel="noopener noreferrer"
              className="f-dm text-[.82rem] tracking-[.16em] uppercase border border-[#C9922A] text-[#C9922A] px-10 py-4 hover:bg-[#C9922A] hover:text-white transition-all duration-300 no-underline"
            >
              YouTube
            </a>
          </div>
          <div
            className="contact-panel px-8 py-6 text-left max-w-[460px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="contact-row">
              <span className="contact-ic">
                <Phone size={14} />
              </span>
              <a
                href="tel:+918860615795"
                className="f-dm text-[.93rem] contact-link"
              >
                8860615795
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-ic">
                <Mail size={14} />
              </span>
              <a
                href="mailto:sales@dezineacharya.com"
                className="f-dm text-[.93rem] contact-link"
              >
                sales@dezineacharya.com
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-ic">
                <MapPin size={14} />
              </span>
              <span className="f-dm text-[.88rem] text-[#8A6A5A] leading-relaxed font-light">
                Plot No. 101, First Floor Above Levi&apos;s Showroom, Sector 7,
                Dwarka, Delhi - 110777
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer className="bg-[#3A0A0A] text-white pt-16 pb-8 px-3 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="shimmer-bar h-[2px] w-full rounded-full mb-14 opacity-60" />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-10 mb-14">
            {/* Brand */}
            <div data-aos="fade-up" data-aos-delay="0">
              <div className="bg-linear-to-r from-white to-white/20 rounded w-full p-2">
                <Image
                  src="/logo-new.webp"
                  alt="Dezine Acharya"
                  width={140}
                  height={44}
                  className="relative top-1 w-[170px] h-[75px] scale-[1.6] object-contain "
                />
              </div>
              <p className="f-dm text-[.88rem] leading-[1.9] text-white/65 font-light max-w-[290px] mb-6">
                A team-driven mentorship platform guiding aspirants for NID,
                NIFT, UCEED, NATA &amp; CEED — where design is discovered, not
                drilled.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/dezine_acharya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-dm text-[.7rem] tracking-[.12em] uppercase border border-[#C9922A]/50 text-[#C9922A] px-4 py-2 hover:bg-[#C9922A] hover:text-white transition-all duration-300 no-underline"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/918860615795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-dm text-[.7rem] tracking-[.12em] uppercase border border-[#25D366]/45 text-[#25D366] px-4 py-2 hover:bg-[#25D366] hover:text-white transition-all duration-300 no-underline"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.youtube.com/@dezineacharya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-dm text-[.7rem] tracking-[.12em] uppercase border border-white/20 text-white/60 px-4 py-2 hover:border-white/50 hover:text-white transition-all duration-300 no-underline"
                >
                  YouTube
                </a>
              </div>
            </div>
            {/* Design Stream */}
            <div data-aos="fade-up" data-aos-delay="80">
              <p className="f-dm text-[.7rem] tracking-[.28em] uppercase text-[#C9922A] mb-6 pb-3 border-b border-[#C9922A]/18">
                Design
              </p>
              {["NID Preparation", "UCEED Preparation", "CEED Preparation"].map(
                (l) => (
                  <a
                    key={l}
                    href="#courses"
                    className="ft-link f-dm text-[.87rem] text-white/65 font-light no-underline hover:text-white transition-colors duration-200 mb-4 block"
                  >
                    {l}
                  </a>
                ),
              )}
            </div>
            {/* Fashion & Architecture */}
            <div data-aos="fade-up" data-aos-delay="160">
              <p className="f-dm text-[.7rem] tracking-[.28em] uppercase text-[#C9922A] mb-6 pb-3 border-b border-[#C9922A]/18">
                Fashion & Arch
              </p>
              {["NIFT Preparation", "NATA Preparation", "JEE B.Arch Prep"].map(
                (l) => (
                  <a
                    key={l}
                    href="#courses"
                    className="ft-link f-dm text-[.87rem] text-white/65 font-light no-underline hover:text-white transition-colors duration-200 mb-4 block"
                  >
                    {l}
                  </a>
                ),
              )}
            </div>
            {/* Connect */}
            <div data-aos="fade-up" data-aos-delay="240">
              <p className="f-dm text-[.7rem] tracking-[.28em] uppercase text-[#C9922A] mb-6 pb-3 border-b border-[#C9922A]/18">
                Connect
              </p>
              {[
                { label: "Our Team", href: "#team" },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/dezine_acharya",
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@dezineacharya",
                },
                { label: "For Parents", href: "#parents" },
                { label: "Contact Us", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="ft-link f-dm text-[.87rem] text-white/65 font-light no-underline hover:text-white transition-colors duration-200 mb-4 block"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-3">
            <span className="f-dm text-[.76rem] text-white/45 font-light">
              Copyright 2025 Dezine Acharya. All rights reserved.
            </span>
            <span className="f-corm italic text-[.95rem] text-[#C9922A] opacity-80">
              Design is discovered, not drilled.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
