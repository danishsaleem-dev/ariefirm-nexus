const steps = [
  {
    step: "01",
    title: "Feasibility & Due Diligence",
    text: "We conduct thorough legal, title, technical and financial feasibility — ensuring every project has a rigorous foundation before a single rupee is committed.",
    items: ["Legal due diligence", "Title verification", "Technical feasibility", "Financial modelling"],
  },
  {
    step: "02",
    title: "Design & Engineering",
    text: "Our teams coordinate architectural design, engineering, utilities and interior development — translating concept into construction-ready plans.",
    items: ["Architectural design", "Structural engineering", "Utilities & MEP", "Interior concepts"],
  },
  {
    step: "03",
    title: "Construction & Development",
    text: "We manage and execute construction end-to-end, controlling cost, schedule and quality with disciplined project management from ground-breaking to handover.",
    items: ["Contractor coordination", "Cost control", "Quality assurance", "Schedule delivery"],
  },
  {
    step: "04",
    title: "Operations & Growth",
    text: "Once open, we manage every aspect of operations — tenant relations, footfall strategy, facility management and marketing — driving sustainable long-term performance.",
    items: ["Tenant management", "Facility ops", "Footfall strategy", "Brand marketing"],
  },
];

export function V2Process() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#080B14" }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(21,73,240,0.4), transparent)",
          marginLeft: "calc(50% - 1px)",
          display: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#1549F0" }} />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              How We Work
            </span>
            <div className="h-px w-10" style={{ background: "#1549F0" }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            From concept to{" "}
            <span style={{ color: "#1549F0" }}>commercial success</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Connector line between cards on desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 -right-3 w-6 h-px z-10"
                  style={{ background: "rgba(21,73,240,0.4)" }}
                />
              )}

              {/* Step number */}
              <div
                className="text-5xl font-black mb-5 leading-none"
                style={{ color: "rgba(21,73,240,0.25)" }}
              >
                {s.step}
              </div>

              <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.text}</p>

              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "#1549F0" }}
                    />
                    <span className="text-xs text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
