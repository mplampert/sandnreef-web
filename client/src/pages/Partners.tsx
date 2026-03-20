/*
 * DESIGN: Cape Cod Editorial — Partners Page
 * Showcases HYFOIL Marine and Flux Marine partnerships
 * with large imagery, editorial layout, and smooth animations
 */

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HYFOIL_IMG_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/hyfoil-boat-1_ce56242f.webp";
const HYFOIL_IMG_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/hyfoil-boat-2_73195751.webp";
const FLUX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/flux-marine_d78edbdf.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col bg-sand">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.p
            className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Partners
          </motion.p>
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Premium boats & electric.
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Turnkey builds. We source, install, and deliver.
          </motion.p>
        </div>
      </section>

      {/* HYFOIL Marine Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Images */}
            <motion.div
              className="relative"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="overflow-hidden rounded-lg shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={HYFOIL_IMG_1}
                    alt="HYFOIL 28 foiling boat"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="overflow-hidden rounded-lg shadow-xl mt-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={HYFOIL_IMG_2}
                    alt="HYFOIL 28 on the water"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </motion.div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-teal/30 rounded-lg -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="text-teal text-xs font-semibold tracking-[0.2em] uppercase">
                Partner
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-6">
                HYFOIL Marine
              </h2>
              <div className="w-16 h-0.5 bg-teal mb-8" />
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                Foiling boats, turnkey. We source hulls and handle engine installation
                and electronics in-house. Fully customized, ready for the water.
              </p>
              <p className="text-navy/60 leading-relaxed mb-8">
                The HYFOIL 28 represents the cutting edge of marine technology — a foiling
                center console that delivers an unparalleled ride. Sand & Reef handles
                the complete build process from hull sourcing through final sea trial,
                ensuring every system is integrated to perfection.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://hyfoil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-navy/90 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  HYFOIL 28
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/#contact"
                  className="inline-flex items-center gap-2 border-2 border-teal text-teal font-semibold px-6 py-3 rounded-md hover:bg-teal hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Inquire
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      </div>

      {/* Flux Marine Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content (reversed order on desktop) */}
            <motion.div
              className="order-2 lg:order-1"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="text-teal text-xs font-semibold tracking-[0.2em] uppercase">
                Partner
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-6">
                Flux Marine
              </h2>
              <div className="w-16 h-0.5 bg-teal mb-8" />
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                Electric outboards and power systems. We handle installation and
                integration — clean, quiet, efficient.
              </p>
              <p className="text-navy/60 leading-relaxed mb-8">
                Flux Marine is pioneering the future of boating with their all-electric
                outboard motors. As an authorized installation partner, Sand & Reef
                handles the complete integration — from mounting and wiring to battery
                systems and sea trials. Experience the water without the noise, fumes,
                or maintenance headaches of traditional engines.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://fluxmarine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-navy/90 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Technology
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/#contact"
                  className="inline-flex items-center gap-2 border-2 border-teal text-teal font-semibold px-6 py-3 rounded-md hover:bg-teal hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Inquire
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="order-1 lg:order-2 relative"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div
                className="overflow-hidden rounded-lg shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={FLUX_IMG}
                  alt="Flux Marine electric outboard"
                  className="w-full h-72 lg:h-[500px] object-cover"
                />
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-teal/30 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-24 bg-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-navy rounded-full blur-[80px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Interested in a build?
          </motion.h2>
          <motion.p
            className="text-white/80 text-lg max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Contact us to discuss your project. We handle everything from sourcing
            to sea trial.
          </motion.p>
          <motion.a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-md hover:bg-sand transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
