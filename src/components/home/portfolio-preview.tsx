import Link from "next/link";
import { projects } from "@/lib/data/portfolio";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection } from "@/components/shared/animated-section";

export function PortfolioPreview() {
  const featured = projects.find((p) => p.featured);
  if (!featured) return null;

  return (
    <SectionWrapper
      id="portfolio"
      className="section-divider"
    >
      <AnimatedSection>
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span
              className="mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Featured Work
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-on-surface md:text-4xl">
              Featured Case Study
            </h2>
            <p className="mt-3 max-w-md text-base text-on-surface-variant">
              Real estate platform designed for maximum lead generation and
              visual impact.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-on-surface transition-all hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            View All Case Studies
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Link href="/portfolio" className="group block">
          <div
            className="glass-panel overflow-hidden rounded-2xl p-1"
          >
            {/* Browser Frame */}
            <div
              className="overflow-hidden rounded-xl"
              style={{
                background: "#1e1e1e",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Title Bar */}
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
                  style={{ background: "#1e1e1e", color: "rgba(255,255,255,0.5)" }}
                >
                  {featured.url?.replace("https://", "")}
                </div>
              </div>

              {/* Content Area */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9", background: "#0a0a0a" }}
              >
                {/* Simulated Real Estate Website Preview */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Simulated Nav */}
                  <div className="flex items-center justify-between border-b border-white/5 px-8 py-3" style={{ background: "rgba(17,24,39,0.8)" }}>
                    <span className="text-sm font-bold text-white">Krishna Real Estate</span>
                    <div className="hidden gap-6 sm:flex">
                      <span className="text-xs text-white/60">Home</span>
                      <span className="text-xs text-white/60">Services</span>
                      <span className="text-xs text-white/60">Properties</span>
                      <span className="text-xs text-white/60">About Us</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded bg-primary-container px-3 py-1 text-xs text-white">Book Viewing</span>
                    </div>
                  </div>
                  {/* Hero Area */}
                  <div className="flex flex-1 items-center px-8 py-6" style={{
                    background: "linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(9,9,11,0.95) 100%)"
                  }}>
                    <div className="max-w-md">
                      <span className="mb-2 inline-block rounded-full bg-primary-container/20 px-3 py-1 text-[10px] font-medium text-primary">
                        Navi Mumbai&apos;s Premier Consultancy
                      </span>
                      <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">
                        Find the Right Property Solutions with Trusted Experts
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/50">
                        Residential • Commercial • Industrial • Agricultural • Rental
                      </p>
                    </div>
                    <div className="ml-auto hidden max-w-xs lg:block">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <p className="mb-3 text-sm font-medium text-white">Book a Free Consultation</p>
                        <div className="mb-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/40">Enter your name</div>
                        <div className="mb-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/40">Phone</div>
                        <div className="rounded bg-primary-container px-3 py-2 text-center text-xs font-medium text-white">Request Callback</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(9,9,11,0.9) 0%, transparent 50%)",
                  }}
                />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6 md:p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {featured.title}
                    </h3>
                    <p className="mt-1 max-w-sm text-sm text-white/70">
                      {featured.description.slice(0, 100)}...
                    </p>
                  </div>
                  <div
                    className="glass-panel hidden gap-6 rounded-lg p-4 md:flex"
                  >
                    {featured.metrics.slice(0, 2).map((metric, i) => (
                      <div key={metric.label}>
                        <div
                          className={`mb-1 text-xs font-semibold uppercase tracking-widest ${
                            i === 0 ? "text-secondary" : "text-primary"
                          }`}
                        >
                          {metric.label}
                        </div>
                        <div className="text-xl font-semibold text-white">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </AnimatedSection>
    </SectionWrapper>
  );
}
