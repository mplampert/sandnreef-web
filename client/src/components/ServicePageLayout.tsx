/*
 * DESIGN: Cape Cod Editorial — Service Detail Page Layout
 * Reusable layout for individual service pages with hero, features,
 * process steps, and embedded contact form pre-selecting the service.
 */

import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail, Send, Anchor } from "lucide-react";
import { Link } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ServicePageProps {
  heroImage: string;
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  introHighlights: string[];
  features: ServiceFeature[];
  processTitle: string;
  processSteps: ProcessStep[];
  ctaTitle: string;
  ctaText: string;
  serviceValue: string; // value sent to GHL webhook
}

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/tTDLcC77dmE4UWjUNAVf/webhook-trigger/tqwyH0Q2C67hOCZZQyZp";

export default function ServicePageLayout({
  heroImage,
  heroLabel,
  heroTitle,
  heroSubtitle,
  introTitle,
  introText,
  introHighlights,
  features,
  processTitle,
  processSteps,
  ctaTitle,
  ctaText,
  serviceValue,
}: ServicePageProps) {
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const formInView = useInView(formRef, { once: true, margin: "-80px" });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Fire Meta Pixel ViewContent event on service page load
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: serviceValue,
        content_category: "Service Page",
        content_type: "service",
      });
    }
  }, [serviceValue]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    boatInfo: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await axios.post(
        GHL_WEBHOOK,
        {
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_needed: serviceValue,
          boat_info: formData.boatInfo,
          message: formData.message,
          location_id: "tTDLcC77dmE4UWjUNAVf",
          source: `Sand & Reef Website - ${serviceValue} Page`,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      // Fire Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: serviceValue,
          content_category: "Service Request",
        });
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", boatInfo: "", message: "" });
    } catch {
      setError("Something went wrong. Please try calling us at (508) 294-6905.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={heroTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />
        </div>
        <div className="container relative pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-3 text-teal text-sm font-medium tracking-[0.25em] uppercase mb-4">
              <span className="h-px w-8 bg-teal" />
              {heroLabel}
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white mb-4 max-w-3xl">
              {heroTitle}
            </h1>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl leading-relaxed">
              {heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#service-form"
                className="group inline-flex items-center gap-2 bg-teal text-white font-semibold px-8 py-3.5 rounded-md overflow-hidden relative"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Get a Quote</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a
                href="tel:5082946905"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (508) 294-6905
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl text-navy mb-6">
                {introTitle}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {introText}
              </p>
              <div className="space-y-4">
                {introHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-teal" />
                    </div>
                    <span className="text-navy font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Stats cards */}
              {[
                { value: "500+", label: "Boats Serviced" },
                { value: "100%", label: "Fully Insured" },
                { value: "24hr", label: "Response Time" },
                { value: "15+", label: "Years Experience" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-xl ${
                    i % 2 === 0 ? "bg-sand" : "bg-navy text-white"
                  } ${i >= 2 ? "translate-y-4" : ""}`}
                >
                  <p className={`font-serif text-3xl lg:text-4xl mb-1 ${
                    i % 2 === 0 ? "text-teal" : "text-teal-light"
                  }`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm font-medium ${
                    i % 2 === 0 ? "text-navy/60" : "text-white/60"
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="py-24 lg:py-32 bg-sand" ref={featuresRef}>
        <div className="container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-teal text-sm font-medium tracking-[0.25em] uppercase mb-5">
              <span className="h-px w-8 bg-teal" />
              What's Included
              <span className="h-px w-8 bg-teal" />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy">
              Our {heroLabel} Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-500 group"
                initial={{ opacity: 0, y: 40 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-serif text-xl text-navy mb-3 group-hover:text-teal transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS STEPS ===== */}
      <section className="py-24 lg:py-32 bg-background" ref={processRef}>
        <div className="container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-teal text-sm font-medium tracking-[0.25em] uppercase mb-5">
              <span className="h-px w-8 bg-teal" />
              How It Works
              <span className="h-px w-8 bg-teal" />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy">
              {processTitle}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                    <span className="font-serif text-2xl text-teal">{step.number}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px h-12 bg-sand-dark mx-auto mt-3" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-2xl text-navy mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section id="service-form" className="py-24 lg:py-32 bg-sand" ref={formRef}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: CTA content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-teal text-sm font-medium tracking-[0.25em] uppercase mb-5">
                <span className="h-px w-8 bg-teal" />
                Get Started
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-navy mb-6">
                {ctaTitle}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {ctaText}
              </p>

              <div className="space-y-5">
                <a
                  href="tel:5082946905"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us directly</p>
                    <p className="text-navy font-semibold">(508) 294-6905</p>
                  </div>
                </a>
                <a
                  href="mailto:Sales@sandnreef.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="text-navy font-semibold">Sales@sandnreef.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="/"
                  className="text-teal text-sm font-medium hover:underline flex items-center gap-1"
                >
                  &larr; Back to Home
                </Link>
                <span className="text-sand-dark">|</span>
                <Link
                  href="/#services"
                  className="text-teal text-sm font-medium hover:underline flex items-center gap-1"
                >
                  All Services
                </Link>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-[60px]" />

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Anchor className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy">Request {heroLabel}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  Service type: <span className="text-teal font-medium">{serviceValue}</span>
                </p>

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
                        Thanks for reaching out! We'll get back to you within 24 hours with a quote for your {serviceValue.toLowerCase()} needs.
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
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Boat Info
                          </label>
                          <input
                            type="text"
                            name="boatInfo"
                            value={formData.boatInfo}
                            onChange={handleChange}
                            placeholder="e.g. 28ft Boston Whaler"
                            className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Tell us about your project
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe what you need..."
                          className="w-full px-4 py-3 rounded-lg border border-sand-dark bg-sand/30 text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all duration-300 resize-none"
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-teal hover:bg-teal-light text-white font-semibold py-3.5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {submitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Request {heroLabel} Quote
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
