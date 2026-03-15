/*
 * DESIGN: Cape Cod Editorial — About / Why Us Section
 * Pull-quote style callouts, warm sand background
 * Three key selling points with elegant presentation
 */

import { useEffect, useRef, useState } from "react";
import { MapPin, Shield, Anchor, ArrowRight } from "lucide-react";

const MARINA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/cape-cod-marina-iAWTF4iBgKPCDy72fubKwT.webp";

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
  const { ref: sectionRef, inView: sectionInView } = useInView(0.1);
  const { ref: quoteRef, inView: quoteInView } = useInView(0.2);

  return (
    <section id="about" className="relative">
      {/* Full-width image band */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={MARINA_IMG}
          alt="Cape Cod Marina at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/60" />
        
        {/* Pull quote overlay */}
        <div
          ref={quoteRef}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            quoteInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote className="text-center px-6 max-w-3xl">
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white italic leading-snug">
              "Your boat deserves the same care you'd give it yourself."
            </p>
            <footer className="mt-6 text-white/60 text-sm font-medium tracking-[0.15em] uppercase">
              Sand &amp; Reef Marine Solutions
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Why Us content */}
      <div className="bg-sand py-24 lg:py-32">
        <div className="container">
          <div
            ref={sectionRef}
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-teal text-sm font-medium tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-px bg-teal" />
              Why Sand &amp; Reef
              <span className="w-8 h-px bg-teal" />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy mb-5">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're not a big-box operation. We're a local crew that treats every boat 
              like it's our own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <ReasonCard key={reason.title} reason={reason} Icon={Icon} delay={i * 150} />
              );
            })}
          </div>
        </div>
      </div>

      {/* North Shore teaser */}
      <div className="bg-navy">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-teal text-sm font-medium tracking-[0.15em] uppercase mb-2 block">
                Coming Soon
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-3">
                North Shore Location
              </h3>
              <p className="text-white/60 text-lg max-w-lg">
                Same trusted service, new location. We're expanding to bring Sand &amp; Reef 
                marine expertise to the North Shore.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium px-8 py-3.5 rounded-md transition-all duration-300 shrink-0"
            >
              Stay Updated
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  Icon,
  delay,
}: {
  reason: (typeof reasons)[0];
  Icon: typeof MapPin;
  delay: number;
}) {
  const { ref, inView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-teal/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-teal" />
      </div>
      <h3 className="font-serif text-2xl text-navy mb-3">{reason.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
    </div>
  );
}
