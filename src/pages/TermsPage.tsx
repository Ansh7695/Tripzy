import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, FileText, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Section {
  id: string;
  title: string;
  content: string[];
}

const SECTIONS: Section[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      'Welcome to FlyandGo. By accessing our website, booking a travel package, or making use of any tour services offered by FlyandGo ("we", "us", or "our"), you ("Client", "Traveller", or "User") agree to be bound by these Terms & Conditions.',
      'If you do not agree with any part of these terms, you must not proceed with booking or using our services. Continuing to access our website or confirming a booking reservation constitutes your full acceptance of these Terms of Service.'
    ]
  },
  {
    id: 'booking',
    title: '2. Booking & Reservations',
    content: [
      'All bookings made with FlyandGo are subject to availability and written confirmation by our team. A booking is deemed confirmed only after receipt of the required advance deposit and issuance of an official booking voucher.',
      'You are responsible for providing accurate personal details, travel dates, passport numbers, and identification for all guests included in your reservation. Any discrepancies caused by inaccurate information provided during booking may result in additional charges or booking cancellation.'
    ]
  },
  {
    id: 'payments',
    title: '3. Payments & Pricing',
    content: [
      'All prices listed on FlyandGo packages are subject to change based on seasonality, hotel availability, flight fare fluctuations, and government taxes until full payment is completed.',
      'A non-refundable advance payment (typically 30% to 50% of the total package cost) is required at the time of reservation. The remaining balance must be cleared at least 15 days prior to the travel start date.',
      'We accept online bank transfers, credit/debit cards, and UPI payments through secure SSL-encrypted payment gateways. Any transaction fees or currency conversion charges levied by your bank shall be borne by the client.'
    ]
  },
  {
    id: 'cancellation',
    title: '4. Cancellation & Refund Policy',
    content: [
      'If you wish to cancel your booked package, notice of cancellation must be submitted to FlyandGo in writing via email to bookings@flyandgo.in.',
      'Cancellation charges apply based on the timeframe prior to departure:',
      '• More than 30 days before departure: 15% of total package cost retained as administration fee.',
      '• 15 to 30 days before departure: 30% of total package cost retained.',
      '• 7 to 14 days before departure: 50% of total package cost retained.',
      '• Less than 7 days or No-Show: 100% of total package cost retained (No refund).',
      'Refunds, if applicable, will be processed within 7–10 working days back to the original source of payment after deduction of applicable vendor non-refundable fees (e.g. flight tickets, permits, peak season hotel deposits).'
    ]
  },
  {
    id: 'responsibilities',
    title: '5. Traveller Responsibilities & Insurance',
    content: [
      'Travellers are solely responsible for obtaining valid passports, visas, health clearances, vaccination certificates, and entry permits required for their destination.',
      'FlyandGo strongly recommends that all clients purchase comprehensive travel insurance covering medical emergencies, trip cancellation, personal injury, and baggage loss prior to trip commencement.',
      'Travellers must adhere to local laws, customs, safety protocols, and instructions given by our tour guides or local representatives. FlyandGo reserves the right to terminate participation of any individual behaving disruptively or posing a risk to others.'
    ]
  },
  {
    id: 'itinerary',
    title: '6. Itinerary Changes & Force Majeure',
    content: [
      'While FlyandGo endeavours to adhere strictly to published itineraries, we reserve the right to alter routes, accommodation, or activities in circumstances beyond our control, including adverse weather, road blockages, natural disasters, strikes, or government restrictions.',
      'FlyandGo shall not be held liable for any loss, damage, additional expenditure, or delay caused by events of Force Majeure (acts of God, war, civil unrest, epidemic/pandemic lockdowns, or technical breakdowns).'
    ]
  },
  {
    id: 'liability',
    title: '7. Limitation of Liability',
    content: [
      'FlyandGo acts as an intermediary between clients and third-party service providers (airlines, hotels, transport operators, adventure activity vendors). We select our partners with care, but do not own or control third-party service providers.',
      'FlyandGo shall not be liable for any injury, sickness, death, loss of luggage, theft, or emotional distress suffered during travel, except where explicitly proven to result directly from gross negligence on our part.',
      'In any event, FlyandGo’s total aggregate liability arising under or in connection with any booking shall be strictly limited to the total package price paid by the client to FlyandGo.'
    ]
  },
  {
    id: 'governing-law',
    title: '8. Governing Law & Contact Details',
    content: [
      'These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes or claims arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the courts in Ernakulam, Kerala.',
      'If you have any questions, legal queries, or requests regarding these Terms of Service, please reach out to us:',
      '• Office: FlyandGo, 28/1859, Civil Line Rd, opp. City Silk, Sonia Nagar, Palarivattom, Kochi, Ernakulam, Kerala 682025',
      '• Email: contact@flyandgo.in / bookings@flyandgo.in',
      '• Phone: +91 75005 98759 / +91 82795 63419'
    ]
  }
];

const TermsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);

  // Scrollspy implementation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.12) 0%, transparent 60%), linear-gradient(180deg, #0c0716 0%, #120a1f 100%)',
        color: '#e7e3f7',
        minHeight: '100vh',
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <SEO
        title="Terms of Service - FlyandGo"
        description="Read the official Terms of Service and booking conditions for FlyandGo travel packages, cancellations, refunds, and traveller guidelines."
      />

      {/* Subtle faint background pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Outer Page Wrapper with Max Width & Consistent Horizontal Padding */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '100px',
        }}
        className="px-5 sm:px-8 lg:px-12 pb-24"
      >
        {/* ═══════════ TOP BADGE & HERO BLOCK ═══════════ */}

        {/* Row 1: Top Badge in its own centered row immediately under navbar */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '12px auto 16px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(139, 92, 246, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              color: '#d8b4fe',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            <ShieldCheck style={{ width: '16px', height: '16px', color: '#c084fc' }} />
            <span>Official Legal Documentation</span>
          </div>
        </div>

        {/* Row 2: Hero Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: '#eceafc',
              marginTop: '8px',
              marginBottom: '0px',
            }}
          >
            Terms of{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Service
            </span>
          </h1>
        </div>

        {/* ═══════════ BUG 3, 4, 5, 7 FIX: CONTENT LAYOUT (SIDEBAR + MAIN GRID) ═══════════ */}

        {/* Mobile / Tablet Scrollable Tab Bar */}
        <div className="lg:hidden sticky top-20 z-30 mb-8 -mx-5 px-5 py-3 bg-[#0c0716]/95 backdrop-blur-md border-y border-white/8 overflow-x-auto no-scrollbar flex items-center gap-2">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="shrink-0 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
                style={{
                  color: isActive ? '#ffffff' : '#8b84a3',
                  background: isActive
                    ? 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {sec.title}
              </button>
            );
          })}
        </div>

        {/* Desktop 2-Column Grid Layout (Fixed 280px Sidebar + Flexible 1fr Content Column) */}
        <div className="terms-grid-layout">
          {/* Sidebar Column */}
          <aside className="hidden lg:block">
            <div className="terms-sidebar-sticky">
              <div
                style={{
                  padding: '24px 16px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '16px',
                    paddingLeft: '6px',
                    color: '#9992ad',
                  }}
                >
                  Table of Contents
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column' }}>
                  {SECTIONS.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: isActive ? 600 : 400,
                          marginBottom: '4px',
                          borderLeft: isActive ? '3px solid #a855f7' : '3px solid transparent',
                          background: isActive ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
                          color: isActive ? '#e9d5ff' : '#8b84a3',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                        }}
                      >
                        <span className="truncate block">{sec.title}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Bug 5 Fix: Legal Help Card fully inset within sidebar container */}
                <div
                  style={{
                    marginTop: '32px',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    fontSize: '12px',
                    color: '#8b84a3',
                    lineHeight: 1.6,
                  }}
                >
                  <p
                    style={{
                      marginBottom: '8px',
                      color: '#ffffff',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <FileText style={{ width: '14px', height: '14px', color: '#ec4899' }} />
                    Need legal help?
                  </p>
                  Have questions about our terms? Contact our legal team at{' '}
                  <a
                    href="mailto:contact@flyandgo.in"
                    style={{ color: '#c084fc', textDecoration: 'underline' }}
                  >
                    contact@flyandgo.in
                  </a>.
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Column (Takes full 1fr of the grid) */}
          <main style={{ minWidth: 0, width: '100%' }}>
            <div>
              {SECTIONS.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  style={{
                    scrollMarginTop: '110px',
                    paddingBottom: '40px',
                    marginBottom: '40px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Section Heading */}
                  <h2
                    style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#e7e3f7',
                      marginBottom: '16px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {sec.title}
                  </h2>

                  {/* Paragraph blocks - max-width 760px for readability */}
                  <div style={{ maxWidth: '760px' }}>
                    {sec.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        style={{
                          fontSize: '15px',
                          lineHeight: 1.75,
                          color: '#a39dbd',
                          marginBottom: idx === sec.content.length - 1 ? 0 : '20px',
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom Support Callout Card */}
            <div
              style={{
                marginTop: '16px',
                padding: '28px 32px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(236, 72, 153, 0.08) 100%)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Have questions about your booking?
                </h3>
                <p style={{ fontSize: '13px', color: '#a39dbd', margin: 0 }}>
                  Our team is available 24/7 to clarify terms and assist your journey.
                </p>
              </div>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                }}
              >
                Contact Support
                <ArrowUpRight style={{ width: '16px', height: '16px' }} />
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Scoped responsive grid layout styles */}
      <style>{`
        .terms-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .terms-grid-layout {
            grid-template-columns: 280px 1fr;
            gap: 64px;
          }
          .terms-sidebar-sticky {
            position: sticky;
            top: 110px;
            align-self: start;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsPage;
