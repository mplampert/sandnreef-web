/*
 * DESIGN: Cape Cod Editorial — Stats Counter Section
 * Animated counting numbers on scroll, teal accent line
 */

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Boats Serviced" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Fully Insured" },
  { value: 24, suffix: "hr", label: "Response Time" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 bg-navy overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 50 960 0 720 30C480 60 240 10 0 40L0 60Z" fill="oklch(0.22 0.04 260)" />
        </svg>
      </div>

      <div className="container" ref={ref}>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="w-8 h-0.5 bg-teal mx-auto mb-3" />
              <p className="text-white/50 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 0L1440 0L1440 40C1200 10 960 60 720 30C480 0 240 50 0 20L0 0Z" fill="oklch(0.22 0.04 260)" />
        </svg>
      </div>
    </section>
  );
}
