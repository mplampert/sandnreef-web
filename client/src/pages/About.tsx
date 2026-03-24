/*
 * DESIGN: Cape Cod Editorial — Meet the Team Page
 * Veteran-owned badge, alternating team member cards,
 * editorial layout with staggered animations
 */

import { motion } from "framer-motion";
import { Shield, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const teamMembers = [
  {
    name: "Charlie Schmalz",
    role: "Company Owner · Marine Electronics",
    experience: "23+ years",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/charlie-schmalz_700c3350.webp",
    objectPos: "object-[center_30%]",
    bio: "Charlie Schmalz is a retired U.S. Coast Guard servicemember and FAA-certified technician with over 23 years of experience in marine and aviation systems. Specializing in marine electronics, electrical systems, engine diagnostics, and vessel overhauls, he brings a practical, customer-first approach to marine services and boat sales. Charlie is known for honest guidance, technical precision, and helping clients make confident decisions on and off the water.",
    location: "Cape Cod",
  },
  {
    name: "Paul T. Lehman",
    role: "Marine Technician",
    experience: "20+ years",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/paul-lehman_3369117a.webp",
    objectPos: "object-[center_20%]",
    bio: "Paul T. Lehman is a retired United States Coast Guard technician with over two decades of hands-on experience in maintenance and facilities operations. Originally from Minnesota, Paul grew up on the water, developing a lifelong connection to boating and marine systems from a young age. A graduate of the Marine Mechanics Institute, Paul brings extensive technical expertise to every project. He holds Yamaha, Mercury, and ABYC certifications, reflecting his comprehensive knowledge of modern marine service and industry best practices.",
    location: "Cape Cod",
  },
  {
    name: "Jaydon Rodrigues",
    role: "Marketing and Operations Lead",
    experience: null,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/jaydon-rodrigues_6224e0ed.webp",
    objectPos: "object-[center_30%]",
    bio: "Jaydon Rodrigues is the Marketing and Operations Lead at Sand & Reef Marine Solutions, responsible for building the technical and operational foundation that supports the company's growth. With a background in technology and systems architecture, Jaydon focuses on process optimization, digital infrastructure, and data-driven decision-making across marketing and operations.",
    location: "Cape Cod",
  },
  {
    name: "Dekel Cohen Sharon",
    role: "Operations & Team Lead",
    experience: "2 years",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/dekel-cohen-sharon-new_ed82b947.webp",
    objectPos: "object-[center_40%]",
    imgHeight: "h-[450px] lg:h-[600px]",
    bio: "At Sand & Reef, I work closely with our team to keep daily operations running smoothly and deliver reliable, high-quality marine services. With a background as a college basketball team captain, I bring a team-first mindset, clear communication, and accountability to helping build a company that can grow while remaining dependable and customer-focused.",
    location: "Cape Cod",
  },
  {
    name: "Nate Kennedy",
    role: "North Shore Owner / General Manager",
    experience: "14+ years",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/nate-kennedy_8b8d988c.webp",
    objectPos: "object-[center_15%]",
    bio: "I've always been driven by a passion for the water and the outdoors. Fishing isn't just a hobby for me — it's a way of life. That lifelong love of being on the water inspired me to join this amazing company, built on quality, reliability, and a true understanding of what boaters and anglers need. Professionally, I bring over 14 years of experience as a Project Manager, and eight years as an EMT. I'm proud to serve as President of Beverly Youth Lacrosse. My approach: lead with integrity, work hard, and always be prepared.",
    location: "North Shore",
  },
  {
    name: "Nate Jr",
    role: "North Shore — Assistant Manager",
    experience: null,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663412394151/6sSpA7rGtoUjxUyfT8JTHc/nate-jr_56a95f69.webp",
    objectPos: "object-[center_35%]",
    bio: "From a young age, he's had a passion for the water and a big dream of becoming a boat captain one day. He loves fishing and being on the water. When he's not near the water, you'll find him playing hockey or lacrosse and always working hard to improve his skills. He brings energy, determination, and a love for teamwork to everything he does.",
    location: "North Shore",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-sand">
      <SEO
        title="About Us — Meet the Team"
        description="Meet the Sand & Reef team. Veteran-owned marine services on Cape Cod & North Shore. Local experts with decades of experience in marine electronics, detailing, and engine work."
        path="/about"
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-4 h-4" />
            Veteran-Owned & Operated
          </motion.div>
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Meet the team
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Cape Cod boat people. Decades of experience, one standard.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="space-y-20 lg:space-y-28">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={member.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {/* Image */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <motion.div
                      className="relative overflow-hidden rounded-xl shadow-xl group"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full ${(member as any).imgHeight || 'h-80 lg:h-[480px]'} object-cover ${(member as any).objectPos || 'object-top'} transition-transform duration-700 group-hover:scale-105`}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                      {/* Location badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                        {member.location}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-teal text-xs font-semibold tracking-[0.15em] uppercase">
                        {member.role}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">
                      {member.name}
                    </h2>
                    {member.experience && (
                      <div className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
                        {member.experience} experience
                      </div>
                    )}
                    <div className="w-12 h-0.5 bg-teal mb-6" />
                    <p className="text-navy/70 leading-relaxed text-base lg:text-lg">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-24 bg-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-navy rounded-full blur-[80px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Work with us
          </motion.h2>
          <motion.p
            className="text-white/80 text-lg max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ready to get your boat in top shape? Our team is here to help.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-md hover:bg-sand transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:5082946905"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-md hover:bg-white/10 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              (508) 294-6905
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
