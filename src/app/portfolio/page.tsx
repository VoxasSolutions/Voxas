import type { Metadata } from "next";
import { projects } from "@/lib/data/portfolio";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CTASection } from "@/components/shared/cta-section";
import { PortfolioClient } from "@/components/portfolio/portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See how we've helped businesses grow online. Featured case studies including Krishna Real Estate Agency and Lisette Clinic — complete digital overhauls that drive growth.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper
        label="Our Work"
        heading="Projects that deliver results"
        subheading="We don't just build websites — we build growth engines. Here's proof."
        centered
        headingLevel="h1"
        className="pt-16 md:pt-24"
      >
        <div />
      </SectionWrapper>

      {/* Interactive Case Studies showcase */}
      <section className="pb-20">
        <PortfolioClient projects={projects} />
      </section>

      <CTASection />
    </>
  );
}
