import { AboutSection } from "./sections/about-section";
import { ContactSection } from "./sections/info/contact-section";
import { CoreServicesSection } from "./sections/core-services-section";
import { FaqSection } from "./sections/info/faq-section";
import { HeroSection } from "./sections/hero/hero-section";
import { ProjectsSection } from "./sections/projects/projects-section";
// DESVINCULADO UX 2026-10-07 - no borrar, solo fuera de la home para reducir texto:
// import { BenefitsSection } from "./sections/info/benefits-section";
// import { ProcessSection } from "./sections/info/process-section";
// import { ServicesSection } from "./sections/info/services-section";
import { SiteHeader } from "./shared/site-header";
import { WhatsappFloat } from "./shared/whatsapp-float";
import Footer from "./shared/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader />
      <main id="inicio">
        <HeroSection />
        <AboutSection />
        <CoreServicesSection />
        {/* DESVINCULADO UX 2026-10-07: <ServicesSection /> duplicaba a CoreServices */}
        {/* DESVINCULADO UX 2026-10-07: <BenefitsSection /> repetía Hero + About */}
        <ProjectsSection />
        {/* DESVINCULADO UX 2026-10-07: <ProcessSection /> resumido en FAQ */}
        <FaqSection />
        <ContactSection />
      </main>
      <WhatsappFloat />
      <Footer />
    </div>
  );
}
