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
    url: "https://krishnarealestate.com",
    featured: true,
  },
];
