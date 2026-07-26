import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Send } from 'lucide-react';

/* ─────────────────────────────────────────
   GLASS RECIPE CONSTANTS
───────────────────────────────────────── */
const GLASS_OUTER = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
} as const;

const GLASS_INNER = {
  background: 'rgba(255,255,255,0.055)',
  border: '1px solid rgba(255,255,255,0.10)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
} as const;

/* ─────────────────────────────────────────
   DECORATIVE SVG — diagonal lines + nodes
   Rendered top-left and top-right corners
───────────────────────────────────────── */
const DecoLines: React.FC<{ side: 'left' | 'right' }> = ({ side }) => (
  <svg
    aria-hidden="true"
    width="220"
    height="260"
    viewBox="0 0 220 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top: 0,
      [side]: 0,
      opacity: 0.18,
      pointerEvents: 'none',
      zIndex: 0,
      transform: side === 'right' ? 'scaleX(-1)' : 'none',
    }}
  >
    {/* Main diagonal line */}
    <line x1="10" y1="10" x2="160" y2="200" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
    {/* Branch line at bend ~90,115 */}
    <line x1="90" y1="115" x2="210" y2="90" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
    {/* Branch line at bend ~130,165 */}
    <line x1="130" y1="165" x2="30" y2="250" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
    {/* Hollow circle nodes at bend points */}
    <circle cx="90" cy="115" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1" fill="none" />
    <circle cx="130" cy="165" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1" fill="none" />
    <circle cx="160" cy="200" r="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
    {/* Extra faint short strokes */}
    <line x1="40" y1="60" x2="80" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <circle cx="40" cy="60" r="2.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1" fill="none" />
  </svg>
);

