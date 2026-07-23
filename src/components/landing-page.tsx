import { AboutSection } from "./sections/about-section";
import { BenefitsSection } from "./sections/benefits-section";
import { ContactSection } from "./sections/contact-section";
import { FaqSection } from "./sections/faq-section";
import { HeroSection } from "./sections/hero-section";
import { ProcessSection } from "./sections/process-section";
import { ProjectsSection } from "./sections/projects-section";
import { ServicesSection } from "./sections/services-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { SiteHeader } from "./shared/site-header";
import { WhatsappFloat } from "./shared/whatsapp-float";
import Footer from "./shared/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#081826] text-white">
      <SiteHeader />
      <main id="inicio">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BenefitsSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <WhatsappFloat />
      <Footer />
    </div>
  );
}
