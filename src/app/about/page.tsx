import type { Metadata } from "next";
import {
  Target,
  Code2,
  Zap,
  TrendingUp,
  MessageSquare,
  Handshake,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CTASection } from "@/components/shared/cta-section";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Voxas — our mission to help local businesses grow online through high-quality websites, SEO, and digital experiences.",
};

const values = [
  {
    icon: Target,
    title: "Lead-Focused Approach",
    description:
      "Every design decision is driven by one goal: generating leads and customers for your business. We don't build websites for vanity — we build for results.",
  },
  {
    icon: Code2,
    title: "Modern Development",
    description:
      "We use cutting-edge technologies like Next.js, React, and TypeScript to build websites that are fast, secure, and future-proof.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Our websites load in under 2 seconds. Speed isn't a feature — it's a requirement. Faster sites rank higher and convert more visitors.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-First Mindset",
    description:
      "We engineer every user journey to maximize conversions. From strategic CTA placement to intuitive navigation — every element earns its place.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "No jargon, no surprises. We keep you informed at every stage with clear updates, honest timelines, and straightforward pricing.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We don't disappear after launch. We're invested in your growth with ongoing support, maintenance, and strategic guidance.",
  },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "95+", label: "Lighthouse Score" },
  { value: "<2s", label: "Avg Load Time" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      {/* Mission Hero */}
      <SectionWrapper className="pt-16 md:pt-24">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.03] border border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-sm">
              <img
                src="/file_00000000bbec720684b54a85089de096.png"
                alt="Voxas Icon"
                className="h-9 w-auto object-contain"
              />
            </div>
            <span
              className="mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
              style={{
                borderColor: "rgba(226, 198, 159, 0.15)",
                background: "rgba(226, 198, 159, 0.03)",
              }}
            >
              About Voxas
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-wide text-on-surface md:text-5xl lg:text-6xl">
              Helping businesses{" "}
              <span className="gradient-text">grow online</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
              Most businesses lose customers because they have outdated websites
              or no website at all. We help businesses establish a professional
              online presence that converts visitors into leads and customers.
            </p>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Stats */}
      <section
        className="border-y py-12"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-on-surface md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-on-surface-variant">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Voxas */}
      <SectionWrapper
        label="Why Voxas"
        heading="What sets us apart"
        subheading="We combine technical excellence with a genuine commitment to your business growth."
        centered
      >
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <StaggerItem key={value.title}>
              <div
                className="flex h-full flex-col rounded-xl p-8 transition-all duration-300 hover:border-white/10"
                style={{
                  background: "rgba(17,24,39,0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{
                    background:
                      i % 3 === 0
                        ? "rgba(124,58,237,0.1)"
                        : i % 3 === 1
                          ? "rgba(76,215,246,0.1)"
                          : "rgba(255,183,132,0.1)",
                    border:
                      i % 3 === 0
                        ? "1px solid rgba(124,58,237,0.15)"
                        : i % 3 === 1
                          ? "1px solid rgba(76,215,246,0.15)"
                          : "1px solid rgba(255,183,132,0.15)",
                  }}
                >
                  <value.icon
                    size={22}
                    className={
                      i % 3 === 0
                        ? "text-primary"
                        : i % 3 === 1
                          ? "text-secondary"
                          : "text-tertiary"
                    }
                  />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-on-surface">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      {/* Approach */}
      <SectionWrapper>
        <AnimatedSection>
          <div
            className="rounded-2xl p-12 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(9,9,11,0.6) 50%, rgba(76,215,246,0.05) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
                Our Approach
              </h2>
              <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
                We believe that a great website is more than just beautiful
                design — it&apos;s a business tool that works 24/7 to attract,
                engage, and convert your ideal customers. Every project starts
                with understanding your business goals and ends with measurable
                results.
              </p>
              <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                We specialize in working with local businesses, real estate
                agencies, consultants, and service providers who need a
                professional online presence that generates real leads and
                revenue.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
