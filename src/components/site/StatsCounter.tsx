import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 18, suffix: "+", label: "Service Lines", sublabel: "Integrated disciplines" },
  { value: 16, suffix: "", label: "Commercial Sectors", sublabel: "Covered nationwide" },
  { value: 20, suffix: "+", label: "Years Experience", sublabel: "In commercial development" },
  { value: 100, suffix: "%", label: "Compliance Record", sublabel: "Fully registered & legal" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, sublabel, active }: typeof stats[0] & { active: boolean }) {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-2">
      <span
        className="text-5xl lg:text-6xl font-bold tabular-nums"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(135deg, #0046AA, #002E6B)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}{suffix}
      </span>
      <span
        className="mt-2 text-base font-semibold text-foreground"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </span>
      <span className="mt-0.5 text-xs text-muted-foreground">{sublabel}</span>
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-background border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
