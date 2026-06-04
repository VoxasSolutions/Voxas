export interface Testimonial {
  id: string;
  name: string;
  business: string;
  category: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "krishna-realestate",
    name: "Rajesh Sharma",
    business: "Krishna Real Estate Agency",
    category: "Real Estate",
    rating: 5,
    review:
      "Voxas completely transformed our online presence. Our new website looks professional, loads fast, and has already started generating quality leads. The WhatsApp integration alone has been a game-changer for our business.",
  },
  {
    id: "priya-interiors",
    name: "Priya Mehta",
    business: "Priya's Interior Studio",
    category: "Interior Design",
    rating: 5,
    review:
      "Working with Voxas was an incredible experience. They understood our brand perfectly and delivered a website that truly reflects the quality of our work. Our clients are impressed, and inquiries have doubled since launch.",
  },
  {
    id: "greenleaf-consultants",
    name: "Amit Patel",
    business: "GreenLeaf Consultants",
    category: "Business Consulting",
    rating: 5,
    review:
      "We needed a website that would establish credibility with corporate clients. Voxas delivered beyond expectations — clean design, fast performance, and excellent SEO. We're now ranking on the first page for our target keywords.",
  },
];
