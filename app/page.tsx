"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Brain, DraftingCompass, Lightbulb, Mail, MapPin, Palette, Phone, Shirt, Sparkles, Users, Wifi, Wallet, X } from "lucide-react";

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
        const max = { aspirants: 100000, exams: 4, years: 12 };

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setStatCounts({
            aspirants: Math.round(max.aspirants * eased),
            exams: Math.round(max.exams * eased),
            years: Math.round(max.years * eased),
          });

          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
        };

        rafId = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    // Load AOS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
    script.onload = () => {
      (
        window as Window & {
          AOS?: {
            init: (config: {
              duration: number;
              easing: string;
              offset: number;
              once: boolean;
            }) => void;
          };
        }
      ).AOS?.init({
        duration: 550,
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

        /* Nav underline hover */
        .nav-link { position: relative; }
        .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1.5px; background:#C9922A; transition:width .3s; }
        .nav-link:hover::after { width:100%; }

        /* Shimmer bar */
        .shimmer-bar {
          background: linear-gradient(90deg, #C9922A 0%, #E8B84B 45%, #C9922A 100%);
          background-size: 400px 100%;
          animation: shimmer 2.8s linear infinite;
        }
        @keyframes shimmer { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }

        /* Float */
        @keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        .float-anim { animation: float-y 6s ease-in-out infinite; }

        /* Scroll hint */
        @keyframes scroll-bounce { 0%,100%{transform:translateX(-50%) translateY(0);opacity:.4} 50%{transform:translateX(-50%) translateY(8px);opacity:.75} }
        .scroll-hint { animation: scroll-bounce 1.7s ease-in-out infinite; }

        /* WA FAB */
        @keyframes wa-bounce { 0%{transform:scale(0) rotate(-180deg);opacity:0} 60%{transform:scale(1.15) rotate(8deg);opacity:1} 80%{transform:scale(.93) rotate(-4deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
        @keyframes wa-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.55)} 60%{box-shadow:0 0 0 14px rgba(37,211,102,0)} }
        @keyframes wa-ring   { 0%,100%{transform:rotate(0)} 15%{transform:rotate(-12deg)} 30%{transform:rotate(12deg)} 45%{transform:rotate(-6deg)} 60%{transform:rotate(0)} }
        .wa-fab { animation: wa-bounce .7s cubic-bezier(.34,1.56,.64,1) 1.2s both, wa-pulse 2.4s ease-in-out 2s infinite; transition:transform .2s; }
        .wa-fab:hover { transform:scale(1.1); }
        .wa-fab:hover svg { animation: wa-ring .65s ease; }
        .wa-wrap:hover .wa-tip { opacity:1; transform:translateX(0); }

        /* Vision card corners */
        .vision-card { position:relative; }
        .vision-card::before { content:''; position:absolute; top:0; right:0; width:90px; height:90px; border-bottom:1px solid rgba(201,146,42,.3); border-left:1px solid rgba(201,146,42,.3); }
        .vision-card::after  { content:''; position:absolute; bottom:0; left:0; width:64px; height:64px; border-top:1px solid rgba(201,146,42,.2); border-right:1px solid rgba(201,146,42,.2); }

        /* Exam card shine */
        .exam-card { overflow:hidden; position:relative; }
        .exam-card::after { content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 35%,rgba(255,255,255,.07) 50%,transparent 65%); transform:translateX(-100%); transition:transform .55s; pointer-events:none; }
        .exam-card:hover::after { transform:translateX(100%); }

        /* Prob card */
        .prob-card { transition:border-color .3s,transform .3s,box-shadow .3s; }
        .prob-card:hover { box-shadow:-4px 0 18px rgba(201,146,42,.22); transform:translateX(4px); border-color:#6B1A1A; }

        /* Sol row */
        .sol-row { transition:background .2s; }
        .sol-row:hover { background:#FDFAF6; }
        .sol-icon { transition:transform .25s; }
        .sol-row:hover .sol-icon { transform:scale(1.18); }

        /* Testimonial */
        .t-card::before { content:'\\201C'; font-family:'Cormorant Garamond',serif; font-size:6rem; color:#C9922A; opacity:.22; position:absolute; top:0; left:14px; line-height:1; pointer-events:none; }

        /* Footer link bullet */
        .ft-link { display:flex; align-items:center; gap:8px; }
        .ft-link::before { content:''; width:4px; height:4px; border-radius:50%; background:#C9922A; opacity:.6; flex-shrink:0; transition:opacity .2s; }
        .ft-link:hover::before { opacity:1; }

        .letter-rule { border:none; border-top:1.5px solid #C9922A; opacity:.35; }

        /* Contact blocks */
        .contact-panel {
          border-left: 3px solid #C9922A;
          background: linear-gradient(180deg, #FFFCF8 0%, #FDF6EC 100%);
          box-shadow: 0 8px 24px rgba(74, 14, 14, 0.08);
        }
        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 8px 0;
        }
        .contact-row + .contact-row {
          border-top: 1px dashed rgba(201, 146, 42, 0.28);
        }
        .contact-ic {
          width: 26px;
          height: 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid rgba(201, 146, 42, 0.45);
          color: #6B1A1A;
          font-size: .82rem;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .contact-link {
          color: #6B1A1A;
          font-weight: 600;
          text-decoration: none;
          transition: color .2s ease, text-decoration-color .2s ease;
        }
        .contact-link:hover {
          color: #4A0E0E;
          text-decoration: underline;
          text-underline-offset: 3px;
        }`}</style>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ WhatsApp FAB Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <div className="wa-wrap fixed bottom-7 right-7 z-[300] flex flex-col items-end gap-2">
        <div className="wa-tip opacity-0 pointer-events-none translate-x-2 transition-all duration-300 bg-white text-[#2A1A1A] text-sm f-dm font-medium px-4 py-2 rounded shadow-xl border border-gray-100 whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
        <a
          href="https://wa.me/918860615795?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
          target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
          className="wa-fab w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16.002 2.667C8.638 2.667 2.667 8.637 2.667 16c0 2.358.63 4.666 1.826 6.684L2.667 29.333l6.84-1.794A13.282 13.282 0 0016.002 29.333c7.364 0 13.331-5.97 13.331-13.333 0-7.363-5.967-13.333-13.331-13.333zm0 24.267a11.004 11.004 0 01-5.608-1.535l-.402-.24-4.061 1.065 1.082-3.952-.262-.415A10.964 10.964 0 015.002 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.04-8.224c-.33-.165-1.953-.963-2.257-1.073-.304-.11-.524-.165-.745.165-.22.33-.854 1.073-1.046 1.293-.192.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.638-.98-.875-1.642-1.956-1.834-2.286-.192-.33-.02-.508.145-.672.148-.147.33-.385.494-.577.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.577-.083-.165-.745-1.797-1.02-2.46-.27-.647-.545-.56-.745-.57-.192-.01-.412-.012-.633-.012-.22 0-.577.082-.879.412-.302.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.554 5.638 4.985.788.34 1.403.544 1.882.696.791.252 1.51.216 2.079.131.634-.094 1.953-.799 2.228-1.57.275-.77.275-1.43.192-1.569-.082-.137-.302-.22-.632-.385z"/>
          </svg>
        </a>
      </div>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Navbar Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <nav className={`fixed top-3 left-4 right-4 z-50 h-[60px] md:h-[68px] flex items-center justify-between px-6 md:px-10 bg-white/95 backdrop-blur-md  border-[#f0e0d0] rounded-xl transition-all duration-300 ${scrolled ? "shadow-lg " : "shadow-[0_4px_20px_rgba(0,0,0,0.25)]"}`}>
        <a href="#hero">
          <Image src="/logo-new.webp" alt="Dezine Acharya" width={90} height={44} className="w-[100px] md:w-[120px] object-contain" priority/>
        </a>
        <div className="hidden lg:flex items-center gap-9">
          {[["#about","About"],["#exams","Exams"],["#mentor","Mentor"],["#parents","For Parents"],["#community","Community"]].map(([href,label])=>(
            <a key={href} href={href} className="nav-link f-dm text-[13px] font-medium tracking-[.14em] uppercase text-[#6B1A1A] hover:text-[#C9922A] transition-colors duration-200 no-underline">{label}</a>
          ))}
          <a href="#contact" className="f-dm text-[.75rem] tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-6 py-2.5 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 no-underline">Enroll Now</a>
        </div>
        <button onClick={()=>setMenuOpen(true)} className="lg:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1" aria-label="Menu">
          {[0,1,2].map(i=><span key={i} className="block w-6 h-0.5 bg-[#6B1A1A]"/>)}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[200] bg-white flex-col items-center justify-center gap-8 px-10 ${menuOpen?"flex":"hidden"}`}>
        <button onClick={()=>setMenuOpen(false)} className="absolute top-5 right-6 bg-transparent border-0 text-2xl text-[#6B1A1A] cursor-pointer" aria-label="Close menu">
          <X size={24} />
        </button>
        {[ ["#about","About"],["#exams","Exams"],["#mentor","Mentor"],["#parents","For Parents"],["#community","Community"] ].map(([href,label])=>(
          <a key={href} href={href} onClick={()=>setMenuOpen(false)} className="f-dm text-xl tracking-[.12em] uppercase text-[#6B1A1A] no-underline">{label}</a>
        ))}
        <a href="#contact" onClick={()=>setMenuOpen(false)} className="f-dm text-[.85rem] tracking-[.15em] uppercase bg-[#6B1A1A] text-white px-10 py-3 no-underline">Enroll Now</a>
      </div>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center pt-[50px] md:pt-[72px] relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FDF6EC]">
        {/* Decorative */}
        <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#FDF6EC] opacity-70 pointer-events-none float-anim"/>
        <div className="absolute right-[10%] top-[12%] w-px h-[70%] bg-gradient-to-b from-transparent via-[#C9922A] to-transparent opacity-15 pointer-events-none"/>
        <div className="absolute left-[4%] bottom-[14%] w-24 h-24 border border-[#C9922A]/20 rotate-45 pointer-events-none" data-aos="fade-in" data-aos-delay="700"/>
        <div className="absolute left-[6%] bottom-[20%] w-12 h-12 border border-[#C9922A]/15 rotate-45 pointer-events-none" data-aos="fade-in" data-aos-delay="900"/>

        <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center w-full relative z-10">
          {/* Left */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-5" data-aos="fade-right" data-aos-delay="100">Design Education - Redefined</p>
            <h1 className="f-play font-black text-5xl md:text-[4rem] leading-[1.08] text-[#4A0E0E]" data-aos="fade-right" data-aos-delay="180">Where Design</h1>
            <h1 className="f-corm font-light italic text-5xl md:text-[4rem] leading-[1.08] text-[#C9922A] my-1" data-aos="fade-right" data-aos-delay="220">is Discovered,</h1>
            <h1 className="f-play font-black text-5xl md:text-[4rem] leading-[1.08] text-[#4A0E0E] mb-7" data-aos="fade-right" data-aos-delay="260">Not Drilled.</h1>
            <div className="shimmer-bar h-[3px] w-20 rounded-full mb-8" data-aos="fade-right" data-aos-delay="320"/>
            <p className="f-dm text-[.97rem] leading-relaxed text-[#8A6A5A] font-light max-w-[440px] mb-10 mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="360">
              Mentoring aspirants for{" "}<strong className="text-[#6B1A1A] font-semibold">NID, NIFT, UCEED &amp; NATA</strong>{" "}through creative intuition, structured guidance, and reflective mentorship - transforming exam pressure into a meaningful design journey.
            </p>
            <div className="flex gap-4 flex-wrap mb-12 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="420">
              <a href="#contact" className="f-dm text-[.8rem] tracking-[.16em] uppercase bg-[#6B1A1A] text-white px-9 py-4 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline">Begin Your Journey</a>
              <a href="#approach" className="f-dm text-[.8rem] tracking-[.16em] uppercase border border-[#6B1A1A] text-[#6B1A1A] px-9 py-4 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline">Our Approach</a>
            </div>
            <div id="hero-stats" className="flex gap-4 sm:gap-8 lg:gap-10 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="500">
              {[
                [`${statCounts.aspirants.toLocaleString()}+`,"Aspirants Goal"],
                [String(statCounts.exams),"Design Exams"],
                [`${statCounts.years}+`,"Years Experience"],
              ].map(([num,lbl])=>(
                <div key={lbl} className="text-center lg:text-left">
                  <div className="font-bold text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.6rem] text-[#6B1A1A] leading-none">{num}</div>
                  <div className="text-[.58rem] sm:text-[.64rem] md:text-[.7rem] tracking-[.18em] uppercase text-[#8A6A5A] mt-1">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Vision card */}
          <div className="relative" data-aos="fade-left" data-aos-delay="250">
            <div className="vision-card bg-gradient-to-br from-[#6B1A1A] to-[#4A0E0E] p-11 overflow-hidden">
              <p className="f-dm text-[.68rem] tracking-[.3em] uppercase text-[#C9922A] opacity-80 mb-6">Our Vision</p>
              <blockquote className="f-corm font-light italic text-[1.55rem] leading-relaxed text-white/90 mb-8">
                &ldquo;To democratize design education in India - making meaningful mentorship accessible, inspiring, and free from commercial exploitation.&rdquo;
              </blockquote>
              <div className="border-t border-[#C9922A]/25 pt-6 flex gap-3 flex-wrap">
                {["NID","NIFT","UCEED","NATA"].map(e=>(
                  <span key={e} className="f-dm text-[.75rem] tracking-[.18em] uppercase border border-[#C9922A]/50 text-[#E8B84B] px-4 py-1.5">{e}</span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-[#C9922A] translate-x-3 translate-y-3 -z-10 opacity-15"/>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="f-dm text-[.62rem] tracking-[.28em] uppercase text-[#6B1A1A] opacity-50">Scroll</span>
          <div className="w-px h-9 bg-gradient-to-b from-[#6B1A1A] to-transparent opacity-40"/>
        </div>
      </section>

      {/* MENTOR */}
      <section id="mentor" className="py-20 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative flex justify-center" data-aos="fade-right" data-aos-duration="900">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[68%] bg-[#FDF6EC] rounded"/>
            <Image src="/avatar.png" alt="Amit Singh - Founder" width={360} height={500} className="relative z-10 w-full max-w-[340px] drop-shadow-2xl float-anim" priority/>
          </div>
          <div data-aos="fade-left" data-aos-delay="150" data-aos-duration="900">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">Meet Your Mentor</p>
            <h2 className="f-play font-bold text-3xl md:text-[2.8rem] text-[#4A0E0E] mb-3 leading-tight">
              The Modern <em className="italic text-[#C9922A]">Dronacharya</em><br/>for Design Thinkers
            </h2>
            <p className="f-corm italic text-[1.4rem] text-[#C9922A] mb-7">Amit Singh - Founder &amp; Lead Mentor</p>
            <p className="f-dm text-[.95rem] leading-[1.9] text-[#8A6A5A] font-light mb-4">
              An alumnus of the <strong className="text-[#6B1A1A] font-semibold">National Institute of Design (NID)</strong>, Amit brings over{" "}<strong className="text-[#6B1A1A] font-semibold">12+ years</strong> of teaching and mentoring design aspirants. His philosophy-driven approach transforms the way students perceive creativity.
            </p>
            <p className="f-dm text-[.95rem] leading-[1.9] text-[#8A6A5A] font-light mb-8">
              At Dezine Acharya, Amit has built more than a coaching brand - it&apos;s a{" "}<strong className="text-[#6B1A1A] font-semibold">design movement</strong> where creativity, purpose, and mentorship converge.
            </p>
            <div className="flex gap-2 flex-wrap mb-8">
              {["NID Alumnus","12+ Yrs Mentoring","Philosophy-Driven"].map(t=>(
                <span key={t} className="f-dm text-[.72rem] tracking-[.12em] uppercase bg-[#FDF6EC] text-[#6B1A1A] border border-[#C9922A]/35 px-4 py-2">{t}</span>
              ))}
            </div>
            <div className="contact-panel px-6 py-5">
              <div className="contact-row">
                <span className="contact-ic"><MapPin size={14} /></span>
                <p className="f-dm text-[.9rem] leading-relaxed text-[#2A1A1A]">
                  <strong>Dwarka Centre, Delhi</strong> - Plot No. 101, First Floor Above Levi&apos;s Showroom, Sector 7, Dwarka - 110777
                </p>
              </div>
              <div className="contact-row">
                <span className="contact-ic"><Phone size={14} /></span>
                <p className="f-dm text-[.9rem] leading-relaxed text-[#2A1A1A]">
                  <a href="tel:+918860615795" className="contact-link">8860615795</a>
                  {" - "}
                  <a href="mailto:info@dezineacharya.com" className="contact-link">info@dezineacharya.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMS */}
      <section id="exams" className="py-24 px-6 md:px-10 bg-[#FDF6EC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">Entrance Exams</p>
            <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E] mb-5">We Prepare You For</h2>
            <p className="f-dm text-[.97rem] text-[#8A6A5A] font-light max-w-md mx-auto leading-relaxed">India&apos;s most prestigious design &amp; architecture entrance examinations - approached not as a test, but as a creative milestone.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0.5">
            {[
              { code:"NID",  full:"National Institute of Design",                 icon: Palette,         desc:"India's premier design institution. NID demands creative originality, design thinking and spatial reasoning.", featured:false },
              { code:"NIFT", full:"National Institute of Fashion Technology",      icon: Shirt,           desc:"Fashion, textiles and design - NIFT CAT tests visual sensitivity, creative aptitude and situational judgment.", featured:true  },
              { code:"UCEED",full:"Undergraduate Common Entrance Exam for Design", icon: Lightbulb,       desc:"IIT design programs. UCEED evaluates visualization, environment and social awareness, and analytical reasoning.", featured:false },
              { code:"NATA", full:"National Aptitude Test in Architecture",        icon: DraftingCompass, desc:"Gateway to top architecture colleges. NATA assesses drawing ability, aesthetic sensitivity, and critical thinking.", featured:false },
            ].map((exam,i)=>(
              <div
                key={exam.code}
                data-aos="fade-up"
                data-aos-delay={i*100}
                className={`exam-card group p-10 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${exam.featured ? "bg-[#6B1A1A]" : "bg-white hover:bg-[#4A0E0E]"}`}
              >
                <div className={`f-corm text-[2.2rem] mb-5 transition-all duration-300 ${exam.featured ? "text-[#E8B84B]" : "text-[#C9922A] opacity-60 group-hover:opacity-100 group-hover:text-[#E8B84B]"}`}><exam.icon size={34} strokeWidth={1.8} /></div>
                <div className={`f-play font-bold text-[1.9rem] mb-2 transition-colors duration-300 ${exam.featured ? "text-[#E8B84B]" : "text-[#6B1A1A] group-hover:text-[#E8B84B]"}`}>{exam.code}</div>
                <div className={`f-dm text-[.68rem] tracking-[.1em] uppercase mb-5 transition-colors duration-300 ${exam.featured ? "text-white/55" : "text-[#8A6A5A] group-hover:text-white/55"}`}>{exam.full}</div>
                <p className={`f-dm text-[.9rem] leading-relaxed font-light transition-colors duration-300 ${exam.featured ? "text-white/82" : "text-[#8A6A5A] group-hover:text-white/80"}`}>{exam.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {/* Problems */}
          <div data-aos="fade-right" data-aos-duration="800">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">The Challenge</p>
            <h2 className="f-play font-bold text-3xl md:text-[2.5rem] text-[#4A0E0E] mb-9">What&apos;s Broken in Design Coaching</h2>
            <div className="space-y-4">
              {[
                "Coaching factories dominate - high fees, minimal mentorship.",
                "Students imitate instead of creating original work.",
                "Real design thinking exposure is completely missing.",
                `Emotional and career guidance is absent - reduced to \"draw and score.\"`,
              ].map((p,i)=>(
                <div key={i} data-aos="fade-right" data-aos-delay={i*80} className="prob-card border-l-[3px] border-[#C9922A] bg-[#FDF6EC] pl-6 py-5">
                  <span className="f-corm text-[#C9922A] text-xl mr-3">{String(i+1).padStart(2,"0")}</span>
                  <span className="f-dm text-[.93rem] leading-relaxed text-[#2A1A1A] font-light">{p}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Solutions */}
          <div data-aos="fade-left" data-aos-duration="800">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">Our Solution</p>
            <h2 className="f-play font-bold text-3xl md:text-[2.5rem] text-[#4A0E0E] mb-9">The Dezine Acharya Difference</h2>
            {[
              { icon: Users, title:"Mentorship over Teaching", desc:"Personalized creative guidance that sees the individual behind the aspirant." },
              { icon: Brain, title:"Think, Don't Rote", desc:"A curriculum built on design thinking, not repetitive practice drills." },
              { icon: Wallet, title:"Affordable & Flexible", desc:"Breaking the cycle of commercial exploitation in coaching." },
              { icon: Sparkles, title:"Community-Driven", desc:"Peer feedback, shared growth, and continuous engagement across platforms." },
              { icon: Wifi, title:"Always Accessible", desc:"YouTube, Instagram and live communities - design education without walls." },
            ].map((s,i)=>(
              <div key={s.title} data-aos="fade-up" data-aos-delay={i*80}
                className={`sol-row flex items-start gap-4 py-5 px-3 -mx-3 ${i<4?"border-b border-[#f0e8e0]":""}`}>
                <span className="sol-icon text-[#C9922A] text-2xl shrink-0 mt-0.5"><s.icon size={22} strokeWidth={2} /></span>
                <div>
                  <div className="f-dm font-semibold text-[.93rem] text-[#6B1A1A] mb-1">{s.title}</div>
                  <div className="f-dm text-[.88rem] text-[#8A6A5A] leading-relaxed font-light">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="approach" className="py-24 px-6 md:px-10 relative overflow-hidden bg-gradient-to-br from-[#4A0E0E] to-[#6B1A1A]">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-[#C9922A]/12 pointer-events-none float-anim" style={{animationDelay:"1s"}}/>
        <div className="absolute -bottom-16 left-[8%] w-64 h-64 rounded-full border border-[#C9922A]/8 pointer-events-none"/>
        <div className="max-w-[900px] mx-auto text-center relative z-10" data-aos="zoom-in" data-aos-duration="900">
          <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#E8B84B] opacity-85 mb-6">Our Mission</p>
          <blockquote className="f-corm font-light italic text-4xl md:text-[3rem] text-white/90 leading-relaxed mb-12">
            &ldquo;To guide one lakh design aspirants across India through a human-centered, experience-driven learning model - where design is{" "}
            <em className="text-[#E8B84B] not-italic">discovered</em>, not drilled.&rdquo;
          </blockquote>
          <div className="flex justify-center gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="200">
            <a href="https://www.instagram.com/dezine_acharya" target="_blank" rel="noopener noreferrer"
               className="f-dm text-[.8rem] tracking-[.15em] uppercase text-white border border-white/20 bg-white/10 px-8 py-3.5 hover:bg-white/20 transition-all duration-300 no-underline">
              Follow on Instagram
            </a>
            <a href="#contact"
               className="f-dm text-[.8rem] tracking-[.15em] uppercase bg-[#C9922A] text-[#4A0E0E] font-semibold px-8 py-3.5 hover:bg-[#E8B84B] transition-all duration-300 no-underline">
              Join the Movement
            </a>
          </div>
        </div>
      </section>

      {/* PARENTS LETTER */}
      <section id="parents" className="py-24 px-4 md:px-10 bg-[#FDF6EC]">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">A Message for Parents</p>
          <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E]">Dear Parents,</h2>
        </div>
        <div className="max-w-[820px] mx-auto" data-aos="fade-up" data-aos-delay="150" data-aos-duration="900">
          <div className="bg-white border border-[#f0e0d0] shadow-[0_8px_48px_rgba(0,0,0,.07)] px-5 md:px-16 py-12">
            <div className="flex justify-between items-start mb-2">
              <Image src="/logo-new.webp" alt="Dezine Acharya" width={120} height={52} className=" w-auto object-contain"/>
              {/* <span className="f-dm text-[.8rem] text-[#C9922A] tracking-wide">www.dezineacharya.com</span> */}
            </div>
            <hr className="letter-rule mb-9 mt-2"/>
            <p className="f-dm text-[1rem] font-medium text-[#2A1A1A] mb-6">Dear Parents,</p>
            <div className="space-y-5 f-dm text-[.95rem] leading-[1.95] text-[#2A1A1A] font-light">
              <p>If your child aspires to build a career in <strong className="font-bold">Fashion, Design, or Architecture</strong>, choosing the right direction after school can often feel confusing and overwhelming.</p>
              <p>At <strong className="font-bold">Dezine Acharya</strong>, we provide expert mentorship and career guidance for premier institutes such as <strong className="font-bold">NID, NIFT, UCEED, NATA</strong>, and leading architecture and design colleges. Our approach goes beyond coaching - we help students discover their strengths, nurture creativity, and make confident career decisions aligned with their true potential.</p>
              <p>We understand that every parent wants clarity, security, and the right future for their child. With <strong className="font-bold">personalised mentorship</strong> and <strong className="font-bold">professional guidance</strong>, we ensure students move forward with confidence, clarity, and purpose.</p>
              <p>We warmly invite you to visit our <strong className="font-bold">Dwarka Centre</strong> for a personal consultation and experience our mentorship approach firsthand.</p>
            </div>
            <div className="contact-panel mt-9 px-6 py-5">
              <div className="contact-row">
                <span className="contact-ic"><MapPin size={14} /></span>
                <p className="f-dm text-[.93rem] text-[#2A1A1A]">Dwarka Centre, Delhi</p>
              </div>
              <div className="contact-row">
                <span className="contact-ic"><Phone size={14} /></span>
                <p className="f-dm text-[.93rem] text-[#2A1A1A]">
                  Call to schedule a consultation: <a href="tel:+918860615795" className="contact-link">8860615795</a>
                </p>
              </div>
              <div className="contact-row">
                <span className="contact-ic"><Mail size={14} /></span>
                <p className="f-dm text-[.93rem] text-[#2A1A1A]">
                  <a href="mailto:info@dezineacharya.com" className="contact-link">info@dezineacharya.com</a>
                </p>
              </div>
            </div>
            <hr className="letter-rule mt-10 mb-4"/>
            <p className="f-dm text-[.78rem] text-[#8A6A5A] text-center">Plot No. 101, First Floor Above Levi&apos;s Showroom, Sector 7, Dwarka, Delhi - 110777</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="community" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="f-dm text-[.72rem] tracking-[.32em] uppercase text-[#C9922A] font-medium mb-4">Student Voices</p>
            <h2 className="f-play font-bold text-3xl md:text-[2.8rem] text-[#4A0E0E]">What Our Aspirants Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name:"Aanya Sharma", exam:"NID Aspirant",    text:"Dezine Acharya changed how I see design. It's not a coaching factory - it's a space where you actually learn to think." },
              { name:"Rohan Mehta",  exam:"UCEED Qualifier", text:"The mentorship here is personal and real. They pushed my creative limits while making sure I stayed true to my own vision." },
              { name:"Priya Nair",   exam:"NIFT Aspirant",   text:"The community aspect is incredible. Getting peer feedback and learning together made the whole journey less lonely and more inspiring." },
            ].map((t,i)=>(
              <div key={t.name} data-aos="fade-up" data-aos-delay={i*120}
                className="t-card relative bg-white border border-[#f0e0d0] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <p className="f-corm italic text-[1.1rem] leading-relaxed text-[#2A1A1A] mt-10 mb-6">{t.text}</p>
                <div className="border-t border-[#f0e0d0] pt-4 flex justify-between items-center">
                  <span className="f-dm font-semibold text-[.88rem] text-[#6B1A1A]">{t.name}</span>
                  <span className="f-dm text-[.7rem] tracking-[.14em] uppercase text-[#C9922A]">{t.exam}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â CTA / CONTACT Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
      <section id="contact" className="py-24 px-6 md:px-10 bg-[#FDF6EC] text-center">
        <div className="max-w-[700px] mx-auto" data-aos="fade-up">
          <div className="flex items-center gap-4 justify-center mb-9">
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#C9922A]"/>
            <span className="f-corm text-[#C9922A] text-2xl"><Sparkles size={20} /></span>
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#C9922A]"/>
          </div>
          <h2 className="f-play font-bold text-4xl md:text-5xl text-[#4A0E0E] mb-6">Ready to Begin Your Design Journey?</h2>
          <p className="f-dm text-[.97rem] text-[#8A6A5A] leading-relaxed font-light mb-10">
            Join a growing community of design aspirants who believe in{" "}
            <span className="text-[#6B1A1A] font-medium">thinking over drilling</span>,{" "}
            <span className="text-[#6B1A1A] font-medium">mentorship over marking</span>, and design as a genuinely transformative pursuit.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12" data-aos="fade-up" data-aos-delay="150">
            <a href="https://wa.me/918860615795?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services" target="_blank"
               className="f-dm text-[.82rem] tracking-[.16em] uppercase bg-[#6B1A1A] text-white px-10 py-4 hover:bg-[#4A0E0E] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline">
              Enroll Now
            </a>
            <a href="https://www.instagram.com/dezine_acharya" target="_blank" rel="noopener noreferrer"
               className="f-dm text-[.82rem] tracking-[.16em] uppercase border border-[#6B1A1A] text-[#6B1A1A] px-10 py-4 hover:bg-[#6B1A1A] hover:text-white transition-all duration-300 no-underline">
              Instagram
            </a>
            <a href="https://www.youtube.com/@dezineacharya" target="_blank" rel="noopener noreferrer"
               className="f-dm text-[.82rem] tracking-[.16em] uppercase border border-[#C9922A] text-[#C9922A] px-10 py-4 hover:bg-[#C9922A] hover:text-white transition-all duration-300 no-underline">
              YouTube
            </a>
          </div>
          <div className="contact-panel px-8 py-6 text-left max-w-[460px] mx-auto" data-aos="fade-up" data-aos-delay="250">
            <div className="contact-row">
              <span className="contact-ic"><Phone size={14} /></span>
              <a href="tel:+918860615795" className="f-dm text-[.93rem] contact-link">8860615795</a>
            </div>
            <div className="contact-row">
              <span className="contact-ic"><Mail size={14} /></span>
              <a href="mailto:info@dezineacharya.com" className="f-dm text-[.93rem] contact-link">info@dezineacharya.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-ic"><MapPin size={14} /></span>
              <span className="f-dm text-[.88rem] text-[#8A6A5A] leading-relaxed font-light">Plot No. 101, First Floor Above Levi&apos;s Showroom, Sector 7, Dwarka, Delhi - 110777</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3A0A0A] text-white pt-16 pb-8 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="shimmer-bar h-[2px] w-full rounded-full mb-14 opacity-60"/>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16 mb-14">
            {/* Brand */}
            <div data-aos="fade-up" data-aos-delay="0">
              <Image src="/logo-new.webp" alt="Dezine Acharya" width={140} height={44} className="w-[100px] w-auto object-contain mb-5 brightness-0 invert opacity-90"/>
              <p className="f-dm text-[.88rem] leading-[1.9] text-white/65 font-light max-w-[290px] mb-6">
                An experiential learning platform mentoring students for NID, NIFT, UCEED and NATA - where design is discovered, not drilled.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://www.instagram.com/dezine_acharya" target="_blank" rel="noopener noreferrer"
                   className="f-dm text-[.7rem] tracking-[.12em] uppercase border border-[#C9922A]/50 text-[#C9922A] px-4 py-2 hover:bg-[#C9922A] hover:text-white transition-all duration-300 no-underline">Instagram</a>
                <a href="https://wa.me/918860615795" target="_blank" rel="noopener noreferrer"
                   className="f-dm text-[.7rem] tracking-[.12em] uppercase border border-[#25D366]/45 text-[#25D366] px-4 py-2 hover:bg-[#25D366] hover:text-white transition-all duration-300 no-underline">WhatsApp</a>
                <a href="https://www.youtube.com/@dezineacharya" target="_blank" rel="noopener noreferrer"
                   className="f-dm text-[.7rem] tracking-[.12em] uppercase border border-white/20 text-white/60 px-4 py-2 hover:border-white/50 hover:text-white transition-all duration-300 no-underline">YouTube</a>
              </div>
            </div>
            {/* Exams */}
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="f-dm text-[.7rem] tracking-[.28em] uppercase text-[#C9922A] mb-6 pb-3 border-b border-[#C9922A]/18">Exams</p>
              {["NID Preparation","NIFT Preparation","UCEED Preparation","NATA Preparation"].map(l=>(
                <a key={l} href="#exams" className="ft-link f-dm text-[.87rem] text-white/65 font-light no-underline hover:text-white transition-colors duration-200 mb-4 block">{l}</a>
              ))}
            </div>
            {/* Connect */}
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="f-dm text-[.7rem] tracking-[.28em] uppercase text-[#C9922A] mb-6 pb-3 border-b border-[#C9922A]/18">Connect</p>
              {[
                { label:"Instagram",  href:"https://www.instagram.com/dezine_acharya" },
                { label:"YouTube",    href:"https://www.youtube.com/@dezineacharya" },
                { label:"For Parents",href:"#parents" },
                { label:"Contact Us", href:"#contact" },
              ].map(l=>(
                <a key={l.label} href={l.href} target={l.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                   className="ft-link f-dm text-[.87rem] text-white/65 font-light no-underline hover:text-white transition-colors duration-200 mb-4 block">{l.label}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-3">
            <span className="f-dm text-[.76rem] text-white/45 font-light">Copyright 2025 Dezine Acharya. All rights reserved.</span>
            <span className="f-corm italic text-[.95rem] text-[#C9922A] opacity-80">Design is discovered, not drilled.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
