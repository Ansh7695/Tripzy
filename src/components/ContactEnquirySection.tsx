import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, MessageSquare, Clock, ArrowRight
} from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  buttonText?: string;
  onClick?: () => void;
  badge?: string;
  glowColor: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value, buttonText, onClick, badge, glowColor }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`relative w-full rounded-[24px] border border-white/8 bg-white/4 px-6 transition-all duration-300 ease-out select-none flex items-center justify-between overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.25)] h-[96px] ${onClick ? 'cursor-pointer' : ''
        } ${hovered ? `border-[var(--color-gold)]/45 shadow-[0_20px_40px_${glowColor}] -translate-y-1` : ''}`}
    >
      {/* Decorative ambient glowing backdrop */}
      <div
        className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
          opacity: hovered ? 0.35 : 0.1
        }}
      />

      <div className="relative z-10 flex gap-4 items-center h-full w-full">
        {/* Claymorphic icon holder */}
        <div
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-gold)] shadow-[inset_0_1.5px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-500 flex-shrink-0"
          style={{
            boxShadow: hovered
              ? `0 8px 16px ${glowColor}, inset 0 1.5px 0 rgba(255,255,255,0.15)`
              : 'inset 0 1.5px 0 rgba(255,255,255,0.12)'
          }}
        >
          <span className={`transition-transform duration-500 ${hovered ? 'scale-110 rotate-6' : 'scale-100'}`}>
            {icon}
          </span>
        </div>

        <div className="flex-grow flex flex-col justify-center text-left">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/35">{title}</span>
            {badge && (
              <span className="text-[8px] font-extrabold uppercase tracking-wider text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded-md border border-[var(--color-gold)]/25">
                {badge}
              </span>
            )}
          </div>
          <p className="text-[13px] sm:text-[14px] font-semibold text-white/90 leading-tight truncate max-w-[240px] md:max-w-xs">
            {value}
          </p>
        </div>
      </div>

      {buttonText && (
        <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-[var(--color-gold)]/20 text-[var(--color-gold)] hover:text-white transition-all ml-2 flex-shrink-0">
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

const ContactEnquirySection: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travellers: '2',
    travelMonth: '',
    budget: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travellers: '2',
        travelMonth: '',
        budget: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const handlePhoneCall = () => {
    window.open('tel:+918086050505', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:concierge@tripzy.travel', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918086050505?text=Hi%20Tripzy!%20I%20want%20to%20plan%20a%20luxury%20holiday.', '_blank');
  };

  return (
    <section
      className="relative z-10 w-full px-6 sm:px-12 md:px-20 flex flex-col items-center justify-center"
      style={{ marginTop: '120x', marginBottom: '120px', paddingTop: '0px', paddingBottom: '0px' }}
    >
      {/* Background orbs inside the layout boundary */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--color-gold)]/4  blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[var(--color-orange)]/3  blur-[160px] pointer-events-none -z-10" />

      {/* Outer Single Large Glassmorphism Card */}
      <div className="max-w-[1400px] w-full mx-auto p-24 bg-gradient-to-b from-[#11192d]/70 via-[#0a101f]/80 to-[#050913]/90 border border-white/8 p-8 md:p-16 lg:p-20 relative overflow-hidden backdrop-blur-3xl shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]">

        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* ═══════════ LEFT SIDE: CONTACT DETAILS (40% Split) ═══════════ */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left items-start w-full">
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-[4px] px-4 py-2 mb-6 inline-block">
                Tripzy Lounge
              </span>

              <h2
                className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.1] text-white tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', marginBottom: '28px' }}
              >
                Let's Plan Your <span className="text-gold-gradient">Next Adventure</span> Together
              </h2>

              <p
                className="text-white/50 text-[18px] leading-relaxed max-w-[480px]"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)', marginBottom: '48px' }}
              >
                Connect directly with our luxury travel coordinators. Sit down with an expert over chat, call, or email to frame your bespoke slow-travel itinerary.
              </p>
            </div>

            {/* Contact Methods Cards Grid */}
            <div className="flex flex-col gap-6 w-full">
              <ContactCard
                icon={<MapPin className="w-5 h-5" />}
                title="Office"
                value="India"
                badge="HQ"
                glowColor="rgba(212, 165, 116, 0.15)"
              />
              <ContactCard
                icon={<Phone className="w-5 h-5" />}
                title="Call Us"
                value="+91 xxxxx xxxxx"
                buttonText="Call Now"
                onClick={handlePhoneCall}
                glowColor="rgba(245, 158, 11, 0.15)"
              />
              <ContactCard
                icon={<Mail className="w-5 h-5" />}
                title="Email Us"
                value="xxxxx@tripzy.travel"
                buttonText="Email Us"
                onClick={handleEmail}
                glowColor="rgba(20, 184, 166, 0.15)"
              />
              <ContactCard
                icon={<MessageSquare className="w-5 h-5" />}
                title="WhatsApp Direct"
                value="Instant Support Coordinator"
                buttonText="Chat on WhatsApp"
                onClick={handleWhatsApp}
                badge="Active"
                glowColor="rgba(34, 197, 94, 0.12)"
              />
              <ContactCard
                icon={<Clock className="w-5 h-5" />}
                title="Business Hours"
                value="Monday – Saturday (10:00 AM – 7:00 PM)"
                glowColor="rgba(255, 255, 255, 0.10)"
              />
            </div>
          </div>

          {/* ═══════════ RIGHT SIDE: ENQUIRY FORM PANEL (60% Split) ═══════════ */}
          <div className="lg:col-span-7 w-full flex flex-col justify-between">

            <div className="text-left mb-8">
              <h3
                className="text-[38px] font-bold text-white mb-2 tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Send Us An Enquiry
              </h3>
              <p className="text-sm text-white/45" style={{ fontFamily: 'var(--font-body)' }}>
                Share your travel preferences and our coordinators will frame aSlow Travel layout for you.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 text-white flex-grow"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-[var(--color-gold)] animate-pulse" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Enquiry Received!</h4>
                <p className="text-base text-white/50 max-w-sm mb-8 leading-relaxed">
                  Your luxury holiday preferences have been successfully transmitted. Our private travel concierge will reach out within 3 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline px-8 py-3 text-xs rounded-full uppercase font-bold tracking-widest"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left w-full">

                {/* Full Name */}
                <div className="relative w-full">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'name'
                      ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                      : ''
                      }`}
                    placeholder="Full Name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'email'
                        ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                        : ''
                        }`}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'phone'
                        ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                        : ''
                        }`}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                {/* Destination & Travellers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      onFocus={() => setFocusedField('destination')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'destination'
                        ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                        : ''
                        }`}
                      placeholder="Destination Interested In"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.travellers}
                      onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                      onFocus={() => setFocusedField('travellers')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'travellers'
                        ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                        : ''
                        }`}
                      placeholder="Number of Travellers"
                    />
                  </div>
                </div>

                {/* Travel Month & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      onFocus={() => setFocusedField('travelMonth')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'travelMonth'
                        ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                        : ''
                        }`}
                      placeholder="Preferred Travel Month (e.g. October)"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'budget'
                        ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                        : ''
                        }`}
                      placeholder="Budget Range (e.g. 50k-80k)"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative w-full">
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-5 rounded-full bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] ${focusedField === 'subject'
                      ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                      : ''
                      }`}
                    placeholder="Subject"
                  />
                </div>

                {/* Message */}
                <div className="relative w-full">
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-5 rounded-[24px] bg-white/4 border border-white/10 text-base text-white/90 outline-none transition-all duration-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.3)] resize-none h-[220px] ${focusedField === 'message'
                      ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]/35 bg-white/6 shadow-[0_0_20px_rgba(194,112,58,0.18)]'
                      : ''
                      }`}
                    placeholder="Message / Special Requirements"
                  />
                </div>

                {/* Large Pill Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-full btn-outline flex items-center justify-center gap-2 text-[16px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-gold)] border border-[var(--color-gold)]/40 hover:shadow-[0_12px_24px_rgba(194,112,58,0.35)] transition-all select-none active:scale-98 text-white relative group"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING ENQUIRY...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactEnquirySection;
