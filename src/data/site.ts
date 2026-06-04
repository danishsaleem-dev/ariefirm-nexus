import {
  Scale,
  Building2,
  Landmark,
  HardHat,
  Globe2,
  Home,
  Gavel,
  TrendingUp,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    slug: "legal-consultancy",
    icon: Scale,
    title: "Legal Consultancy",
    short: "Expert legal advice across corporate, commercial and regulatory matters.",
    description:
      "End-to-end legal advisory covering contracts, compliance, corporate structuring and risk — delivered in plain language by a seasoned team.",
    points: ["Contract drafting & review", "Corporate & commercial law", "Regulatory compliance", "Legal due diligence"],
  },
  {
    slug: "building-developments",
    icon: Building2,
    title: "Building Developments",
    short: "From feasibility to handover — full-cycle real estate development.",
    description:
      "We lead residential, commercial and mixed-use developments through planning, design, approvals and delivery.",
    points: ["Feasibility studies", "Planning & approvals", "Design coordination", "Delivery management"],
  },
  {
    slug: "government-projects",
    icon: Landmark,
    title: "Government Projects",
    short: "Trusted partner for public-sector tenders and infrastructure.",
    description:
      "Bid preparation, public-private partnerships and compliant execution of large-scale government contracts.",
    points: ["Tender & bid support", "PPP advisory", "Public procurement", "Compliance & reporting"],
  },
  {
    slug: "project-handling",
    icon: HardHat,
    title: "Project Handling",
    short: "Construction and project management from groundbreak to handover.",
    description:
      "Hands-on construction project management — cost control, scheduling, quality and contractor coordination.",
    points: ["Construction management", "Cost & schedule control", "Quality assurance", "Contractor coordination"],
  },
  {
    slug: "global-village",
    icon: Globe2,
    title: "Global Village",
    short: "Master-planned communities designed for modern living.",
    description:
      "Integrated community planning blending residential, retail and leisure into sustainable, connected places.",
    points: ["Master planning", "Community design", "Sustainability", "Lifestyle amenities"],
  },
  {
    slug: "settlements",
    icon: Home,
    title: "Settlements",
    short: "Housing schemes and resettlement planning at scale.",
    description:
      "Planning, financing and delivery of housing settlements with full legal and infrastructure support.",
    points: ["Housing schemes", "Resettlement planning", "Land allocation", "Infrastructure"],
  },
  {
    slug: "disputes-management",
    icon: Gavel,
    title: "Disputes Management",
    short: "Strategic resolution of commercial and construction disputes.",
    description:
      "Mediation, arbitration and litigation strategy to protect your interests and resolve conflicts efficiently.",
    points: ["Mediation & arbitration", "Litigation strategy", "Contract disputes", "Negotiation"],
  },
  {
    slug: "investment-financing",
    icon: TrendingUp,
    title: "Investment & Financing",
    short: "Structuring capital, funding and investment vehicles.",
    description:
      "We connect projects with capital — structuring finance, securing funding and advising investors.",
    points: ["Project finance", "Investment structuring", "Fund advisory", "Risk assessment"],
  },
  {
    slug: "trading",
    icon: ShoppingCart,
    title: "Trading",
    short: "Cross-border trade, sourcing and supply solutions.",
    description:
      "International trading and procurement — sourcing, logistics and trade documentation handled end-to-end.",
    points: ["Import & export", "Sourcing & procurement", "Trade documentation", "Logistics"],
  },
];

export interface TopicGroup {
  category: string;
  links: string[];
  all: string;
}

export const popularTopics: TopicGroup[] = [
  {
    category: "Legal & Corporate",
    links: [
      "Shareholders agreements",
      "Commercial contracts",
      "Non-disclosure agreements",
      "Joint venture agreements",
      "Corporate compliance",
      "Regulatory advisory",
    ],
    all: "All Legal Topics",
  },
  {
    category: "Development & Construction",
    links: [
      "Building development feasibility",
      "Construction contracts",
      "Project handover packages",
      "Planning & approvals",
      "Contractor agreements",
      "Quality & safety compliance",
    ],
    all: "All Development Topics",
  },
  {
    category: "Investment & Trade",
    links: [
      "Project finance structuring",
      "Investment agreements",
      "Settlements & housing finance",
      "Cross-border trading",
      "Dispute resolution",
      "Government tender support",
    ],
    all: "All Investment Topics",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
