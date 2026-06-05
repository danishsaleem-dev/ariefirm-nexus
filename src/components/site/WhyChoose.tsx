const pillars = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    title: "One firm, end to end",
    text: "We design, build, finance and operate — so a single accountable partner carries your project from concept to daily operations.",
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    title: "Fully compliant & registered",
    text: "Duly registered and aligned with all legal, taxation, regulatory and governmental requirements for doing business in Pakistan.",
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    title: "Trusted by leading brands",
    text: "Deep experience managing commercial, retail, food, entertainment and public-sector facilities with national and international brands.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            Why ArieFirm
          </span>
          <h2
            className="text-3xl font-bold text-foreground lg:text-4xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            One firm,{" "}
            <span style={{ color: "#0046AA" }}>complete coverage</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,46,107,0.55) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Text */}
              <div className="p-7">
                <div
                  className="mb-1 h-1 w-10 rounded-full"
                  style={{ background: "linear-gradient(90deg, #0046AA, #002E6B)" }}
                />
                <h3
                  className="mt-4 text-lg font-semibold text-foreground"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
