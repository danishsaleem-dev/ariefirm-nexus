const BLUE = "#1547D6";

const steps = [
  {
    step: "01",
    title: "Feasibility & Due Diligence",
    text: "Legal, title, technical and financial feasibility — every project gets a rigorous foundation before a single rupee is committed.",
    items: ["Legal due diligence", "Title verification", "Technical feasibility", "Financial modelling"],
  },
  {
    step: "02",
    title: "Design & Engineering",
    text: "Architectural design, engineering, utilities and interior development — translating concept into construction-ready plans.",
    items: ["Architectural design", "Structural engineering", "Utilities & MEP", "Interior concepts"],
  },
  {
    step: "03",
    title: "Construction & Delivery",
    text: "End-to-end construction management controlling cost, schedule and quality from ground-breaking to handover.",
    items: ["Contractor coordination", "Cost control", "Quality assurance", "Schedule delivery"],
  },
  {
    step: "04",
    title: "Operations & Growth",
    text: "We manage every aspect of daily operations — tenant relations, footfall strategy, facility management and marketing.",
    items: ["Tenant management", "Facility ops", "Footfall strategy", "Brand marketing"],
  },
];

export function V2Process() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#F8FAFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-1 rounded-full" style={{ background: BLUE }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: BLUE }}>
              How We Work
            </span>
            <div className="w-10 h-1 rounded-full" style={{ background: BLUE }} />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
          >
            From concept to{" "}
            <span style={{ color: BLUE }}>commercial success</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "#ffffff",
                border: "1.5px solid #E5EAFF",
                boxShadow: "0 2px 10px rgba(21,71,214,0.05)",
              }}
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 -right-3 w-6 h-px"
                  style={{ background: `${BLUE}40` }}
                />
              )}

              {/* Step number */}
              <div
                className="text-5xl font-black mb-5 leading-none"
                style={{ color: `${BLUE}18`, fontFamily: "'Poppins', sans-serif" }}
              >
                {s.step}
              </div>

              {/* Top accent line */}
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ background: BLUE }}
              />

              <h3
                className="text-base font-bold mb-3"
                style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
                {s.text}
              </p>

              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: BLUE }} />
                    <span className="text-xs font-medium" style={{ color: "#64748B" }}>{item}</span>
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
