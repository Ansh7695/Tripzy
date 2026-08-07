import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import mainLogo from '../assets/MainLogo.png';

/* ─────────────────────────────────────────────────────────
   REAL SITE DATA — pulled from existing codebase
───────────────────────────────────────────────────────── */
const BRAND = 'FlyandGO';
const TAGLINE = "India's premium slow-travel experts — crafting bespoke journeys, one unhurried adventure at a time.";

const COL_COMPANY = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const COL_SUPPORT = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

const COL_CONTACT = [
  { icon: <MapPin size={13} />, text: 'Kochi: 28/1859, Civil Line Rd, opp. City Silk, Sonia Nagar, Palarivattom, Kochi, Ernakulam, Kerala 682025' },
  { icon: <Phone size={13} />, text: '+91 75005 98759' },
  { icon: <Mail size={13} />, text: 'contact@flyandgo.in' },
  { icon: <Mail size={13} />, text: 'bookings@flyandgo.in' },
  { icon: <Clock size={13} />, text: 'Mon – Sat: 09:00 AM – 06:00 PM' },
];

/* ─────────────────────────────────────────────────────────
   LINK COLUMN — reusable sub-component
───────────────────────────────────────────────────────── */
interface LinkColProps {
  header: string;
  children: React.ReactNode;
}
const LinkCol: React.FC<LinkColProps> = ({ header, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    <p
      style={{
        margin: '0 0 1rem',
        fontSize: '0.9rem',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '0.01em',
        fontFamily: 'var(--font-body)',
      }}
    >
      {header}
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
      {children}
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────── */
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: '100%',
        background: 'linear-gradient(160deg, #101211 0%, #0B0D0C 100%)',
        fontFamily: 'var(--font-body)',
        position: 'relative',
      }}
    >
      {/* Full-width inner content wrapper — no card chrome */}
      <div
        style={{
          position: 'relative',
          padding: 'clamp(3rem, 5vw, 4rem) clamp(1.25rem, 5vw, 3.5rem)',
        }}
      >
        {/* Subtle ambient glows inside card */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: '-80px', left: '-80px',
            width: '380px', height: '380px',
            background: 'radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: '-80px', right: '-80px',
            width: '380px', height: '380px',
            background: 'radial-gradient(circle, rgba(194,112,58,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* ════════════════════════════════════
            TOP SECTION: Brand block + Link columns
        ════════════════════════════════════ */}
        <div className="footer-top">

          {/* 3a. Brand block */}
          <div style={{ maxWidth: '300px' }}>
            {/* Logo image */}
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                marginBottom: '1rem',
                backgroundColor: '#ffffff',
                padding: '0.45rem 0.9rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src={mainLogo}
                alt={BRAND}
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* Tagline / description */}
            <p
              style={{
                margin: 0,
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.65,
                maxWidth: '280px',
              }}
            >
              {TAGLINE}
            </p>
          </div>

          {/* 3b. Three link columns */}
          <div className="footer-cols">

            {/* Column 1 — Company pages */}
            <LinkCol header="Company">
              {COL_COMPANY.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="footer-link"
                >
                  {label}
                </Link>
              ))}
            </LinkCol>

            {/* Column 2 — Support / legal */}
            <LinkCol header="Legal & Policy">
              {COL_SUPPORT.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="footer-link"
                >
                  {label}
                </Link>
              ))}
            </LinkCol>

            {/* Column 3 — Contact info */}
            <LinkCol header="Contact Us">
              {COL_CONTACT.map(({ icon, text }) => (
                <span
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ marginTop: '1px', flexShrink: 0, color: 'rgba(255,255,255,0.35)' }}>
                    {icon}
                  </span>
                  {text}
                </span>
              ))}
            </LinkCol>

          </div>
        </div>

        {/* ════════════════════════════════════
            LEGAL ROW
        ════════════════════════════════════ */}
        <div
          className="footer-legal"
          style={{ marginTop: '3rem' }}
        >
          <span>© {year} {BRAND}. All rights reserved.</span>
          <span>
            Developed by Ansh Sharma
          </span>
        </div>

        {/* ════════════════════════════════════
            GIANT WORDMARK — inside card (gets clipped at bottom by overflow:hidden)
        ════════════════════════════════════ */}
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
            textAlign: 'center',
            marginTop: '2.5rem',
            /*
             * Negative margin pulls the text down so only the
             * top ~55-65% of letterforms are visible before the
             * card's overflow:hidden clips the rest.
             */
            marginBottom: '-0.38em',
            lineHeight: 0.85,
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(4rem, 13vw, 9rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-heading)',
              /* Horizontal gradient: vivid mint-green left → nearly invisible right */
              background: 'linear-gradient(90deg, #3ED598 0%, #1a8c5a 35%, #0d4d33 65%, #0B0D0C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {BRAND}
          </span>
        </div>

      </div>{/* /inner content wrapper */}

      {/* Scoped styles */}
      <style>{`
        /* ── Footer link hover ── */
        .footer-link {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s ease;
          display: block;
        }
        .footer-link:hover {
          color: #ffffff;
        }

        /* ── Top section: brand + columns ── */
        .footer-top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3rem;
        }

        /* ── Four columns side-by-side ── */
        .footer-cols {
          display: flex;
          flex-direction: row;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: flex-start;
          flex-wrap: nowrap;
        }

        /* ── Legal row ── */
        .footer-legal {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
        }

        /* ── Tablet (768–1023px) ── */
        @media (max-width: 1023px) {
          .footer-cols { gap: 2rem; }
        }

        /* ── Mobile (<768px) ── */
        @media (max-width: 767px) {
          .footer-top {
            flex-direction: column;
            gap: 2rem;
          }
          .footer-cols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem 1.5rem;
            width: 100%;
          }
          .footer-legal {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.5rem;
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;
