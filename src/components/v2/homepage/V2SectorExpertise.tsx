import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const BLUE = "#1547D6";

const sectors = [
  {
    title: "Shopping Malls",
    tag: "Retail Destinations",
    text: "End-to-end mall development, tenant curation, operations and footfall strategy.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700&h=480&fit=crop&auto=format&q=80",
  },
  {
    title: "Food & Dining",
    tag: "F&B Concepts",
    text: "Food court design, kitchen infrastructure, brand curation and daily operations.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&h=480&fit=crop&auto=format&q=80",
  },
  {
    title: "Entertainment & Recreation",
    tag: "Experience Venues",
    text: "Venue development, event programming and experience design for lasting impressions.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=480&fit=crop&auto=format&q=80",
  },
  {
    title: "Retail & Lifestyle Brands",
    tag: "Brand Partnerships",
    text: "National and international lifestyle brand sourcing, placement and structuring.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&h=480&fit=crop&auto=format&q=80",
  },
  {
    title: "Hospitality & Lifestyle",
    tag: "Hospitality Ops",
    text: "Hospitality project development and operations for loyal, returning audiences.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&h=480&fit=crop&auto=format&q=80",
  },
  {
    title: "Public-Sector Facilities",
    tag: "Regulatory",
    text: "Government-regulated commercial facilities navigating approvals and zoning.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=480&fit=crop&auto=format&q=80",
  },
];

export function V2SectorExpertise() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#F8FAFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full" style={{ background: BLUE }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: BLUE }}>
                Sector Expertise
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
            >
              Deep expertise across{" "}
              <span style={{ color: BLUE }}>every</span>
              <br />
              commercial sector
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-base leading-relaxed mb-5" style={{ color: "#64748B" }}>
              From a single-brand franchise to a multi-floor lifestyle destination — ArieFirm has
              sector-specific knowledge to develop and operate it profitably.
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

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Background image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay — always visible at bottom */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,27,62,0.92) 0%, rgba(13,27,62,0.45) 50%, rgba(13,27,62,0.1) 100%)",
                }}
              />

              {/* Blue overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to top, ${BLUE}CC 0%, ${BLUE}55 60%, transparent 100%)` }}
              />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-white/75 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300"
                >
                  {s.text}
                </p>
                <div
                  className="flex items-center gap-1.5 text-sm font-semibold text-white mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
