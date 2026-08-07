import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileText, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-[var(--color-navy)] text-white min-h-screen relative overflow-hidden select-none">
      <SEO
        title="Terms & Conditions"
        description="FlyandGO Terms and Conditions: Read our comprehensive booking policies, non-refundable advance deposit terms, travel guidelines, and legal terms."
      />

      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 text-center max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-full px-4 py-1.5 mb-6"
        >
          <FileText className="w-3.5 h-3.5" />
          Legal Agreement & Booking Policy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Terms & <span className="text-gold-gradient">Conditions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Please review the terms, rules, and booking policies governing all travel services, itineraries, and reservations booked through FlyandGO.
        </motion.p>
      </section>

      {/* Main Legal Content Container */}
      <div className="section-container max-w-4xl pb-24 relative z-10">

        {/* Highlighted Critical Policy Box (Advance Money Non-Refundable) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-amber-950/30 to-red-950/40 border border-amber-500/40 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-1">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-2 uppercase tracking-wide">
                Critical Notice: Advance Payment Policy
              </h3>
              <p className="text-sm text-amber-100/90 leading-relaxed font-medium">
                <strong>STRICT ADVANCE MONEY POLICY:</strong> Any advance money, booking deposit, token amount, or initial installment paid to FlyandGO to reserve tour packages, accommodations, permits, or transportation services is <strong>STRICTLY NON-REFUNDABLE IN ANY CIRCUMSTANCES</strong>. Once an advance payment is made, it cannot be refunded, transferred, or reimbursed under any condition, including traveler cancellation, personal emergencies, flight changes, or unforeseen weather disruptions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections Block */}
        <div className="space-y-10 text-white/80 text-sm leading-relaxed font-normal">

          {/* Section 1 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">01.</span> Acceptance of Agreement
            </h2>
            <p className="mb-3">
              By accessing our website, communicating with our travel concierges, submitting an inquiry, or remitting any payment for a tour package, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
            </p>
            <p>
              If you are booking on behalf of additional group members or minor dependents, you represent and warrant that you have full legal authority to accept these terms on behalf of all individuals included in your reservation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">02.</span> Booking & Non-Refundable Advance Payment Clause
            </h2>
            <p className="mb-3">
              To confirm a reservation for any FlyandGO tour package, luxury expedition, or custom itinerary, a minimum advance deposit (as specified in your official quotation) must be paid.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/75 mb-3">
              <li><strong>Non-Refundability:</strong> The advance money is immediately allocated toward securing hotel rooms, transport vendors, flight seats, local guide retainers, and non-refundable government permits. Consequently, <strong>advance money will not be returned under any circumstances</strong>.</li>
              <li><strong>No Exceptions:</strong> This non-refundable clause applies universally to all cancellation requests, regardless of cause—including personal medical emergencies, family situations, passport or visa issues, natural disasters, political strikes, flight cancellations, or changes in personal travel schedules.</li>
              <li><strong>Forfeiture on Non-Payment:</strong> Failure to pay the remaining balance by the agreed due date will result in immediate cancellation of your booking and forfeiture of the full advance money.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">03.</span> Balance Payment & Final Settlement
            </h2>
            <p className="mb-3">
              The remaining balance for your travel package must be cleared in full prior to the departure date according to the specific schedule outlined in your booking invoice (typically 15 to 30 days before arrival, or upon arrival where explicitly agreed in writing).
            </p>
            <p>
              All payments must be made through approved channels: official bank transfers, verified credit/debit card links, or official FlyandGO UPI handles. FlyandGO is not responsible for payments made to unauthorized third-party accounts.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">04.</span> Cancellations & Amendment Policy
            </h2>
            <p className="mb-3">
              Should you need to cancel or alter your trip, written notification must be sent to our official email address at <strong>bookings@flyandgo.in</strong>.
            </p>
            <div className="space-y-3 border-l-2 border-[var(--color-gold)]/40 pl-4 py-1 my-4">
              <p><strong>Cancellation 30+ Days Before Departure:</strong> The advance money remains non-refundable. Any additional amounts paid beyond the advance deposit will be evaluated for partial travel credit minus third-party vendor cancellation penalties.</p>
              <p><strong>Cancellation Within 15 to 29 Days:</strong> 50% of total package cost is retained. Advance money is non-refundable.</p>
              <p><strong>Cancellation Within 0 to 14 Days / No Show:</strong> 100% of the total tour cost is forfeited. No refund or credit will be issued.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">05.</span> Itinerary Alterations & Force Majeure
            </h2>
            <p className="mb-3">
              FlyandGO reserves the right to modify or adjust tour itineraries, accommodations, or transport routes if required due to unforeseen circumstances, road blockades, extreme weather conditions, landslides, military orders, or government regulations.
            </p>
            <p>
              In the event of Force Majeure (including acts of God, extreme weather, civil unrest, epidemic restrictions, or government decrees), FlyandGO shall not be held liable for delays or itinerary modifications. Any extra expenses incurred (e.g., additional hotel nights, alternative transportation) shall be borne directly by the traveler.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">06.</span> Traveler Identification, Permits & Health
            </h2>
            <p className="mb-3">
              Travelers are solely responsible for obtaining and carrying valid government-issued photo identification (e.g., Passport, Aadhaar, Voter ID), necessary visas, and required health certificates or vaccination proofs.
            </p>
            <p>
              For restricted regions (such as Ladakh inner line permits, Sikkim PAP permits, or Andaman restricted areas), travelers must furnish accurate documentation on time. FlyandGO accepts no responsibility for denied entry resulting from invalid or missing identification.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">07.</span> Travel Insurance Recommendation
            </h2>
            <p className="mb-3">
              We strongly recommend that all travelers purchase comprehensive travel insurance covering trip cancellation, medical emergencies, evacuation, baggage loss, and trip interruption. FlyandGO is not an insurance provider and will not cover medical costs or emergency evacuation expenses incurred during a trip.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">08.</span> Limitation of Liability
            </h2>
            <p className="mb-3">
              FlyandGO acts solely as a travel facilitator connecting travelers with hotel operators, transport providers, flight carriers, and local tour guides.
            </p>
            <p>
              FlyandGO shall not be liable for any personal injury, illness, loss or damage to personal belongings, theft, accidental delay, or indirect damages suffered during the execution of any tour package.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[var(--color-gold)] font-mono text-base">09.</span> Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Kochi, Kerala.
            </p>
          </div>

        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center">
          <HelpCircle className="w-8 h-8 text-[var(--color-gold)] mb-3" />
          <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Have Questions Regarding Our Terms?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mb-6 max-w-md">
            Our legal and concierge team is available to clarify any queries regarding booking conditions, payment processing, or custom tour itineraries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-outline px-6 py-2.5 text-[11px]">
              Contact Concierge
            </Link>
            <a href="mailto:bookings@flyandgo.in" className="btn-ghost px-6 py-2.5 text-[11px]">
              Email Bookings
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsPage;
