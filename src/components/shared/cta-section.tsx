import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { getWhatsAppUrl } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/animated-section";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
}

export function CTASection({
  heading = "Ready to grow your business online?",
  subheading = "Book a free consultation today and let's discuss how we can help you attract more customers with a modern, high-converting website.",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-2xl p-12 text-center md:p-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(9,9,11,0.9) 50%, rgba(76,215,246,0.1) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Glow effects */}
            <div
              className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
              style={{ background: "#7c3aed" }}
            />
            <div
              className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 translate-x-1/2 rounded-full opacity-15 blur-[100px]"
              style={{ background: "#4cd7f6" }}
            />

            <h2 className="relative text-3xl font-semibold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-lg text-on-surface-variant">
              {subheading}
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                Book Consultation
                <ArrowRight size={14} />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-8 py-4 text-xs font-semibold uppercase tracking-widest text-on-surface transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <WhatsAppIcon size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
