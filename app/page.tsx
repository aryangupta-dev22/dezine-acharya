import { AosProvider } from "@/components/home/aos-provider";
import { HeroSection } from "@/components/home/hero-section";
import { HomePageStyles } from "@/components/home/home-page-styles";
import {
  AboutSection,
  CoursesSection,
  DifferentiatorStrip,
  MissionSection,
} from "@/components/home/sections-primary";
import {
  CommunitySection,
  ContactSection,
  ParentsSection,
  TeamSection,
} from "@/components/home/sections-secondary";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { WhatsAppFab } from "@/components/home/whatsapp-fab";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-[#2A1A1A]">
      <AosProvider />
      <HomePageStyles />
      <WhatsAppFab />
      <SiteHeader />
      <HeroSection />
      <DifferentiatorStrip />
      <CoursesSection />
      <AboutSection />
      <MissionSection />
      <TeamSection />
      <ParentsSection />
      <CommunitySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
