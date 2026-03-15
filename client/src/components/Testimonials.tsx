/*
 * DESIGN: Cape Cod Editorial — Testimonials Section
 * Auto-scrolling testimonial cards with star ratings
 * Warm sand background, editorial pull-quote style
 */

import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Mike R.",
    location: "Falmouth, MA",
    text: "Sand & Reef winterized my 28' Grady-White and the service was top-notch. They came right to my slip, got everything done in a few hours, and the shrink-wrap job was the best I've ever had.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Hyannis, MA",
    text: "Had them install a new Garmin chartplotter and radar system. Clean wiring, everything works perfectly. These guys know their electronics inside and out.",
    rating: 5,
  },
  {
    name: "Dave K.",
    location: "Chatham, MA",
    text: "I've used a lot of marine services on the Cape and Sand & Reef is by far the most responsive. They actually answer the phone and show up when they say they will. Refreshing.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Barnstable, MA",
    text: "The detailing they did on our boat was incredible. It looked better than the day we bought it. Fair price, great people, and they clearly take pride in their work.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 lg:py-36 bg-sand relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.22 0.04 260) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-3 text-teal text-sm font-medium tracking-[0.25em] uppercase mb-5">
            <motion.span
              className="h-px bg-teal"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            Testimonials
            <motion.span
              className="h-px bg-teal"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy mb-5">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it — hear from boat owners across Cape Cod.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="group relative bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-teal/10 group-hover:text-teal/20 transition-colors duration-500">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.15 + j * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-navy/80 leading-relaxed mb-6 text-[15px]">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
