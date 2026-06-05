import { Building2, TrendingUp, Scale } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Commercial Development",
    text: "We design, fund, construct and operate commercial destinations — malls, food courts, lifestyle hubs and entertainment zones — at every scale.",
    color: "#1549F0",
  },
  {
    icon: TrendingUp,
    title: "Business Consulting",
    text: "Strategy, expansion planning, investment structuring and feasibility analysis that turns business ambitions into executable, profitable ventures.",
    color: "#C9A32A",
  },
  {
    icon: Scale,
    title: "Regulatory & Advisory",
    text: "Corporate advisory, legal compliance, tax support and government liaison — keeping every project and operation fully aligned with Pakistani law.",
    color: "#1549F0",
  },
];

export function V2Intro() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#06080F" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: "#C9A32A" }} />
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pakistan's most{" "}
              <span style={{ color: "#C9A32A" }}>comprehensive</span>
              <br />
              commercial firm
            </h2>
          </div>
          <div>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              ArieFirm is a diversified business development, consulting, operations management,
              and commercial project execution firm engaged across Pakistan. We are the single
              partner capable of taking a commercial concept from land acquisition through grand
              opening to sustained daily operations.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Duly registered and compliant with all applicable legal, taxation, regulatory, and
              governmental requirements — our clients operate with confidence, knowing every detail
              is handled by professionals.
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Index number */}
              <div
                className="absolute top-6 right-6 text-6xl font-bold leading-none select-none"
                style={{ color: "rgba(255,255,255,0.04)" }}
              >
                0{i + 1}
              </div>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}
              >
                <p.icon size={22} style={{ color: p.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.text}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
