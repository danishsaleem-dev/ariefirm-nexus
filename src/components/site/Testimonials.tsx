import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "ArieFirm took our commercial plot from concept to a thriving destination — design, construction and operations handled by one accountable team.",
    name: "Landlord & Developer",
    role: "Gulberg, Lahore",
  },
  {
    quote:
      "Their tenant mix and leasing strategy filled the mall with the right brands and kept footfall strong from day one.",
    name: "Retail Partner",
    role: "Lifestyle Brand",
  },
  {
    quote:
      "From feasibility and investment structuring to government liaison, ArieFirm managed the complexity so we could focus on returns.",
    name: "Investment Partner",
    role: "Commercial Project",
  },
];


export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Client trust
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Trusted by clients across sectors
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
