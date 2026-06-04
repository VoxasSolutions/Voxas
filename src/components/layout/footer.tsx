import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Website Design", href: "/services#website-design" },
      { label: "Website Development", href: "/services#website-development" },
      { label: "SEO Optimization", href: "/services#seo-optimization" },
      { label: "Landing Pages", href: "/services#landing-pages" },
    ],
  },
  {
    title: "Company",
    links: [
      ...NAV_LINKS.map((link) => ({ label: link.label, href: link.href })),
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <Image
                src="/file_00000000bbec720684b54a85089de096(1).png"
                alt="Voxas Icon"
                width={32}
                height={32}
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* <span className="text-2xl font-bold tracking-widest bg-gradient-to-r from-[#e2c69f] to-[#c084fc] bg-clip-text text-transparent font-display">
                VOXAS
              </span> */}
              <Image
                src="/file_0000000083307207af57182ffcddf1c6(1).png"
                alt="Voxas Text Logo"
                width={80}
                height={20}
                className="h-5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm capitalize text-on-surface-variant transition-colors hover:text-primary py-2 pr-4"
                  aria-label={`Follow us on ${name}`}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-1 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface">
              Contact
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-block py-1 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="inline-block py-1 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="inline-block py-1 text-sm text-on-surface-variant">
                {SITE_CONFIG.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-on-surface-variant md:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link
              href="/privacy"
              className="inline-block py-1.5 transition-colors hover:text-on-surface"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-block py-1.5 transition-colors hover:text-on-surface"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
