import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[var(--color-navy)] text-white min-h-screen relative overflow-hidden select-none">
      <SEO
        title="Privacy Policy"
        description="FlyandGO Privacy Policy: Learn how we collect, safeguard, and process your personal information, booking data, advance payment security, and privacy rights."
      />

      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 text-center max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-full px-4 py-1.5 mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Data Protection & Privacy Commitment
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Privacy <span className="text-gold-gradient">Policy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          At FlyandGO, we value your trust. This Privacy Policy details our practices regarding the collection, security, usage, and protection of your personal information.
        </motion.p>
      </section>

      {/* Main Content Container */}
      <div className="section-container max-w-4xl pb-24 relative z-10">

        {/* Executive Summary Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl flex items-start gap-4"
        >
          <div className="p-3 bg-[var(--color-gold)]/20 text-[var(--color-gold)] rounded-xl shrink-0 mt-1">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
              Privacy at a Glance
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              We collect personal information solely to fulfill travel bookings, issue government permits, arrange accommodations, and enhance your travel experience. We never sell, rent, or trade your personal information to marketing third parties.
            </p>
          </div>
        </motion.div>

        {/* Detailed Sections Block */}
        <div className="space-y-10 text-white/80 text-sm leading-relaxed font-normal">

          {/* Section 1 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">01.</span> Information We Collect
            </h2>
            <p className="mb-3">
              When you interact with FlyandGO—whether via our website, inquiry forms, phone calls, or WhatsApp concierges—we may collect the following data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li><strong>Contact Information:</strong> Full name, email address, phone number, physical address, and emergency contact details.</li>
              <li><strong>Travel Preferences:</strong> Destination choices, preferred travel dates, budget ranges, dietary requirements, and room preferences.</li>
              <li><strong>Identification & Permits:</strong> Government identification documents (Passport, Aadhaar, PAN card, Driver’s License) required for inner line permits, flight tickets, and hotel check-ins.</li>
              <li><strong>Payment & Transaction Data:</strong> Transaction reference numbers, payment receipt metadata, and advance money deposit records processed through secure banking gateways. (Note: We do not store sensitive credit card numbers or banking passwords on our servers).</li>
              <li><strong>Technical & Usage Data:</strong> IP addresses, browser types, device information, and site interaction metrics collected via analytical cookies.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">02.</span> How We Use Your Information
            </h2>
            <p className="mb-3">
              Your personal information is processed strictly for legitimate business and travel administration purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li>To design personalized travel itineraries and confirm accommodation/transport bookings.</li>
              <li>To apply for restricted area permits, national park safari passes, and airline tickets.</li>
              <li>To communicate itinerary updates, vouchers, payment reminders, and customer support alerts.</li>
              <li>To process advance money deposits and issue official booking tax invoices.</li>
              <li>To comply with statutory legal requirements and law enforcement regulations.</li>
            </ul>
          </div>

          {/* Section 3 - Advance Payment Security Notice */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">03.</span> Advance Payment & Financial Data Protection
            </h2>
            <p className="mb-3">
              All financial transactions and advance money payments submitted to FlyandGO are processed using bank-grade 256-bit SSL encryption via authorized Payment Gateways and official banking channels.
            </p>
            <p className="mb-3">
              As stipulated in our booking conditions, <strong>if you cancel 15 days or more prior to your scheduled journey departure date, your journey amount is refundable</strong> (minus non-refundable permit costs and bank processing fees). Cancellations made within 14 days of departure or non-refundable initial token deposits are non-refundable. Payment records and transaction logs are maintained securely for accounting, auditing, and tax compliance under Indian fiscal law.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">04.</span> Sharing of Information with Third Parties
            </h2>
            <p className="mb-3">
              We share your information strictly on a need-to-know basis with trusted partners essential for executing your travel package:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75">
              <li><strong>Hospitality & Transport Partners:</strong> Partner hotels, boutique resorts, private transport drivers, and houseboats.</li>
              <li><strong>Government & Local Authorities:</strong> Forest departments, tourism permit offices, and border security checkpoints.</li>
              <li><strong>Flight & Rail Carriers:</strong> Commercial airlines and railway booking agents.</li>
            </ul>
            <p className="mt-3 font-semibold text-[var(--color-gold)]">
              We do NOT sell or monetize your personal data to commercial advertisers or third-party telemarketers under any circumstance.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">05.</span> Cookies & Web Tracking
            </h2>
            <p className="mb-3">
              Our website uses essential and performance cookies to analyze web traffic, remember user preferences, and improve page load performance. You can disable cookies through your browser settings, though certain interactive website features may be affected.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">06.</span> Data Security & Retention
            </h2>
            <p className="mb-3">
              We implement technical and organizational security measures—including firewall protections, access controls, and encrypted data storage—to guard your personal data against unauthorized access, loss, or alteration.
            </p>
            <p>
              Traveler records are retained for the period necessary to fulfill booking obligations and satisfy legal, tax, and accounting standards.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">07.</span> Your Legal Rights
            </h2>
            <p className="mb-3">
              Under applicable data protection laws, you have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request deletion of data where retention is no longer legally required.
            </p>
            <p>
              To exercise any of your privacy rights, please contact our Data Officer at <strong>contact@flyandgo.in</strong>.
            </p>
          </div>

        </div>

        {/* Bottom Contact Box */}
        <div className="mt-14 p-8 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center">
          <HelpCircle className="w-8 h-8 text-[var(--color-gold)] mb-3" />
          <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Privacy Questions or Data Requests?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mb-6 max-w-md">
            If you have questions regarding this Privacy Policy or wish to update your communications preferences, please reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-outline px-6 py-2.5 text-[11px]">
              Contact Us
            </Link>
            <a href="mailto:contact@flyandgo.in" className="btn-ghost px-6 py-2.5 text-[11px]">
              Email Privacy Officer
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;
