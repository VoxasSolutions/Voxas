export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  url?: string;
  featured: boolean;
}

export const projects: PortfolioProject[] = [
  {
    id: "krishna-real-estate",
    title: "Krishna Real Estate Agency",
    category: "Lead Generation Website",
    description:
      "A complete digital overhaul for a leading real estate consultancy, focusing on high-converting landing pages, intuitive property search, and seamless lead capture through WhatsApp integration.",
    challenge:
      "Krishna Real Estate had no professional online presence. They relied entirely on word-of-mouth and physical signage for client acquisition, resulting in limited reach and lost opportunities to competitors with strong digital presence.",
    solution:
      "We designed and developed a modern, lead-focused website with professional property listings, an integrated contact system, WhatsApp click-to-chat, and comprehensive SEO optimization targeting local real estate searches.",
    results: [
      "Professional online presence established",
      "Lead generation system with WhatsApp integration",
      "Mobile-optimized for on-the-go property browsing",
      "SEO-optimized for local real estate keywords",
      "Google Business Profile optimization",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
    metrics: [
      { label: "Increase in Leads", value: "+150%" },
      { label: "SEO Ranking", value: "#1" },
      { label: "Page Load", value: "<2s" },
      { label: "Mobile Score", value: "98" },
    ],
    url: "https://krishna-real-estate.vercel.app",
    featured: true,
  },
  {
    id: "lisette-clinic",
    title: "Lisette Clinic",
    category: "Lead Generation Website",
    description:
      "A complete digital presence for a trusted dermatology and skin care clinic in Airoli, Navi Mumbai, focusing on appointment bookings, treatment discovery, and seamless lead capture through WhatsApp integration.",
    challenge:
      "Lisette Clinic had no professional online presence despite 13+ years of trusted care by Dr. Raj. They relied entirely on word-of-mouth and Justdial listings for patient acquisition, resulting in limited reach and lost opportunities to competitors with stronger digital visibility.",
    solution:
      "We designed and developed a modern, conversion-focused clinic website with a full treatments catalogue, patient testimonials, an integrated contact system, WhatsApp click-to-book, and comprehensive local SEO targeting skin and hair care searches in Navi Mumbai.",
    results: [
      "Professional online presence established for a 13-year-old clinic",
      "Appointment booking system with WhatsApp & direct call integration",
      "Mobile-optimized for patients browsing treatments on the go",
      "SEO-optimized for local dermatology and skin care keywords",
      "Google Maps & Justdial profile reinforcement via structured data",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
    metrics: [
      { label: "Patient Rating", value: "4.7★" },
      { label: "Years of Trust", value: "13+" },
      { label: "Verified Reviews", value: "71+" },
      { label: "Mobile Score", value: "98" },
    ],
    url: "https://lisette-clinic.vercel.app",
    featured: true,
  },
];
