"use client";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Ticket,
  Network,
  TrendingUp,
  LineChart,
  Building,
  Handshake,
  Megaphone,
  Wrench,
  ClipboardCheck,
  Scale,
  Landmark,
  Hotel,
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
} from "lucide-react";

const megaMenuServices = [
  { icon: Building2, title: "Commercial Development", slug: "commercial-project-development" },
  { icon: Store, title: "Mall Operations", slug: "shopping-mall-operations" },
  { icon: UtensilsCrossed, title: "Food Court Ops", slug: "food-court-development" },
  { icon: ShoppingBag, title: "Retail Brands", slug: "retail-lifestyle-brands" },
  { icon: Ticket, title: "Entertainment Venues", slug: "entertainment-recreation" },
  { icon: Network, title: "Franchise Management", slug: "franchise-development" },
  { icon: TrendingUp, title: "Business Growth", slug: "business-development" },
  { icon: LineChart, title: "Investment & Feasibility", slug: "investment-feasibility" },
  { icon: Building, title: "Real Estate", slug: "real-estate-commercialization" },
  { icon: Handshake, title: "Leasing & Tenants", slug: "leasing-tenant-management" },
  { icon: Megaphone, title: "Marketing", slug: "marketing-brand-positioning" },
  { icon: Wrench, title: "Facility Management", slug: "facility-management" },
  { icon: ClipboardCheck, title: "Project Management", slug: "project-management-execution" },
  { icon: Scale, title: "Corporate Advisory", slug: "corporate-legal-compliance" },
  { icon: Landmark, title: "Govt. Liaison", slug: "government-liaison" },
  { icon: Hotel, title: "Hospitality", slug: "hospitality-lifestyle" },
];

export function V2Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(6,8,15,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/v2" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.5 2 3 5.5 3 9c0 2.5 1.5 4.5 3.5 5.5L5 20h14l-1.5-5.5C19.5 13.5 21 11.5 21 9c0-3.5-3.5-7-9-7z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <circle cx="9" cy="8.5" r="1.2" fill="#1549F0" />
                  <circle cx="15" cy="8.5" r="1.2" fill="#1549F0" />
                  <path d="M9 13s1.5 2 3 2 3-2 3-2" stroke="#1549F0" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span
                  className="text-xl font-bold tracking-tight"
                  style={{
                    background: "linear-gradient(90deg, #ffffff, #C9A32A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ArieFirm
                </span>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-none -mt-0.5">
                  Nexus
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/v2"
                className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  Services
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200"
                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {/* Mega Menu */}
                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-2xl p-4"
                    style={{
                      background: "rgba(10,13,24,0.98)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                    }}
                  >
                    <div className="grid grid-cols-4 gap-1.5 mb-3">
                      {megaMenuServices.map((s) => (
                        <Link
                          key={s.slug}
                          to="/v2/services"
                          className="flex items-center gap-2 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
                        >
                          <s.icon size={14} className="text-blue-400 group-hover:text-blue-300 shrink-0" />
                          <span className="text-xs leading-tight">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div
                      className="flex items-center justify-between p-3 rounded-xl"
                      style={{ background: "rgba(21,73,240,0.12)", border: "1px solid rgba(21,73,240,0.2)" }}
                    >
                      <span className="text-sm text-slate-300">View all 16 service lines</span>
                      <Link
                        to="/v2/services"
                        className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Explore Services <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/v2/about"
                className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                About
              </Link>
              <Link
                to="/v2/contact"
                className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+92000000000"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span>+92 300 000 0000</span>
              </a>
              <Link
                to="/v2/contact"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
              >
                Get Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
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
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(6,8,15,0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col pt-24 px-6 gap-2">
            <Link
              to="/v2"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg text-white border-b border-white/5"
            >
              Home
            </Link>
            <Link
              to="/v2/services"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg text-white border-b border-white/5"
            >
              Services
            </Link>
            <Link
              to="/v2/about"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg text-white border-b border-white/5"
            >
              About
            </Link>
            <Link
              to="/v2/contact"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg text-white border-b border-white/5"
            >
              Contact
            </Link>
            <Link
              to="/v2/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 py-4 text-center rounded-2xl text-white font-semibold"
              style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
