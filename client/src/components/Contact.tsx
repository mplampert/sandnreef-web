/*
 * DESIGN: Cape Cod Editorial — Contact Section
 * Clean contact info with map-like layout
 * Warm sand background, editorial typography
 */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

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

export default function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-teal text-sm font-medium tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-px bg-teal" />
              Get In Touch
              <span className="w-8 h-px bg-teal" />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy mb-5">
              Ready to Book?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Give us a call, send an email, or reach out on social media. 
              We respond fast — it's kind of our thing.
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <a
              href="tel:5082946905"
              className="group bg-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-teal/20"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal/20 transition-colors">
                <Phone className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">Call Us</h3>
              <p className="text-teal font-semibold text-lg">(508) 294-6905</p>
            </a>

            {/* Email */}
            <a
              href="mailto:Sales@sandnreef.com"
              className="group bg-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-teal/20"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal/20 transition-colors">
                <Mail className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">Email Us</h3>
              <p className="text-teal font-semibold">Sales@sandnreef.com</p>
            </a>

            {/* Location */}
            <div className="bg-white rounded-lg p-8 text-center border border-transparent">
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">Location</h3>
              <p className="text-muted-foreground">
                71B Road<br />
                Mashpee, MA 02649
              </p>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-lg p-8 text-center border border-transparent">
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5">
                <Clock className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">Service Area</h3>
              <p className="text-muted-foreground">
                Mobile service across<br />
                all of Cape Cod
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-teal rounded-xl p-10 lg:p-14 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
                Let's get your boat taken care of.
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Whether it's electronics, winterization, or a fresh detail — 
                we'll come to you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:5082946905"
                  className="inline-flex items-center gap-2 bg-white text-teal font-semibold px-8 py-3.5 rounded-md hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="mailto:Sales@sandnreef.com"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-8 py-3.5 rounded-md hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
