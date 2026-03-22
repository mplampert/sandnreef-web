/*
 * DESIGN: Cape Cod Editorial — Winterization Service Page
 * Dedicated page for boat winterization and shrink-wrapping
 */

import ServicePageLayout from "@/components/ServicePageLayout";
import SEO from "@/components/SEO";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/winterization-hero-6J5uuLxwUuBqhNVAfGvyWt.webp";

const features = [
  {
    title: "Engine Winterization",
    description: "Complete engine winterization for inboards, outboards, and sterndrives. We flush cooling systems, fog cylinders, change oil, and stabilize fuel to prevent freeze damage.",
    icon: "🔧",
  },
  {
    title: "Shrink-Wrap",
    description: "Professional-grade marine shrink-wrap application with vents, support poles, and zipper doors. Custom-fit to your vessel for maximum protection against snow, ice, and wind.",
    icon: "📦",
  },
  {
    title: "Fresh Water System",
    description: "Full drain and antifreeze treatment of all freshwater lines, tanks, water heaters, and heads. We ensure no water remains to freeze and crack pipes or fittings.",
    icon: "🚿",
  },
  {
    title: "Battery & Electrical",
    description: "Battery disconnect, removal, or trickle charger setup. We inspect electrical connections, protect terminals, and ensure your systems are ready for spring commissioning.",
    icon: "🔋",
  },
  {
    title: "Interior Protection",
    description: "Mildew prevention treatment, dehumidifier setup, and proper ventilation configuration. We protect upholstery, electronics, and interior surfaces from winter moisture damage.",
    icon: "🏠",
  },
  {
    title: "Spring Commissioning",
    description: "When the season returns, we de-winterize, unwrap, and commission your vessel — engine start-up, systems check, and sea trial so you're ready to go on day one.",
    icon: "☀️",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Schedule Early",
    description: "Book your winterization slot early in the season (September–October) to guarantee availability. We'll coordinate timing based on your last trip of the year.",
  },
  {
    number: "2",
    title: "On-Site Winterization",
    description: "Our technicians come to your marina or storage yard. We handle the full winterization checklist — engine, water systems, batteries, and more — in a single visit.",
  },
  {
    number: "3",
    title: "Shrink-Wrap & Seal",
    description: "We custom-wrap your vessel with marine-grade shrink-wrap, install support structures, vents, and access doors. Your boat is sealed tight for the New England winter.",
  },
  {
    number: "4",
    title: "Spring Ready",
    description: "Come spring, we return to unwrap, de-winterize, and commission your boat. Engine start-up, systems check, and you're back on the water — hassle-free.",
  },
];

export default function ServiceWinterization() {
  return (
    <>
    <SEO
      title="Boat Winterization & Shrink-Wrap"
      description="Professional boat winterization & shrink-wrapping on Cape Cod & North Shore. Engine winterization, antifreeze treatment, battery care. Protect your vessel through New England winters."
      path="/services/winterization"
    />
    <ServicePageLayout
      heroImage={HERO_IMG}
      heroLabel="Winterization"
      heroTitle="Protect Your Investment All Winter."
      heroSubtitle="Comprehensive boat winterization and professional shrink-wrapping to keep your vessel safe through the harshest New England winters."
      introTitle="New England Winters Are No Joke"
      introText="Freezing temperatures, heavy snow, and coastal storms can cause thousands of dollars in damage to an unprotected boat. Sand & Reef's winterization service covers every system on your vessel — from engine and water lines to batteries and interior — so you can rest easy knowing your investment is protected until spring."
      introHighlights={[
        "Complete engine winterization (inboard, outboard, sterndrive)",
        "Professional marine shrink-wrap with vents and access doors",
        "Fresh water system drain and antifreeze treatment",
        "Mobile service — we come to your marina or storage yard",
        "Spring commissioning and de-winterization included",
      ]}
      features={features}
      processTitle="Winterization Made Easy"
      processSteps={processSteps}
      ctaTitle="Book Your Winterization Now"
      ctaText="Don't wait until the first frost. Secure your winterization slot early and we'll handle everything — from engine prep to shrink-wrap — so your boat is ready for spring."
      serviceValue="winterization"
    />
    </>
  );
}
