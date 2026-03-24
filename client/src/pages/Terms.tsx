/*
 * DESIGN: Cape Cod Editorial — Terms of Service
 * Clean, readable legal page with Sand & Reef branding
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | Sand & Reef"
        description="Sand & Reef Marine Solutions terms of service. Review the terms and conditions governing your use of our website and marine services."
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
              Terms of Service
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              Last Updated: March 24, 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="prose prose-lg prose-slate max-w-none space-y-8">

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Agreement to Terms</h2>
                <p className="text-navy/70 leading-relaxed">
                  By accessing or using the Sand &amp; Reef Marine Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our website or use our services. These terms apply to all visitors, users, and customers of Sand &amp; Reef Marine Solutions.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Services</h2>
                <p className="text-navy/70 leading-relaxed">
                  Sand &amp; Reef Marine Solutions provides mobile marine services including, but not limited to, marine electronics installation, winterization, detailing, gel coat and bottom paint, engine service and repowers, and general maintenance. All services are provided on a per-project basis, and specific terms, pricing, and timelines will be communicated and agreed upon before work begins.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Quotes and Pricing</h2>
                <p className="text-navy/70 leading-relaxed">
                  All quotes provided by Sand &amp; Reef are estimates based on the information provided at the time of the quote. Final pricing may vary depending on the actual condition of the vessel, scope of work required, parts availability, and other factors discovered during the course of service. We will communicate any significant changes to the estimated cost before proceeding with additional work.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Scheduling and Cancellations</h2>
                <p className="text-navy/70 leading-relaxed">
                  Service appointments are scheduled based on availability. We ask that you provide at least 24 hours' notice for cancellations or rescheduling. Repeated no-shows or last-minute cancellations may result in a cancellation fee or affect future scheduling priority. Weather-related delays or cancellations will be rescheduled at no additional cost.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Payment Terms</h2>
                <p className="text-navy/70 leading-relaxed">
                  Payment terms will be outlined in your service agreement or invoice. Payment is due upon completion of services unless otherwise agreed in writing. We accept major credit cards, checks, and electronic payment methods. A deposit may be required for large projects or parts orders. Overdue invoices may be subject to a late fee.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">SMS/Text Messaging Terms</h2>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Sand &amp; Reef Marine Solutions may offer SMS/text messaging communications for service updates, appointment reminders, and promotional messages. By opting in to text messages, you agree to receive recurring automated text messages from Sand &amp; Reef Marine Solutions at the phone number you provide.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-navy/70 mb-4">
                  <li>Consent is not a condition of purchasing any services.</li>
                  <li>Message and data rates may apply.</li>
                  <li>Message frequency varies.</li>
                  <li>Reply STOP to unsubscribe from text messages at any time.</li>
                  <li>Reply HELP for help.</li>
                </ul>
                <p className="text-navy/70 leading-relaxed">
                  Sand &amp; Reef Marine Solutions will not share your opt-in to receive SMS messages or your phone number with any third parties for marketing purposes. For questions regarding our text messaging program, contact us at{" "}
                  <a href="tel:5082946905" className="text-teal hover:underline">(508) 294-6905</a> or{" "}
                  <a href="mailto:Sales@sandnreef.com" className="text-teal hover:underline">Sales@sandnreef.com</a>.
                  Carriers are not liable for delayed or undelivered messages. View our{" "}
                  <a href="/privacy" className="text-teal hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Warranty and Liability</h2>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Sand &amp; Reef Marine Solutions stands behind the quality of our workmanship. We offer a warranty on labor performed, the duration of which will be specified for each service type. Manufacturer warranties on parts and equipment are separate and governed by the respective manufacturer's terms.
                </p>
                <p className="text-navy/70 leading-relaxed">
                  Sand &amp; Reef is fully insured. However, our liability is limited to the cost of the services provided. We are not responsible for pre-existing conditions, normal wear and tear, damage caused by third parties, or issues arising from the customer's failure to follow maintenance recommendations. We are not liable for any indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Customer Responsibilities</h2>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Customers are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-navy/70">
                  <li>Providing accurate information about their vessel and the services needed</li>
                  <li>Ensuring safe and reasonable access to the vessel at the agreed-upon location</li>
                  <li>Removing personal belongings and valuables from work areas prior to service</li>
                  <li>Informing Sand &amp; Reef of any known hazards or conditions that may affect service delivery</li>
                  <li>Timely payment for services rendered</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Intellectual Property</h2>
                <p className="text-navy/70 leading-relaxed">
                  All content on this website, including text, images, logos, graphics, and design elements, is the property of Sand &amp; Reef Marine Solutions and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Website Use</h2>
                <p className="text-navy/70 leading-relaxed">
                  This website is provided for informational purposes and to facilitate communication about our services. You agree not to use this website for any unlawful purpose, to attempt to gain unauthorized access to any part of the website, or to interfere with the proper functioning of the website. We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Governing Law</h2>
                <p className="text-navy/70 leading-relaxed">
                  These Terms of Service are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services shall be resolved in the courts of Barnstable County, Massachusetts.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Changes to These Terms</h2>
                <p className="text-navy/70 leading-relaxed">
                  We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or services after any changes constitutes your acceptance of the updated terms. We encourage you to review this page periodically.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-navy/70 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 bg-white rounded-lg p-6 border border-navy/10">
                  <p className="text-navy font-semibold">Sand &amp; Reef Marine Solutions</p>
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
