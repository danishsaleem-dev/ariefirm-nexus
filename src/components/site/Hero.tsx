import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-medium text-gold">
            <ShieldCheck className="h-3.5 w-3.5" /> Trusted advisory since day one
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Legal & development expertise you can{" "}
            <span className="text-gold">build on</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Ariefirm unites legal consultancy, building developments, government
            projects, investment and trading under one trusted firm — guiding your
            most important ventures from idea to delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-10 flex max-w-md items-center gap-2 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-2">
            <Search className="ml-2 h-5 w-5 text-primary-foreground/60" />
            <input
              type="text"
              placeholder="Search services, topics or guidance…"
              className="w-full bg-transparent px-2 py-1.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
            />
            <Button asChild variant="gold" size="sm">
              <Link to="/services">Search</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Modern glass office tower beside a classical courthouse at golden hour"
            width={1600}
            height={1200}
            className="rounded-xl shadow-elegant ring-1 ring-primary-foreground/10"
          />
        </div>
      </div>
    </section>
  );
}
