import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const BLUE = "#1547D6";
const BLUE_DARK = "#0F35B0";

const stats = [
  { value: "18+", label: "Service Lines" },
  { value: "16", label: "Disciplines" },
  { value: "20yr", label: "Project Cycles" },
  { value: "₨0", label: "Cost to Landlord" },
];

const badges = ["Duly Registered", "Tax Compliant", "Nationally Active", "20+ Year Projects"];

export function V2Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${BLUE_DARK} 0%, ${BLUE} 50%, #2E63F5 100%)`,
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          top: "-200px",
          right: "-150px",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Radial glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-100px",
          left: "-100px",
          background: "radial-gradient(ellipse, rgba(201,163,42,0.12) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Content — centered */}
      <div className="relative w-full max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center">

        {/* Top badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Pakistan's Premier Commercial Development Firm · Headquartered in Lahore
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Build. Operate.
          <br />
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(90deg, #FFD76E, #C9A32A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dominate
          </span>{" "}
          Commercial
          <br />
          <span style={{ color: "rgba(255,255,255,0.85)" }}>Markets.</span>
        </h1>

        {/* Sub */}
        <p
          className="text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Poppins', sans-serif" }}
        >
          ArieFirm is Pakistan's most diversified firm for commercial project development,
          operations management, and business consulting — from feasibility study to full,
          sustained daily operation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <Link
            to="/v2/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg"
            style={{ background: "linear-gradient(135deg, #C9A32A, #A07C1A)" }}
          >
            Start a Project
            <ArrowRight size={17} />
          </Link>
          <Link
            to="/v2/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-white/15"
            style={{
              color: "white",
              border: "2px solid rgba(255,255,255,0.35)",
            }}
          >
            Explore Services
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <CheckCircle2 size={14} style={{ color: "#FFD76E" }} />
              {b}
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="w-full max-w-2xl rounded-2xl grid grid-cols-4 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-5 px-4 text-center"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}
            >
              <div
                className="text-2xl lg:text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.4)" }} />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(transparent, rgba(255,255,255,0.03))" }}
      />
    </section>
  );
}
