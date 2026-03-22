/*
 * DESIGN: Cape Cod Editorial — Preventative Maintenance Service Page
 * Dedicated page for scheduled boat maintenance and care programs
 */

import ServicePageLayout from "@/components/ServicePageLayout";
import SEO from "@/components/SEO";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/maintenance-hero-4vHrXbXFwAYNvjiBubdqCz.webp";

const features = [
  {
    title: "Engine Service",
    description: "Scheduled oil changes, filter replacements, impeller swaps, and belt inspections for outboards, inboards, and sterndrives. We follow manufacturer intervals to keep your warranty intact.",
    icon: "⚙️",
  },
  {
    title: "Fluid Systems",
    description: "Hydraulic steering fluid, trim & tilt fluid, transmission oil, and coolant checks. We top off, flush, and replace fluids on schedule to prevent costly failures on the water.",
    icon: "💧",
  },
  {
    title: "Electrical Inspection",
    description: "Battery load testing, terminal cleaning, wiring inspection, and bilge pump verification. We catch corroded connections and weak batteries before they leave you stranded.",
    icon: "🔌",
  },
  {
    title: "Running Gear & Props",
    description: "Propeller inspection, zinc anode replacement, shaft seal checks, and lower unit service. We keep everything below the waterline running smooth and corrosion-free.",
    icon: "🔩",
  },
  {
    title: "Safety Equipment",
    description: "Fire extinguisher inspection, flare expiration checks, life jacket inventory, and first aid kit review. We ensure your vessel meets all USCG safety requirements.",
    icon: "🛟",
  },
  {
    title: "Seasonal Tune-Ups",
    description: "Spring commissioning and fall prep packages tailored to your boat. We handle the seasonal transition so your vessel is always ready when you are — and protected when you're not.",
    icon: "📋",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Initial Assessment",
    description: "We inspect your boat stem to stern, document the current condition of all systems, and identify any immediate concerns or upcoming maintenance needs.",
  },
  {
    number: "2",
    title: "Custom Maintenance Plan",
    description: "Based on your boat, engine hours, and usage patterns, we build a maintenance schedule. You'll know exactly what's due and when — no surprises.",
  },
  {
    number: "3",
    title: "Scheduled Service Visits",
    description: "Our technicians come to your marina or dock on schedule. We handle everything on-site — oil changes, filter swaps, fluid checks, and inspections — with minimal disruption to your boating.",
  },
  {
    number: "4",
    title: "Service Report & Tracking",
    description: "After every visit, you receive a detailed service report with photos. We track your maintenance history so nothing falls through the cracks and your resale value stays high.",
  },
];

export default function ServiceMaintenance() {
  return (
    <>
    <SEO
      title="Preventative Boat Maintenance"
      description="Scheduled preventative boat maintenance on Cape Cod & North Shore. Engine service, fluid systems, electrical inspection, safety checks. Mobile service at your marina."
      path="/services/maintenance"
    />
    <ServicePageLayout
      heroImage={HERO_IMG}
      heroLabel="Preventative Maintenance"
      heroTitle="Stay Ahead of the Problem."
      heroSubtitle="Scheduled maintenance programs that keep your boat running reliably and protect your investment — season after season."
      introTitle="The Cheapest Repair Is the One You Never Need"
      introText="Most breakdowns on the water are preventable. Sand & Reef's preventative maintenance programs are designed to catch small issues before they become expensive problems. We come to your marina on a regular schedule, handle everything from oil changes to safety inspections, and keep detailed records so your boat is always in top shape — and your resale value stays where it should be."
      introHighlights={[
        "Custom maintenance schedules based on your boat and usage",
        "Mobile service — we come to your marina or dock",
        "Detailed service reports with photos after every visit",
        "All major engine brands: Yamaha, Mercury, Suzuki, Honda",
        "Spring commissioning and fall prep packages included",
      ]}
      features={features}
      processTitle="Maintenance Made Simple"
      processSteps={processSteps}
      ctaTitle="Set Up Your Maintenance Plan"
      ctaText="Tell us about your boat, how often you use it, and where it's kept. We'll put together a custom maintenance schedule that keeps your vessel running right — and saves you money in the long run."
      serviceValue="preventative-maintenance"
    />
    </>
  );
}
