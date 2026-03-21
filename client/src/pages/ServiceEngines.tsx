/*
 * DESIGN: Cape Cod Editorial — Engine Work & Full Repowers Service Page
 * Dedicated page for marine engine service, repair, and full repower installations
 */

import ServicePageLayout from "@/components/ServicePageLayout";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/engine-hero-3EACz5FUmn4dBkXwycY2Lk.webp";

const features = [
  {
    title: "Full Engine Repowers",
    description: "Complete outboard and inboard repower packages — from single engines to triple and quad setups. We handle rigging, controls, gauges, fuel systems, and sea trials.",
    icon: "⚡",
  },
  {
    title: "Engine Diagnostics & Repair",
    description: "Advanced computer diagnostics for all major outboard and inboard brands. We troubleshoot and repair electrical, fuel, cooling, and mechanical issues to get you back on the water.",
    icon: "🔍",
  },
  {
    title: "Outboard Service & Maintenance",
    description: "Scheduled maintenance for Yamaha, Mercury, Suzuki, Honda, and Evinrude outboards. Oil changes, lower unit service, impeller replacement, anodes, and annual tune-ups.",
    icon: "🔧",
  },
  {
    title: "Inboard & Sterndrive Service",
    description: "MerCruiser, Volvo Penta, and Yanmar inboard/sterndrive service. Winterization, cooling system flushes, bellows replacement, gimbal bearing service, and alignment.",
    icon: "⚙️",
  },
  {
    title: "Rigging & Controls",
    description: "Throttle and shift cable replacement, hydraulic steering systems, engine harness installation, and digital gauge upgrades. Clean, professional rigging on every job.",
    icon: "🎛️",
  },
  {
    title: "Fuel Systems",
    description: "Fuel tank inspection, cleaning, and replacement. Fuel line runs, water separator installation, and ethanol treatment systems. We solve fuel problems at the source.",
    icon: "⛽",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Assessment & Consultation",
    description: "We inspect your current engine setup, discuss your performance goals and budget, and recommend the right solution — whether that's a repair, rebuild, or full repower.",
  },
  {
    number: "2",
    title: "Quote & Engine Sourcing",
    description: "We provide a detailed, transparent quote covering parts, labor, and rigging. As authorized dealers, we source engines at competitive pricing with full factory warranty.",
  },
  {
    number: "3",
    title: "Installation & Rigging",
    description: "Our certified technicians handle the full installation — engine mounting, controls, wiring harness, fuel lines, hydraulics, and gauges. Every connection is done right.",
  },
  {
    number: "4",
    title: "Sea Trial & Handoff",
    description: "Every repower and major repair gets a thorough sea trial. We verify performance, check for leaks, calibrate systems, and walk you through everything before handing back the keys.",
  },
];

export default function ServiceEngines() {
  return (
    <ServicePageLayout
      heroImage={HERO_IMG}
      heroLabel="Engine Work & Repowers"
      heroTitle="Power You Can Count On."
      heroSubtitle="From routine maintenance to full repowers — expert marine engine service for every vessel on Cape Cod and the North Shore."
      introTitle="Keep Your Engine Running — Or Upgrade It Entirely"
      introText="Whether your outboard needs a tune-up or your boat is ready for a complete repower, Sand & Reef has the expertise to handle it. Our certified marine mechanics work on all major brands and engine types — outboard, inboard, and sterndrive. We deliver clean, reliable engine work with transparent pricing and factory-backed warranties."
      introHighlights={[
        "Yamaha, Mercury, Suzuki & Honda certified",
        "Single, twin, triple & quad repower packages",
        "Full rigging — controls, gauges, fuel & hydraulics",
        "Computer diagnostics for all major brands",
        "Factory warranty on all new engine installations",
      ]}
      features={features}
      processTitle="From Diagnosis to Sea Trial"
      processSteps={processSteps}
      ctaTitle="Need Engine Work or a Repower?"
      ctaText="Tell us about your boat, your current engine, and what you're looking for. We'll assess the situation and put together a plan — from a simple repair to a full repower package."
      serviceValue="engine-repower"
    />
  );
}
