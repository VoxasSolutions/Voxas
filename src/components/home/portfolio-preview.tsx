"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/portfolio";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection } from "@/components/shared/animated-section";
import { motion, AnimatePresence } from "framer-motion";

export function PortfolioPreview() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [activeId, setActiveId] = useState(featuredProjects[0]?.id || "");

  if (featuredProjects.length === 0) return null;

  const activeProject = featuredProjects.find((p) => p.id === activeId) || featuredProjects[0];

  return (
    <SectionWrapper
      id="portfolio"
      className="section-divider"
    >
      <AnimatedSection>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
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
              Featured Case Studies
            </h2>
            <p className="mt-3 max-w-md text-base text-on-surface-variant">
              Explore our high-performing digital platforms designed for maximum lead generation and visual impact.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* Quick Switcher for Projects */}
            <div 
              className="flex gap-1.5 p-1 rounded-xl border"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(17,24,39,0.4)"
              }}
            >
              {featuredProjects.map((p) => {
                const isActive = p.id === activeId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className="relative px-4 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer z-10"
                    style={{
                      color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePreviewTab"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)",
                          border: "1px solid rgba(124, 58, 237, 0.35)",
                          zIndex: -1,
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {p.title.split(" ")[0]}
                  </button>
                );
              })}
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-on-surface transition-all hover:bg-white/5 w-full sm:w-auto text-center"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/portfolio" className="group block">
              <div className="glass-panel overflow-hidden rounded-2xl p-1">
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
                      className="mx-auto rounded px-4 py-1 font-mono text-[10px] tracking-widest hidden sm:block"
                      style={{ background: "#1e1e1e", color: "rgba(255,255,255,0.5)" }}
                    >
                      {activeProject.url?.replace("https://", "")}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: "16/9", background: "#0a0a0a" }}
                  >
                    {/* Website Preview Screenshot */}
                    <Image
                      src={`/${activeProject.id}.png`}
                      alt={`${activeProject.title} Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.4) 60%, transparent 100%)",
                      }}
                    />

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6 md:p-8">
                      <div>
                        <span
                          className="mb-2.5 inline-block rounded-full px-3 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary"
                          style={{
                            background: "rgba(124, 58, 237, 0.1)",
                            border: "1px solid rgba(124, 58, 237, 0.15)",
                          }}
                        >
                          {activeProject.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white md:text-2xl">
                          {activeProject.title}
                        </h3>
                        <p className="mt-1 max-w-sm text-xs text-white/70 line-clamp-1">
                          {activeProject.description}
                        </p>
                      </div>
                      
                      <div className="glass-panel hidden gap-6 rounded-lg p-4 md:flex">
                        {activeProject.metrics.slice(0, 2).map((metric, i) => (
                          <div key={metric.label}>
                            <div
                              className={`mb-1 text-[9px] font-semibold uppercase tracking-widest ${
                                i === 0 ? "text-secondary" : "text-primary"
                              }`}
                            >
                              {metric.label}
                            </div>
                            <div className="text-lg font-semibold text-white">
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
          </motion.div>
        </AnimatePresence>
      </AnimatedSection>
    </SectionWrapper>
  );
}