/* ─────────────────────────────────────────
   INFO CARD (Email / Call / Location)
───────────────────────────────────────── */
interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, label, value, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      style={{
        ...GLASS_OUTER,
        borderRadius: '16px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        border: hovered
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? '0 8px 32px rgba(0,0,0,0.38)'
          : '0 4px 24px rgba(0,0,0,0.25)',
      }}
    >
      {/* Icon box */}
      <div
        style={{
          ...GLASS_INNER,
          borderRadius: '12px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: 'rgba(255,255,255,0.75)',
          transition: 'background 0.2s ease',
          background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.055)',
        }}
      >
        {icon}
      </div>

      {/* Text block */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: 0,
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.95)',
            lineHeight: 1.2,
            letterSpacing: '0.01em',
          }}
        >
          {label}
        </p>
        <p
          style={{
            margin: '0.2rem 0 0',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {value}
        </p>
      </div>

      {/* Arrow button */}
      {onClick && (
        <div
          style={{
            ...GLASS_INNER,
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: 'rgba(255,255,255,0.8)',
            transition: 'background 0.2s ease, color 0.2s ease',
            background: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.055)',
          }}
        >
          <ArrowUpRight size={15} />
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────
   GLASS INPUT / TEXTAREA
───────────────────────────────────────── */
const inputBaseStyle: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '0.9rem 1.1rem',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.055)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  color: 'rgba(255,255,255,0.9)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'inherit',
};

const inputFocusedStyle: React.CSSProperties = {
  borderColor: 'rgba(255,255,255,0.22)',
  background: 'rgba(255,255,255,0.075)',
  boxShadow: '0 0 0 2px rgba(255,255,255,0.06)',
};

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const ContactEnquirySection: React.FC = () => {
  /* ── Existing form state — unchanged ── */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travellers: '2',
    travelMonth: '',
    budget: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ── Existing handlers — unchanged ── */
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
        message: '',
      });
    }, 1500);
  };

  const handlePhoneCall = () => window.open('tel:+918279563419', '_self');
  const handleEmail = () => window.open('mailto:concierge@tripzy.travel', '_self');

  /* ── Helper for field style ── */
  const fieldStyle = (field: string): React.CSSProperties =>
    focusedField === field ? { ...inputBaseStyle, ...inputFocusedStyle } : { ...inputBaseStyle };

  return (
    <section
      id="contact-enquiry"
      style={{
        position: 'relative',
        width: '100%',
        background: 'var(--color-navy)',
        overflow: 'hidden',
        paddingBlock: 'clamp(3rem, 8vw, 6rem)',
      }}
    >
      {/* ── Radial glow — gold tinted, top-center (matches site palette) ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(500px, 80vw, 900px)',
          height: 'clamp(300px, 50vh, 550px)',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.08) 0%, rgba(212,165,116,0.03) 45%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* ── Secondary side glow — sky/slate, bottom-right (matches site) ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Decorative diagonal SVG lines (corners) ── */}
      <DecoLines side="left" />
      <DecoLines side="right" />

      {/* ── Watermark "CONTACT" — hidden on mobile ── */}
      <div
        aria-hidden="true"
        className="contact-watermark"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(4rem, 12vw, 9rem)',
          fontWeight: 900,
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.055)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 1,
        }}
      >
        CONTACT
      </div>

      {/* ── Main centered container ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          paddingInline: 'clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        {/* ───── SECTION HEADING BLOCK ───── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem', textAlign: 'left' }}
        >
          {/* Eyebrow badge pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              ...GLASS_OUTER,
              borderRadius: '999px',
              padding: '0.4rem 1rem',
              marginBottom: '1rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.04em',
            }}
          >
            <Mail size={13} style={{ color: 'rgba(255,255,255,0.6)' }} />
            Contact
          </div>

          {/* Heading */}
          <h2
            style={{
              margin: '0 0 0.75rem',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Get in touch
          </h2>

          {/* Subtext */}
          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '30ch',
              lineHeight: 1.6,
              fontFamily: 'var(--font-body)',
            }}
          >
            Our team is ready to craft your perfect slow-travel itinerary.
          </p>
        </motion.div>

        {/* ───── TWO-COLUMN GRID ───── */}
        <div className="contact-grid">
          {/* ══════ LEFT: Info cards ══════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <InfoCard
              icon={<Mail size={20} />}
              label="Email us"
              value="concierge@tripzy.travel"
              onClick={handleEmail}
            />
            <InfoCard
              icon={<Phone size={20} />}
              label="Call us"
              value="+91 80860 50505"
              onClick={handlePhoneCall}
            />
            <InfoCard
              icon={<MapPin size={20} />}
              label="Our location"
              value="Fort Kochi, Kerala, India"
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/search/Fort+Kochi+Kerala',
                  '_blank'
                )
              }
            />
            <InfoCard
              icon={<Clock size={20} />}
              label="Business hours"
              value="Mon – Sat, 10:00 AM – 7:00 PM"
            />
          </motion.div>

          {/* ══════ RIGHT: Form card ══════ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{
              ...GLASS_OUTER,
              borderRadius: '20px',
              padding: '1.75rem',
            }}
          >
            {submitted ? (
              /* ── Success state ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    ...GLASS_INNER,
                    borderRadius: '50%',
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  <Send size={28} />
                </div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Enquiry Received!
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.5)',
                    maxWidth: '26ch',
                    lineHeight: 1.6,
                  }}
                >
                  Your luxury holiday preferences have been submitted. Our concierge will reach out within 3 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.7rem 1.75rem',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.13)')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')
                  }
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              /* ── Enquiry Form ── */
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {/* Form heading */}
                <div style={{ marginBottom: '0.25rem' }}>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Send an Enquiry
                  </h3>
                  <p
                    style={{
                      margin: '0.3rem 0 0',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.45)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Share your travel preferences and we'll frame a personalised itinerary.
                  </p>
                </div>

                {/* Full Name */}
                <input
                  type="text"
                  required
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Full Name"
                  style={fieldStyle('name')}
                />

                {/* Email & Phone */}
                <div className="contact-form-row">
                  <input
                    type="email"
                    required
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email Address"
                    style={fieldStyle('email')}
                  />
                  <input
                    type="tel"
                    required
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Phone Number"
                    style={fieldStyle('phone')}
                  />
                </div>

                {/* Destination & Travellers */}
                <div className="contact-form-row">
                  <input
                    type="text"
                    required
                    id="contact-destination"
                    name="destination"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    onFocus={() => setFocusedField('destination')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Destination Interested In"
                    style={fieldStyle('destination')}
                  />
                  <input
                    type="number"
                    required
                    min="1"
                    id="contact-travellers"
                    name="travellers"
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    onFocus={() => setFocusedField('travellers')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="No. of Travellers"
                    style={fieldStyle('travellers')}
                  />
                </div>

                {/* Travel Month & Budget */}
                <div className="contact-form-row">
                  <input
                    type="text"
                    required
                    id="contact-travelMonth"
                    name="travelMonth"
                    value={formData.travelMonth}
                    onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                    onFocus={() => setFocusedField('travelMonth')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Preferred Month (e.g. October)"
                    style={fieldStyle('travelMonth')}
                  />
                  <input
                    type="text"
                    required
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Budget Range (e.g. 50k–80k)"
                    style={fieldStyle('budget')}
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  required
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Subject"
                  style={fieldStyle('subject')}
                />

                {/* Message */}
                <textarea
                  required
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Message / Special Requirements"
                  style={{
                    ...fieldStyle('message'),
                    minHeight: '180px',
                    resize: 'none',
                    borderRadius: '12px',
                  }}
                />

                {/* Submit — solid white, high contrast */}
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '0.25rem',
                    width: '100%',
                    padding: '0.9rem',
                    borderRadius: '12px',
                    background: isSubmitting ? 'rgba(255,255,255,0.75)' : '#ffffff',
                    border: 'none',
                    color: '#0A0D0C',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s ease, transform 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting)
                      (e.currentTarget as HTMLButtonElement).style.opacity = '0.88';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = '1';
                  }}
                >
                  {isSubmitting ? (
                    'Transmitting enquiry…'
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Scoped responsive styles ── */}
      <style>{`
        /* Watermark hidden on mobile */
        @media (max-width: 767px) {
          .contact-watermark { display: none !important; }
        }

        /* Two-column grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3rem;
          align-items: start;
        }

        /* Tablet: keep two-col, tighten gap */
        @media (max-width: 1023px) {
          .contact-grid {
            gap: 2rem;
          }
        }

        /* Mobile: single column stack */
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Form two-col row — collapses on mobile */
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 540px) {
          .contact-form-row {
            grid-template-columns: 1fr;
          }
        }

        /* Placeholder color */
        #contact-name::placeholder,
        #contact-email::placeholder,
        #contact-phone::placeholder,
        #contact-destination::placeholder,
        #contact-travellers::placeholder,
        #contact-travelMonth::placeholder,
        #contact-budget::placeholder,
        #contact-subject::placeholder,
        #contact-message::placeholder {
          color: rgba(255,255,255,0.38);
        }

        /* Number input spinner reset */
        #contact-travellers::-webkit-inner-spin-button,
        #contact-travellers::-webkit-outer-spin-button {
          opacity: 0.4;
        }
      `}</style>
    </section>
  );
};

export default ContactEnquirySection;
