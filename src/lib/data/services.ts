import {
  Globe,
  Code2,
  Layers,
  Search,
  MapPin,
  Palette,
  Bot,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

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
    title: "Bespoke Brand & Web Design",
    description:
      "Custom visual layouts designed to establish instant authority. We create gorgeous, trust-first web designs that align with your brand and guide visitors to take action.",
    icon: Globe,
    features: [
      "Custom Brand Design",
      "Mobile-Optimized Layouts",
      "Interactive Wireframing",
      "Trust-Building Aesthetics",
    ],
  },
  {
    id: "website-development",
    title: "High-Performance Web Engineering",
    description:
      "Lightning-fast, secure websites engineered for seamless loading on every device. We build highly optimized platforms that load instantly, keeping customers engaged.",
    icon: Code2,
    features: [
      "Sub-2s Loading Speeds",
      "Responsive Layouts",
      "Search Engine Ready",
      "Secure Hosting Setup",
    ],
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    description:
      "Targeted lead capture pages engineered for your advertising campaigns. Every header, text layout, and contact action is built to maximize inquiries.",
    icon: Layers,
    features: [
      "Lead Capture Layouts",
      "Advertising Ready",
      "Instant Load Speeds",
      "Inquiry Form Setups",
    ],
  },
  {
    id: "seo-optimization",
    title: "Google Search Engine Ranking",
    description:
      "Strategic search optimization that places your business in front of customers actively searching for your services on Google.",
    icon: Search,
    features: [
      "Google Search Ranking",
      "Local Search Terms",
      "Speed & Structure Audits",
      "Monthly Growth Tracking",
    ],
  },
  {
    id: "google-business-profile",
    title: "Google Maps & Local Search",
    description:
      "Complete optimization of your Google Maps and local listings to rank higher when nearby customers search for your services.",
    icon: MapPin,
    features: [
      "Google Maps Visibility",
      "Review Strategy Setup",
      "Local Directory Ranking",
      "Nearby Lead Generation",
    ],
  },
  {
    id: "brand-identity",
    title: "Corporate Visual Identity",
    description:
      "Professional brand assets including logos, typography scales, and premium color guides that distinguish your business from local competitors.",
    icon: Palette,
    features: [
      "Logo Asset Design",
      "Typography & Color Scales",
      "Brand Presentation Kit",
      "Visual Style Guidelines",
    ],
  },
  {
    id: "whatsapp-integration",
    title: "Direct WhatsApp Leads",
    description:
      "One-click WhatsApp chat widgets that connect website visitors instantly to your phone line, starting valuable client conversations immediately.",
    icon: WhatsAppIcon as any,
    features: [
      "Instant Click-to-Chat",
      "Custom Welcome Texts",
      "Mobile Chat Integrations",
      "Direct Call-to-Actions",
    ],
  },
  {
    id: "ai-chatbots",
    title: "24/7 Virtual Lead Assistant",
    description:
      "Automated chat assistants that greet visitors, collect inquiry details, and book consultation calls for you around the clock.",
    icon: Bot,
    features: [
      "24/7 Customer Greeting",
      "Lead Details Collector",
      "Automatic Call Booking",
      "Helpful FAQ Responders",
    ],
  },
  {
    id: "maintenance-support",
    title: "Continuous Website Management",
    description:
      "Ongoing optimization, software updates, security monitoring, and regular content adjustments to keep your site fresh and modern.",
    icon: Wrench,
    features: [
      "Regular Content Edits",
      "Security Audits",
      "Performance Tune-ups",
      "Priority Customer Support",
    ],
  },
];
