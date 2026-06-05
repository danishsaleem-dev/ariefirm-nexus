import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const footerServices = [
  "Commercial Project Development",
  "Shopping Mall Operations",
  "Food Court Development",
  "Retail & Lifestyle Brands",
  "Entertainment Venues",
  "Franchise Development",
  "Investment & Feasibility",
  "Corporate Advisory",
];

export function V2Footer() {
  return (
    <footer style={{ background: "#04060D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* CTA Band */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A1A4A 0%, #0D0F1E 60%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(21,73,240,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-blue-300 mb-4"
                style={{ background: "rgba(21,73,240,0.15)", border: "1px solid rgba(21,73,240,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Available for New Projects
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                Ready to develop your{" "}
                <span style={{ color: "#C9A32A" }}>next commercial</span>
                <br />
                destination?
              </h2>
              <p className="text-slate-400 max-w-lg">
                From feasibility to grand opening — ArieFirm delivers end-to-end commercial project
                development across Pakistan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/v2/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
              >
                Start a Project
              </Link>
              <Link
                to="/v2/services"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/v2" className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.5 2 3 5.5 3 9c0 2.5 1.5 4.5 3.5 5.5L5 20h14l-1.5-5.5C19.5 13.5 21 11.5 21 9c0-3.5-3.5-7-9-7z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
              <span
                className="text-lg font-bold"
                style={{
                  background: "linear-gradient(90deg, #ffffff, #C9A32A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ArieFirm
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Pakistan's premier diversified firm for commercial development, consulting, and
              operations management. Registered and fully compliant.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/v2" },
                { label: "About ArieFirm", to: "/v2/about" },
                { label: "Services", to: "/v2/services" },
                { label: "Contact Us", to: "/v2/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link
                    to="/v2/services"
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-500 leading-relaxed">
                  25-K, Gulberg II
                  <br />
                  Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <a href="tel:+92300000000" className="text-sm text-slate-500 hover:text-white transition-colors">
                  +92 300 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <a
                  href="mailto:info@ariefirm.com"
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                >
                  info@ariefirm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} ArieFirm. All rights reserved. Registered in Pakistan.
          </p>
          <div className="flex items-center gap-1">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
              style={{ background: "rgba(21,73,240,0.1)", color: "#6B9BFF" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Fully Compliant & Registered
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
