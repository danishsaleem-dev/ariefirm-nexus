import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

const BLUE = "#1547D6";
const BLUE_DARK = "#0F35B0";

export function V2HomeCTA() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#F8FAFF" }}
    >
      {/* Decorative blue arc */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${BLUE}06, transparent)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{ background: `${BLUE}10`, color: BLUE, border: `1.5px solid ${BLUE}20` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Accepting new development partnerships
        </div>

        <h2
          className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ color: "#0D1B3E", fontFamily: "'Poppins', sans-serif" }}
        >
          Your commercial vision.
          <br />
          <span style={{ color: BLUE }}>Our complete execution.</span>
        </h2>

        <p
          className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "#64748B", fontFamily: "'Poppins', sans-serif" }}
        >
          Whether you own land, operate a business, or are exploring commercial investment —
          ArieFirm provides the expertise, capital approach, and operational depth to make it
          exceptional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            to="/v2/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg"
            style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`, boxShadow: `0 8px 24px ${BLUE}35` }}
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+923006885680"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-white"
            style={{ color: BLUE, border: `2px solid ${BLUE}25`, background: "white" }}
          >
            <Phone size={16} />
            Call Us Directly
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "#94A3B8" }}>
          {["No Obligation", "Confidential", "Pakistan-Registered Firm", "Legal Compliance Guaranteed"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full" style={{ background: "#CBD5E1" }} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
