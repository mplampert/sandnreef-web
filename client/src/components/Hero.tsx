/*
 * DESIGN: Cape Cod Editorial — Hero Section
 * Full-viewport video background with minimal overlay text
 * Smooth fade-in animations, editorial typography
 */

import { useEffect, useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/hero-cape-cod-iumqHeG7hLPgEjgntaMTCD.webp";
const HERO_VIDEO = "https://sandreefmedia.blob.core.windows.net/videos/1111-web.mp4";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={HERO_IMAGE}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center container">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-teal" />
              Cape Cod, Massachusetts
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-6 transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Built to respond.{" "}
            <span className="italic text-white/90">Service, as it should be.</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/80 font-light max-w-xl mb-10 leading-relaxed transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Winterization, electronics, maintenance &amp; detailing. 
            Professional mobile marine services across Cape Cod.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-light text-white font-semibold px-8 py-4 rounded-md text-base transition-all duration-300 hover:shadow-xl hover:shadow-teal/25 hover:-translate-y-0.5"
            >
              Book Now
            </a>
            <a
              href="tel:5082946905"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-md text-base border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              (508) 294-6905
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
