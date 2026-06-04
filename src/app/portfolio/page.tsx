import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { projects } from "@/lib/data/portfolio";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CTASection } from "@/components/shared/cta-section";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See how we've helped businesses grow online. Featured case study: Krishna Real Estate Agency — a complete digital overhaul with 150% increase in leads.",
};

export default function PortfolioPage() {
  const featured = projects.find((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <SectionWrapper
        label="Our Work"
        heading="Projects that deliver results"
        subheading="We don't just build websites — we build growth engines. Here's proof."
        centered
        className="pt-16 md:pt-24"
      >
        <div />
      </SectionWrapper>

      {/* Featured Case Study */}
      {featured && (
        <section className="pb-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <AnimatedSection>
              {/* Project Header */}
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(17,24,39,0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Browser Mockup */}
                <div
                  className="overflow-hidden"
                  style={{ background: "#1e1e1e" }}
                >
                  <div
                    className="flex items-center gap-2 px-4"
                    style={{
                      height: "36px",
                      background: "#2d2d2d",
                      borderBottom: "1px solid rgba(0,0,0,0.5)",
                    }}
                  >
                    <div className="h-3 w-3 rounded-full" style={{ background: "#ff5f56" }} />
                    <div className="h-3 w-3 rounded-full" style={{ background: "#ffbd2e" }} />
                    <div className="h-3 w-3 rounded-full" style={{ background: "#27c93f" }} />
                    <div
                      className="mx-auto rounded px-4 py-1 font-mono text-[10px] tracking-widest"
                      style={{
                        background: "#1e1e1e",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {featured.url?.replace("https://", "")}
                    </div>
                  </div>
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      aspectRatio: "16/7",
                      background:
                        "linear-gradient(135deg, rgba(17,24,39,0.9), rgba(9,9,11,0.95))",
                    }}
                  >
                    <div className="p-8 text-center md:p-16">
                      <span
                        className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary"
                        style={{
                          background: "rgba(124,58,237,0.1)",
                          border: "1px solid rgba(124,58,237,0.2)",
                        }}
                      >
                        {featured.category}
                      </span>
                      <h2 className="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
                        {featured.title}
                      </h2>
                      <p className="mx-auto mt-4 max-w-2xl text-base text-on-surface-variant">
                        {featured.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics Bar */}
                <div
                  className="grid grid-cols-2 gap-px md:grid-cols-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {featured.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-6 text-center"
                      style={{ background: "rgba(17,24,39,0.6)" }}
                    >
                      <div className="text-2xl font-bold text-on-surface">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-on-surface-variant">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Case Study Details */}
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              <AnimatedSection delay={0.1}>
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-tertiary">
                    The Challenge
                  </h3>
                  <p className="text-base leading-relaxed text-on-surface-variant">
                    {featured.challenge}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                    Our Solution
                  </h3>
                  <p className="text-base leading-relaxed text-on-surface-variant">
                    {featured.solution}
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Results */}
            <AnimatedSection delay={0.3}>
              <div className="mt-16">
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
                  Results Delivered
                </h3>
                <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {featured.results.map((result) => (
                    <StaggerItem key={result}>
                      <div className="flex items-start gap-3 rounded-lg p-4" style={{
                        background: "rgba(17,24,39,0.3)",
                        border: "1px solid rgba(255,255,255,0.04)",
                      }}>
                        <CheckCircle
                          size={18}
                          className="mt-0.5 shrink-0 text-green-400"
                        />
                        <span className="text-sm text-on-surface-variant">
                          {result}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>

            {/* Tech Stack */}
            <AnimatedSection delay={0.4}>
              <div className="mt-12">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {featured.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full px-4 py-2 text-sm text-on-surface-variant"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Coming Soon */}
            <AnimatedSection delay={0.5}>
              <div className="mt-24">
                <h3 className="mb-8 text-center text-2xl font-semibold tracking-tight text-on-surface">
                  More Projects Coming Soon
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex aspect-[4/3] items-center justify-center rounded-xl"
                      style={{
                        background: "rgba(17,24,39,0.3)",
                        border: "1px dashed rgba(255,255,255,0.08)",
                      }}
                    >
                      <span
                        className="rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-on-surface-variant/50"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        Coming Soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
