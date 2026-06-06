import { createFileRoute, Link } from "@tanstack/react-router";
import { V2Layout } from "../../components/v2/V2Layout";
import { Building2, Scale, TrendingUp, Users, ShieldCheck, Globe, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/v2/about")({
  component: V2AboutPage,
  head: () => ({
    meta: [
      { title: "About ArieFirm — Pakistan's Commercial Development Leader" },
      {
        name: "description",
        content:
          "Learn about ArieFirm — Pakistan's diversified commercial development, consulting, and operations management firm.",
      },
    ],
  }),
});

const values = [
  {
    icon: Building2,
    title: "End-to-End Accountability",
    text: "We design, build and operate — taking full accountability for every phase. No blaming contractors. No hand-off gaps.",
  },
  {
    icon: Scale,
    title: "Legal & Regulatory Integrity",
    text: "Duly registered and fully compliant with all Pakistani legal, taxation and regulatory requirements. Every project, every time.",
  },
  {
    icon: TrendingUp,
    title: "Value Creation Focus",
    text: "Our commercial model converts land and capital into high-performing destinations with clear, evidenced financial returns.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    text: "We structure 20-year relationships built on shared success — not transactional contracts. We grow when our partners grow.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality & Trust",
    text: "All proposals, negotiations and project details are handled with strict confidentiality and professional discretion.",
  },
  {
    icon: Globe,
    title: "National & International Reach",
    text: "We connect Pakistani commercial destinations with global and national brands, elevating every project's commercial value.",
  },
];

const capabilities = [
  "Business Development & Expansion Consulting",
  "Commercial Project Development",
  "Retail & Lifestyle Brand Placement",
  "Shopping Mall Operations & Management",
  "Food Court Development & Operations",
  "Franchise Development & Management",
  "Corporate Advisory Services",
  "Business Strategy & Growth Planning",
  "Legal & Regulatory Compliance Support",
  "Commercial Leasing & Tenant Management",
  "Marketing & Brand Positioning",
  "Facility Management & Operations",
  "Project Management & Execution",
  "Investment Structuring & Feasibility Analysis",
  "Government Liaison & Regulatory Coordination",
  "Real Estate Development & Commercialization",
  "Hospitality & Lifestyle Project Operations",
  "Event, Entertainment & Recreational Venue Management",
];

function V2AboutPage() {
  return (
    <V2Layout>
      {/* Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "#06080F" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(201,163,42,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#C9A32A" }} />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              About ArieFirm
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Pakistan's most{" "}
              <span style={{ color: "#C9A32A" }}>diversified</span>
              <br />
              commercial firm
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              ArieFirm is a diversified business development, consulting, operations management,
              and commercial project execution firm engaged in the planning, development,
              establishment, management, and operation of commercial projects across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20" style={{ background: "#080B14" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                ArieFirm provides comprehensive business solutions across 18 integrated service
                lines. We work with national and international brands and have extensive experience
                in the operation and management of commercial, lifestyle, retail, food,
                entertainment, and public-sector facilities.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                The company is duly registered and compliant with all applicable legal, taxation,
                regulatory, and governmental requirements necessary for conducting its business
                activities within Pakistan.
              </p>
              <Link
                to="/v2/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Explore all service lines <ArrowRight size={14} />
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">
                Full Capability List
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {capabilities.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 py-2.5 px-4 rounded-lg"
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#1549F0" }}
                    />
                    <span className="text-sm text-slate-400">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24" style={{ background: "#06080F" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#1549F0" }} />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Our Principles
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            How we operate
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(21,73,240,0.12)",
                    border: "1px solid rgba(21,73,240,0.2)",
                  }}
                >
                  <v.icon size={18} style={{ color: "#4F7FFF" }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Development */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "#080B14" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#C9A32A" }} />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Featured Development
            </span>
          </div>
          <div
            className="rounded-2xl p-8 lg:p-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(21,73,240,0.1) 0%, rgba(10,13,24,0.8) 100%)",
              border: "1px solid rgba(21,73,240,0.2)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-green-300 mb-5"
                  style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Active Development
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Allama Iqbal Town Commercial Destination
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  ArieFirm is developing a landmark commercial destination in the heart of Lahore's
                  premier commercial district. The development will include lifestyle brands, a
                  curated food court, and entertainment and recreational areas — all designed,
                  funded, constructed, and operated by ArieFirm.
                </p>
                <Link
                  to="/v2/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn about partnering <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: "23 Hunza Block, Allama Iqbal Town, Lahore" },
                  { label: "Front", value: "~107 Feet" },
                  { label: "Depth", value: "~177 Feet" },
                  { label: "Status", value: "Commercially Approved" },
                  { label: "Lease Term", value: "20 Years" },
                  { label: "Development Cost", value: "Borne by ArieFirm" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "#06080F", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work with ArieFirm?
          </h2>
          <p className="text-slate-400 mb-8">
            Reach out to our team for a confidential discussion about your commercial project.
          </p>
          <Link
            to="/v2/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </V2Layout>
  );
}
