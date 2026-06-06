import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Linkedin, Twitter, ArrowUpRight, ArrowRight } from "lucide-react";

const BLUE = "#1547D6";
const BLUE_DARK = "#0F35B0";

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
    <footer style={{ background: "#0A1A4A" }}>
      {/* CTA Band */}
      <div
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${BLUE_DARK} 0%, ${BLUE} 100%)` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 mb-5"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for New Projects
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Ready to develop your{" "}
                <span style={{ color: "#FFD76E" }}>next commercial</span>
                <br />
                destination?
              </h2>
              <p className="text-white/70 max-w-lg">
                From feasibility to grand opening — ArieFirm delivers end-to-end commercial
                project development across Pakistan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/v2/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }}
              >
                Start a Project <ArrowRight size={14} />
              </Link>
              <Link
                to="/v2/services"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
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
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/v2" className="flex items-center gap-3 mb-5">
              <img
                src="/ariefirm-logo.png"
                alt="ArieFirm logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ArieFirm
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Pakistan's premier diversified firm for commercial development, consulting, and
              operations management. Duly registered and fully compliant.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/20"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest text-white mb-5"
            >
              Company
            </h4>
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
                    className="text-sm flex items-center gap-1 group transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {l.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link
                    to="/v2/services"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#FFD76E" }} />
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  23 Hunza Block, Allama Iqbal Town<br />Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0" style={{ color: "#FFD76E" }} />
                <a href="tel:+923006885680" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                  +92 300-6885680
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0" style={{ color: "#FFD76E" }} />
                <a href="mailto:info@ariefirm.com" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                  info@ariefirm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} ArieFirm. All rights reserved. Registered in Pakistan.
          </p>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Fully Compliant & Registered
          </span>
        </div>
      </div>
    </footer>
  );
}
