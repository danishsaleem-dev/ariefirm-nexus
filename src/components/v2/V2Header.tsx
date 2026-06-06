"use client";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2, Store, UtensilsCrossed, ShoppingBag, Ticket, Network,
  TrendingUp, LineChart, Building, Handshake, Megaphone, Wrench,
  ClipboardCheck, Scale, Landmark, Hotel,
  Menu, X, ChevronDown, Phone, Mail, Clock, ArrowRight,
} from "lucide-react";

const BLUE = "#1547D6";
const BLUE_DARK = "#0F35B0";

const megaServices = [
  { icon: Building2, title: "Commercial Development" },
  { icon: Store, title: "Mall Operations" },
  { icon: UtensilsCrossed, title: "Food Court Development" },
  { icon: ShoppingBag, title: "Retail & Lifestyle Brands" },
  { icon: Ticket, title: "Entertainment Venues" },
  { icon: Network, title: "Franchise Development" },
  { icon: TrendingUp, title: "Business Development" },
  { icon: LineChart, title: "Investment & Feasibility" },
  { icon: Building, title: "Real Estate" },
  { icon: Handshake, title: "Leasing & Tenants" },
  { icon: Megaphone, title: "Marketing" },
  { icon: Wrench, title: "Facility Management" },
  { icon: ClipboardCheck, title: "Project Management" },
  { icon: Scale, title: "Corporate Advisory" },
  { icon: Landmark, title: "Govt. Liaison" },
  { icon: Hotel, title: "Hospitality" },
];

export function V2Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div
        className="hidden lg:block w-full text-xs"
        style={{ background: BLUE_DARK, color: "rgba(255,255,255,0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+923006885680" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} />
              +92 300-6885680
            </a>
            <a href="mailto:info@ariefirm.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} />
              info@ariefirm.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              Mon – Fri, 9:00 AM – 6:00 PM PKT
            </span>
            <span className="flex items-center gap-1.5 opacity-70">
              23 Hunza Block, Allama Iqbal Town, Lahore
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
          boxShadow: scrolled ? "0 2px 20px rgba(21,71,214,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link to="/v2" className="flex items-center gap-3">
              <img
                src="/ariefirm-logo.png"
                alt="ArieFirm logo"
                width={44}
                height={44}
                className="h-11 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-xl font-bold tracking-tight"
                  style={{ color: BLUE, fontFamily: "'Poppins', sans-serif" }}
                >
                  ArieFirm
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em]" style={{ color: "#94A3B8" }}>
                  Commercial Development
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/v2"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "#374151" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = BLUE; (e.target as HTMLElement).style.background = "#EEF2FF"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#374151"; (e.target as HTMLElement).style.background = "transparent"; }}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{ color: servicesOpen ? BLUE : "#374151", background: servicesOpen ? "#EEF2FF" : "transparent" }}
                >
                  Services
                  <ChevronDown
                    size={14}
                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[660px] rounded-2xl p-5 z-50"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #E5EAFF",
                      boxShadow: "0 20px 60px rgba(21,71,214,0.15)",
                    }}
                  >
                    <div className="grid grid-cols-4 gap-1 mb-4">
                      {megaServices.map((s) => (
                        <Link
                          key={s.title}
                          to="/v2/services"
                          className="flex items-center gap-2 p-2.5 rounded-xl text-sm transition-all group"
                          style={{ color: "#4B5563" }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "#EEF2FF";
                            el.style.color = BLUE;
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "transparent";
                            el.style.color = "#4B5563";
                          }}
                        >
                          <s.icon size={14} className="shrink-0" style={{ color: BLUE }} />
                          <span className="text-xs font-medium leading-tight">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div
                      className="flex items-center justify-between px-4 py-3 rounded-xl"
                      style={{ background: "#EEF2FF" }}
                    >
                      <span className="text-sm font-medium" style={{ color: "#374151" }}>
                        View all 16 integrated service lines
                      </span>
                      <Link
                        to="/v2/services"
                        className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:gap-2.5"
                        style={{ color: BLUE }}
                      >
                        Explore All <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/v2/about"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "#374151" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = BLUE; (e.target as HTMLElement).style.background = "#EEF2FF"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#374151"; (e.target as HTMLElement).style.background = "transparent"; }}
              >
                About
              </Link>
              <Link
                to="/v2/contact"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "#374151" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = BLUE; (e.target as HTMLElement).style.background = "#EEF2FF"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#374151"; (e.target as HTMLElement).style.background = "transparent"; }}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/v2/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-105 active:scale-95"
                style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})` }}
              >
                Get Consultation
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: BLUE }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex flex-col"
          style={{ background: "#fff", paddingTop: "80px" }}
        >
          <div className="flex flex-col px-6 gap-1 mt-4">
            {[
              { label: "Home", to: "/v2" },
              { label: "Services", to: "/v2/services" },
              { label: "About", to: "/v2/about" },
              { label: "Contact", to: "/v2/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 px-4 text-base font-medium rounded-xl"
                style={{ color: "#0D1B3E", borderBottom: "1px solid #F1F5F9" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/v2/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 py-4 text-center rounded-2xl text-white font-semibold"
              style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})` }}
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
