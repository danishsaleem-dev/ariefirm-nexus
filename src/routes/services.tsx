import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/site";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ArieFirm" },
      {
        name: "description",
        content:
          "ArieFirm services: commercial project development, shopping mall & food court operations, retail & lifestyle brands, franchise, entertainment, investment, leasing, marketing, facility management and compliance.",
      },
      { property: "og:title", content: "Services — ArieFirm" },
      { property: "og:description", content: "Complete coverage across development, operations, lifestyle, investment and compliance." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Our services</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
            Comprehensive business solutions, end to end
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            From developing and operating commercial destinations to retail, food,
            entertainment, investment and compliance — ArieFirm delivers it all under one roof.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="grid gap-6 rounded-xl border border-border bg-card p-7 shadow-soft md:grid-cols-[auto_1fr_1fr] md:items-start md:p-9"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{service.description}</p>
                </div>
                <ul className="grid gap-2.5 self-center sm:grid-cols-2 md:grid-cols-1">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/90">
                      <Check className="h-4 w-4 shrink-0 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
