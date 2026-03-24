/*
 * DESIGN: Cape Cod Editorial — Privacy Policy
 * Clean, readable legal page with Sand & Reef branding
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Sand & Reef"
        description="Sand & Reef Marine Solutions privacy policy. Learn how we collect, use, and protect your personal information."
      />
      <Navbar />

      <main className="bg-sand min-h-screen">
        {/* Header */}
        <div className="bg-navy text-white py-20 lg:py-28">
          <div className="container">
            <p className="text-teal text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Legal
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold">
              Privacy Policy
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              Last updated: March 24, 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="prose prose-lg prose-slate max-w-none space-y-8">

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Introduction</h2>
                <p className="text-navy/70 leading-relaxed">
                  Sand & Reef Marine Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Information We Collect</h2>
                <p className="text-navy/70 leading-relaxed mb-4">
                  We may collect information about you in a variety of ways, including:
                </p>
                <h3 className="font-semibold text-navy text-lg mb-2">Personal Data</h3>
                <p className="text-navy/70 leading-relaxed mb-4">
                  When you fill out a contact form, request a quote, or otherwise interact with our website, you may provide us with personally identifiable information, such as your name, email address, phone number, boat information, and details about the services you are interested in.
                </p>
                <h3 className="font-semibold text-navy text-lg mb-2">Automatically Collected Data</h3>
                <p className="text-navy/70 leading-relaxed">
                  When you visit our website, our servers may automatically log standard data provided by your web browser, including your device's IP address, browser type and version, pages you visit, time and date of your visit, time spent on each page, and other technical details about your visit.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
                <p className="text-navy/70 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-navy/70">
                  <li>To respond to your inquiries and provide quotes for marine services</li>
                  <li>To schedule and deliver our marine services</li>
                  <li>To communicate with you about your service requests, appointments, and follow-ups</li>
                  <li>To send you marketing communications (with your consent), such as seasonal service reminders</li>
                  <li>To improve our website, services, and customer experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-navy/70 leading-relaxed">
                  Our website may use cookies, web beacons, and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. We may use third-party analytics services such as Google Analytics and Meta Pixel to help us understand website usage. These tools may collect information about your use of our website, including your IP address, which pages you visit, and how long you spend on each page. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Third-Party Sharing</h2>
                <p className="text-navy/70 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also share information when required by law, to protect our rights, or to comply with a judicial proceeding, court order, or legal process.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Data Security</h2>
                <p className="text-navy/70 leading-relaxed">
                  We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Your Rights</h2>
                <p className="text-navy/70 leading-relaxed">
                  You have the right to access, correct, or delete your personal information that we hold. You may also opt out of receiving marketing communications from us at any time by contacting us directly. To exercise any of these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Children's Privacy</h2>
                <p className="text-navy/70 leading-relaxed">
                  Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us so we can promptly remove it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Changes to This Policy</h2>
                <p className="text-navy/70 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically for the latest information on our privacy practices.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-navy/70 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 bg-white rounded-lg p-6 border border-navy/10">
                  <p className="text-navy font-semibold">Sand & Reef Marine Solutions</p>
                  <p className="text-navy/70 mt-1">71B Road, Mashpee, MA 02649</p>
                  <p className="text-navy/70">Phone: <a href="tel:5082946905" className="text-teal hover:underline">(508) 294-6905</a></p>
                  <p className="text-navy/70">Email: <a href="mailto:Sales@sandnreef.com" className="text-teal hover:underline">Sales@sandnreef.com</a></p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
