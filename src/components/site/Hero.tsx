import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    tag: "Commercial Project Development",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    tag: "Design & Construction",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80",
    tag: "Food & Dining Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1920&q=80",
    tag: "Retail & Lifestyle Brands",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      {/* Carousel slides — all mounted, fade via opacity */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.src}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          {/* Deep blue gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(170deg, rgba(0,24,69,0.88) 0%, rgba(0,70,170,0.72) 45%, rgba(0,10,40,0.92) 100%)",
            }}
          />
        </div>
      ))}

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:px-8">
        {/* Slide tag badge */}
        <div className="relative mb-7 h-8">
          {slides.map((s, i) => (
            <span
              key={s.tag}
              className="absolute left-1/2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gold backdrop-blur-sm transition-all duration-700"
              style={{
                transform: `translateX(-50%) translateY(${i === current ? 0 : 6}px)`,
                opacity: i === current ? 1 : 0,
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              {s.tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[4.25rem]">
          We design, build &{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #C9A32A, #F5D060)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            operate commercial
          </span>
          <br />
          destinations
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
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
            variant="outline"
            className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>

        {/* Trust row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/45">
          {["Duly Registered", "Fully Compliant", "16+ Service Lines", "Pakistan-Wide Operations"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full" style={{ background: "#C9A32A" }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 sm:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 sm:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              background: i === current ? "#C9A32A" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
