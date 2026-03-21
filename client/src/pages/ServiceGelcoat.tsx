/*
 * DESIGN: Cape Cod Editorial — Gel Coat & Bottom Paint Service Page
 * Dedicated page for gel coat repair, refinishing, and bottom paint services
 */

import ServicePageLayout from "@/components/ServicePageLayout";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/gelcoat-hero-XFsXeYyUDrZ8zU5WFSBcAj.webp";

const features = [
  {
    title: "Gel Coat Repair",
    description: "Spider cracks, chips, gouges, and stress fractures repaired to factory finish. Color-matched gel coat restoration that blends seamlessly with your existing hull.",
    icon: "🔧",
  },
  {
    title: "Gel Coat Refinishing",
    description: "Full hull gel coat refinishing for faded, oxidized, or weathered boats. We bring back the original gloss and depth of color — or upgrade to a completely new look.",
    icon: "✨",
  },
  {
    title: "Bottom Paint Application",
    description: "Professional antifouling bottom paint application using top-tier products from Interlux, Pettit, and Sea Hawk. Proper prep, primer, and multi-coat systems for maximum protection.",
    icon: "🎨",
  },
  {
    title: "Bottom Paint Removal",
    description: "Safe and thorough removal of old, built-up bottom paint layers. Soda blasting and chemical stripping options to get back to a clean substrate before repainting.",
    icon: "🧹",
  },
  {
    title: "Barrier Coat & Blister Repair",
    description: "Osmotic blister repair and epoxy barrier coat application to prevent water intrusion. We dry, grind, fill, and seal to protect your hull for years to come.",
    icon: "🛡️",
  },
  {
    title: "Waterline & Boot Stripe",
    description: "Crisp, professional waterline and boot stripe painting. Custom colors and pin-striping available to give your boat a sharp, finished look on the hard or in the water.",
    icon: "📏",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Haul-Out & Inspection",
    description: "We coordinate haul-out at your marina and perform a thorough hull inspection — documenting all damage, paint condition, and areas that need attention.",
  },
  {
    number: "2",
    title: "Prep & Surface Work",
    description: "Proper preparation is everything. We sand, clean, degrease, and fair the hull surface. Old paint is removed as needed, and repairs are made before any coating goes on.",
  },
  {
    number: "3",
    title: "Application & Coating",
    description: "Gel coat or bottom paint is applied in controlled conditions with professional spray equipment. Multiple coats, proper cure times, and meticulous masking ensure a flawless result.",
  },
  {
    number: "4",
    title: "Final Inspection & Launch",
    description: "We inspect every inch of the finished work, touch up any imperfections, and coordinate splash with your yard. Your boat goes back in the water looking better than ever.",
  },
];

export default function ServiceGelcoat() {
  return (
    <ServicePageLayout
      heroImage={HERO_IMG}
      heroLabel="Gel Coat & Bottom Paint"
      heroTitle="Hull Work That Lasts."
      heroSubtitle="From gel coat repair to full bottom paint jobs — professional hull finishing for every boat on Cape Cod and the North Shore."
      introTitle="Protect Your Investment Below the Waterline"
      introText="Your hull takes a beating — sun, salt, growth, and impact all take their toll. Sand & Reef delivers expert gel coat repair, refinishing, and bottom paint services that protect your boat and keep it looking sharp. We use only premium marine coatings and proven techniques, whether you need a quick touch-up or a complete hull restoration."
      introHighlights={[
        "Factory-quality gel coat color matching",
        "Interlux, Pettit & Sea Hawk antifouling paints",
        "Osmotic blister repair & epoxy barrier coats",
        "Full bottom paint removal & reapplication",
        "Mobile service or yard-based — your choice",
      ]}
      features={features}
      processTitle="From Haul-Out to Splash"
      processSteps={processSteps}
      ctaTitle="Need Hull Work?"
      ctaText="Tell us about your boat and what it needs. Whether it's a gel coat chip or a full bottom job, we'll put together a plan and get your hull back in shape."
      serviceValue="gelcoat-bottom-paint"
    />
  );
}
