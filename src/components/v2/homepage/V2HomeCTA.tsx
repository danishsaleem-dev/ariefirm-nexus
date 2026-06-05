import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function V2HomeCTA() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#080B14" }}
    >
      {/* Gradient accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(21,73,240,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-blue-300 mb-8"
          style={{ background: "rgba(21,73,240,0.15)", border: "1px solid rgba(21,73,240,0.25)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Accepting new development partnerships
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Your commercial vision.
          <br />
          <span style={{ color: "#C9A32A" }}>Our complete execution.</span>
        </h2>

        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you own land, operate a business, or are exploring commercial investment —
          ArieFirm provides the expertise, capital approach, and operational depth to make it
          exceptional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            to="/v2/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110 active:scale-95"
            style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+92300000000"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-white transition-all hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Phone size={16} />
            Call Us Directly
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          {["No Obligation", "Confidential", "Pakistan-Registered Firm", "Legal Compliance Guaranteed"].map(
            (t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                {t}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
