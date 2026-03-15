/*
 * DESIGN: Cape Cod Editorial — Hero Section (WOW Edition)
 * Parallax zoom on video, staggered word-by-word reveal,
 * floating particles, smooth scroll indicator with pulse
 */

import { useEffect, useState, useRef } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/hero-cape-cod-iumqHeG7hLPgEjgntaMTCD.webp";
const HERO_VIDEO = "https://sandreefmedia.blob.core.windows.net/videos/1111-web.mp4";

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const headingWords = ["Built", "to", "respond."];
const subHeadingWords = ["Service,", "as", "it", "should", "be."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: video zooms in slightly as you scroll
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[650px] max-h-[1100px] overflow-hidden">
      {/* Video Background with parallax zoom */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={HERO_IMAGE}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/65" />
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col justify-center container"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow with line animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-3 text-white/80 text-sm font-medium tracking-[0.25em] uppercase mb-8">
              <motion.span
                className="h-px bg-teal"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              Cape Cod, Massachusetts
            </span>
          </motion.div>

          {/* Heading — word-by-word reveal */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white leading-[1.05] mb-2">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 50, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white/90 italic leading-[1.05] mb-8">
            {subHeadingWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 50, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle with reveal */}
          <motion.p
            className="text-lg sm:text-xl text-white/75 font-light max-w-xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Winterization, electronics, maintenance &amp; detailing.
            Professional mobile marine services across Cape Cod.
          </motion.p>

          {/* CTAs with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-teal text-white font-semibold px-10 py-4 rounded-md text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative">Book Now</span>
            </motion.a>
            <motion.a
              href="tel:5082946905"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-medium px-10 py-4 rounded-md text-base border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-400"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              (508) 294-6905
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — pulsing ring */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.span
          className="text-white/40 text-xs tracking-[0.2em] uppercase"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/70"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
