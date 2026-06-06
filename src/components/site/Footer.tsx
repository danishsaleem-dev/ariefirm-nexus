import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, navLinks } from "@/data/site";

const DARK_NAVY = "#001845";

export function Footer() {
  return (
    <footer style={{ background: DARK_NAVY }}>
      {/* CTA band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Ready to move your most important venture forward?
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Partner with a firm that handles the legal, the build and the capital — all under one roof.
            </p>
          </div>
          <Button asChild variant="gold" size="xl" className="shrink-0">
            <Link to="/contact">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img
              src="/favicon.png"
              alt="ArieFirm logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-white">
              Arie<span style={{ color: "#C9A32A" }}>Firm</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            A diversified business development, consulting and operations firm —
            planning, developing and managing commercial, retail, food, lifestyle and
            entertainment destinations across Pakistan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/15"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)" }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A32A" }}>
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A32A" }}>
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A32A" }}>
            Get in touch
          </h4>
          <ul className="space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" style={{ color: "#C9A32A" }} />
              <span>info@ariefirm.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" style={{ color: "#C9A32A" }} />
              <a href="tel:+923006885680" className="hover:text-white transition-colors">+92 300-6885680</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#C9A32A" }} />
              <span>23 Hunza Block, Allama Iqbal Town, Lahore</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8" style={{ color: "rgba(255,255,255,0.3)" }}>
          <p>© {new Date().getFullYear()} ArieFirm. All rights reserved. Registered in Pakistan.</p>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Fully Compliant & Registered
          </span>
        </div>
      </div>
    </footer>
  );
}
