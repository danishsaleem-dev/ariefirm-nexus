const BLUE = "#1547D6";

const testimonials = [
  {
    quote: "ArieFirm handled everything — from design approvals to brand negotiations. Having a single team accountable for the entire project saved us months and significant cost.",
    name: "Malik Enterprises",
    role: "Commercial Property Partner, Lahore",
    initial: "M",
  },
  {
    quote: "Their regulatory expertise is unmatched. ArieFirm navigated every government approval and commercialization requirement without a single delay on our side.",
    name: "Capital Holdings",
    role: "Real Estate Development Group",
    initial: "C",
  },
  {
    quote: "The food court they developed exceeded our footfall projections by 40%. Their brand curation and operational setup created a destination people actively travel to.",
    name: "Prime Developments",
    role: "Mixed-Use Project, Islamabad",
    initial: "P",
  },
];

export function V2Testimonials() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-1 rounded-full" style={{ background: "#C9A32A" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A32A" }}>
            What Partners Say
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <h2
            className="text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
          >
            Trusted by property owners
            <br />
            and{" "}
            <span style={{ color: "#C9A32A" }}>commercial investors</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="rounded-2xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: i === 1 ? BLUE : "#ffffff",
                border: i === 1 ? "none" : "1.5px solid #E5EAFF",
                boxShadow: i === 1 ? `0 20px 40px ${BLUE}30` : "0 2px 12px rgba(21,71,214,0.05)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="15" height="15" viewBox="0 0 24 24" fill={i === 1 ? "#FFD76E" : "#C9A32A"}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: i === 1 ? "rgba(255,255,255,0.9)" : "#475569", fontFamily: "'Poppins', sans-serif" }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: i === 1 ? "rgba(255,255,255,0.2)" : `${BLUE}15`,
                    color: i === 1 ? "white" : BLUE,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: i === 1 ? "white" : "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: i === 1 ? "rgba(255,255,255,0.6)" : "#94A3B8" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
