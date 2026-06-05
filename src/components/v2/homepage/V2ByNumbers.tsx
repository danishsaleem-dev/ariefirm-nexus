const metrics = [
  {
    value: "18+",
    label: "Integrated Service Lines",
    description: "More capability under one roof than any other firm in Pakistan.",
    color: "#1549F0",
  },
  {
    value: "20yr",
    label: "Long-Term Project Cycles",
    description: "Committed partners who stay with your asset for decades.",
    color: "#C9A32A",
  },
  {
    value: "100%",
    label: "End-to-End Ownership",
    description: "We bear all design, construction and operational costs.",
    color: "#1549F0",
  },
  {
    value: "₨0",
    label: "Cost to Landlord",
    description: "ArieFirm develops, builds and operates at its sole expense.",
    color: "#C9A32A",
  },
];

export function V2ByNumbers() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#080B14" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(21,73,240,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#C9A32A" }} />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              By The Numbers
            </span>
            <div className="h-px w-10" style={{ background: "#C9A32A" }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            The scale of our{" "}
            <span style={{ color: "#C9A32A" }}>commitment</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Background number watermark */}
              <div
                className="absolute -top-4 -right-2 text-8xl font-black leading-none select-none"
                style={{ color: `${m.color}08` }}
              >
                {m.value}
              </div>
              <div
                className="text-5xl font-black mb-3 relative"
                style={{ color: m.color }}
              >
                {m.value}
              </div>
              <div className="text-sm font-semibold text-white mb-2">{m.label}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{m.description}</div>
            </div>
          ))}
        </div>

        {/* Feature Strip */}
        <div
          className="rounded-2xl p-8 lg:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(21,73,240,0.12) 0%, rgba(10,50,200,0.06) 100%)",
            border: "1px solid rgba(21,73,240,0.2)",
          }}
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                ArieFirm develops and operates at its{" "}
                <span style={{ color: "#C9A32A" }}>sole cost and expense</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Architectural design, engineering, construction, utilities, interior development,
                operational setup, maintenance and upgrades — all borne entirely by ArieFirm. Our
                partners contribute space; we deliver a world-class commercial destination.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Architectural Design",
                "Engineering",
                "Construction",
                "Operations",
                "Maintenance",
                "Upgrades",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg px-3 py-2.5 text-xs font-medium text-blue-300 text-center"
                  style={{
                    background: "rgba(21,73,240,0.1)",
                    border: "1px solid rgba(21,73,240,0.15)",
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
