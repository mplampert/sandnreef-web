/*
 * DESIGN: Cape Cod Editorial — Yacht Electronics Service Page
 * Dedicated page for marine electronics sales & installation
 */

import ServicePageLayout from "@/components/ServicePageLayout";
import SEO from "@/components/SEO";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/electronics-hero-Fk2kT5CpswduHg3iNxHyJ5.webp";

const features = [
  {
    title: "Chartplotters & MFDs",
    description: "Sales and installation of Garmin, Simrad, Raymarine, and Furuno multifunction displays. Custom flush-mount and bracket installations for any helm layout.",
    icon: "🗺️",
  },
  {
    title: "Radar Systems",
    description: "Open-array and dome radar installation with full wiring, mounting, and calibration. Integrated with your existing MFD network for seamless operation.",
    icon: "📡",
  },
  {
    title: "Fish Finders & Sonar",
    description: "CHIRP sonar, side-scan, and down-scan transducer installation. Thru-hull and transom-mount options with professional fairing block work.",
    icon: "🐟",
  },
  {
    title: "Marine Audio & Lighting",
    description: "JL Audio, Fusion, and Rockford Fosgate marine audio systems. LED underwater lights, deck lighting, and navigation light upgrades.",
    icon: "🔊",
  },
  {
    title: "VHF & Communication",
    description: "VHF radio installation, AIS transponders, satellite phones, and emergency EPIRB/PLB systems. DSC-capable setups with proper MMSI programming.",
    icon: "📻",
  },
  {
    title: "Networking & Integration",
    description: "NMEA 2000 backbone installation, Wi-Fi systems, and multi-display networking. We ensure all your electronics talk to each other seamlessly.",
    icon: "🔗",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Consultation & Assessment",
    description: "We visit your boat to assess the current setup, discuss your needs, and recommend the right electronics package for your vessel and budget.",
  },
  {
    number: "2",
    title: "Custom Quote & Sourcing",
    description: "We provide a detailed quote including equipment and labor. As authorized dealers for major brands, we source equipment at competitive prices.",
  },
  {
    number: "3",
    title: "Professional Installation",
    description: "Our certified technicians handle all wiring, mounting, and configuration. Clean cable runs, proper grounding, and watertight connections — every time.",
  },
  {
    number: "4",
    title: "Testing & Training",
    description: "We thoroughly test every system on the water, then walk you through operation so you're confident using your new electronics before we leave.",
  },
];

export default function ServiceElectronics() {
  return (
    <>
    <SEO
      title="Yacht Electronics Installation & Sales"
      description="Marine electronics sales & installation on Cape Cod & North Shore. Garmin, Simrad, Raymarine certified. Chartplotters, radar, fish finders, audio & lighting. Mobile service."
      path="/services/electronics"
    />
    <ServicePageLayout
      heroImage={HERO_IMG}
      heroLabel="Yacht Electronics"
      heroTitle="Marine Electronics, Done Right."
      heroSubtitle="From chartplotters to full navigation systems — expert sales, installation, and integration for every vessel on Cape Cod and the North Shore."
      introTitle="Your Boat Deserves the Best Electronics"
      introText="Sand & Reef is your trusted partner for marine electronics on Cape Cod and the North Shore. We sell, install, and service all major brands — Garmin, Simrad, Raymarine, Furuno, and more. Whether you're upgrading a single fish finder or outfitting a new build with a complete electronics package, our certified technicians deliver clean, reliable installations that last."
      introHighlights={[
        "Authorized dealer for Garmin, Simrad & Raymarine",
        "NMEA 2000 certified installations",
        "Mobile service — we come to your marina or dock",
        "Full system integration and networking",
        "Warranty-backed equipment and labor",
      ]}
      features={features}
      processTitle="From Quote to Open Water"
      processSteps={processSteps}
      ctaTitle="Ready to Upgrade Your Electronics?"
      ctaText="Tell us about your boat and what you're looking for. We'll come to you with a free consultation and custom quote — no obligation."
      serviceValue="electronics-installation"
    />
    </>
  );
}
