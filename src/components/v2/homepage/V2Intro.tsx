import { Building2, TrendingUp, Scale } from "lucide-react";

const BLUE = "#1547D6";

const pillars = [
  {
    icon: Building2,
    title: "Commercial Development",
    text: "We design, fund, construct and operate commercial destinations — malls, food courts, lifestyle hubs and entertainment zones — at every scale across Pakistan.",
    color: BLUE,
  },
  {
    icon: TrendingUp,
    title: "Business Consulting",
    text: "Strategy, expansion planning, investment structuring and feasibility analysis that turns commercial ambitions into executable, highly profitable ventures.",
    color: "#C9A32A",
  },
  {
    icon: Scale,
    title: "Regulatory & Advisory",
    text: "Corporate advisory, legal compliance, tax support and government liaison — keeping every project and operation fully aligned with Pakistani law and regulation.",
    color: BLUE,
  },
];

export function V2Intro() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-1 rounded-full" style={{ background: "#C9A32A" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A32A" }}>
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start mb-16">
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
            >
              Pakistan's most{" "}
              <span style={{ color: BLUE }}>comprehensive</span>
              <br />
              commercial firm
            </h2>
          </div>
          <div className="pt-2">
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#475569" }}>
              ArieFirm is a diversified business development, consulting, operations management, and
              commercial project execution firm. We are the single partner capable of taking a
              commercial concept from land acquisition through grand opening to sustained daily operations.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>
              Duly registered and compliant with all applicable legal, taxation, regulatory, and
              governmental requirements — our partners operate with full confidence.
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "#ffffff",
                border: "1.5px solid #EEF2FF",
                boxShadow: "0 2px 12px rgba(21,71,214,0.06)",
              }}
            >
              {/* Hover top border accent */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              />

              {/* Index */}
              <div
                className="absolute top-6 right-6 text-5xl font-black leading-none select-none"
                style={{ color: `${p.color}0D` }}
              >
                0{i + 1}
              </div>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${p.color}12`, border: `1.5px solid ${p.color}25` }}
              >
                <p.icon size={22} style={{ color: p.color }} />
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
