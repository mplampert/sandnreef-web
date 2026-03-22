/*
 * DESIGN: Cape Cod Editorial — Detailing Service Page
 * Dedicated page for boat detailing, washing, waxing, and ceramic coating
 */

import ServicePageLayout from "@/components/ServicePageLayout";
import SEO from "@/components/SEO";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/detailing-hero-ieRjgZYJR2jorXSEYaovDJ.webp";

const features = [
  {
    title: "Exterior Wash & Wax",
    description: "Full hull and topside wash using marine-safe products, followed by a hand-applied carnauba or polymer wax for lasting UV protection and a deep, wet shine.",
    icon: "✨",
  },
  {
    title: "Ceramic Coating",
    description: "Professional-grade marine ceramic coating that provides years of protection against UV, salt, and oxidation. The ultimate in long-term hull and gelcoat care.",
    icon: "🛡️",
  },
  {
    title: "Hull Cleaning & Polish",
    description: "Oxidation removal, compound polishing, and restoration for fiberglass and gelcoat. We bring faded hulls back to their original showroom finish.",
    icon: "💎",
  },
  {
    title: "Interior Detailing",
    description: "Deep cleaning of upholstery, carpets, headliners, and all interior surfaces. Mildew treatment, vinyl conditioning, and stain removal included.",
    icon: "🪣",
  },
  {
    title: "Teak Restoration",
    description: "Sanding, cleaning, and sealing of teak decks, rails, and trim. We restore weathered teak to its natural golden color with professional-grade sealers.",
    icon: "🪵",
  },
  {
    title: "Metal Polishing",
    description: "Stainless steel, aluminum, and chrome polishing for rails, cleats, hardware, and fittings. Protective sealant applied to slow future tarnishing.",
    icon: "⚓",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Assessment & Quote",
    description: "We inspect your vessel's current condition, discuss your goals (maintenance wash vs. full restoration), and provide a transparent quote with no hidden fees.",
  },
  {
    number: "2",
    title: "Prep & Protection",
    description: "We tape off sensitive areas, protect electronics and hardware, and set up our mobile detailing station at your marina or dock.",
  },
  {
    number: "3",
    title: "Detail & Restore",
    description: "Our team works methodically from top to bottom — washing, compounding, polishing, and protecting every surface to bring your boat back to life.",
  },
  {
    number: "4",
    title: "Final Inspection",
    description: "We walk through the finished work with you, point out any areas of concern, and provide care recommendations to keep your boat looking its best.",
  },
];

export default function ServiceDetailing() {
  return (
    <>
    <SEO
      title="Boat Detailing, Washing & Waxing"
      description="Professional boat detailing on Cape Cod & North Shore. Hull cleaning, topside polish, wax & seal, interior detailing, ceramic coating. Mobile service to your dock."
      path="/services/detailing"
    />
    <ServicePageLayout
      heroImage={HERO_IMG}
      heroLabel="Detailing"
      heroTitle="Showroom Shine, Dockside."
      heroSubtitle="Professional boat detailing, ceramic coating, and restoration services delivered to your marina across Cape Cod and the North Shore."
      introTitle="More Than Just a Wash"
      introText="Your boat takes a beating from sun, salt, and the elements. Sand & Reef's professional detailing services go beyond a basic wash — we restore, protect, and maintain your vessel's finish so it looks its best season after season. From quick maintenance washes to full oxidation removal and ceramic coating, we bring the expertise and equipment to your dock."
      introHighlights={[
        "Mobile detailing — we come to your marina",
        "Marine-grade ceramic coating specialists",
        "Oxidation removal and gelcoat restoration",
        "Interior deep cleaning and mildew treatment",
        "Eco-friendly, marina-approved products",
      ]}
      features={features}
      processTitle="Our Detailing Process"
      processSteps={processSteps}
      ctaTitle="Ready for a Fresh Shine?"
      ctaText="Tell us about your boat and what it needs. Whether it's a quick wash or a full restoration, we'll put together a custom plan and come to you."
      serviceValue="detailing"
    />
    </>
  );
}
