import { EyeOff, Clock, TrendingDown, ShieldOff } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

const problems = [
  {
    icon: EyeOff,
    title: "Invisible to search engines",
    description:
      "If you aren't ranking on Google, you don't exist to 80% of buyers. Outdated indexing and poor SEO cost you organic traffic.",
  },
  {
    icon: Clock,
    title: "Legacy template design",
    description:
      "First impressions are structural. 94% of users form their opinions about your credibility based on the speed and visual layout of your website.",
  },
  {
    icon: TrendingDown,
    title: "Leaking potential customers",
    description:
      "Driving traffic is useless if visitors leave immediately. Sites that lack strategic CTA placement and intuitive paths fail to convert.",
  },
  {
    icon: ShieldOff,
    title: "Skepticism over credibility",
    description:
      "An unoptimized web presence projects amateurism. Modern customers choose competitors who invest in polished, premium digital experiences.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper
      label="The Problem"
      heading="The cost of an outdated web presence."
      subheading="Most businesses lose leads and revenue due to performance bottlenecks, poor design choices, and lack of search optimization."
    >
      <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {problems.map((problem) => (
          <StaggerItem key={problem.title}>
            <div
              className="rounded-xl p-8 transition-all duration-300 hover:border-white/10"
              style={{
                background: "rgba(17,24,39,0.4)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg"
                style={{
                  background: "rgba(255,183,132,0.1)",
                  border: "1px solid rgba(255,183,132,0.15)",
                }}
              >
                <problem.icon size={18} className="text-tertiary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-on-surface">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {problem.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection delay={0.3}>
        <div className="mt-12 text-center">
          <p className="text-lg text-on-surface-variant">
            <span className="font-semibold text-primary">Voxas</span> solves
            all of these problems with modern, conversion-focused websites.
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
