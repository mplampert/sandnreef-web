/*
 * DESIGN: Cape Cod Editorial — Contact Section (WOW Edition)
 * Service request form + contact info cards + animated CTA banner
 */

import { useRef, useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Anchor } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
    value: "71B Road, Mashpee, MA 02649",
    href: undefined,
    clickable: false,
  },
  {
    icon: Clock,
    title: "Service Area",
    value: "Mobile across all of Cape Cod",
    href: undefined,
    clickable: false,
  },
];

const serviceOptions = [
  { label: "Electronics Installation", value: "electronics-installation" },
  { label: "Winterization & Shrink-Wrap", value: "winterization" },
  { label: "Detailing & Washing", value: "detailing" },
  { label: "Gel Coat & Bottom Paint", value: "gelcoat-bottom-paint" },
  { label: "Engine Work & Repowers", value: "engine-repower" },
  { label: "Preventative Maintenance", value: "preventative-maintenance" },
  { label: "Other / General Inquiry", value: "other" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    boatInfo: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [smsOptIn, setSmsOptIn] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await axios.post(
        "https://services.leadconnectorhq.com/hooks/tTDLcC77dmE4UWjUNAVf/webhook-trigger/tqwyH0Q2C67hOCZZQyZp",
        {
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_needed: formData.service,
          boat_info: formData.boatInfo,
          message: formData.message,
          location_id: "tTDLcC77dmE4UWjUNAVf",
          source: "Sand & Reef Website",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // Fire Meta Pixel Lead event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: formData.service,
          content_category: 'Service Request',
        });
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", boatInfo: "", message: "" });
    } catch {
      setError("Something went wrong. Please try calling us at (508) 294-6905.");
    } finally {
      setSubmitting(false);
    }
  };

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
            Fill out the form below or give us a call.
            We respond fast — it's kind of our thing.
          </p>
        </motion.div>

        {/* Form + Contact Info — two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Service Request Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-500 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-[60px]" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-serif text-2xl text-navy">Request Service</h3>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <CheckCircle className="w-10 h-10 text-teal" />
                    </motion.div>
                    <h4 className="font-serif text-2xl text-navy mb-3">Request Submitted!</h4>
                    <p className="text-muted-foreground max-w-sm">
                      Thanks for reaching out! Your service request has been received.
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Full Name <span className="text-teal">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Email <span className="text-teal">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(508) 555-0123"
                          className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Service Needed <span className="text-teal">*</span>
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300 appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                          }}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Boat Info */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Boat Info
                      </label>
                      <input
                        type="text"
                        name="boatInfo"
                        value={formData.boatInfo}
                        onChange={handleChange}
                        placeholder="e.g., 28' Grady-White, Slip #42, Falmouth Marina"
                        className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or what you need help with..."
                        className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* SMS Opt-In Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="smsOptIn"
                        checked={smsOptIn}
                        onChange={(e) => setSmsOptIn(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-sand-dark text-teal focus:ring-teal/30 cursor-pointer shrink-0"
                      />
                      <label htmlFor="smsOptIn" className="text-xs text-navy/60 leading-relaxed cursor-pointer">
                        I agree to receive marketing and service-related text messages from Sand &amp; Reef Marine Solutions, including appointment reminders, service updates, and promotional offers. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to opt out.
                      </label>
                    </div>

                    {/* Submit */}
                    {error && (
                      <motion.p
                        className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {error}
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold px-10 py-4 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-teal/20 transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      whileHover={submitting ? {} : { scale: 1.02 }}
                      whileTap={submitting ? {} : { scale: 0.98 }}
                    >
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      {submitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4 relative" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span className="relative">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 relative" />
                          <span className="relative">Send Request</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.clickable ? "a" : "div";
              const wrapperProps = item.clickable && item.href ? { href: item.href } : {};

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="group flex items-center gap-5 bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-teal/20"
                  >
                    <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:shadow-lg group-hover:shadow-teal/25 transition-all duration-500">
                      <Icon className="w-6 h-6 text-teal group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{item.title}</h4>
                      <p className={`text-sm leading-relaxed ${item.clickable ? "text-teal font-semibold" : "text-muted-foreground"}`}>
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Quick response badge */}
            <motion.div
              className="bg-navy rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-6 h-6 text-teal" />
              </motion.div>
              <h4 className="font-serif text-xl text-white mb-2">Fast Response</h4>
              <p className="text-white/60 text-sm">
                We typically respond within 24 hours.
                For urgent requests, give us a call.
              </p>
            </motion.div>
          </motion.div>
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
