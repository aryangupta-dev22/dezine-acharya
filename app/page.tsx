"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [waTooltip, setWaTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
    script.onload = () => {
      (window as any).AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 70,
        delay: 50,
      });
    };
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-[#2A1A1A]">
      {/* ── Fonts + pseudo helpers + custom animations ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        .f-play  { font-family: 'Playfair Display', serif; }
        .f-corm  { font-family: 'Cormorant Garamond', serif; }
        .f-dm    { font-family: 'DM Sans', sans-serif; }

        /* Nav underline */
        .nav-ul { position: relative; }
        .nav-ul::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1.5px; background:#C9922A; transition:width .3s; }
        .nav-ul:hover::after { width:100%; }

        /* Divider ornament */
        .divline { display:flex; align-items:center; gap:16px; margin:24px 0; }
        .divline::before { content:''; flex:1; height:1px; background:linear-gradient(to right,transparent,#C9922A); }
        .divline::after  { content:''; flex:1; height:1px; background:linear-gradient(to left, transparent,#C9922A); }

        /* Testimonial quote mark */
        .qcard::before { content:'"'; font-family:'Cormorant Garamond',serif; font-size:5.5rem; color:#C9922A; opacity:.3; position:absolute; top:4px; left:16px; line-height:1; pointer-events:none; }

        /* ── WhatsApp FAB animations ── */
        @keyframes wa-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,.55); }
          60%      { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
        }
        @keyframes wa-ring {
          0%,100% { transform: rotate(0deg); }
          10%      { transform: rotate(-12deg); }
          20%      { transform: rotate(12deg); }
          30%      { transform: rotate(-8deg); }
          40%      { transform: rotate(8deg); }
          50%      { transform: rotate(0deg); }
        }
        @keyframes wa-bounce-in {
          0%   { transform:scale(0) rotate(-180deg); opacity:0; }
          60%  { transform:scale(1.15) rotate(8deg); opacity:1; }
          80%  { transform:scale(.93) rotate(-4deg); }
          100% { transform:scale(1) rotate(0deg); opacity:1; }
        }
        .wa-fab {
          animation: wa-bounce-in .7s cubic-bezier(.34,1.56,.64,1) 1.2s both,
                     wa-pulse 2.4s ease-in-out 2s infinite;
        }
        .wa-fab:hover { transform:scale(1.1); }
        .wa-fab:hover svg { animation: wa-ring .6s ease; }

        /* Tooltip slide-in */
        @keyframes tooltip-in {
          from { opacity:0; transform:translateX(10px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .wa-tooltip { animation: tooltip-in .25s ease forwards; }

        /* ── Extra section animations ── */
        @keyframes float-y {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-14px); }
        }
        .float-anim { animation: float-y 5s ease-in-out infinite; }

        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .shimmer-bar {
          background: linear-gradient(90deg, #C9922A 0%, #E8B84B 40%, #C9922A 100%);
          background-size: 400px 100%;
          animation: shimmer 2.8s linear infinite;
        }

        @keyframes count-up { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .stat-anim { animation: count-up .6s ease forwards; }

        /* Exam card shine on hover */
        .exam-card { overflow:hidden; }
        .exam-card::after { content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.07) 50%,transparent 70%); transform:translateX(-100%); transition:transform .5s; }
        .exam-card:hover::after { transform:translateX(100%); }

        /* Problem card left glow */
        .prob-card { transition: border-color .3s, transform .3s, box-shadow .3s; }
        .prob-card:hover { box-shadow: -4px 0 16px rgba(201,146,42,.25); }

        /* Scroll indicator */
        @keyframes scroll-hint {
          0%,100% { transform:translateY(0); opacity:.7; }
          50%      { transform:translateY(8px); opacity:1; }
        }
        .scroll-hint { animation: scroll-hint 1.6s ease-in-out infinite; }
      `}</style>

      {/* ══════════════════════════════════
          WHATSAPP FAB
      ══════════════════════════════════ */}
      <div className="fixed bottom-7 right-7 z-[300]">
        {/* Tooltip */}
        {waTooltip && (
          <div className="wa-tooltip pointer-events-none absolute right-0 bottom-full mb-3 rounded bg-white text-[#2A1A1A] text-sm f-dm font-medium px-4 py-2 shadow-xl border border-gray-100 whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        )}
        <a
          href="https://wa.me/918860615795?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setWaTooltip(true)}
          onMouseLeave={() => setWaTooltip(false)}
          className="wa-fab w-[58px] h-[58px] rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG */}
          <svg
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 2.667C8.638 2.667 2.667 8.637 2.667 16c0 2.358.63 4.666 1.826 6.684L2.667 29.333l6.84-1.794A13.282 13.282 0 0016.002 29.333c7.364 0 13.331-5.97 13.331-13.333 0-7.363-5.967-13.333-13.331-13.333zm0 24.267a11.004 11.004 0 01-5.608-1.535l-.402-.24-4.061 1.065 1.082-3.952-.262-.415A10.964 10.964 0 015.002 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.04-8.224c-.33-.165-1.953-.963-2.257-1.073-.304-.11-.524-.165-.745.165-.22.33-.854 1.073-1.046 1.293-.192.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.638-.98-.875-1.642-1.956-1.834-2.286-.192-.33-.02-.508.145-.672.148-.147.33-.385.494-.577.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.577-.083-.165-.745-1.797-1.02-2.46-.27-.647-.545-.56-.745-.57-.192-.01-.412-.012-.633-.012-.22 0-.577.082-.879.412-.302.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.554 5.638 4.985.788.34 1.403.544 1.882.696.791.252 1.51.216 2.079.131.634-.094 1.953-.799 2.228-1.57.275-.77.275-1.43.192-1.569-.082-.137-.302-.22-.632-.385z" />
          </svg>
        </a>
      </div>

      {/* ══════════════════════════════════
          NAVBAR
      ══════════════════════════════════ */}
      <nav
        className={`fixed top-4  rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.25)] left-5 right-5 inset-x-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-10 transition-all duration-300 border-b ${scrolled ? "bg-white shadow-sm border-[#f0e0d0]" : "bg-white border-[#f5ede6]"}`}
      >
        <div className="flex items-center gap-3">
          <span className="f-play font-black text-[24px] text-[#4A0E0E] tracking-tight">
            DEZINE
          </span>
          <span className="w-px h-5 bg-[#C9922A] opacity-60" />
          <span className="f-corm text-[18px] text-[#C9922A] font-semibold tracking-[.15em]">
            Acharya
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["About", "Exams", "Approach", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-ul f-dm text-[14px] font-medium tracking-[.12em] uppercase text-[#6B1A1A] hover:text-[#C9922A] transition-colors duration-300 no-underline"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="f-dm text-[.82rem] font-medium tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-6 py-2.5 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 no-underline"
          >
            Enroll Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
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
          className="absolute top-6 right-6 bg-transparent border-0 text-2xl text-[#6B1A1A] cursor-pointer"
        >
          ✕
        </button>
        {["About", "Exams", "Approach", "Community"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="f-dm text-xl font-medium tracking-[.12em] uppercase text-[#6B1A1A] no-underline"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="f-dm text-[.85rem] font-medium tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-8 py-3 no-underline"
        >
          Enroll Now
        </a>
      </div>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="min-h-screen flex items-center pt-[72px] relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FDF6EC]">
        {/* Decorative bg */}
        <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#FDF6EC] opacity-70 pointer-events-none float-anim" />
        <div className="absolute right-[8%] top-[15%] w-px h-[70%] bg-gradient-to-b from-transparent via-[#C9922A] to-transparent opacity-20 pointer-events-none" />
        <div
          className="absolute left-[4%] bottom-[12%] w-24 h-24 border border-[#C9922A]/20 rotate-45 pointer-events-none"
          data-aos="fade-in"
          data-aos-delay="600"
        />
        <div
          className="absolute left-[6%] bottom-[18%] w-12 h-12 border border-[#C9922A]/15 rotate-45 pointer-events-none"
          data-aos="fade-in"
          data-aos-delay="800"
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center w-full">
          {/* Left */}
          <div data-aos="fade-right" data-aos-delay="100">
            <p className="f-dm text-[.75rem] tracking-[.3em] uppercase text-[#C9922A] font-medium mb-5">
              Design Education · Redefined
            </p>
            <h1 className="f-play font-black text-5xl md:text-[4rem] leading-[1.1] text-[#4A0E0E]">
              Where Design
            </h1>
            <h1 className="f-corm font-light italic text-5xl md:text-[4rem] leading-[1.1] text-[#C9922A] my-1">
              is Discovered,
            </h1>
            <h1 className="f-play font-black text-5xl md:text-[4rem] leading-[1.1] text-[#4A0E0E] mb-8">
              Not Drilled.
            </h1>

            {/* Shimmer accent bar */}
            <div
              className="shimmer-bar h-[3px] w-24 mb-8 rounded-full"
              data-aos="fade-right"
              data-aos-delay="300"
            />

            <p className="f-dm text-[1rem] leading-relaxed text-[#8A6A5A] font-light max-w-[440px] mb-10">
              Mentoring aspirants for{" "}
              <strong className="text-[#6B1A1A] font-semibold">
                NID, NIFT & UCEED
              </strong>{" "}
              through creative intuition, structured guidance, and reflective
              mentorship — transforming exam pressure into a meaningful design
              journey.
            </p>

            <div
              className="flex gap-4 flex-wrap"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <a
                href="#contact"
                className="f-dm text-[.85rem] font-medium tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-9 py-4 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline"
              >
                Begin Your Journey
              </a>
              <a
                href="#approach"
                className="f-dm text-[.85rem] font-medium tracking-[.15em] uppercase border border-[#6B1A1A] text-[#6B1A1A] px-9 py-4 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline"
              >
                Our Approach
              </a>
            </div>

            {/* Stats */}
            <div
              className="mt-12 flex gap-10 flex-wrap"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              {[
                { num: "1L+", label: "Aspirants Goal" },
                { num: "3", label: "Design Exams" },
                { num: "∞", label: "Creative Potential" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="stat-anim"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="f-corm font-bold text-[3.6rem] text-[#6B1A1A] leading-none">
                    {s.num}
                  </div>
                  <div className="f-dm text-[.75rem] tracking-[.15em] uppercase text-[#8A6A5A] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vision card */}
          <div data-aos="fade-left" data-aos-delay="250" className="relative">
            <div className="bg-gradient-to-br from-[#6B1A1A] to-[#4A0E0E] p-11 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 border-b border-l border-[#C9922A]/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-t border-r border-[#C9922A]/20" />
              <p className="f-dm text-[.68rem] tracking-[.3em] uppercase text-[#C9922A] opacity-80 mb-6">
                Our Vision
              </p>
              <p className="f-corm font-light italic text-[1.6rem] leading-relaxed text-white mb-8">
                "To democratize design education in India — making meaningful
                mentorship accessible, inspiring, and free from commercial
                exploitation."
              </p>
              <div className="border-t border-[#C9922A]/30 pt-6 flex gap-3 flex-wrap">
                {["NID", "NIFT", "UCEED"].map((e) => (
                  <span
                    key={e}
                    className="f-dm text-[.78rem] tracking-[.2em] border border-[#C9922A]/50 text-[#E8B84B] px-4 py-1.5"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-[#C9922A] translate-x-2.5 translate-y-2.5 -z-10 opacity-15" />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 scroll-hint">
          <div className="f-dm text-[.65rem] tracking-[.25em] uppercase text-[#6B1A1A]">
            Scroll
          </div>
          <div className="w-px h-10 bg-gradient-to-b from-[#6B1A1A] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════
          EXAMS
      ══════════════════════════════════ */}
      <section id="exams" className="bg-[#FDF6EC] py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div data-aos="fade-up" className="text-center mb-16">
            <p className="f-dm text-[.75rem] tracking-[.3em] uppercase text-[#C9922A] font-medium mb-4">
              Entrance Exams
            </p>
            <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E] mb-5">
              We Prepare You For
            </h2>
            <p className="f-dm text-[1rem] text-[#8A6A5A] font-light max-w-md mx-auto leading-relaxed">
              India's most prestigious design entrance examinations — approached
              not as a test, but as a creative milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {[
              {
                code: "NID",
                full: "National Institute of Design",
                desc: "India's premier design institution. NID entrance demands creative originality, design thinking and spatial reasoning.",
                icon: "◈",
                featured: false,
              },
              {
                code: "NIFT",
                full: "National Institute of Fashion Technology",
                desc: "Fashion, textiles and design — NIFT CAT tests visual sensitivity, creative aptitude and situational judgment.",
                icon: "◇",
                featured: true,
              },
              {
                code: "UCEED",
                full: "Undergraduate Common Entrance Exam for Design",
                desc: "IIT design programs. UCEED evaluates visualization, environment and social awareness, and analytical reasoning.",
                icon: "◉",
                featured: false,
              },
            ].map((exam, i) => (
              <div
                key={exam.code}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className={`exam-card group relative p-11 transition-all duration-300 cursor-default ${exam.featured ? "bg-[#6B1A1A]" : "bg-white hover:bg-[#4A0E0E]"}`}
              >
                <div
                  className={`f-corm text-[2.5rem] mb-4 opacity-60 transition-colors duration-300 ${exam.featured ? "text-[#E8B84B]" : "text-[#C9922A] group-hover:text-[#E8B84B]"}`}
                >
                  {exam.icon}
                </div>
                <div
                  className={`f-play font-bold text-[2rem] mb-2 transition-colors duration-300 ${exam.featured ? "text-[#E8B84B]" : "text-[#6B1A1A] group-hover:text-[#E8B84B]"}`}
                >
                  {exam.code}
                </div>
                <div
                  className={`f-dm text-[.75rem] tracking-[.1em] uppercase mb-5 transition-colors duration-300 ${exam.featured ? "text-white/60" : "text-[#8A6A5A] group-hover:text-white/60"}`}
                >
                  {exam.full}
                </div>
                <p
                  className={`f-dm text-[.92rem] leading-relaxed font-light transition-colors duration-300 ${exam.featured ? "text-white/85" : "text-[#8A6A5A] group-hover:text-white/80"}`}
                >
                  {exam.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROBLEM + SOLUTION
      ══════════════════════════════════ */}
      <section id="about" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {/* Problems */}
          <div data-aos="fade-right">
            <p className="f-dm text-[.75rem] tracking-[.3em] uppercase text-[#C9922A] font-medium mb-4">
              The Challenge
            </p>
            <h2 className="f-play font-bold text-3xl md:text-[2.5rem] text-[#4A0E0E] mb-9">
              What's Broken in Design Coaching
            </h2>
            <div className="flex flex-col gap-4">
              {[
                "Coaching factories dominate — high fees, minimal mentorship.",
                "Students imitate instead of creating original work.",
                "Real design thinking exposure is completely missing.",
                `Emotional and career guidance is absent — reduced to "draw and score."`,
              ].map((problem, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                  className="prob-card border-l-[3px] border-[#C9922A] pl-6 py-5 bg-[#FDF6EC] hover:border-[#6B1A1A] hover:translate-x-1"
                >
                  <div className="flex gap-3 items-start">
                    <span className="f-corm text-[#C9922A] text-xl shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="f-dm text-[.93rem] leading-relaxed text-[#2A1A1A] font-light">
                      {problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div data-aos="fade-left">
            <p className="f-dm text-[.75rem] tracking-[.3em] uppercase text-[#C9922A] font-medium mb-4">
              Our Solution
            </p>
            <h2 className="f-play font-bold text-3xl md:text-[2.5rem] text-[#4A0E0E] mb-9">
              The Dezine Acharya Difference
            </h2>
            <div>
              {[
                {
                  title: "Mentorship over Teaching",
                  desc: "Personalized creative guidance that sees the individual behind the aspirant.",
                  icon: "◎",
                },
                {
                  title: "Think, Don't Rote",
                  desc: "A curriculum built on design thinking, not repetitive practice drills.",
                  icon: "◈",
                },
                {
                  title: "Affordable & Flexible",
                  desc: "Breaking the cycle of commercial exploitation in coaching.",
                  icon: "◇",
                },
                {
                  title: "Community-Driven",
                  desc: "Peer feedback, shared growth, and continuous engagement across platforms.",
                  icon: "◉",
                },
                {
                  title: "Always Accessible",
                  desc: "YouTube, Instagram & live communities — design education without walls.",
                  icon: "◐",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className={`flex items-start gap-4 py-5 group hover:bg-[#FDFAF6] px-3 -mx-3 transition-colors duration-200 ${i < 4 ? "border-b border-[#f0e8e0]" : ""}`}
                >
                  <span className="text-[#C9922A] text-2xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <div>
                    <div className="f-dm font-semibold text-[.93rem] text-[#6B1A1A] mb-1">
                      {item.title}
                    </div>
                    <div className="f-dm text-[.88rem] text-[#8A6A5A] leading-relaxed font-light">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MISSION
      ══════════════════════════════════ */}
      <section
        id="approach"
        className="bg-gradient-to-br from-[#4A0E0E] to-[#6B1A1A] py-24 px-6 md:px-10 relative overflow-hidden"
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-[#C9922A]/15 pointer-events-none float-anim"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute -bottom-16 left-[10%] w-64 h-64 rounded-full border border-[#C9922A]/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9922A]/5 pointer-events-none" />

        <div
          data-aos="zoom-in"
          className="max-w-[900px] mx-auto text-center relative"
        >
          <p className="f-dm text-[.75rem] tracking-[.3em] uppercase text-[#E8B84B] opacity-80 mb-5">
            Our Mission
          </p>
          <h2 className="f-corm font-light italic text-4xl md:text-[3.2rem] text-white leading-relaxed mb-10">
            "To guide one lakh design aspirants across India through a
            human-centered, experience-driven learning model — where design is{" "}
            <span className="text-[#E8B84B]">discovered</span>, not drilled."
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex justify-center gap-4 flex-wrap"
          >
            <a
              href="https://www.instagram.com/dezine_acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="f-dm text-[.82rem] tracking-[.15em] uppercase text-white border border-white/20 bg-white/10 px-8 py-3.5 hover:bg-white/20 transition-all duration-300 no-underline"
            >
              Follow on Instagram
            </a>
            <a
              href="#contact"
              className="f-dm text-[.82rem] tracking-[.15em] uppercase bg-[#C9922A] text-white px-8 py-3.5 hover:bg-[#E8B84B] hover:text-[#4A0E0E] transition-all duration-300 no-underline"
            >
              Join the Movement
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════ */}
      <section id="community" className="bg-[#FDF6EC] py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div data-aos="fade-up" className="text-center mb-16">
            <p className="f-dm text-[.75rem] tracking-[.3em] uppercase text-[#C9922A] font-medium mb-4">
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
                text: "Dezine Acharya changed how I see design. It's not a coaching factory — it's a space where you actually learn to think.",
              },
              {
                name: "Rohan Mehta",
                exam: "UCEED Qualifier",
                text: "The mentorship here is personal and real. They pushed my creative limits while making sure I stayed true to my own vision.",
              },
              {
                name: "Priya Nair",
                exam: "NIFT Aspirant",
                text: "The community aspect is incredible. Getting peer feedback and learning together made the whole journey less lonely and more inspiring.",
              },
            ].map((t, i) => (
              <div
                key={t.name}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="qcard bg-white border border-[#f0e0d0] p-8 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="f-corm italic text-[1.1rem] leading-relaxed text-[#2A1A1A] mt-10 mb-6">
                  {t.text}
                </p>
                <div className="border-t border-[#f0e0d0] pt-4 flex justify-between items-center">
                  <span className="f-dm font-semibold text-[.88rem] text-[#6B1A1A]">
                    {t.name}
                  </span>
                  <span className="f-dm text-[.72rem] tracking-[.15em] uppercase text-[#C9922A]">
                    {t.exam}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section
        id="contact"
        className="py-24 px-6 md:px-10 bg-white text-center"
      >
        <div data-aos="fade-up" className="max-w-[680px] mx-auto">
          <div className="divline">
            <span className="f-corm text-[#C9922A] text-2xl">◈</span>
          </div>
          <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E] mb-5">
            Ready to Begin Your Design Journey?
          </h2>
          <p className="f-dm text-[1rem] text-[#8A6A5A] leading-relaxed font-light mb-10">
            Join a growing community of design aspirants who believe in{" "}
            <span className="text-[#6B1A1A] font-medium">
              thinking over drilling
            </span>
            ,{" "}
            <span className="text-[#6B1A1A] font-medium">
              mentorship over marking
            </span>
            , and design as a genuinely transformative pursuit.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="f-dm text-[.85rem] font-medium tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-10 py-4 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline"
            >
              Enroll Now
            </a>
            <a
              href="https://www.instagram.com/dezine_acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="f-dm text-[.85rem] font-medium tracking-[.15em] uppercase border border-[#6B1A1A] text-[#6B1A1A] px-10 py-4 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline"
            >
              Follow Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOOTER  (improved readability)
      ══════════════════════════════════ */}
      <footer className="bg-[#3A0A0A] text-white pt-16 pb-8 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Top divider accent */}
          <div className="shimmer-bar h-[2px] w-full mb-14 opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16 mb-14">
            {/* Brand */}
            <div data-aos="fade-up" data-aos-delay="0">
              <div className="flex items-center gap-3 mb-5">
                <span className="f-play font-black text-[1.4rem] text-white">
                  DEZINE
                </span>
                <span className="w-px h-5 bg-[#C9922A] opacity-60" />
                <span className="f-corm text-[1rem] text-[#C9922A] tracking-[.15em]">
                  Acharya
                </span>
              </div>
              <p className="f-dm text-[.9rem] leading-[1.9] text-white/75 font-light max-w-[300px] mb-6">
                An experiential learning platform mentoring students for NID,
                NIFT, and UCEED — where design is discovered, not drilled.
              </p>
              {/* Social chips */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/dezine_acharya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-dm text-[.72rem] tracking-[.12em] uppercase border border-[#C9922A]/50 text-[#C9922A] px-4 py-2 hover:bg-[#C9922A] hover:text-white hover:border-[#C9922A] transition-all duration-300 no-underline"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/12345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-dm text-[.72rem] tracking-[.12em] uppercase border border-[#25D366]/50 text-[#25D366] px-4 py-2 hover:bg-[#25D366] hover:text-white transition-all duration-300 no-underline"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="f-dm text-[.72rem] tracking-[.12em] uppercase border border-white/20 text-white/60 px-4 py-2 hover:border-white/50 hover:text-white transition-all duration-300 no-underline"
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* Exams */}
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="f-dm text-[.72rem] tracking-[.28em] uppercase text-[#C9922A] mb-6 pb-3 border-b border-[#C9922A]/20">
                Exams
              </p>
              {[
                "NID Preparation",
                "NIFT Preparation",
                "UCEED Preparation",
                "Design Fundamentals",
              ].map((link) => (
                <div key={link} className="mb-4 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#C9922A] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <a
                    href="#"
                    className="f-dm text-[.88rem] text-white/70 font-light no-underline hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>

            {/* Connect */}
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="f-dm text-[.72rem] tracking-[.28em] uppercase text-[#C9922A] mb-6 pb-3 border-b border-[#C9922A]/20">
                Connect
              </p>
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/dezine_acharya",
                },
                { label: "YouTube", href: "#" },
                { label: "Community", href: "#" },
                { label: "Contact Us", href: "#" },
              ].map((link) => (
                <div
                  key={link.label}
                  className="mb-4 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C9922A] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="f-dm text-[.88rem] text-white/70 font-light no-underline hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-3">
            <span className="f-dm text-[.78rem] text-white/50 font-light">
              © 2024 Dezine Acharya. All rights reserved.
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
