import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Gradient overlay — deep navy-blue at bottom, semi-transparent blue on top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, rgba(0,46,107,0.82) 0%, rgba(0,70,170,0.75) 40%, rgba(0,20,60,0.88) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gold backdrop-blur-sm">
          <ShieldCheck className="h-3.5 w-3.5" />
          Pakistan's Premier Commercial Development Firm
        </span>

        <h1
          className="mt-7 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[4rem]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          We design, build &{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #C9A32A, #F0C94A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            operate commercial
          </span>
          <br />
          destinations
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
          ArieFirm is a diversified development, consulting and operations firm —
          creating and running shopping malls, food courts, retail, lifestyle and
          entertainment projects with national and international brands across Pakistan.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            variant="outline"
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
          {["Duly Registered", "Fully Compliant", "16+ Service Lines", "Pakistan-Wide Operations"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold/60" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
