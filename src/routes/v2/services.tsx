import { createFileRoute, Link } from "@tanstack/react-router";
import { V2Layout } from "../../components/v2/V2Layout";
import { services } from "../../data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/v2/services")({
  component: V2ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — ArieFirm | 16 Integrated Commercial Service Lines" },
      {
        name: "description",
        content:
          "Explore ArieFirm's 16 integrated service lines spanning commercial development, operations, retail, advisory and more.",
      },
    ],
  }),
});

const categoryGroups = [
  {
    category: "Development & Construction",
    color: "#1549F0",
    slugs: [
      "commercial-project-development",
      "shopping-mall-operations",
      "food-court-development",
      "real-estate-commercialization",
      "project-management-execution",
    ],
  },
  {
    category: "Retail, Lifestyle & Entertainment",
    color: "#C9A32A",
    slugs: [
      "retail-lifestyle-brands",
      "entertainment-recreation",
      "franchise-development",
      "hospitality-lifestyle",
      "marketing-brand-positioning",
    ],
  },
  {
    category: "Advisory, Investment & Compliance",
    color: "#1549F0",
    slugs: [
      "investment-feasibility",
      "business-development",
      "leasing-tenant-management",
      "facility-management",
      "corporate-legal-compliance",
      "government-liaison",
    ],
  },
];

function V2ServicesPage() {
  return (
    <V2Layout>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "#06080F" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 70% 30%, rgba(21,73,240,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#1549F0" }} />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Service Lines
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              16 disciplines.
              <br />
              <span style={{ color: "#1549F0" }}>One firm.</span>
            </h1>
            <div className="pt-4">
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Every service ArieFirm provides is integrated — meaning our teams share knowledge,
                data and accountability. There are no hand-off gaps, no miscommunication between
                contractors, no excuses.
              </p>
              <Link
                to="/v2/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Discuss your project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 lg:py-20" style={{ background: "#06080F" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {categoryGroups.map((group) => {
            const groupServices = services.filter((s) => group.slugs.includes(s.slug));
            return (
              <div key={group.category}>
                {/* Category heading */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(90deg, ${group.color}40, transparent)` }}
                  />
                  <span
                    className="text-sm font-semibold px-4 py-1.5 rounded-full"
                    style={{
                      color: group.color,
                      background: `${group.color}12`,
                      border: `1px solid ${group.color}25`,
                    }}
                  >
                    {group.category}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(270deg, ${group.color}40, transparent)` }}
                  />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {groupServices.map((s) => (
                    <div
                      key={s.slug}
                      className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                        style={{
                          background: `${group.color}15`,
                          border: `1px solid ${group.color}25`,
                        }}
                      >
                        <s.icon size={20} style={{ color: group.color }} />
                      </div>

                      <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.description}</p>

                      <ul className="space-y-2">
                        {s.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: group.color }}
                            />
                            <span className="text-xs text-slate-500">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, #06080F 0%, #080B14 100%)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a combination of services?
          </h2>
          <p className="text-slate-400 mb-8">
            Most projects require multiple disciplines. ArieFirm assembles the right team from
            across all 16 service lines for your specific project.
          </p>
          <Link
            to="/v2/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
          >
            Talk to Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </V2Layout>
  );
}
