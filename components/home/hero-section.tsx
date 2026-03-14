"use client";

import { useEffect, useState } from "react";
import { Eye, Target } from "lucide-react";

const MAX_COUNTS = {
  aspirants: 100000,
  exams: 3,
  years: 12,
};

export function HeroSection() {
  const [statCounts, setStatCounts] = useState({
    aspirants: 0,
    exams: 0,
    years: 0,
  });

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

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setStatCounts({
            aspirants: Math.round(MAX_COUNTS.aspirants * eased),
            exams: Math.round(MAX_COUNTS.exams * eased),
            years: Math.round(MAX_COUNTS.years * eased),
          });

          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
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

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-white to-[#FDF6EC] pt-[50px] md:pt-[72px]"
    >
      <div className="float-anim pointer-events-none absolute top-1/2 right-[-6%] h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#FDF6EC] opacity-70" />
      <div className="pointer-events-none absolute top-[12%] right-[10%] h-[70%] w-px bg-gradient-to-b from-transparent via-[#C9922A] to-transparent opacity-15" />
      <div
        className="pointer-events-none absolute bottom-[14%] left-[4%] h-24 w-24 rotate-45 border border-[#C9922A]/20"
        data-aos="fade-in"
        data-aos-delay="700"
      />
      <div
        className="pointer-events-none absolute bottom-[20%] left-[6%] h-12 w-12 rotate-45 border border-[#C9922A]/15"
        data-aos="fade-in"
        data-aos-delay="500"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-14 px-4 py-20 md:grid-cols-2 md:gap-20 md:px-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p
            className="f-dm mb-5 text-[.72rem] font-medium tracking-[.32em] text-[#C9922A] uppercase"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Design Education Redefined
          </p>
          <h1
            className="f-play text-5xl leading-[1.08] font-black text-[#4A0E0E] md:text-[4rem]"
            data-aos="fade-right"
            data-aos-delay="180"
          >
            Where Design
          </h1>
          <h1
            className="f-corm my-1 text-5xl leading-[1.08] font-light italic text-[#C9922A] md:text-[4rem]"
            data-aos="fade-right"
            data-aos-delay="220"
          >
            is Discovered,
          </h1>
          <h1
            className="f-play mb-7 text-5xl leading-[1.08] font-black text-[#4A0E0E] md:text-[4rem]"
            data-aos="fade-right"
            data-aos-delay="260"
          >
            Not Drilled.
          </h1>
          <div
            className="shimmer-bar mb-8 h-[3px] w-20 rounded-full"
            data-aos="fade-right"
            data-aos-delay="320"
          />
          <p
            className="f-dm mx-auto mb-10 max-w-[440px] text-[.97rem] leading-relaxed font-light text-[#8A6A5A] lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="360"
          >
            We are not a coaching factory. Dezine Acharya is a{" "}
            <strong className="font-semibold text-[#6B1A1A]">
              guided mentorship ecosystem
            </strong>{" "}
            helping aspirants crack{" "}
            <strong className="font-semibold text-[#6B1A1A]">
              NID, NIFT, UCEED, NATA &amp; CEED
            </strong>{" "}
            through creative clarity, not rote drilling.
          </p>
          <div
            className="mb-12 flex flex-wrap justify-center gap-4 lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="420"
          >
            <a
              href="#contact"
              className="f-dm bg-[#6B1A1A] px-9 py-4 text-[.8rem] tracking-[.16em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0E0E] hover:shadow-xl"
            >
              Begin Your Journey
            </a>
            <a
              href="#about"
              className="f-dm border border-[#6B1A1A] px-9 py-4 text-[.8rem] tracking-[.16em] text-[#6B1A1A] uppercase transition-all duration-300 hover:bg-[#6B1A1A] hover:text-white"
            >
              Our Approach
            </a>
          </div>
          <div
            id="hero-stats"
            className="flex justify-center gap-4 sm:gap-8 lg:justify-start lg:gap-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {[
              [`${statCounts.aspirants.toLocaleString()}+`, "Aspirants Goal"],
              [String(statCounts.exams), "Design Streams"],
              [`${statCounts.years}+`, "Years Experience"],
            ].map(([num, label]) => (
              <div key={label} className="text-center lg:text-left">
                <div className="text-[2rem] leading-none font-bold text-[#6B1A1A] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.6rem]">
                  {num}
                </div>
                <div className="mt-1 text-[.58rem] tracking-[.18em] text-[#8A6A5A] uppercase sm:text-[.64rem] md:text-[.7rem]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative" data-aos="fade-left" data-aos-delay="250">
          <div className="vision-card overflow-hidden bg-gradient-to-br from-[#6B1A1A] to-[#4A0E0E] p-11">
            <div className="mb-5 flex items-center gap-3">
              <Eye size={18} className="text-[#C9922A]" />
              <p className="f-dm text-[.68rem] tracking-[.3em] text-[#C9922A] uppercase opacity-90">
                Vision
              </p>
            </div>
            <blockquote className="f-corm mb-8 border-b border-[#C9922A]/20 pb-8 text-[1.45rem] leading-relaxed font-light italic text-white/90">
              &ldquo;To democratize design education in India, making quality
              mentorship accessible, inspiring, and greed-free.&rdquo;
            </blockquote>
            <div className="mb-4 flex items-center gap-3">
              <Target size={18} className="text-[#C9922A]" />
              <p className="f-dm text-[.68rem] tracking-[.3em] text-[#C9922A] uppercase opacity-90">
                Mission
              </p>
            </div>
            <p className="f-corm mb-8 text-[1.2rem] leading-relaxed font-light italic text-white/80">
              &ldquo;To guide 1 lakh design aspirants through a human-centered,
              experience-driven model where design is{" "}
              <em className="not-italic text-[#E8B84B]">discovered</em>, not
              taught.&rdquo;
            </p>
            <div className="flex flex-wrap gap-3 border-t border-[#C9922A]/25 pt-6">
              {["NID", "NIFT", "UCEED", "NATA", "CEED"].map((exam) => (
                <span
                  key={exam}
                  className="f-dm border border-[#C9922A]/50 px-4 py-1.5 text-[.75rem] tracking-[.18em] text-[#E8B84B] uppercase"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 bg-[#C9922A] opacity-15" />
        </div>
      </div>

      <div className="scroll-hint absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="f-dm text-[.62rem] tracking-[.28em] text-[#6B1A1A] uppercase opacity-50">
          Scroll
        </span>
        <div className="h-9 w-px bg-gradient-to-b from-[#6B1A1A] to-transparent opacity-40" />
      </div>
    </section>
  );
}
