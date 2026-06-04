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
              className="text-4xl font-bold leading-[1.1] tracking-wide text-on-surface md:text-6xl lg:text-[64px]"
            >
              We build websites that <br className="hidden md:inline" />
              <span className="gradient-text">generate customers.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl text-lg leading-relaxed text-on-surface-variant"
            >
              A design-driven agency focused on your growth. We craft premium websites, local search rankings, and automated lead funnels that transform traffic into actual clients.
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
                  background: "var(--primary-container)",
                }}
              >
                Start your project
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-lg border px-8 py-4 text-xs font-semibold uppercase tracking-widest text-on-surface transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: "rgba(226, 198, 159, 0.15)" }}
              >
                View our work
              </Link>
            </motion.div>
          </div>

          {/* Right Visual — Customer Flow Simulator */}
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
              className="glass-panel relative rounded-2xl p-6"
            >
              {/* Window Header */}
              <div
                className="flex items-center gap-2 border-b pb-4"
                style={{ borderColor: "rgba(226, 198, 159, 0.08)" }}
              >
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Customer Flow Simulator
                </span>
              </div>

              {/* Funnel Flow Steps */}
              <div className="mt-6 flex flex-col gap-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-bold font-mono">
                    01
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-on-surface">Target Customer Searches Google</div>
                    <div className="mt-2 rounded bg-black/35 border border-white/5 px-2.5 py-1.5 text-[11px] font-medium text-on-surface-variant flex items-center gap-2">
                      <span className="text-primary font-bold">🔍</span>
                      <span>"Top real estate builders near me"</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold font-mono">
                    02
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-on-surface">Loads Your High-Performance Site</div>
                    <p className="mt-1 text-[11px] text-on-surface-variant leading-relaxed">
                      Beautiful typography and instant rendering (<span className="text-secondary font-semibold">1.2s</span>) establishes immediate trust.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 rounded-xl border border-primary/25 bg-primary/[0.02] p-4 shadow-[0_0_15px_rgba(226,198,159,0.03)]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary border border-primary text-xs font-bold font-mono">
                    03
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-primary">New Customer Inquiry Received!</div>
                      <span className="rounded bg-green-500/10 px-2 py-0.5 text-[9px] font-semibold text-green-400">WhatsApp Lead</span>
                    </div>
                    <div className="mt-2 rounded-lg bg-green-500/5 border border-green-500/10 p-3 text-[11px] leading-relaxed text-on-surface-variant">
                      <div className="font-semibold text-white mb-0.5">"Hi, I saw your luxury listing projects on the website. Can we schedule a viewing call this Saturday?"</div>
                      <span className="text-[10px] text-on-surface-variant/80">— Amit R. (Builders Consultation)</span>
                    </div>
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
