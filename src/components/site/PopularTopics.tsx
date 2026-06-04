import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { popularTopics } from "@/data/site";

export function PopularTopics() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Browse
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Most popular topics
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore the areas clients ask us about most — clear guidance and
            services across every discipline we cover.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {popularTopics.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-7 shadow-soft"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/services"
                      className="group flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="underline-offset-4 group-hover:underline">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold"
              >
                {group.all} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
