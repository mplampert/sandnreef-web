/*
 * DESIGN: Cape Cod Editorial — Services Section
 * Editorial two-column layout with large photography
 * Alternating sides, elegant typography, fade-up on scroll
 */

import { useEffect, useRef, useState } from "react";
import { Zap, Snowflake, Sparkles, Wrench } from "lucide-react";

const ELECTRONICS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/boat-electronics-RNKcPjZyAepXrfC3An3Lpf.webp";
const WINTERIZATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/boat-winterization-FkiwwazyU6AbeoWrN2eFCo.webp";
const DETAILING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/boat-detailing-f2MYYpvZEU9wKFBjAbcTSj.webp";

const services = [
  {
    icon: Zap,
    title: "Electronics",
    subtitle: "Sales & Installation",
    description:
      "From chartplotters and fish finders to full navigation systems, we handle sales, installation, and troubleshooting of all major marine electronics brands.",
    image: ELECTRONICS_IMG,
    features: ["Garmin & Simrad Certified", "Radar & GPS Systems", "Audio & Lighting"],
  },
  {
    icon: Snowflake,
    title: "Winterization",
    subtitle: "& Shrink-Wrap",
    description:
      "Protect your investment through the harsh New England winter. Our comprehensive winterization and professional shrink-wrapping keeps your vessel safe until spring.",
    image: WINTERIZATION_IMG,
    features: ["Engine Winterization", "Shrink-Wrap Application", "Antifreeze Treatment"],
  },
  {
    icon: Sparkles,
    title: "Detailing",
    subtitle: "Washing & Waxing",
    description:
      "Restore your boat's showroom shine with our professional detailing services. From hull cleaning to topside polish, we bring the gleam back to your vessel.",
    image: DETAILING_IMG,
    features: ["Hull Cleaning & Polish", "Topside Wax & Seal", "Interior Detailing"],
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.15);
  const isReversed = index % 2 !== 0;
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image */}
      <div className={`${isReversed ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={service.image}
            alt={service.title}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1" : ""} py-4`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-teal" />
          </div>
          <span className="text-sm font-medium tracking-[0.15em] uppercase text-teal">
            {service.subtitle}
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-5 leading-tight">
          {service.title}
        </h3>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-navy/80">
              <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-teal text-sm font-medium tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-px bg-teal" />
            What We Do
            <span className="w-8 h-px bg-teal" />
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy mb-5">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Professional marine services delivered to your dock. 
            We bring the expertise — you enjoy the water.
          </p>
        </div>

        {/* Service rows */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Additional service: Preventative Maintenance */}
        <div className="mt-24 lg:mt-32">
          <div className="bg-navy rounded-xl p-10 lg:p-16 text-center">
            <div className="w-14 h-14 rounded-lg bg-teal/20 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Preventative Maintenance
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Keep your vessel running at peak performance with scheduled maintenance plans 
              tailored to your boat and usage. From oil changes to full system inspections.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-teal hover:bg-teal-light text-white font-semibold px-8 py-3.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-teal/25"
            >
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
