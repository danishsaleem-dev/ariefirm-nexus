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
  { value: "18+", label: "Integrated service lines" },
  { value: "100%", label: "Compliant & registered" },
  { value: "Nationwide", label: "Projects across Pakistan" },
];

const values = [
  { icon: Target, title: "Our Mission", text: "To plan, develop and operate world-class commercial destinations that create lasting value for landlords, brands and communities." },
  { icon: Eye, title: "Our Vision", text: "To be Pakistan's most trusted partner for developing and managing commercial, retail, lifestyle and entertainment destinations." },
  { icon: Award, title: "Our Promise", text: "Full-cycle delivery — design, build, finance and operate — backed by complete legal and regulatory compliance." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">About us</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
            We build and run commercial destinations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            ArieFirm is a diversified business development, consulting, operations and
            commercial project execution firm — planning, developing, establishing and
            managing commercial projects across Pakistan.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Who we are</h2>
            <p className="mt-4 text-muted-foreground">
              We provide comprehensive business solutions across commercial project
              development, shopping mall and food court operations, retail and lifestyle
              brand placement, franchise development, entertainment venues, hospitality,
              investment structuring, marketing, facility management and more.
            </p>
            <p className="mt-4 text-muted-foreground">
              ArieFirm works with national and international brands and has extensive
              experience operating commercial, retail, food, entertainment and
              public-sector facilities. The company is duly registered and compliant with
              all applicable legal, taxation, regulatory and governmental requirements for
              conducting business in Pakistan.
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
