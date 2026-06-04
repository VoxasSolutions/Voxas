import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  label?: string;
  heading?: string;
  subheading?: string;
  centered?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  label,
  heading,
  subheading,
  centered = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", className)}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {(label || heading || subheading) && (
          <div
            className={cn("mb-16", centered && "text-center")}
          >
            {label && (
              <span className="mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}
              >
                {label}
              </span>
            )}
            {heading && (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-on-surface md:text-4xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p
                className={cn(
                  "mt-4 text-lg text-on-surface-variant",
                  centered ? "mx-auto max-w-2xl" : "max-w-2xl"
                )}
              >
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
