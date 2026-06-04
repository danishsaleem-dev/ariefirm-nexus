import { Lightbulb, ShieldCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Handle matters with clarity",
    text: "Plain-language advice and documentation make every decision easy to understand and quick to act on.",
  },
  {
    icon: ShieldCheck,
    title: "Protect all your interests",
    text: "We look beyond the minimum — covering the practical risks that protect your project end to end.",
  },
  {
    icon: Users,
    title: "Tap into our experience",
    text: "A multidisciplinary team across law, development and finance, ready to guide, review or deliver for you.",
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
