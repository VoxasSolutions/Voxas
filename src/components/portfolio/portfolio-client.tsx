"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioProject } from "@/lib/data/portfolio";
import { StaggerContainer, StaggerItem } from "@/components/shared/animated-section";

interface PortfolioClientProps {
  projects: PortfolioProject[];
}

export function PortfolioClient({ projects }: PortfolioClientProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id || "");
  const detailsRef = useRef<HTMLDivElement>(null);

  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  const handleProjectSelect = (id: string) => {
    setActiveId(id);
    // Smooth scroll back to active case study area
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!activeProject) return null;

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20" ref={detailsRef}>
      {/* Interactive Tabs / Selector */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {projects.map((project) => {
          const isActive = project.id === activeId;
          return (
            <button
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className="relative rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: isActive ? "transparent" : "rgba(17, 24, 39, 0.4)",
                color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)",
                    border: "1px solid rgba(124, 58, 237, 0.5)",
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {project.title}
            </button>
          );
        })}
      </div>

      {/* Case Study Details Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Project Header & Mockup */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "rgba(17, 24, 39, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Browser Mockup */}
            <div className="overflow-hidden" style={{ background: "#1e1e1e" }}>
              <div
                className="flex items-center justify-between px-4"
                style={{
                  height: "40px",
                  background: "#2d2d2d",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ background: "#ff5f56" }} />
                  <div className="h-3 w-3 rounded-full" style={{ background: "#ffbd2e" }} />
                  <div className="h-3 w-3 rounded-full" style={{ background: "#27c93f" }} />
                </div>
                
                <div
                  className="rounded px-4 py-1 font-mono text-[10px] tracking-widest hidden sm:block"
                  style={{
                    background: "#1e1e1e",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {activeProject.url?.replace("https://", "")}
                </div>

                {activeProject.url ? (
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-primary hover:text-primary-light transition-colors"
                  >
                    <span>Visit Site</span>
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <div className="w-16" />
                )}
              </div>
              
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  aspectRatio: "16/8",
                  background: "#0a0a0a",
                }}
              >
                <Image
                  src={`/${activeProject.id}.png`}
                  alt={`${activeProject.title} Backdrop`}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Metrics Bar */}
            <div
              className="grid grid-cols-2 gap-px md:grid-cols-4"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {activeProject.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 text-center"
                  style={{ background: "rgba(17, 24, 39, 0.6)" }}
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

          {/* Case Study Details Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-tertiary">
                The Challenge
              </h3>
              <p className="text-base leading-relaxed text-on-surface-variant">
                {activeProject.challenge}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                Our Solution
              </h3>
              <p className="text-base leading-relaxed text-on-surface-variant">
                {activeProject.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="mt-16">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
              Results Delivered
            </h3>
            <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {activeProject.results.map((result) => (
                <StaggerItem key={result}>
                  <div
                    className="flex items-start gap-3 rounded-lg p-4"
                    style={{
                      background: "rgba(17, 24, 39, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-green-400" />
                    <span className="text-sm text-on-surface-variant">{result}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-4 py-2 text-sm text-on-surface-variant"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Grid of All Projects (Replaces "More Projects Coming Soon" placeholders) */}
      <div className="mt-28 border-t border-white/5 pt-20">
        <h3 className="mb-10 text-center text-2xl font-semibold tracking-tight text-on-surface">
          Explore Our Case Studies
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const isCurrentlyActive = project.id === activeId;
            return (
              <div
                key={project.id}
                onClick={() => handleProjectSelect(project.id)}
                className="group relative cursor-pointer overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: isCurrentlyActive
                    ? "rgba(124, 58, 237, 0.06)"
                    : "rgba(17, 24, 39, 0.3)",
                  border: isCurrentlyActive
                    ? "1px solid rgba(124, 58, 237, 0.3)"
                    : "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {/* Visual Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(124,58,237,0.12), transparent 60%)",
                  }}
                />
                
                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
                  style={{
                    background: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.15)",
                  }}
                >
                  {project.category}
                </span>
                
                <h4 className="text-xl font-bold text-on-surface group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                
                <p className="mt-2 text-sm text-on-surface-variant line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-widest">
                  <span className="text-on-surface-variant">
                    {project.metrics[0]?.value} {project.metrics[0]?.label}
                  </span>
                  
                  <span className="flex items-center gap-1 text-primary group-hover:text-primary-light transition-colors">
                    {isCurrentlyActive ? "Currently Viewing" : "View Case Study"}
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}

          {/* Placeholder for Next Project */}
          <div
            className="flex flex-col justify-center items-center rounded-xl p-8 min-h-[180px]"
            style={{
              background: "rgba(17, 24, 39, 0.15)",
              border: "1px dashed rgba(255, 255, 255, 0.08)",
            }}
          >
            <span
              className="rounded-full px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              Coming Soon
            </span>
            <p className="mt-2 text-xs text-on-surface-variant text-center max-w-[220px]">
              We are working on exciting new growth engines. Check back soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
