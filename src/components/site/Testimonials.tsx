import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ariefirm guided our mixed-use development from feasibility to handover. Their legal and project teams worked as one — seamless and dependable.",
    name: "Daniel R.",
    role: "Property Developer",
  },
  {
    quote:
      "The investment structuring advice was sharp and clear. They secured financing terms we didn't think were possible.",
    name: "Sara M.",
    role: "Managing Director",
  },
  {
    quote:
      "On a complex government project, their compliance and dispute management kept everything on track. Highly recommended.",
    name: "Omar K.",
    role: "Infrastructure Lead",
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
