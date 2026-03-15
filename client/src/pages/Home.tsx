/*
 * DESIGN: Cape Cod Editorial — Homepage
 * Assembles all sections: Navbar, Hero, Services, About, Contact, Footer
 * Magazine-style flow with generous whitespace
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
