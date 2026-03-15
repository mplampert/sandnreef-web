/*
 * DESIGN: Cape Cod Editorial — Contact Section (WOW Edition)
 * Hover-lift contact cards, animated CTA banner with gradient shift
 */

import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: "(508) 294-6905",
    href: "tel:5082946905",
    clickable: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "Sales@sandnreef.com",
    href: "mailto:Sales@sandnreef.com",
    clickable: true,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "71B Road\nMashpee, MA 02649",
    href: null,
    clickable: false,
  },
  {
    icon: Clock,
    title: "Service Area",
    value: "Mobile service across\nall of Cape Cod",
    href: null,
    clickable: false,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 lg:py-36 bg-sand relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.22 0.04 260) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container relative" ref={ref}>
        {/* Section header */}
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
            Get In Touch
            <motion.span
              className="h-px bg-teal"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy mb-5">
            Ready to Book?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Give us a call, send an email, or reach out on social media.
            We respond fast — it's kind of our thing.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.clickable ? motion.a : motion.div;
            const wrapperProps = item.clickable ? { href: item.href } : {};

            return (
              <Wrapper
                key={item.title}
                {...(wrapperProps as any)}
                className="group bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-teal/20"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal group-hover:shadow-lg group-hover:shadow-teal/25 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-7 h-7 text-teal group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <h3 className="font-serif text-xl text-navy mb-2">{item.title}</h3>
                <p className={`whitespace-pre-line text-sm leading-relaxed ${item.clickable ? "text-teal font-semibold" : "text-muted-foreground"}`}>
                  {item.value}
                </p>
              </Wrapper>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal via-teal-light to-teal bg-[length:200%_100%] animate-[gradientShift_4s_ease_infinite]" />

          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative p-12 lg:p-16 text-center">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
              Let's get your boat taken care of.
            </h3>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Whether it's electronics, winterization, or a fresh detail —
              we'll come to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:5082946905"
                className="group relative inline-flex items-center gap-2 bg-white text-teal font-semibold px-10 py-4 rounded-md overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-navy/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Phone className="w-4 h-4 relative" />
                <span className="relative">Call Now</span>
              </motion.a>
              <motion.a
                href="mailto:Sales@sandnreef.com"
                className="group inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-medium px-10 py-4 rounded-md hover:bg-white/25 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
