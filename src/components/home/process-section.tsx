import { SectionWrapper } from "@/components/layout/section-wrapper";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, audience, and competitors to create a clear project roadmap.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We plan the site structure, user flows, and conversion strategy to maximize lead generation.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a modern, brand-aligned UI/UX design that builds trust and drives action.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build a fast, responsive, SEO-optimized website using modern technologies.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy your website, optimize performance, and provide training to get you started.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper
      id="process"
      label="How We Work"
      heading="Our Process"
      subheading="A proven, systematic approach to delivering websites that perform."
      centered
    >
      <StaggerContainer className="relative">
        {/* Connecting Line */}
        <div
          className="absolute left-[23px] top-0 h-full w-px md:left-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(124,58,237,0.3), transparent)",
          }}
        />

        <div className="flex flex-col gap-8 md:gap-12">
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div
                className={`flex items-start gap-8 md:gap-16 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                <div className="hidden flex-1 md:block">
                  {i % 2 === 0 && (
                    <div
                      className="ml-auto max-w-sm rounded-xl p-6"
                      style={{
                        background: "rgba(17,24,39,0.4)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <h3 className="mb-2 text-lg font-semibold text-on-surface">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Step Number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold text-primary"
                  style={{
                    borderColor: "rgba(124,58,237,0.3)",
                    background: "rgba(124,58,237,0.1)",
                  }}
                >
                  {step.number}
                </div>

                <div className="hidden flex-1 md:block">
                  {i % 2 !== 0 && (
                    <div
                      className="max-w-sm rounded-xl p-6"
                      style={{
                        background: "rgba(17,24,39,0.4)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <h3 className="mb-2 text-lg font-semibold text-on-surface">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile Content */}
                <div className="flex-1 md:hidden">
                  <h3 className="mb-2 text-lg font-semibold text-on-surface">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </SectionWrapper>
  );
}
