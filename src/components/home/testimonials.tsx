import { Star } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

export function Testimonials() {
  return (
    <SectionWrapper
      label="Testimonials"
      heading="What Our Clients Say"
      subheading="Real feedback from businesses we've helped grow online."
      centered
    >
      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.id}>
            <div
              className="flex h-full flex-col rounded-xl p-8 transition-all duration-300 hover:border-white/10"
              style={{
                background: "rgba(17,24,39,0.4)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-on-surface-variant">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: "rgba(124,58,237,0.3)" }}
                >
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-on-surface">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {testimonial.business}
                  </div>
                </div>
                <span
                  className="ml-auto rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-on-surface-variant"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {testimonial.category}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
