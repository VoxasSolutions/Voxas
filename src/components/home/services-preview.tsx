import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

export function ServicesPreview() {
  // Show first 4 services in bento layout on homepage
  const featured = services.slice(0, 4);

  return (
    <SectionWrapper
      id="services"
      label="What We Do"
      heading="Bespoke digital engineering."
      subheading="We specialize in building modern, high-converting platforms for growth-minded businesses."
      centered
    >
      <StaggerContainer className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((service, i) => {
          const isWide = i === 0 || i === 3;
          return (
            <StaggerItem
              key={service.id}
              className={isWide ? "md:col-span-2" : "md:col-span-1"}
            >
              <Link
                href={`/services#${service.id}`}
                className="bento-card group flex h-full flex-col justify-between rounded-xl p-8"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg transition-opacity group-hover:opacity-100"
                    style={{
                      background:
                        i % 3 === 0
                          ? "rgba(124,58,237,0.1)"
                          : i % 3 === 1
                            ? "rgba(76,215,246,0.1)"
                            : "rgba(255,183,132,0.1)",
                    }}
                  >
                    <service.icon
                      size={22}
                      className={
                        i % 3 === 0
                          ? "text-primary"
                          : i % 3 === 1
                            ? "text-secondary"
                            : "text-tertiary"
                      }
                    />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-on-surface-variant transition-colors group-hover:text-on-surface"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-on-surface">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed text-on-surface-variant ${isWide ? "max-w-md" : ""}`}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          View All Services
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </SectionWrapper>
  );
}
