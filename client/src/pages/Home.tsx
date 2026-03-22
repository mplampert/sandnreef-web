/*
 * DESIGN: Cape Cod Editorial — Homepage (WOW Edition)
 * Assembles all sections with Stats counter and Testimonials
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
