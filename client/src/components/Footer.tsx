/*
 * DESIGN: Cape Cod Editorial — Footer (WOW Edition)
 * Deep navy background, animated entrance, wave divider
 * Updated: two locations (Cape Cod + North Shore Beverly)
 */

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/sandnreef-logo_13970d04.png";

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative">
      {/* Wave divider */}
      <div className="relative -mt-1">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 80L1440 30C1320 50 1200 60 1080 50C960 40 840 10 720 5C600 0 480 20 360 35C240 50 120 60 0 50L0 80Z"
            fill="oklch(0.22 0.04 260)"
          />
          <path
            d="M0 80L1440 80L1440 50C1320 65 1200 70 1080 65C960 60 840 40 720 35C600 30 480 45 360 55C240 65 120 70 0 65L0 80Z"
            fill="oklch(0.22 0.04 260)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container py-16 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Sand & Reef"
              className="h-16 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/60 leading-relaxed text-sm mb-6">
              Professional marine services across Cape Cod & the North Shore.
              Veteran-owned, fully insured, local experts.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.facebook.com/share/1Tv8kXFwRk/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/sandnreef"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.15em] uppercase mb-6 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "Partners", href: "/partners" },
                { label: "About", href: "/about" },
                { label: "Contact & Book", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-teal transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-teal transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.15em] uppercase mb-6 text-white/80">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Electronic Sales & Installation",
                "Winterization & Shrink-Wrap",
                "Washing & Waxing",
                "Preventative Maintenance",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cape Cod Location */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.15em] uppercase mb-6 text-white/80">
              Cape Cod
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=71B+Road,+Mashpee,+MA+02649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-teal transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  71B Road, Mashpee, MA 02649
                </a>
              </li>
              <li>
                <a
                  href="tel:5082946905"
                  className="flex items-center gap-3 text-white/50 hover:text-teal transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (508) 294-6905
                </a>
              </li>
              <li>
                <a
                  href="mailto:Sales@sandnreef.com"
                  className="flex items-center gap-3 text-white/50 hover:text-teal transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  Sales@sandnreef.com
                </a>
              </li>
            </ul>
          </div>

          {/* North Shore Location */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.15em] uppercase mb-6 text-white/80">
              North Shore
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=100+Cummings+Center+Suite+113+E4+Beverly+MA+01915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-teal transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  100 Cummings Center, Suite 113 E4, Beverly, MA 01915
                </a>
              </li>
              <li>
                <a
                  href="tel:5082946905"
                  className="flex items-center gap-3 text-white/50 hover:text-teal transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (508) 294-6905
                </a>
              </li>
              <li>
                <a
                  href="mailto:Sales@sandnreef.com"
                  className="flex items-center gap-3 text-white/50 hover:text-teal transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  Sales@sandnreef.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Sand &amp; Reef. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Mobile service available across Cape Cod & the North Shore, Massachusetts
          </p>
        </div>
      </div>
    </footer>
  );
}
