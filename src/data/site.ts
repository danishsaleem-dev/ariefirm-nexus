import {
  Building2,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Ticket,
  Network,
  TrendingUp,
  Scale,
  LineChart,
  Wrench,
  Landmark,
  Building,
  Megaphone,
  ClipboardCheck,
  Hotel,
  Handshake,
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
    slug: "commercial-project-development",
    icon: Building2,
    title: "Commercial Project Development",
    short: "Planning, developing and establishing modern commercial projects from the ground up.",
    description:
      "We conceive, design and build modern commercial destinations — taking projects from feasibility and architecture through engineering, construction and operational launch.",
    points: ["Concept & feasibility", "Architecture & engineering", "Construction delivery", "Operational setup"],
  },
  {
    slug: "shopping-mall-operations",
    icon: Store,
    title: "Shopping Mall Operations & Management",
    short: "Full-cycle development and day-to-day management of shopping malls.",
    description:
      "End-to-end mall management covering tenant mix, footfall strategy, operations, security and experience — keeping every floor performing.",
    points: ["Tenant mix planning", "Operations management", "Footfall strategy", "Guest experience"],
  },
  {
    slug: "food-court-development",
    icon: UtensilsCrossed,
    title: "Food Court Development & Operations",
    short: "Designing and operating high-performing food courts and dining destinations.",
    description:
      "We build and run food courts that draw crowds — from layout and kitchen infrastructure to brand curation and ongoing operations.",
    points: ["Food court design", "Kitchen infrastructure", "Brand curation", "Daily operations"],
  },
  {
    slug: "retail-lifestyle-brands",
    icon: ShoppingBag,
    title: "Retail & Lifestyle Brand Placement",
    short: "Connecting national and international lifestyle brands with the right spaces.",
    description:
      "We curate and place leading retail and lifestyle brands, structuring the partnerships that make commercial destinations thrive.",
    points: ["Brand sourcing", "Lifestyle curation", "Space planning", "Partnership structuring"],
  },
  {
    slug: "entertainment-recreation",
    icon: Ticket,
    title: "Entertainment & Recreation Venues",
    short: "Developing and managing entertainment, events and recreational venues.",
    description:
      "From recreational areas to events and entertainment zones, we develop and operate venues that create memorable experiences.",
    points: ["Venue development", "Event programming", "Recreation zones", "Experience design"],
  },
  {
    slug: "franchise-development",
    icon: Network,
    title: "Franchise Development & Management",
    short: "Building and managing franchise networks for sustainable growth.",
    description:
      "We develop franchise models and manage networks — handling rollout, standards, support and performance across locations.",
    points: ["Franchise strategy", "Network rollout", "Standards & support", "Performance management"],
  },
  {
    slug: "business-development",
    icon: TrendingUp,
    title: "Business Development & Growth",
    short: "Strategy, expansion consulting and growth planning for commercial ventures.",
    description:
      "Corporate advisory and growth planning that helps businesses expand confidently — backed by strategy, market insight and execution.",
    points: ["Expansion consulting", "Corporate advisory", "Growth planning", "Market positioning"],
  },
  {
    slug: "investment-feasibility",
    icon: LineChart,
    title: "Investment Structuring & Feasibility",
    short: "Structuring investment and validating projects with rigorous feasibility analysis.",
    description:
      "We structure investment and run feasibility studies so capital is deployed into projects with clear, evidenced returns.",
    points: ["Feasibility analysis", "Investment structuring", "Financial modelling", "Risk assessment"],
  },
  {
    slug: "real-estate-commercialization",
    icon: Building,
    title: "Real Estate Development & Commercialization",
    short: "Unlocking and commercializing real estate for high-value commercial use.",
    description:
      "We develop and commercialize real estate — converting land and assets into operating commercial destinations.",
    points: ["Site development", "Commercialization", "Asset positioning", "Value creation"],
  },
  {
    slug: "leasing-tenant-management",
    icon: Handshake,
    title: "Commercial Leasing & Tenant Management",
    short: "Leasing strategy and tenant relations that keep occupancy and value high.",
    description:
      "From leasing strategy to ongoing tenant management, we maximise occupancy, retention and long-term asset value.",
    points: ["Leasing strategy", "Tenant relations", "Occupancy optimisation", "Lease administration"],
  },
  {
    slug: "marketing-brand-positioning",
    icon: Megaphone,
    title: "Marketing & Brand Positioning",
    short: "Positioning destinations and brands to capture attention and footfall.",
    description:
      "Marketing and brand strategy that builds awareness, drives footfall and positions destinations as market leaders.",
    points: ["Brand positioning", "Campaign strategy", "Footfall marketing", "Digital presence"],
  },
  {
    slug: "facility-management",
    icon: Wrench,
    title: "Facility Management & Operations",
    short: "Keeping commercial facilities running safely, cleanly and efficiently.",
    description:
      "Comprehensive facility management — maintenance, utilities, security and upgrades that protect the asset and the experience.",
    points: ["Maintenance & upkeep", "Utilities & MEP", "Security operations", "Upgrades & refits"],
  },
  {
    slug: "project-management-execution",
    icon: ClipboardCheck,
    title: "Project Management & Execution",
    short: "Disciplined delivery of complex projects on time and on budget.",
    description:
      "We manage and execute projects end to end — controlling cost, schedule, quality and contractors from start to finish.",
    points: ["Cost & schedule control", "Quality assurance", "Contractor coordination", "Delivery management"],
  },
  {
    slug: "corporate-legal-compliance",
    icon: Scale,
    title: "Corporate Advisory & Compliance",
    short: "Legal, taxation and regulatory support across every business activity.",
    description:
      "Corporate advisory plus legal, taxation and regulatory compliance support that keeps operations fully aligned with the law.",
    points: ["Legal advisory", "Regulatory compliance", "Taxation support", "Corporate structuring"],
  },
  {
    slug: "government-liaison",
    icon: Landmark,
    title: "Government Liaison & Coordination",
    short: "Coordinating approvals and regulatory matters with public authorities.",
    description:
      "We manage government liaison and regulatory coordination — navigating approvals, zoning and authority relations on your behalf.",
    points: ["Authority coordination", "Approvals & zoning", "Regulatory liaison", "Public-sector facilities"],
  },
  {
    slug: "hospitality-lifestyle",
    icon: Hotel,
    title: "Hospitality & Lifestyle Operations",
    short: "Operating hospitality and lifestyle destinations to the highest standard.",
    description:
      "We develop and operate hospitality and lifestyle projects, delivering service quality that builds loyal, returning audiences.",
    points: ["Hospitality operations", "Service standards", "Lifestyle concepts", "Guest loyalty"],
  },
];

