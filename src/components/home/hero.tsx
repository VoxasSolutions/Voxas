"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left Content */}
          <div className="flex w-full flex-col gap-8 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Premium Web Design Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-on-surface md:text-6xl lg:text-[64px]"
              style={{ letterSpacing: "-0.04em" }}
            >
              We engineer <br className="hidden md:inline" />
              <span className="gradient-text">high-performance</span> <br className="hidden md:inline" />
              web experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl text-lg leading-relaxed text-on-surface-variant"
            >
              A design-driven engineering studio. We build lightning-fast web platforms and conversion engines that transform visitors into lifetime customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                Start your project
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-lg border px-8 py-4 text-xs font-semibold uppercase tracking-widest text-on-surface transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                View our work
              </Link>
            </motion.div>
          </div>

          {/* Right Visual — Abstract Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden w-full lg:block lg:w-1/2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-panel relative rounded-xl p-6"
              style={{
                transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)",
              }}
            >
              {/* Window Header */}
              <div
                className="flex items-center gap-2 border-b pb-4"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-auto text-xs uppercase tracking-widest text-on-surface-variant/60">
                  Dashboard
                </span>
              </div>

              {/* Stats Grid */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bento-card rounded-lg p-5">
                  <div className="mb-3 text-2xl text-primary">📊</div>
                  <div className="text-2xl font-semibold text-on-surface">
                    +150%
                  </div>
                  <div className="mt-1 text-sm text-on-surface-variant">
                    Lead Growth
                  </div>
                </div>
                <div className="bento-card rounded-lg p-5">
                  <div className="mb-3 text-2xl text-secondary">⚡</div>
                  <div className="text-2xl font-semibold text-on-surface">
                    &lt;2s
                  </div>
                  <div className="mt-1 text-sm text-on-surface-variant">
                    Load Time
                  </div>
                </div>
                <div className="bento-card col-span-2 rounded-lg p-5">
                  <div className="mb-3 text-xs uppercase tracking-widest text-on-surface-variant">
                    Conversion Rate
                  </div>
                  <div className="flex items-end justify-between gap-1">
                    {[30, 45, 35, 55, 70, 85, 60, 90, 75, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            height: `${h}px`,
                            background:
                              i >= 7
                                ? "rgba(76,215,246,0.8)"
                                : i >= 5
                                  ? "rgba(124,58,237,0.8)"
                                  : "rgba(124,58,237,0.4)",
                            boxShadow:
                              i === 9
                                ? "0 0 15px rgba(76,215,246,0.5)"
                                : "none",
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
