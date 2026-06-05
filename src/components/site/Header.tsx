import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Scale, Phone, Mail, Clock, ChevronRight } from "lucide-react";
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
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-gold" /> +1 (000) 000-0000
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-gold" /> hello@ariefirm.com
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" /> Mon–Fri · 9:00–18:00
            </span>
            <span className="text-gold font-medium tracking-wide uppercase">
              Trusted across Pakistan
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-colors ${
          scrolled
            ? "border-border/60 bg-background/90 backdrop-blur-md"
            : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-soft">
              <Scale className="h-6 w-6" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Arie<span className="text-gold">firm</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Develop · Operate · Manage
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
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
              </Link>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-4">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-3 shadow-elegant">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services"
                        className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                      >
                        <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span className="flex flex-col">
                          <span className="text-sm font-medium text-foreground">{s.title}</span>
                          <span className="line-clamp-1 text-xs text-muted-foreground">
                            {s.short}
                          </span>
                        </span>
                      </Link>
                    ))}
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
