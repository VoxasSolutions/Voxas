import {
  Globe,
  Code2,
  Layers,
  Search,
  MapPin,
  Palette,
  MessageCircle,
  Bot,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "website-design",
    title: "Website Design",
    description:
      "Custom UI/UX design tailored to your business goals. We create visually stunning, conversion-focused designs that establish trust and drive action.",
    icon: Globe,
    features: [
      "Custom UI/UX Design",
      "Mobile-First Approach",
      "Wireframing & Prototyping",
      "Brand-Aligned Visuals",
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Modern websites built with Next.js, React, and TypeScript. Lightning-fast performance, SEO-ready, and designed to scale with your business.",
    icon: Code2,
    features: [
      "Next.js & React",
      "TypeScript",
      "Responsive Development",
      "Performance Optimized",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered for marketing campaigns. Every element is optimized to capture leads and drive conversions.",
    icon: Layers,
    features: [
      "Conversion Optimized",
      "A/B Test Ready",
      "Fast Load Times",
      "Analytics Integration",
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Comprehensive on-page, technical, and local SEO to ensure your business ranks higher and attracts organic traffic consistently.",
    icon: Search,
    features: [
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Keyword Research",
    ],
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile",
    description:
      "Optimize your Google Business Profile to improve visibility in local search results and attract nearby customers actively searching for your services.",
    icon: MapPin,
    features: [
      "Profile Optimization",
      "Review Management",
      "Local Rankings",
      "Google Maps Visibility",
    ],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Complete brand identity design including logo, color palette, typography, and visual direction that sets your business apart from competitors.",
    icon: Palette,
    features: [
      "Logo Design",
      "Color & Typography",
      "Brand Guidelines",
      "Visual Direction",
    ],
  },
  {
    id: "whatsapp-integration",
    title: "WhatsApp Integration",
    description:
      "Seamless WhatsApp integration for instant lead capture and customer communication. Convert website visitors into conversations effortlessly.",
    icon: MessageCircle,
    features: [
      "Click-to-Chat Buttons",
      "Pre-filled Messages",
      "Lead Capture",
      "Instant Communication",
    ],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description:
      "Intelligent chatbots that qualify leads, answer common questions, and engage customers 24/7 — even while you sleep.",
    icon: Bot,
    features: [
      "Automated Responses",
      "Lead Qualification",
      "24/7 Availability",
      "Custom Training",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Ongoing website maintenance, security updates, performance monitoring, and dedicated support to keep your website running at peak performance.",
    icon: Wrench,
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Priority Support",
    ],
  },
];
