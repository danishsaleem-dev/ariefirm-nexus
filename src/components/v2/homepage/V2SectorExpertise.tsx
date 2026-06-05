import { Store, UtensilsCrossed, Ticket, ShoppingBag, Hotel, Landmark } from "lucide-react";

const sectors = [
  {
    icon: Store,
    title: "Shopping Malls",
    text: "End-to-end development, tenant mix curation, operations and footfall strategy for retail destinations.",
    tag: "Retail Destinations",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Dining",
    text: "Food court design, kitchen infrastructure, brand curation and daily operations that draw consistent crowds.",
    tag: "F&B Concepts",
  },
  {
    icon: Ticket,
    title: "Entertainment & Recreation",
    text: "Venue development, event programming, recreation zones and experience design for lasting impressions.",
    tag: "Entertainment Venues",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Lifestyle",
    text: "National and international lifestyle brand sourcing, placement and partnership structuring.",
    tag: "Brand Partnerships",
  },
  {
    icon: Hotel,
    title: "Hospitality & Lifestyle",
    text: "Hospitality project development and operations delivering service quality that builds loyal audiences.",
    tag: "Hospitality Ops",
  },
  {
    icon: Landmark,
    title: "Public-Sector Facilities",
    text: "Government-regulated commercial facilities navigating approvals, zoning and authority relations.",
    tag: "Regulatory",
  },
];

export function V2SectorExpertise() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#06080F" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10" style={{ background: "#1549F0" }} />
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Sector Expertise
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Deep expertise across{" "}
            <span style={{ color: "#1549F0" }}>every</span>
            <br />
            commercial sector
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From a single-brand franchise to a multi-floor lifestyle destination, ArieFirm has the
            sector-specific knowledge to develop and operate it profitably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  i % 2 === 0
                    ? "rgba(255,255,255,0.025)"
                    : "rgba(255,255,255,0.018)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at 30% 30%, rgba(21,73,240,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(21,73,240,0.12)",
                      border: "1px solid rgba(21,73,240,0.2)",
                    }}
                  >
                    <s.icon size={20} style={{ color: "#4F7FFF" }} />
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-slate-500"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
