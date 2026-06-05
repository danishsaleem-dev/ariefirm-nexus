import { Link } from "@tanstack/react-router";
import {
  Building2, Store, UtensilsCrossed, ShoppingBag, Ticket, Network,
  TrendingUp, LineChart, Building, Handshake, Megaphone, Wrench,
  ClipboardCheck, Scale, Landmark, Hotel, ArrowRight,
} from "lucide-react";

const BLUE = "#1547D6";

const services = [
  { icon: Building2, title: "Commercial Project Development", tag: "Development" },
  { icon: Store, title: "Shopping Mall Operations", tag: "Operations" },
  { icon: UtensilsCrossed, title: "Food Court Development", tag: "F&B" },
  { icon: ShoppingBag, title: "Retail & Lifestyle Brands", tag: "Retail" },
  { icon: Ticket, title: "Entertainment Venues", tag: "Entertainment" },
  { icon: Network, title: "Franchise Development", tag: "Growth" },
  { icon: TrendingUp, title: "Business Development & Growth", tag: "Strategy" },
  { icon: LineChart, title: "Investment & Feasibility", tag: "Finance" },
  { icon: Building, title: "Real Estate Commercialization", tag: "Property" },
  { icon: Handshake, title: "Commercial Leasing & Tenants", tag: "Leasing" },
  { icon: Megaphone, title: "Marketing & Brand Positioning", tag: "Marketing" },
  { icon: Wrench, title: "Facility Management", tag: "FM" },
  { icon: ClipboardCheck, title: "Project Management", tag: "PMO" },
  { icon: Scale, title: "Corporate Advisory", tag: "Advisory" },
  { icon: Landmark, title: "Government Liaison", tag: "Regulatory" },
  { icon: Hotel, title: "Hospitality & Lifestyle Ops", tag: "Hospitality" },
];

export function V2ServicesGrid() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ background: BLUE }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: BLUE }}>
                Service Lines
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
            >
              16 integrated{" "}
              <span style={{ color: BLUE }}>disciplines</span>
              <br />
              under one firm
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-base leading-relaxed mb-5" style={{ color: "#64748B" }}>
              No fragmented outsourcing. Every service line operates under a single accountable team
              with complete end-to-end visibility.
            </p>
            <Link
              to="/v2/services"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: BLUE }}
            >
              View all services <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/v2/services"
              className="group relative rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "#F8FAFF",
                border: "1.5px solid #E5EAFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${BLUE}40`;
                e.currentTarget.style.background = "#EEF2FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E5EAFF";
                e.currentTarget.style.background = "#F8FAFF";
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${BLUE}12` }}
                >
                  <s.icon size={17} style={{ color: BLUE }} />
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${BLUE}10`, color: BLUE, border: `1px solid ${BLUE}20` }}
                >
                  {s.tag}
                </span>
              </div>
              <h3
                className="text-sm font-semibold leading-snug"
                style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
              >
                {s.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
