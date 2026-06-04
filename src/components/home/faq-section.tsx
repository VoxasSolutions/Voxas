"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data/faq";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection } from "@/components/shared/animated-section";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SectionWrapper
      label="FAQ"
      heading="Frequently Asked Questions"
      subheading="Everything you need to know about working with us."
      centered
    >
      <div className="mx-auto max-w-3xl">
        {faqItems.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 0.05}>
            <div
              className="border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between py-6 text-left transition-colors"
                aria-expanded={openId === item.id}
              >
                <span className="pr-4 text-base font-medium text-on-surface">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "shrink-0 text-on-surface-variant transition-transform duration-200",
                    openId === item.id && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openId === item.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-sm leading-relaxed text-on-surface-variant">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
