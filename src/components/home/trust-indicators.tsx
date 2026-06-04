import { Zap, Smartphone, Search, Target } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

const indicators = [
  { icon: Zap, label: "Fast Delivery", description: "2–4 week turnaround" },
  {
    icon: Smartphone,
    label: "Mobile Responsive",
    description: "Perfect on every device",
  },
  {
    icon: Search,
    label: "SEO Optimized",
    description: "Built to rank higher",
  },
  {
    icon: Target,
    label: "Lead Focused",
    description: "Conversion-first design",
  },
];

export function TrustIndicators() {
  return (
    <section
      className="border-y py-12"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {indicators.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-on-surface">
                    {item.label}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {item.description}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
