import {
  Award,
  Brain,
  ChevronRight,
  DraftingCompass,
  Eye,
  Palette,
  Shirt,
  Sparkles,
  Target,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";

export function DifferentiatorStrip() {
  return (
    <section className="bg-[#4A0E0E] px-6 py-10 md:px-10" data-aos="fade-up">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-6 md:gap-12">
        {[
          { icon: Users, label: "Expert Faculty Team" },
          { icon: Brain, label: "Design Thinking First" },
          { icon: Wallet, label: "Transparent & Affordable" },
          { icon: Sparkles, label: "Not a Coaching Factory" },
          { icon: Award, label: "Guided Career Path" },
        ].map((item, index) => (
          <div key={item.label} className="flex items-center gap-3">
            <item.icon size={18} className="text-[#E8B84B]" />
            <span className="f-dm text-[.8rem] tracking-[.14em] text-white/80 uppercase">
              {item.label}
            </span>
            {index < 4 && (
              <span className="ml-6 hidden h-5 w-px bg-[#C9922A]/30 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function CoursesSection() {
  return (
    <section
      id="courses"
      className="bg-[#FDF6EC] px-4 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center" data-aos="fade-up">
          <p className="f-dm mb-4 text-[.72rem] font-medium tracking-[.32em] text-[#C9922A] uppercase">
            What We Offer
          </p>
          <h2 className="f-play mb-5 text-4xl font-bold text-[#4A0E0E] md:text-5xl">
            Our Course Streams
          </h2>
          <p className="f-dm mx-auto max-w-lg text-[.97rem] leading-relaxed font-light text-[#8A6A5A]">
            Three focused streams, each with a dedicated faculty, tailored
            curriculum, and a clear roadmap to India&apos;s most prestigious
            institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            className="cat-card flex flex-col border border-[#f0e0d0] bg-white p-4 md:p-10"
            data-aos="fade-up"
          >
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9922A]/30 bg-[#FDF6EC]">
              <Palette size={26} strokeWidth={1.8} className="text-[#C9922A]" />
            </div>
            <p className="f-dm mb-3 text-[.68rem] tracking-[.28em] text-[#C9922A] uppercase">
              Stream 01
            </p>
            <h3 className="f-play mb-4 text-[2rem] font-bold text-[#4A0E0E]">
              Design
            </h3>
            <p className="f-dm mb-7 flex-1 text-[.9rem] leading-relaxed font-light text-[#8A6A5A]">
              For students passionate about product, communication, and
              interaction design. Our curriculum blends design theory,
              ideation, and portfolio-building with deep focus on entrance
              patterns.
            </p>
            <div className="mb-8 space-y-2">
              {[
                { code: "NID", full: "National Institute of Design" },
                {
                  code: "UCEED",
                  full: "Undergraduate Common Entrance Exam for Design",
                },
                { code: "CEED", full: "Common Entrance Exam for Design (PG)" },
              ].map((exam) => (
                <div
                  key={exam.code}
                  className="exam-pill group flex items-center gap-3 border border-[#C9922A]/25 bg-[#FDF6EC] px-4 py-2.5"
                >
                  <ChevronRight size={13} className="text-[#C9922A]" />
                  <div>
                    <span className="f-dm text-[.8rem] font-semibold tracking-wide text-[#6B1A1A] group-hover:text-white">
                      {exam.code}
                    </span>
                    <span className="f-dm ml-2 text-[.7rem] text-[#8A6A5A]">
                      {exam.full.length > 30
                        ? `${exam.full.substring(0, 30)}...`
                        : exam.full}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="f-dm border border-[#6B1A1A] px-6 py-3 text-center text-[.75rem] tracking-[.14em] text-[#6B1A1A] uppercase transition-all duration-300 hover:bg-[#6B1A1A] hover:text-white"
            >
              Explore Design Stream
            </a>
          </div>

          <div
            className="cat-card course-card relative flex flex-col border border-[#6B1A1A] bg-[#6B1A1A] p-4 md:p-10"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9922A]/40 bg-[#4A0E0E]">
              <Shirt size={26} strokeWidth={1.8} className="text-[#E8B84B]" />
            </div>
            <p className="f-dm mb-3 text-[.68rem] tracking-[.28em] text-[#E8B84B] uppercase opacity-80">
              Stream 02
            </p>
            <h3 className="f-play mb-4 text-[2rem] font-bold text-[#E8B84B]">
              Fashion
            </h3>
            <p className="f-dm mb-7 flex-1 text-[.9rem] leading-relaxed font-light text-white/75">
              For creative minds drawn to fashion, textiles, and visual
              culture. We go beyond sketching, developing taste, situational
              judgment, aesthetic vocabulary, and original expression.
            </p>
            <div className="mb-8 space-y-2">
              <div className="flex items-center gap-3 border border-[#C9922A]/30 bg-[#4A0E0E]/50 px-4 py-2.5">
                <ChevronRight size={13} className="text-[#E8B84B]" />
                <div>
                  <span className="f-dm text-[.8rem] font-semibold tracking-wide text-[#E8B84B]">
                    NIFT
                  </span>
                  <span className="f-dm ml-2 text-[.7rem] text-white/55">
                    National Institute of Fashion Technology
                  </span>
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="f-dm bg-[#C9922A] px-6 py-3 text-center text-[.75rem] font-semibold tracking-[.14em] text-[#4A0E0E] uppercase transition-all duration-300 hover:bg-[#E8B84B]"
            >
              Explore Fashion Stream
            </a>
          </div>

          <div
            className="cat-card flex flex-col border border-[#f0e0d0] bg-white p-4 md:p-10"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9922A]/30 bg-[#FDF6EC]">
              <DraftingCompass
                size={26}
                strokeWidth={1.8}
                className="text-[#C9922A]"
              />
            </div>
            <p className="f-dm mb-3 text-[.68rem] tracking-[.28em] text-[#C9922A] uppercase">
              Stream 03
            </p>
            <h3 className="f-play mb-4 text-[2rem] font-bold text-[#4A0E0E]">
              Architecture
            </h3>
            <p className="f-dm mb-7 flex-1 text-[.9rem] leading-relaxed font-light text-[#8A6A5A]">
              For aspirants with a spatial sensibility and love for built
              environments. Our mentors train drawing ability, aesthetic
              sensitivity, critical thinking and maths, the full spectrum.
            </p>
            <div className="mb-8 space-y-2">
              {[
                {
                  code: "NATA",
                  full: "National Aptitude Test in Architecture",
                },
                {
                  code: "JEE B.Arch",
                  full: "Paper 2 IIT / NIT Architecture",
                },
              ].map((exam) => (
                <div
                  key={exam.code}
                  className="exam-pill group flex items-center gap-3 border border-[#C9922A]/25 bg-[#FDF6EC] px-4 py-2.5"
                >
                  <ChevronRight size={13} className="text-[#C9922A]" />
                  <div>
                    <span className="f-dm text-[.8rem] font-semibold tracking-wide text-[#6B1A1A] group-hover:text-white">
                      {exam.code}
                    </span>
                    <span className="f-dm ml-2 text-[.7rem] text-[#8A6A5A]">
                      {exam.full.length > 32
                        ? `${exam.full.substring(0, 32)}...`
                        : exam.full}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="f-dm border border-[#6B1A1A] px-6 py-3 text-center text-[.75rem] tracking-[.14em] text-[#6B1A1A] uppercase transition-all duration-300 hover:bg-[#6B1A1A] hover:text-white"
            >
              Explore Architecture Stream
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <div data-aos="fade-right" data-aos-duration="800">
          <p className="f-dm mb-4 text-[.72rem] font-medium tracking-[.32em] text-[#C9922A] uppercase">
            The Challenge
          </p>
          <h2 className="f-play mb-9 text-3xl font-bold text-[#4A0E0E] md:text-[2.5rem]">
            What&apos;s Broken in Design Coaching
          </h2>
          <div className="space-y-4">
            {[
              "Coaching factories dominate, high fees, low mentorship, zero personal attention.",
              "Students rely on imitation instead of developing genuine creative voice.",
              "Real design thinking exposure is completely absent from most prep programs.",
              `No emotional or career guidance, students are reduced to "draw and score."`,
            ].map((point, index) => (
              <div
                key={point}
                data-aos="fade-right"
                data-aos-delay={index * 80}
                className="prob-card border-l-[3px] border-[#C9922A] bg-[#FDF6EC] py-5 pl-6"
              >
                <span className="f-corm mr-3 text-xl text-[#C9922A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="f-dm text-[.93rem] leading-relaxed font-light text-[#2A1A1A]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="800">
          <p className="f-dm mb-4 text-[.72rem] font-medium tracking-[.32em] text-[#C9922A] uppercase">
            Our Solution
          </p>
          <h2 className="f-play mb-9 text-3xl font-bold text-[#4A0E0E] md:text-[2.5rem]">
            The Dezine Acharya Difference
          </h2>
          {[
            {
              icon: Users,
              title: "Mentorship, Not Teaching",
              desc: "A team of mentors, not a single figure, each bringing specialised domain expertise and personalised creative guidance.",
            },
            {
              icon: Brain,
              title: "Think, Don't Rote",
              desc: "A curriculum built on design thinking, analytical reasoning, and original creativity, not repetitive drills.",
            },
            {
              icon: Wallet,
              title: "Affordable & Transparent",
              desc: "We reject the big-institute model. No inflated fees, no middlemen, just honest mentorship at fair cost.",
            },
            {
              icon: Sparkles,
              title: "Community-Driven Growth",
              desc: "Peer feedback, collaborative critique, and shared growth across multiple learning platforms.",
            },
            {
              icon: Wifi,
              title: "Always Accessible",
              desc: "YouTube, Instagram and live communities, design education without walls or gatekeeping.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className={`sol-row -mx-3 flex items-start gap-4 px-3 py-5 ${index < 4 ? "border-b border-[#f0e8e0]" : ""}`}
            >
              <span className="sol-icon mt-0.5 shrink-0 text-2xl text-[#C9922A]">
                <item.icon size={22} strokeWidth={2} />
              </span>
              <div>
                <div className="f-dm mb-1 text-[.93rem] font-semibold text-[#6B1A1A]">
                  {item.title}
                </div>
                <div className="f-dm text-[.88rem] leading-relaxed font-light text-[#8A6A5A]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-gradient-to-br from-[#4A0E0E] to-[#6B1A1A] px-6 py-24 md:px-10"
    >
      <div
        className="float-anim pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full border border-[#C9922A]/12"
        style={{ animationDelay: "1s" }}
      />
      <div className="pointer-events-none absolute -bottom-16 left-[8%] h-64 w-64 rounded-full border border-[#C9922A]/8" />

      <div
        className="relative z-10 mx-auto max-w-[900px] text-center"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        <div className="mb-10 flex flex-wrap justify-center gap-6">
          <div
            className="vm-card max-w-[380px] border border-[#C9922A]/25 bg-white/8 px-8 py-6 text-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="mb-3 flex items-center gap-2">
              <Eye size={16} className="text-[#C9922A]" />
              <span className="f-dm text-[.68rem] tracking-[.3em] text-[#C9922A] uppercase">
                Our Vision
              </span>
            </div>
            <p className="f-corm text-[1.15rem] leading-relaxed italic text-white/85">
              To democratize design education in India, making quality
              mentorship accessible, inspiring, and greed-free.
            </p>
          </div>
          <div
            className="vm-card max-w-[380px] border border-[#C9922A]/25 bg-white/8 px-8 py-6 text-left"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="mb-3 flex items-center gap-2">
              <Target size={16} className="text-[#C9922A]" />
              <span className="f-dm text-[.68rem] tracking-[.3em] text-[#C9922A] uppercase">
                Our Mission
              </span>
            </div>
            <p className="f-corm text-[1.15rem] leading-relaxed italic text-white/85">
              To guide 1 lakh design aspirants through a human-centered,
              experience-driven model where design is{" "}
              <em className="not-italic text-[#E8B84B]">discovered</em>, not
              taught.
            </p>
          </div>
        </div>
        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="https://www.instagram.com/dezine_acharya"
            target="_blank"
            rel="noopener noreferrer"
            className="f-dm border border-white/20 bg-white/10 px-8 py-3.5 text-[.8rem] tracking-[.15em] text-white uppercase transition-all duration-300 hover:bg-white/20"
          >
            Follow on Instagram
          </a>
          <a
            href="#contact"
            className="f-dm bg-[#C9922A] px-8 py-3.5 text-[.8rem] font-semibold tracking-[.15em] text-[#4A0E0E] uppercase transition-all duration-300 hover:bg-[#E8B84B]"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
