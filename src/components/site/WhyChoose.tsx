import { Layers, ShieldCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "One firm, end to end",
    text: "We design, build, finance and operate — so a single accountable partner carries your project from concept to daily operations.",
  },
  {
    icon: ShieldCheck,
    title: "Fully compliant & registered",
    text: "Duly registered and aligned with all legal, taxation, regulatory and governmental requirements for doing business in Pakistan.",
  },
  {
    icon: Users,
    title: "Trusted by leading brands",
    text: "Deep experience managing commercial, retail, food, entertainment and public-sector facilities with national and international brands.",
  },
];


export function WhyChoose() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="text-center md:text-left">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
