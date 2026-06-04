import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            What we do
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            One firm, complete coverage
          </h2>
          <p className="mt-4 text-muted-foreground">
            From legal counsel to construction delivery and global trade, Ariefirm
            handles the full lifecycle of your ventures.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to="/services"
                className="group rounded-xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 flex items-center gap-1.5 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" />
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
