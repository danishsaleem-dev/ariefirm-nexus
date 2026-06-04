import { Link } from "@tanstack/react-router";
import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { services, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-gold-foreground">
              <Scale className="h-5 w-5" />
            </span>
            <span className="font-serif text-xl font-semibold">
              Arie<span className="text-gold">firm</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Integrated legal consultancy, development and investment services —
            building trust across every project.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
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

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-gold" /> hello@ariefirm.com
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-gold" /> +1 (000) 000-0000
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" /> One Global Plaza, Suite 1200
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ariefirm. All rights reserved.</p>
          <p>Legal Consultancy · Developments · Investment · Trading</p>
        </div>
      </div>
    </footer>
  );
}
