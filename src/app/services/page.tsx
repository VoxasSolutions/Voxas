import type { Metadata } from "next";
import { ArrowUpRight, Check, Search, Star, MessageSquare } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CTASection } from "@/components/shared/cta-section";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full suite of digital services — website design, development, SEO, landing pages, brand identity, and more. Everything you need to grow online.",
};

export default function ServicesPage() {
  // Find services by ID for precise layout binding
  const design = services.find((s) => s.id === "website-design")!;
  const dev = services.find((s) => s.id === "website-development")!;
  const landing = services.find((s) => s.id === "landing-pages")!;
  
  const seo = services.find((s) => s.id === "seo-optimization")!;
  const gbp = services.find((s) => s.id === "google-business-profile")!;
  const brand = services.find((s) => s.id === "brand-identity")!;
  
  const whatsapp = services.find((s) => s.id === "whatsapp-integration")!;
  const chatbot = services.find((s) => s.id === "ai-chatbots")!;
  const maintenance = services.find((s) => s.id === "maintenance-support")!;

  return (
    <>
      {/* Hero */}
      <SectionWrapper
        label="Our Services"
        heading="Everything you need to grow online"
        subheading="From design to development, SEO to lead generation — we provide end-to-end digital solutions tailored for businesses that want results."
        centered
        className="pt-16 md:pt-24 pb-12"
      >
        <div />
      </SectionWrapper>

      {/* TRACK 1: Core Design & Engineering */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Track 01</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
              Core Design &amp; Engineering
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant max-w-xl">
              We design and build digital platforms focused on speed, aesthetic excellence, and customer conversion.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Website Design - Bento Card 1 */}
            <StaggerItem className="lg:col-span-1">
              <div className="bento-card flex h-full flex-col justify-between p-8">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <design.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-on-surface">{design.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                    {design.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 border-t border-white/[0.05] pt-6">
                  {design.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                      <Check size={14} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Website Development - Bento Card 2 (Wide) */}
            <StaggerItem className="lg:col-span-2">
              <div className="bento-card flex h-full flex-col justify-between p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 border border-secondary/20">
                      <dev.icon size={22} className="text-secondary" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-on-surface">{dev.title}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {dev.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center md:col-span-2 md:border-l md:border-white/[0.05] md:pl-8">
                    <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                      Engineering Stack
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {dev.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                          <Check size={14} className="text-secondary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 rounded-lg bg-white/[0.02] border border-white/[0.04] p-4 font-mono text-xs text-on-surface-variant/80 flex items-center justify-between">
                  <span>$ npx create-next-app@latest --typescript</span>
                  <span className="text-secondary">v15.0</span>
                </div>
              </div>
            </StaggerItem>

            {/* Landing Pages - Bento Card 3 (Full Width Horizontal) */}
            <StaggerItem className="lg:col-span-3">
              <div className="bento-card p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-tertiary/10 border border-tertiary/20">
                      <landing.icon size={22} className="text-tertiary" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-on-surface">{landing.title}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {landing.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center md:border-l md:border-white/[0.05] md:px-8">
                    <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-tertiary">Conversion Optimization</span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Every layout element, from visual hierarchies to copy length, is dynamically optimized to turn paid traffic and organic visitors into qualified customers.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center md:border-l md:border-white/[0.05] md:pl-8">
                    <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface">Features Included</span>
                    <ul className="grid grid-cols-2 gap-2.5">
                      {landing.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <Check size={12} className="text-tertiary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* TRACK 2: Search & Brand Visibility */}
      <section className="py-24 border-t border-white/[0.05] bg-white/[0.01]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Track 02</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
              Search &amp; Brand Visibility
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant max-w-xl">
              We rank your business higher in search engines and engineer a premium brand direction that builds instant trust.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {/* SEO Optimization - Alternating Column */}
            <AnimatedSection>
              <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <seo.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-on-surface">{seo.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                    {seo.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {seo.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 glass-panel rounded-2xl p-8" style={{ background: "rgba(17,24,39,0.3)" }}>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                    <span className="text-xs font-mono text-on-surface-variant/80">Search Query Index</span>
                    <span className="rounded bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-400">Live Status</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between rounded bg-white/[0.02] border border-white/[0.04] p-3 text-xs">
                      <span className="text-on-surface">1. Real Estate Agency Near Me</span>
                      <span className="font-semibold text-primary">#1 Rank</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-white/[0.02] border border-white/[0.04] p-3 text-xs">
                      <span className="text-on-surface">2. Luxury Builders Mumbai</span>
                      <span className="font-semibold text-primary">#1 Rank</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-white/[0.02] border border-white/[0.04] p-3 text-xs">
                      <span className="text-on-surface">3. Property Consultants Navi Mumbai</span>
                      <span className="font-semibold text-primary">#2 Rank</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Google Business Profile - Alternating Column (Reverse) */}
            <AnimatedSection>
              <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
                <div className="flex-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 border border-secondary/20">
                    <gbp.icon size={22} className="text-secondary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-on-surface">{gbp.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                    {gbp.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {gbp.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 glass-panel rounded-2xl p-8" style={{ background: "rgba(17,24,39,0.3)" }}>
                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-white">Krishna Real Estate Agency</h4>
                        <p className="text-[10px] text-on-surface-variant/80 mt-0.5">Real Estate Consultant in Navi Mumbai</p>
                      </div>
                      <span className="flex items-center gap-1 rounded bg-secondary/10 px-2 py-0.5 text-[10px] font-semibold text-secondary">
                        <Star size={10} fill="currentColor" /> Verified
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                      <span className="text-sm font-bold text-white">5.0</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={12} fill="#4cd7f6" className="text-secondary" />
                        ))}
                      </div>
                      <span className="text-[10px] text-on-surface-variant/80 ml-1">(120+ reviews)</span>
                    </div>
                    <div className="mt-4 border-t border-white/5 pt-4 grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="rounded border border-white/5 py-1.5 font-medium text-on-surface-variant">Call</div>
                      <div className="rounded border border-white/5 py-1.5 font-medium text-on-surface-variant">Directions</div>
                      <div className="rounded bg-secondary/10 text-secondary py-1.5 font-semibold">Website</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Brand Identity - Alternating Column */}
            <AnimatedSection>
              <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-tertiary/10 border border-tertiary/20">
                    <brand.icon size={22} className="text-tertiary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-on-surface">{brand.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                    {brand.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {brand.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                        <div className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 glass-panel rounded-2xl p-8" style={{ background: "rgba(17,24,39,0.3)" }}>
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-mono text-on-surface-variant/80">Brand Design Tokens</span>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full border border-white/10" style={{ background: "#15121b" }} />
                      <div className="h-10 w-10 rounded-full border border-white/10" style={{ background: "#7c3aed" }} />
                      <div className="h-10 w-10 rounded-full border border-white/10" style={{ background: "#4cd7f6" }} />
                      <div className="h-10 w-10 rounded-full border border-white/10" style={{ background: "#ffb784" }} />
                    </div>
                    <div className="mt-2 text-[10px] font-mono text-on-surface-variant/80">Typography Scale</div>
                    <div className="flex flex-col gap-1.5 font-sans">
                      <div className="text-lg font-bold text-white tracking-tight">Display Bold (Geist)</div>
                      <div className="text-sm font-medium text-white/80">Body Medium 14px</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRACK 3: Integrations & Automation */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-tertiary">Track 03</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
              Integrations &amp; Automation
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant max-w-xl">
              We connect your website to WhatsApp databases, engineer custom AI assistants, and maintain security over time.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* WhatsApp Integration - Hover Card */}
            <StaggerItem>
              <div className="bento-card group flex h-full flex-col justify-between p-8 transition-all hover:border-green-500/20">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-all">
                    <whatsapp.icon size={22} className="text-green-400" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-on-surface group-hover:text-green-400 transition-colors">
                    {whatsapp.title}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-on-surface-variant">
                    {whatsapp.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 border-t border-white/[0.05] pt-6">
                  {whatsapp.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs text-on-surface-variant">
                      <Check size={12} className="text-green-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* AI Chatbots - Hover Card */}
            <StaggerItem>
              <div className="bento-card group flex h-full flex-col justify-between p-8 transition-all hover:border-cyan-500/20">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
                    <chatbot.icon size={22} className="text-cyan-400" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-on-surface group-hover:text-cyan-400 transition-colors">
                    {chatbot.title}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-on-surface-variant">
                    {chatbot.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 border-t border-white/[0.05] pt-6">
                  {chatbot.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs text-on-surface-variant">
                      <Check size={12} className="text-cyan-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Maintenance & Support - Hover Card */}
            <StaggerItem>
              <div className="bento-card group flex h-full flex-col justify-between p-8 transition-all hover:border-purple-500/20">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                    <maintenance.icon size={22} className="text-purple-400" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-on-surface group-hover:text-purple-400 transition-colors">
                    {maintenance.title}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-on-surface-variant">
                    {maintenance.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 border-t border-white/[0.05] pt-6">
                  {maintenance.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs text-on-surface-variant">
                      <Check size={12} className="text-purple-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
