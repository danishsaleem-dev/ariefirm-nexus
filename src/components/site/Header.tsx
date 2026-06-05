import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, Mail, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, services } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground/80 lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:+92300000000"
              className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              +92 300 000 0000
            </a>
            <a
              href="mailto:info@ariefirm.com"
              className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-3.5 w-3.5 text-gold" />
              info@ariefirm.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" />
              Mon–Fri · 9:00 AM – 6:00 PM PKT
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gold">
              25-K Gulberg II, Lahore
            </span>
          </div>
        </div>
      </div>

      {/* Main bar — `relative` so the mega menu can anchor to it */}
      <div
        className={`relative border-b transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/95 backdrop-blur-md shadow-sm"
            : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-lg shadow-soft"
              style={{ background: "linear-gradient(135deg, #0046AA, #002E6B)" }}
            >
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 5 C32 5 16 16 10 30 C4 44 6 60 14 72 L14 95 L86 95 L86 72 C94 60 96 44 90 30 C84 16 68 5 50 5Z"
                  fill="white"
                  fillOpacity="0.95"
                />
                <circle cx="38" cy="46" r="5" fill="#0046AA" />
                <circle cx="62" cy="46" r="5" fill="#0046AA" />
                <path
                  d="M34 65 Q42 78 50 80 Q58 78 66 65 Q58 72 50 73 Q42 72 34 65Z"
                  fill="#0046AA"
                />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Arie<span className="text-gold">Firm</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Develop · Operate · Manage
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {/* Services trigger */}
            <div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
              <Link
                to="/services"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              >
                Services
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-200"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </Link>
            </div>

            {navLinks
              .filter((l) => l.to !== "/services")
              .map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Get a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── MEGA MENU ── full-width, anchored to the main bar */}
        <div
          className={`absolute left-0 right-0 top-full z-50 border-b border-border transition-all duration-200 ${
            servicesOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 24px 60px -12px rgba(0,70,170,0.18)",
          }}
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-0 py-6">
              {/* Left — 6 services in 3-column grid */}
              <div className="flex-1 pr-6">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Our Service Lines
                  </p>
                  <Link
                    to="/services"
                    className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    View all 16 <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-0.5">
                  {services.slice(0, 6).map((s) => (
                    <Link
                      key={s.slug}
                      to="/services"
                      className="group flex items-start gap-3 rounded-xl p-3.5 transition-colors hover:bg-accent"
                    >
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: "rgba(0,70,170,0.08)" }}
                      >
                        <s.icon className="h-4 w-4" style={{ color: "#0046AA" }} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary">
                          {s.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {s.short}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="mx-2 w-px self-stretch bg-border" />

              {/* Right — CTA panel */}
              <div
                className="ml-4 flex w-72 shrink-0 flex-col rounded-2xl p-7"
                style={{ background: "linear-gradient(160deg, #001845 0%, #0046AA 100%)" }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: "#C9A32A" }}
                >
                  Work With Us
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                  Turn your land into a destination
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                  From feasibility to grand opening — ArieFirm delivers end-to-end commercial development across Pakistan.
                </p>

                <ul className="mt-5 flex-1 space-y-2">
                  {[
                    "Feasibility & Planning",
                    "Design & Construction",
                    "Brand Leasing",
                    "Operations Management",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "#C9A32A" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all hover:brightness-110"
                    style={{ background: "linear-gradient(90deg, #C9A32A, #F0C94A)", color: "#1A1000" }}
                  >
                    Book Consultation <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href="tel:+92300000000"
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs transition-all hover:bg-white/10 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <Phone className="h-3 w-3" />
                    +92 300 000 0000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground [&.active]:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="gold" size="lg" className="mt-3">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
