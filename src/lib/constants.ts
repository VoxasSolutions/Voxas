export const SITE_CONFIG = {
  name: "Voxas",
  tagline: "We engineer high-performance web experiences.",
  description:
    "Voxas is a detail-obsessed design and engineering studio. We build lightning-fast web platforms and conversion engines that transform traffic into revenue.",
  url: "https://voxas.app",
  email: "hello@voxas.app",
  phone: "+91 70394 90720",
  whatsappNumber: "917039490720",
  whatsappMessage:
    "Hi Voxas! I'm interested in getting a website for my business. Can we discuss?",
  location: "Navi Mumbai, Maharashtra, India",
  founded: "2026",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/voxasapp",
  linkedin: "https://linkedin.com/company/voxas",
  instagram: "https://instagram.com/voxas.app",
} as const;

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message ?? SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
}
