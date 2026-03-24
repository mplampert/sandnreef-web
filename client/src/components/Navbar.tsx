/*
 * DESIGN: Cape Cod Editorial — Navigation (WOW Edition)
 * Glass-effect backdrop blur, smooth color transitions,
 * animated mobile menu, hover underline effects
 * Updated: Services dropdown with links to individual service pages
 */

import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, Facebook, Instagram, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/sandnreef-logo_13970d04.png";

const serviceLinks = [
  { label: "Yacht Electronics", href: "/services/electronics" },
  { label: "Detailing", href: "/services/detailing" },
  { label: "Winterization", href: "/services/winterization" },
  { label: "Gel Coat & Bottom Paint", href: "/services/gelcoat-bottom-paint" },
  { label: "Engines & Repowers", href: "/services/engines-repowers" },
  { label: "Preventative Maintenance", href: "/services/maintenance" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Determine if we're on the homepage (for transparent nav)
  const isHomePage = location === "/";
  const isServicePage = location.startsWith("/services/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
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
                ? location === "/" || (link.label === "Services" && isServicePage)
                : location === link.href;

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

            // Services link with dropdown
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className={`${className} inline-flex items-center gap-1`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-teal transition-transform duration-300 origin-left w-full ${
                        isActive || isServicePage ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-xl border border-sand-dark/50 overflow-hidden"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-2">
                          {serviceLinks.map((sLink) => (
                            <Link
                              key={sLink.href}
                              href={sLink.href}
                              className={`block px-5 py-3 text-sm font-medium transition-colors ${
                                location === sLink.href
                                  ? "text-teal bg-teal/5"
                                  : "text-navy hover:text-teal hover:bg-sand/50"
                              }`}
                              onClick={() => setServicesOpen(false)}
                            >
                              {sLink.label}
                            </Link>
                          ))}
                          <div className="border-t border-sand-dark/30 mt-1 pt-1">
                            <a
                              href="/#services"
                              onClick={(e) => {
                                setServicesOpen(false);
                                if (isHomePage) {
                                  e.preventDefault();
                                  handleNavClick("/#services");
                                }
                              }}
                              className="block px-5 py-3 text-sm text-muted-foreground hover:text-teal transition-colors"
                            >
                              View All Services
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

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
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <motion.span
              className="bg-teal hover:bg-teal-light text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-teal/20 inline-block cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Now
            </motion.span>
          </a>
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

                // Services with expandable sub-menu
                if (link.hasDropdown) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-3 text-navy font-medium text-base tracking-wide uppercase hover:text-teal transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            className="pl-4 space-y-1 overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {serviceLinks.map((sLink) => (
                              <Link
                                key={sLink.href}
                                href={sLink.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-2.5 text-sm font-medium transition-colors ${
                                  location === sLink.href ? "text-teal" : "text-navy/70 hover:text-teal"
                                }`}
                              >
                                {sLink.label}
                              </Link>
                            ))}
                            <a
                              href="/#services"
                              onClick={(e) => {
                                if (isHomePage) {
                                  e.preventDefault();
                                  handleNavClick("/#services");
                                } else {
                                  setMobileOpen(false);
                                }
                              }}
                              className="block py-2.5 text-sm text-muted-foreground hover:text-teal transition-colors"
                            >
                              View All Services
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

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
                <a
                  href={isHomePage ? "#contact" : "/#contact"}
                  onClick={(e) => {
                    setMobileOpen(false);
                    if (isHomePage) {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-center bg-teal text-white font-semibold py-3 rounded-md hover:bg-teal-light transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
