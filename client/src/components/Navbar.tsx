/*
 * DESIGN: Cape Cod Editorial — Navigation (WOW Edition)
 * Glass-effect backdrop blur, smooth color transitions,
 * animated mobile menu, hover underline effects
 * Updated: multi-page nav with Partners and About links
 */

import { useState, useEffect } from "react";
import { Phone, Menu, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/sandnreef-logo_13970d04.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  // Determine if we're on the homepage (for transparent nav)
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On subpages, always show the solid navbar
  const showSolid = scrolled || !isHomePage;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // If it's a hash link on the homepage
    if (href.startsWith("/#")) {
      if (isHomePage) {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src={LOGO_URL}
              alt="Sand & Reef"
              className="h-14 lg:h-16 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location === "/"
                : link.href.startsWith("/#")
                ? location === "/"
                : location === link.href;

            // Hash links use <a>, page links use <Link>
            const isHashLink = link.href.startsWith("/#");
            const isPageLink = !isHashLink;

            const className = `relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 group ${
              showSolid
                ? isActive
                  ? "text-teal"
                  : "text-navy hover:text-teal"
                : isActive
                ? "text-white"
                : "text-white/90 hover:text-white"
            }`;

            return isPageLink ? (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-teal transition-transform duration-300 origin-left w-full ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={className}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left w-full`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/1Tv8kXFwRk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                showSolid ? "text-navy/60 hover:text-teal" : "text-white/70 hover:text-white"
              }`}
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/sandnreef"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                showSolid ? "text-navy/60 hover:text-teal" : "text-white/70 hover:text-white"
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <a
            href="tel:5082946905"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              showSolid ? "text-navy hover:text-teal" : "text-white/90 hover:text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            (508) 294-6905
          </a>
          <Link href={isHomePage ? "#contact" : "/#contact"}>
            <motion.span
              className="bg-teal hover:bg-teal-light text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-teal/20 inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Now
            </motion.span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            showSolid ? "text-navy" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-sand-dark"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, i) => {
                const isHashLink = link.href.startsWith("/#");
                const isPageLink = !isHashLink;

                return isPageLink ? (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-navy font-medium text-base tracking-wide uppercase hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                    className="block py-3 text-navy font-medium text-base tracking-wide uppercase hover:text-teal transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="pt-4 border-t border-sand-dark mt-2 space-y-3">
                <a
                  href="tel:5082946905"
                  className="flex items-center gap-2 text-navy font-medium"
                >
                  <Phone className="w-4 h-4" />
                  (508) 294-6905
                </a>
                <Link
                  href={isHomePage ? "#contact" : "/#contact"}
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-teal text-white font-semibold py-3 rounded-md hover:bg-teal-light transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
