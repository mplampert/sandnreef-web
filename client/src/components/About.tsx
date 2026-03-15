/*
 * DESIGN: Cape Cod Editorial — About / Why Us Section (WOW Edition)
 * Parallax image band, animated pull-quote, hover-lift cards
 */

import { useRef } from "react";
import { MapPin, Shield, Anchor, ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const MARINA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/cape-cod-marina-iAWTF4iBgKPCDy72fubKwT.webp";

const reasons = [
  {
    icon: MapPin,
    title: "Mobile on Cape Cod",
    description:
      "We come to you — at your dock, your yard, or your marina. No need to haul your boat anywhere. Full-service marine care delivered wherever your vessel sits.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Complete peace of mind with full liability coverage. Your vessel is protected throughout every service we perform, from electronics installation to winterization.",
  },
  {
    icon: Anchor,
    title: "Local Experts",
    description:
      "Born and raised on Cape Cod. We know these waters, these boats, and this community. Our reputation is built on trust, quality work, and showing up when we say we will.",
  },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative">
      {/* Full-width parallax image band */}
      <div ref={imageRef} className="relative h-[450px] lg:h-[550px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img
            src={MARINA_IMG}
            alt="Cape Cod Marina at sunset"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/60" />

        {/* Pull quote overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.blockquote
            className="text-center px-6 max-w-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white italic leading-snug"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "Your boat deserves the same care you'd give it yourself."
            </motion.p>
            <motion.footer
              className="mt-6 text-white/60 text-sm font-medium tracking-[0.15em] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Sand &amp; Reef Marine Solutions
            </motion.footer>
          </motion.blockquote>
        </div>
      </div>

      {/* Why Us content */}
      <div className="bg-background py-28 lg:py-36">
        <div className="container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-teal text-sm font-medium tracking-[0.25em] uppercase mb-5">
              <motion.span
                className="h-px bg-teal"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              Why Sand &amp; Reef
              <motion.span
                className="h-px bg-teal"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy mb-5">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're not a big-box operation. We're a local crew that treats every boat
              like it's our own.
            </p>
          </motion.div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className="group relative bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal group-hover:shadow-lg group-hover:shadow-teal/25 transition-all duration-500"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-teal group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-navy mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* North Shore teaser */}
      <div className="bg-navy relative overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal/5 via-transparent to-teal/5"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="container py-16 lg:py-20 relative">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span
                className="inline-flex items-center gap-2 text-teal text-sm font-medium tracking-[0.15em] uppercase mb-3"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                Coming Soon
              </motion.span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-3">
                North Shore Location
              </h3>
              <p className="text-white/60 text-lg max-w-lg">
                Same trusted service, new location. We're expanding to bring Sand &amp; Reef
                marine expertise to the North Shore.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium px-8 py-3.5 rounded-md transition-all duration-300 shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Stay Updated
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
