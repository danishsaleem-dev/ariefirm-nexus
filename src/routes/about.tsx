import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ArieFirm" },
      {
        name: "description",
        content:
          "ArieFirm is a diversified business development, consulting and operations firm developing and managing commercial, retail, food and entertainment destinations across Pakistan.",
      },
      { property: "og:title", content: "About — ArieFirm" },
      { property: "og:description", content: "A diversified development and operations firm building commercial destinations across Pakistan." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { value: "9", label: "Integrated practice areas" },
  { value: "100%", label: "End-to-end delivery" },
  { value: "24/7", label: "Advisory support" },
];

const values = [
  { icon: Target, title: "Our Mission", text: "To deliver legal, development and investment outcomes with clarity, integrity and measurable results." },
  { icon: Eye, title: "Our Vision", text: "To be the most trusted single partner for ambitious projects — from the first contract to the final handover." },
  { icon: Award, title: "Our Promise", text: "Practical advice, rigorous execution, and a relentless focus on protecting your interests." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">About us</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
            One firm, built on trust and delivery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Ariefirm brings together specialists in law, construction, finance and
            trade — so your projects are guided by a single, accountable partner.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Who we are</h2>
            <p className="mt-4 text-muted-foreground">
              From legal consultancy and disputes management to building
              developments, government projects, settlements, global village
              master-planning, investment, financing and trading — Ariefirm covers
              the full spectrum of what complex ventures demand.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our advantage is integration. Instead of coordinating between separate
              firms, you get one team that understands the legal, technical and
              financial dimensions of your project and moves them forward together.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 self-center">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center shadow-soft">
                <p className="font-serif text-3xl font-semibold text-gold">{s.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-xl border border-border bg-card p-7 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2.5 text-muted-foreground">{v.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
