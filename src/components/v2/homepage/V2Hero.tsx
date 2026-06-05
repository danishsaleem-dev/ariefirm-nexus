import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, MapPin, CheckCircle2 } from "lucide-react";

const trustBadges = [
  "Duly Registered",
  "Tax Compliant",
  "Nationally Active",
  "20+ Year Projects",
];

export function V2Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#06080F" }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "900px",
            height: "900px",
            top: "-200px",
            right: "-200px",
            background:
              "radial-gradient(ellipse, rgba(21,73,240,0.18) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "600px",
            height: "600px",
            bottom: "-100px",
            left: "-100px",
            background:
              "radial-gradient(ellipse, rgba(201,163,42,0.08) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Location Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 mb-6"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <MapPin size={12} className="text-blue-400" />
              Operating across Pakistan · Headquartered in Lahore
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
              Build. Operate.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #1549F0, #4F7FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dominate
              </span>{" "}
              <br />
              <span style={{ color: "#C9A32A" }}>Commercial</span> Markets.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              ArieFirm is Pakistan's premier diversified firm for commercial project development,
              operations management, and business consulting — from feasibility to full operation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/v2/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110 active:scale-95"
                style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/v2/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-white transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Play size={14} fill="currentColor" />
                Explore Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-1.5 text-xs text-slate-400"
                >
                  <CheckCircle2 size={13} className="text-blue-400" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats Panel */}
          <div className="relative">
            {/* Main card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "18+", label: "Integrated Service Lines", color: "#1549F0" },
                  { value: "16", label: "Specialised Disciplines", color: "#C9A32A" },
                  { value: "20yr", label: "Long-Term Project Cycles", color: "#1549F0" },
                  { value: "100%", label: "End-to-End Delivery", color: "#C9A32A" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: s.color }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-500 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Featured Project Snippet */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: "linear-gradient(135deg, rgba(21,73,240,0.12), rgba(10,50,200,0.06))",
                  border: "1px solid rgba(21,73,240,0.2)",
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-blue-300 uppercase tracking-widest">
                    Featured Development
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(74,222,128,0.15)", color: "#4ADE80" }}
                  >
                    Active
                  </span>
                </div>
                <div className="text-white font-semibold mb-1">Gulberg II Commercial Hub</div>
                <div className="text-slate-400 text-xs">
                  107ft × 177ft · Lahore · Lifestyle, Food & Entertainment Destination
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "rgba(10,13,24,0.95)",
                border: "1px solid rgba(201,163,42,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(201,163,42,0.15)" }}
              >
                <CheckCircle2 size={16} style={{ color: "#C9A32A" }} />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Fully Compliant</div>
                <div className="text-slate-500 text-xs">Registered · Tax Filed · Legal</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(transparent, #06080F)" }}
      />
    </section>
  );
}
