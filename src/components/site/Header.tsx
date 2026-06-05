import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, services } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground/80 lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+92300000000" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-3.5 w-3.5 text-gold" />
              +92 300 000 0000
            </a>
            <a href="mailto:info@ariefirm.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="h-3.5 w-3.5 text-gold" />
              info@ariefirm.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" />
              Mon–Fri · 9:00 AM – 6:00 PM PKT
            </span>
            <span className="text-gold font-semibold tracking-wide uppercase text-[10px]">
              25-K Gulberg II, Lahore
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/95 backdrop-blur-md shadow-sm"
            : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground shadow-soft"
              style={{ background: "linear-gradient(135deg, #0046AA, #002E6B)" }}
            >
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                <path d="M50 5 C32 5 16 16 10 30 C4 44 6 60 14 72 L14 95 L86 95 L86 72 C94 60 96 44 90 30 C84 16 68 5 50 5Z" fill="white" fillOpacity="0.95"/>
                <circle cx="38" cy="46" r="5" fill="#0046AA"/>
                <circle cx="62" cy="46" r="5" fill="#0046AA"/>
                <path d="M34 65 Q42 78 50 80 Q58 78 66 65 Q58 72 50 73 Q42 72 34 65Z" fill="#0046AA"/>
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Arie<span className="text-gold">Firm</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Develop · Operate · Manage
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {/* Services mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              >
                Services
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="transition-transform duration-200"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </Link>

              {/* MEGA MENU */}
              {servicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3" style={{ width: "760px" }}>
                  <div
                    className="rounded-2xl border border-border bg-popover shadow-elegant overflow-hidden"
                    style={{ boxShadow: "0 24px 60px -12px rgba(0,70,170,0.2)" }}
                  >
                    {/* Header strip */}
                    <div
                      className="px-6 py-4 flex items-center justify-between"
                      style={{ background: "linear-gradient(135deg, #0046AA, #002E6B)" }}
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">All Service Lines</p>
                        <p className="text-xs text-white/60">16 integrated commercial disciplines</p>
                      </div>
                      <Link
                        to="/services"
                        className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 transition-all hover:bg-white/20"
                        style={{ color: "#C9A32A", border: "1px solid rgba(201,163,42,0.4)" }}
                      >
                        View All <ArrowRight size={12} />
                      </Link>
                    </div>

                    {/* Services grid — 3 per row */}
                    <div className="grid grid-cols-3 gap-px bg-border p-px">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services"
                          className="group flex items-start gap-3.5 bg-popover p-4 transition-colors hover:bg-accent"
                        >
                          <span
                            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{ background: "rgba(0,70,170,0.08)" }}
                          >
                            <s.icon className="h-4.5 w-4.5" style={{ color: "#0046AA" }} />
                          </span>
                          <span className="flex flex-col min-w-0">
                            <span className="text-sm font-semibold text-foreground group-hover:text-primary line-clamp-1">
                              {s.title}
                            </span>
                            <span className="mt-0.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {s.short}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Footer strip */}
                    <div className="flex items-center justify-between bg-accent/40 px-6 py-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        Need a combination of services?
                      </span>
                      <Link
                        to="/contact"
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        Talk to our team <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
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
                Get a Consultation <ChevronRight className="h-4 w-4" />
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
