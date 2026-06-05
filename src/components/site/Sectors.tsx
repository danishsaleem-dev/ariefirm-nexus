import { sectors, stats } from "@/data/site";

export function Sectors() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Sectors we operate in
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Destinations people love to visit
          </h2>
          <p className="mt-4 text-muted-foreground">
            From retail and dining to entertainment and hospitality, we develop and
            operate the places where commerce and lifestyle meet.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-8 text-center">
              <p className="font-serif text-3xl font-semibold text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
