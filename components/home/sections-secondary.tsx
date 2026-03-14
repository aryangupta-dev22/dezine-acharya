import Image from "next/image";
import { Mail, MapPin, Phone, Sparkles, Users } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="bg-white px-3 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center" data-aos="fade-up">
          <p className="f-dm mb-4 text-[.72rem] font-medium tracking-[.32em] text-[#C9922A] uppercase">
            The Minds Behind
          </p>
          <h2 className="f-play mb-5 text-4xl font-bold text-[#4A0E0E] md:text-5xl">
            Our Expert Team
          </h2>
          <p className="f-dm mx-auto max-w-[560px] text-[.97rem] leading-relaxed font-light text-[#8A6A5A]">
            We are not one person, we are a collective of experienced design
            educators, each bringing deep domain expertise and a shared belief
            in mentorship over mass-coaching.
          </p>
        </div>

        <div className="mb-10" data-aos="fade-up" data-aos-delay="50">
          <div className="grid grid-cols-1 gap-0 overflow-hidden bg-gradient-to-br from-[#4A0E0E] to-[#6B1A1A] md:grid-cols-2">
            <div className="relative flex min-h-[320px] items-end justify-center bg-[#3A0A0A] md:min-h-[400px]">
              <div className="absolute bottom-0 left-1/2 h-[68%] w-[80%] -translate-x-1/2 rounded bg-[#4A0E0E]/60" />
              <Image
                src="/avatar.png"
                alt="Amit Singh"
                width={280}
                height={450}
                className="float-anim relative z-10 w-full max-w-[280px] object-contain drop-shadow-2xl"
              />
              <div className="absolute top-5 left-5">
                <span className="diff-badge f-dm border border-[#C9922A]/50 px-4 py-1.5 text-[.65rem] tracking-[.18em] text-[#E8B84B] uppercase">
                  Lead Mentor
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-5 md:p-12">
              <p className="f-dm mb-4 text-[.68rem] tracking-[.3em] text-[#C9922A] uppercase opacity-80">
                Founder &amp; Lead Mentor
              </p>
              <h3 className="f-play mb-1 text-[2.2rem] font-bold text-white">
                Amit Singh
              </h3>
              <p className="f-corm mb-6 text-[2rem] italic text-[#C9922A]">
                The Modern Dronacharya for Design Thinkers
              </p>
              <p className="f-dm mb-5 text-[.93rem] leading-[1.9] font-light text-white/70">
                An alumnus of the{" "}
                <strong className="font-semibold text-white/90">
                  National Institute of Design (NID)
                </strong>
                , Amit brings over{" "}
                <strong className="font-semibold text-white/90">
                  12+ years
                </strong>{" "}
                of design mentoring experience. His philosophy-driven approach
                has transformed how hundreds of students perceive creativity,
                from exam panic to genuine design vision.
              </p>
              <p className="f-dm mb-8 text-[.93rem] leading-[1.9] font-light text-white/70">
                At Dezine Acharya, Amit leads with purpose, building not just a
                coaching brand, but a{" "}
                <strong className="font-semibold text-white/90">
                  design movement
                </strong>{" "}
                where a capable team walks alongside every aspirant.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "NID Alumnus",
                  "12+ Yrs Mentoring",
                  "Philosophy-Driven",
                  "All Design Exams",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="f-dm border border-[#C9922A]/35 bg-[#3A0A0A] px-4 py-2 text-[.72rem] tracking-[.12em] text-[#C9922A] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
              bio: "Specialist in UCEED and CEED preparation, focuses on analytical reasoning, visualization, and creative problem-solving.",
            },
          ].map((member, index) => (
            <div
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="team-card overflow-hidden border border-[#f0e0d0] bg-white"
            >
              <div className="team-avatar relative flex h-[160px] items-end justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6EC] to-[#f5e6d0]" />
                <div className="absolute top-4 right-4">
                  <span className="f-dm border border-[#C9922A]/50 bg-white/70 px-3 py-1 text-[.6rem] tracking-[.14em] text-[#6B1A1A] uppercase">
                    {member.stream}
                  </span>
                </div>
                <div className="relative z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#C9922A]/30 bg-[#6B1A1A]/10">
                  <Users
                    size={36}
                    strokeWidth={1.4}
                    className="text-[#6B1A1A]/40"
                  />
                </div>
              </div>
              <div className="p-7">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h4 className="f-play text-[1.2rem] font-bold text-[#4A0E0E]">
                      {member.name}
                    </h4>
                    <p className="f-corm text-[1rem] italic text-[#C9922A]">
                      {member.role}
                    </p>
                  </div>
                  <span className="f-dm ml-2 shrink-0 border border-[#C9922A]/30 bg-[#FDF6EC] px-2.5 py-1 text-[.68rem] tracking-[.1em] text-[#6B1A1A] uppercase">
                    {member.exp}
                  </span>
                </div>
                <p className="f-dm mb-5 text-[.88rem] leading-relaxed font-light text-[#8A6A5A]">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="f-dm border border-[#C9922A]/20 bg-[#FDF6EC] px-3 py-1 text-[.68rem] tracking-[.1em] text-[#6B1A1A] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ParentsSection() {
  return (
    <section id="parents" className="bg-[#FDF6EC] px-4 py-24 md:px-10">
      <div className="mb-14 text-center" data-aos="fade-up">
        <p className="f-dm mb-4 text-[.72rem] font-medium tracking-[.32em] text-[#C9922A] uppercase">
          A Message for Parents
        </p>
        <h2 className="f-play text-4xl font-bold text-[#4A0E0E] md:text-5xl">
          Dear Parents,
        </h2>
      </div>
      <div
        className="mx-auto max-w-[820px]"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="900"
      >
        <div className="border border-[#f0e0d0] bg-white px-4 py-12 shadow-[0_8px_48px_rgba(0,0,0,.07)] md:px-16">
          <div className="mb-2 flex items-start justify-between">
            <Image
              src="/logo-new.webp"
              alt="Dezine Acharya"
              width={120}
              height={52}
              className="w-auto object-contain"
            />
          </div>
          <hr className="letter-rule mt-2 mb-9" />
          <p className="f-dm mb-6 text-[1rem] font-medium text-[#2A1A1A]">
            Dear Parents,
          </p>
          <div className="f-dm space-y-5 text-[.95rem] leading-[1.95] font-light text-[#2A1A1A]">
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
              <strong className="font-bold">team of dedicated mentors</strong>,
              each expert in their stream, providing guided, personalised
              career support for premier institutes such as{" "}
              <strong className="font-bold">
                NID, NIFT, UCEED, NATA, CEED
              </strong>{" "}
              and leading architecture colleges.
            </p>
            <p>
              Unlike the coaching giants in the JEE/NEET space that prioritize
              volume over value, our approach is grounded in{" "}
              <strong className="font-bold">one-on-one creative guidance</strong>.
              We help students discover their strengths, develop their creative
              voice, and make confident career decisions aligned with their true
              potential, not just exam scores.
            </p>
            <p>
              We understand that every parent wants clarity, security, and the
              right future for their child. With our{" "}
              <strong className="font-bold">team of experienced faculty</strong>{" "}
              and a transparent, affordable fee structure, we ensure students
              move forward with confidence, purpose, and a clear design vision.
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
          <p className="f-dm text-center text-[.78rem] text-[#8A6A5A]">
            Plot No. 101, First Floor Above Levi&apos;s Showroom, Sector 7,
            Dwarka, Delhi - 110777
          </p>
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section id="community" className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center" data-aos="fade-up">
          <p className="f-dm mb-4 text-[.72rem] font-medium tracking-[.32em] text-[#C9922A] uppercase">
            Student Voices
          </p>
          <h2 className="f-play text-3xl font-bold text-[#4A0E0E] md:text-[2.8rem]">
            What Our Aspirants Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: "Aanya Sharma",
              exam: "NID Aspirant",
              text: "Dezine Acharya changed how I see design. It's not a coaching factory, it's a space where you actually learn to think. Having multiple mentors who each understood their domain was a game-changer.",
            },
            {
              name: "Rohan Mehta",
              exam: "UCEED Qualifier",
              text: "The mentorship here is personal and real. My faculty pushed my creative limits while making sure I stayed true to my own vision. The team's collective expertise covers every angle of preparation.",
            },
            {
              name: "Priya Nair",
              exam: "NIFT Aspirant",
              text: "The community aspect is incredible. Getting peer feedback and learning together made the journey less lonely. The fashion stream mentor understood exactly what NIFT looks for, it showed.",
            },
          ].map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="t-card relative border border-[#f0e0d0] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="f-corm mt-10 mb-6 text-[1.1rem] leading-relaxed italic text-[#2A1A1A]">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between border-t border-[#f0e0d0] pt-4">
                <span className="f-dm text-[.88rem] font-semibold text-[#6B1A1A]">
                  {testimonial.name}
                </span>
                <span className="f-dm text-[.7rem] tracking-[.14em] text-[#C9922A] uppercase">
                  {testimonial.exam}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#FDF6EC] px-6 py-24 text-center md:px-10"
    >
      <div className="mx-auto max-w-[700px]" data-aos="fade-up">
        <div className="mb-9 flex items-center justify-center gap-4">
          <div className="h-px max-w-[120px] flex-1 bg-gradient-to-r from-transparent to-[#C9922A]" />
          <span className="f-corm text-2xl text-[#C9922A]">
            <Sparkles size={20} />
          </span>
          <div className="h-px max-w-[120px] flex-1 bg-gradient-to-l from-transparent to-[#C9922A]" />
        </div>
        <h2 className="f-play mb-6 text-4xl font-bold text-[#4A0E0E] md:text-5xl">
          Ready to Begin Your Design Journey?
        </h2>
        <p className="f-dm mb-10 text-[.97rem] leading-relaxed font-light text-[#8A6A5A]">
          Join a growing community of design aspirants who believe in{" "}
          <span className="font-medium text-[#6B1A1A]">thinking over drilling</span>,{" "}
          <span className="font-medium text-[#6B1A1A]">mentorship over marking</span>,
          and design as a genuinely transformative pursuit. Our team is ready
          to guide you.
        </p>
        <div
          className="mb-12 flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <a
            href="https://wa.me/918860615795?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="f-dm bg-[#6B1A1A] px-10 py-4 text-[.82rem] tracking-[.16em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0E0E] hover:shadow-xl"
          >
            Enroll Now
          </a>
          <a
            href="https://www.instagram.com/dezine_acharya"
            target="_blank"
            rel="noopener noreferrer"
            className="f-dm border border-[#6B1A1A] px-10 py-4 text-[.82rem] tracking-[.16em] text-[#6B1A1A] uppercase transition-all duration-300 hover:bg-[#6B1A1A] hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@dezineacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="f-dm border border-[#C9922A] px-10 py-4 text-[.82rem] tracking-[.16em] text-[#C9922A] uppercase transition-all duration-300 hover:bg-[#C9922A] hover:text-white"
          >
            YouTube
          </a>
        </div>
        <div
          className="contact-panel mx-auto max-w-[460px] px-8 py-6 text-left"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="contact-row">
            <span className="contact-ic">
              <Phone size={14} />
            </span>
            <a href="tel:+918860615795" className="contact-link f-dm text-[.93rem]">
              8860615795
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-ic">
              <Mail size={14} />
            </span>
            <a
              href="mailto:sales@dezineacharya.com"
              className="contact-link f-dm text-[.93rem]"
            >
              sales@dezineacharya.com
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-ic">
              <MapPin size={14} />
            </span>
            <span className="f-dm text-[.88rem] leading-relaxed font-light text-[#8A6A5A]">
              Plot No. 101, First Floor Above Levi&apos;s Showroom, Sector 7,
              Dwarka, Delhi - 110777
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