export interface TopicGroup {
  category: string;
  links: string[];
  all: string;
}

export const popularTopics: TopicGroup[] = [
  {
    category: "Development & Construction",
    links: [
      "Commercial project development",
      "Shopping mall development",
      "Food court development",
      "Real estate commercialization",
      "Architecture & engineering",
      "Project management & execution",
    ],
    all: "All Development Topics",
  },
  {
    category: "Retail, Lifestyle & Entertainment",
    links: [
      "Retail & lifestyle brand placement",
      "Franchise development",
      "Entertainment & recreation venues",
      "Hospitality & lifestyle operations",
      "Marketing & brand positioning",
      "Tenant & leasing management",
    ],
    all: "All Lifestyle Topics",
  },
  {
    category: "Advisory, Investment & Compliance",
    links: [
      "Investment structuring & feasibility",
      "Business development & growth",
      "Corporate & legal advisory",
      "Regulatory & taxation compliance",
      "Government liaison & coordination",
      "Facility management & operations",
    ],
    all: "All Advisory Topics",
  },
];

export interface Sector {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const sectors: Sector[] = [
  { icon: Store, title: "Shopping Malls", text: "Retail destinations developed and managed end to end." },
  { icon: UtensilsCrossed, title: "Food & Dining", text: "Food courts and dining concepts that draw crowds." },
  { icon: Ticket, title: "Entertainment", text: "Recreation, events and entertainment venues." },
  { icon: ShoppingBag, title: "Retail & Lifestyle", text: "National and international lifestyle brands." },
  { icon: Hotel, title: "Hospitality", text: "Lifestyle and hospitality operations." },
  { icon: Landmark, title: "Public-Sector", text: "Government and regulated commercial facilities." },
];

export const stats = [
  { value: "18+", label: "Integrated service lines" },
  { value: "Nationwide", label: "Projects across Pakistan" },
  { value: "Global", label: "National & international brands" },
  { value: "End-to-End", label: "Design, build & operate" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
