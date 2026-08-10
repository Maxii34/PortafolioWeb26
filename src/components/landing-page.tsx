import { AboutSection } from "./sections/about-section";
import { BenefitsSection } from "./sections/info/benefits-section";
import { ContactSection } from "./sections/info/contact-section";
import { FaqSection } from "./sections/info/faq-section";
import { HeroSection } from "./sections/hero/hero-section";
import { ProcessSection } from "./sections/info/process-section";
import { ProjectsSection } from "./sections/projects/projects-section";
import { ServicesSection } from "./sections/info/services-section";
import { SiteHeader } from "./shared/site-header";
import { WhatsappFloat } from "./shared/whatsapp-float";
import Footer from "./shared/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader />
      <main id="inicio">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProjectsSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <WhatsappFloat />
      <Footer />
    </div>
  );
}
