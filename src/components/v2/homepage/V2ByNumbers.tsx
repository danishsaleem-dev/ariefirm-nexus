const BLUE = "#1547D6";
const BLUE_DARK = "#0F35B0";

const metrics = [
  { value: "18+", label: "Integrated Service Lines", desc: "More capability under one roof than any other firm in Pakistan." },
  { value: "20yr", label: "Long-Term Project Cycles", desc: "Committed partners who stay with your asset for decades." },
  { value: "100%", label: "End-to-End Ownership", desc: "We bear all design, construction and operational costs." },
  { value: "₨0", label: "Cost to Landlord", desc: "ArieFirm develops, builds and operates at its sole expense." },
];

const costItems = ["Architectural Design", "Engineering", "Construction", "Operations", "Maintenance", "Upgrades"];

export function V2ByNumbers() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${BLUE_DARK} 0%, ${BLUE} 100%)` }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
              By The Numbers
            </span>
            <div className="w-10 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The scale of our{" "}
            <span style={{ color: "#FFD76E" }}>commitment</span>
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="absolute -top-3 -right-2 text-7xl font-black leading-none select-none"
                style={{ color: "rgba(255,255,255,0.05)", fontFamily: "'Poppins', sans-serif" }}
              >
                {m.value}
              </div>
              <div
                className="text-5xl font-black text-white mb-3 relative"
                style={{ fontFamily: "'Poppins', sans-serif", color: "#FFD76E" }}
              >
                {m.value}
              </div>
              <div className="text-sm font-semibold text-white mb-2">{m.label}</div>
              <div className="text-xs text-white/60 leading-relaxed">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Feature strip */}
        <div
          className="rounded-2xl p-8 lg:p-10"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ArieFirm develops and operates at its{" "}
                <span style={{ color: "#FFD76E" }}>sole cost and expense</span>
              </h3>
              <p className="text-white/70 leading-relaxed">
                Architectural design, engineering, construction, utilities, interior development,
                operational setup, maintenance and upgrades — all borne entirely by ArieFirm.
                Our partners contribute space; we deliver a world-class commercial destination.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {costItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-center text-white/80"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
