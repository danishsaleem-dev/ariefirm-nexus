import { Link } from "@tanstack/react-router";
import { Scale, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA band */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to move your most important venture forward?
            </h2>
            <p className="mt-3 text-primary-foreground/70">
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
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-gold-foreground">
              <Scale className="h-5 w-5" />
            </span>
            <span className="font-serif text-2xl font-semibold">
              Arie<span className="text-gold">firm</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            An integrated consultancy uniting legal advisory, building developments,
            government projects, investment and trading — building trust across every
            project we touch.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Company</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Get in touch</h4>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <span>hello@ariefirm.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>+1 (000) 000-0000</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>One Global Plaza, Suite 1200</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ariefirm. All rights reserved.</p>
          <p>Legal Consultancy · Developments · Investment · Trading</p>
        </div>
      </div>
    </footer>
  );
}
