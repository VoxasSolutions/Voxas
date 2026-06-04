export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "timeline",
    question: "How long does a custom build take?",
    answer:
      "A typical high-performance website takes between 2 to 4 weeks from discovery to deployment. We work in structured weekly sprints—Discovery, UX Design, Development, and Launch—keeping you updated with live staging links throughout the process.",
  },
  {
    id: "speed",
    question: "How fast will my website load?",
    answer:
      "Speed is a primary design driver. We build exclusively with Next.js App Router to deliver server-rendered, static page speeds, targeting 95+ Lighthouse performance scores and sub-2 second load times. Faster speeds reduce bounce rates and rank higher on search engines.",
  },
  {
    id: "copywriting",
    question: "Do you provide custom copywriting and assets?",
    answer:
      "Yes, we provide premium copywriting and custom visual assets. We ensure your brand's messaging is clean, persuasive, and engineered specifically to guide users toward call-to-actions, establishing trust instantly.",
  },
  {
    id: "hosting",
    question: "How do you handle hosting and security?",
    answer:
      "We deploy websites on Vercel's global edge network. This provides static file delivery at edge servers worldwide, automated SSL certificates, custom domain routing, and robust DDoS protection, ensuring 99.99% uptime with zero maintenance overhead for you.",
  },
  {
    id: "cms",
    question: "Can we update content after launch?",
    answer:
      "Yes. We design pages using structured content schema. We can integrate lightweight headless CMS systems (like Sanity or Decap) so you can update text, blog posts, and service features without touch-coding, or we can manage it for you.",
  },
  {
    id: "support",
    question: "Do you offer ongoing post-launch support?",
    answer:
      "Every project includes 30 days of complimentary priority support. Beyond that, we offer flexible maintenance packages covering regular performance audits, SEO checks, security patches, and minor design and copy revisions.",
  },
];
