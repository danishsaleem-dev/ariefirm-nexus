const testimonials = [
  {
    quote:
      "ArieFirm handled everything — from design approvals to brand negotiations. Having a single team accountable for the entire project saved us months and significant cost.",
    name: "Malik Enterprises",
    role: "Commercial Property Partner, Lahore",
    initial: "M",
  },
  {
    quote:
      "Their regulatory expertise is unmatched. ArieFirm navigated every government approval and commercialization requirement without a single delay on our side.",
    name: "Capital Holdings",
    role: "Real Estate Development Group",
    initial: "C",
  },
  {
    quote:
      "The food court they developed exceeded our footfall projections by 40%. Their brand curation and operational setup created a destination people actively travel to.",
    name: "Prime Developments",
    role: "Mixed-Use Project, Islamabad",
    initial: "P",
  },
];

export function V2Testimonials() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#06080F" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10" style={{ background: "#C9A32A" }} />
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            What Partners Say
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Trusted by property owners
            <br />
            and{" "}
            <span style={{ color: "#C9A32A" }}>commercial investors</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: i === 1 ? "rgba(21,73,240,0.08)" : "rgba(255,255,255,0.025)",
                border: i === 1 ? "1px solid rgba(21,73,240,0.2)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C9A32A">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-slate-300 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
