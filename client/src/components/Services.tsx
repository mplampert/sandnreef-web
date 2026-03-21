/*
 * DESIGN: Cape Cod Editorial — Services Section (WOW Edition)
 * Staggered card grid with hover-reveal overlays, image zoom,
 * animated icon badges, and a dramatic full-width maintenance CTA
 * Updated: cards now link to dedicated service pages
 */

import { useRef } from "react";
import { Zap, Snowflake, Sparkles, Wrench, ArrowRight, Paintbrush, Settings } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";

const ELECTRONICS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/boat-electronics-RNKcPjZyAepXrfC3An3Lpf.webp";
const WINTERIZATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/boat-winterization-FkiwwazyU6AbeoWrN2eFCo.webp";
const DETAILING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/boat-detailing-f2MYYpvZEU9wKFBjAbcTSj.webp";
const GELCOAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/gelcoat-hero-XFsXeYyUDrZ8zU5WFSBcAj.webp";
const ENGINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/engine-hero-3EACz5FUmn4dBkXwycY2Lk.webp";

const services = [
  {
    icon: Zap,
    title: "Electronics",
    subtitle: "Sales & Installation",
    description:
      "From chartplotters and fish finders to full navigation systems — sales, installation, and troubleshooting of all major marine electronics brands.",
    image: ELECTRONICS_IMG,
    features: ["Garmin & Simrad Certified", "Radar & GPS Systems", "Audio & Lighting"],
    href: "/services/electronics",
  },
  {
    icon: Snowflake,
    title: "Winterization",
    subtitle: "& Shrink-Wrap",
    description:
      "Protect your investment through the harsh New England winter. Comprehensive winterization and professional shrink-wrapping to keep your vessel safe.",
    image: WINTERIZATION_IMG,
    features: ["Engine Winterization", "Shrink-Wrap Application", "Antifreeze Treatment"],
    href: "/services/winterization",
  },
  {
    icon: Sparkles,
    title: "Detailing",
    subtitle: "Washing & Waxing",
    description:
      "Restore your boat's showroom shine. From hull cleaning to topside polish, we bring the gleam back to your vessel.",
    image: DETAILING_IMG,
    features: ["Hull Cleaning & Polish", "Topside Wax & Seal", "Interior Detailing"],
    href: "/services/detailing",
  },
  {
    icon: Paintbrush,
    title: "Gel Coat & Bottom Paint",
    subtitle: "Hull Finishing",
    description:
      "Professional gel coat repair, refinishing, and bottom paint application. We protect your hull and keep it looking sharp.",
    image: GELCOAT_IMG,
    features: ["Gel Coat Repair & Refinish", "Antifouling Bottom Paint", "Barrier Coat & Blister Repair"],
    href: "/services/gelcoat-bottom-paint",
  },
  {
    icon: Settings,
    title: "Engines & Repowers",
    subtitle: "Service & Installation",
    description:
      "From routine maintenance to full repowers — expert marine engine service for outboards, inboards, and sterndrives.",
    image: ENGINE_IMG,
    features: ["Full Repower Packages", "Diagnostics & Repair", "Rigging & Controls"],
    href: "/services/engines-repowers",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
    >
      <Link href={service.href}>
        {/* Image with zoom on hover */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          {/* Gradient overlay — darker on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />

          {/* Icon badge */}
          <motion.div
            className="absolute top-5 left-5 w-12 h-12 rounded-lg bg-teal/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <span className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">
              {service.subtitle}
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">
              {service.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
              {service.description}
            </p>

            {/* Features — slide up on hover */}
            <div className="space-y-2 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 delay-100">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="w-1 h-1 rounded-full bg-teal shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Learn more arrow */}
            <div className="flex items-center gap-2 text-teal text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 delay-200">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            className="inline-flex items-center gap-3 text-teal text-sm font-medium tracking-[0.25em] uppercase mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="h-px bg-teal"
              initial={{ width: 0 }}
              animate={headerInView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            What We Do
            <motion.span
              className="h-px bg-teal"
              initial={{ width: 0 }}
              animate={headerInView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.span>
          <motion.h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Professional marine services delivered to your dock.
            We bring the expertise — you enjoy the water.
          </motion.p>
        </div>

        {/* Service cards — responsive grid */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* Preventative Maintenance CTA */}
        <motion.div
          className="mt-24 lg:mt-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-navy rounded-2xl p-12 lg:p-20 text-center overflow-hidden">
            {/* Animated background circles */}
            <motion.div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal/10"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-teal/5"
              animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-xl bg-teal/20 flex items-center justify-center mx-auto mb-8"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Wrench className="w-8 h-8 text-teal" />
              </motion.div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
                Preventative Maintenance
              </h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Keep your vessel running at peak performance with scheduled maintenance plans
                tailored to your boat and usage. From oil changes to full system inspections.
              </p>
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-teal text-white font-semibold px-10 py-4 rounded-md overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Schedule Service</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
