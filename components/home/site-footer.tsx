import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-[#3A0A0A] px-3 pt-16 pb-8 text-white md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="shimmer-bar mb-14 h-[2px] w-full rounded-full opacity-60" />
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-10">
          <div data-aos="fade-up">
            <div className="bg-linear-to-r w-full rounded from-white to-white/20 p-2">
              <Image
                src="/logo-new.webp"
                alt="Dezine Acharya"
                width={140}
                height={44}
                className="relative top-1 h-[75px] w-[170px] scale-[1.6] object-contain"
              />
            </div>
            <p className="f-dm mb-6 max-w-[290px] text-[.88rem] leading-[1.9] font-light text-white/65">
              A team-driven mentorship platform guiding aspirants for NID,
              NIFT, UCEED, NATA &amp; CEED where design is discovered, not
              drilled.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/dezine_acharya"
                target="_blank"
                rel="noopener noreferrer"
                className="f-dm border border-[#C9922A]/50 px-4 py-2 text-[.7rem] tracking-[.12em] text-[#C9922A] uppercase transition-all duration-300 hover:bg-[#C9922A] hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/918860615795"
                target="_blank"
                rel="noopener noreferrer"
                className="f-dm border border-[#25D366]/45 px-4 py-2 text-[.7rem] tracking-[.12em] text-[#25D366] uppercase transition-all duration-300 hover:bg-[#25D366] hover:text-white"
              >
                WhatsApp
              </a>
              <a
                href="https://www.youtube.com/@dezineacharya"
                target="_blank"
                rel="noopener noreferrer"
                className="f-dm border border-white/20 px-4 py-2 text-[.7rem] tracking-[.12em] text-white/60 uppercase transition-all duration-300 hover:border-white/50 hover:text-white"
              >
                YouTube
              </a>
            </div>
          </div>

          <FooterColumn
            title="Design"
            links={[
              { label: "NID Preparation", href: "#courses" },
              { label: "UCEED Preparation", href: "#courses" },
              { label: "CEED Preparation", href: "#courses" },
            ]}
            delay={80}
          />
          <FooterColumn
            title="Fashion & Arch"
            links={[
              { label: "NIFT Preparation", href: "#courses" },
              { label: "NATA Preparation", href: "#courses" },
              { label: "JEE B.Arch Prep", href: "#courses" },
            ]}
            delay={160}
          />
          <FooterColumn
            title="Connect"
            links={[
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
            ]}
            delay={240}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <span className="f-dm text-[.76rem] font-light text-white/45">
            Copyright 2025 Dezine Acharya. All rights reserved.
          </span>
          <span className="f-corm text-[.95rem] italic text-[#C9922A] opacity-80">
            Design is discovered, not drilled.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  delay,
}: {
  title: string;
  links: { label: string; href: string }[];
  delay: number;
}) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <p className="f-dm mb-6 border-b border-[#C9922A]/18 pb-3 text-[.7rem] tracking-[.28em] text-[#C9922A] uppercase">
        {title}
      </p>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="ft-link f-dm mb-4 block text-[.87rem] font-light text-white/65 transition-colors duration-200 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
