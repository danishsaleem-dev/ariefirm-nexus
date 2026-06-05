import { Link } from "@tanstack/react-router";
import {
  Building2, Store, UtensilsCrossed, ShoppingBag,
  Ticket, Network, TrendingUp, LineChart,
  Building, Handshake, Megaphone, Wrench,
  ClipboardCheck, Scale, Landmark, Hotel,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Commercial Project Development", tag: "Development", color: "#1549F0" },
  { icon: Store, title: "Shopping Mall Operations", tag: "Operations", color: "#C9A32A" },
  { icon: UtensilsCrossed, title: "Food Court Development", tag: "F&B", color: "#1549F0" },
  { icon: ShoppingBag, title: "Retail & Lifestyle Brands", tag: "Retail", color: "#C9A32A" },
  { icon: Ticket, title: "Entertainment Venues", tag: "Entertainment", color: "#1549F0" },
  { icon: Network, title: "Franchise Development", tag: "Growth", color: "#C9A32A" },
  { icon: TrendingUp, title: "Business Development & Growth", tag: "Strategy", color: "#1549F0" },
  { icon: LineChart, title: "Investment & Feasibility", tag: "Finance", color: "#C9A32A" },
  { icon: Building, title: "Real Estate Commercialization", tag: "Property", color: "#1549F0" },
  { icon: Handshake, title: "Commercial Leasing & Tenants", tag: "Leasing", color: "#C9A32A" },
  { icon: Megaphone, title: "Marketing & Brand Positioning", tag: "Marketing", color: "#1549F0" },
  { icon: Wrench, title: "Facility Management", tag: "FM", color: "#C9A32A" },
  { icon: ClipboardCheck, title: "Project Management", tag: "PMO", color: "#1549F0" },
  { icon: Scale, title: "Corporate Advisory", tag: "Advisory", color: "#C9A32A" },
  { icon: Landmark, title: "Government Liaison", tag: "Regulatory", color: "#1549F0" },
  { icon: Hotel, title: "Hospitality & Lifestyle Ops", tag: "Hospitality", color: "#C9A32A" },
];

export function V2ServicesGrid() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, #06080F 0%, #080B14 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "#1549F0" }} />
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Service Lines
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              16 integrated{" "}
              <span style={{ color: "#1549F0" }}>disciplines</span>
              <br />
              under one firm
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-slate-400 text-base leading-relaxed mb-5">
              No fragmented outsourcing. Every service line operates under a single, accountable
              team with end-to-end visibility.
            </p>
            <Link
              to="/v2/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all services <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/v2/services"
              className="group relative rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${s.color}08, transparent)`,
                  border: `1px solid ${s.color}25`,
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${s.color}15` }}
                  >
                    <s.icon size={17} style={{ color: s.color }} />
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${s.color}15`,
                      color: s.color,
                      border: `1px solid ${s.color}25`,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-blue-100 transition-colors">
                  {s.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
