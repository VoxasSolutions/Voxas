import { Hero } from "@/components/home/hero";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { ProblemSection } from "@/components/home/problem-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { Testimonials } from "@/components/home/testimonials";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/shared/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ProblemSection />
      <ServicesPreview />
      <ProcessSection />
      <PortfolioPreview />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
