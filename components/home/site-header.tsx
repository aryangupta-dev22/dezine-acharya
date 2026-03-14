"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const NAV_LINKS = [
  ["#about", "About"],
  ["#courses", "Courses"],
  ["#team", "Our Team"],
  ["#parents", "For Parents"],
  ["#community", "Community"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-3 left-4 right-4 z-50 flex h-[60px] items-center justify-between rounded-xl border-[#f0e0d0] bg-white/95 px-4 backdrop-blur-md transition-all duration-300 md:h-[68px] md:px-10 ${scrolled ? "shadow-lg" : "shadow-[0_4px_20px_rgba(0,0,0,0.25)]"}`}
      >
        <a href="#hero">
          <Image
            src="/logo-new.webp"
            alt="Dezine Acharya"
            width={90}
            height={44}
            className="relative top-1 w-[130px] object-contain"
            priority
          />
        </a>
        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="nav-link f-dm text-[13px] font-medium tracking-[.14em] text-[#6B1A1A] uppercase transition-colors duration-200 hover:text-[#C9922A]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="f-dm bg-[#6B1A1A] px-6 py-2.5 text-[.75rem] tracking-[.15em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0E0E] hover:shadow-lg"
          >
            Enroll Now
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex cursor-pointer flex-col gap-[5px] border-0 bg-transparent p-1 lg:hidden"
          aria-label="Menu"
        >
          {[0, 1, 2].map((item) => (
            <span key={item} className="block h-0.5 w-6 bg-[#6B1A1A]" />
          ))}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[200] flex-col items-center justify-center gap-8 bg-white px-10 ${menuOpen ? "flex" : "hidden"}`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 cursor-pointer border-0 bg-transparent text-2xl text-[#6B1A1A]"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        {NAV_LINKS.map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="f-dm text-xl tracking-[.12em] text-[#6B1A1A] uppercase"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="f-dm bg-[#6B1A1A] px-10 py-3 text-[.85rem] tracking-[.15em] text-white uppercase"
        >
          Enroll Now
        </a>
      </div>
    </>
  );
}
