import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Phone, Mail, Clock } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   REAL SITE DATA — pulled from existing codebase
───────────────────────────────────────────────────────── */
const BRAND = 'Tripzy';
const TAGLINE = "India's premium slow-travel experts — crafting bespoke journeys, one unhurried adventure at a time.";

const COL_COMPANY = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const COL_SUPPORT = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Cancellation Policy', to: '/refund' },
  { label: 'Help Center', to: '/help' },
];

const COL_CONTACT = [
  { icon: <MapPin size={13} />, text: 'Kochi: 28/1859, Civil Line Rd, opp. City Silk, Sonia Nagar, Palarivattom, Kochi, Ernakulam, Kerala 682025' },
  { icon: <MapPin size={13} />, text: 'Haridwar: 42/89 Kankhal Rd, Devpura, Haridwar, Uttarakhand 249401' },
  { icon: <Phone size={13} />, text: '+91 75005 98759' },
  { icon: <Mail size={13} />, text: 'explore@tripzy.com' },
  { icon: <Clock size={13} />, text: 'Mon – Sat: 09:00 AM – 06:00 PM' },
];

/* Social icons — SVG paths from the original Footer.tsx */
const COL_SOCIAL = [
  {
    label: 'Instagram',
    url: 'https://instagram.com',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    url: 'https://youtube.com',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2 29 29 0 0 0-.46 5.25 29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
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
            {/* Logo wordmark */}
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                marginBottom: '0.85rem',
              }}
            >
              <Compass
                size={26}
                style={{ color: 'var(--color-gold)', flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: '#ffffff',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {BRAND}
              </span>
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

          {/* 3b. Four link columns */}
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
            <LinkCol header="Support">
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

            {/* Column 4 — Social */}
            <LinkCol header="Follow Us">
              {COL_SOCIAL.map(({ label, url, icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span style={{ opacity: 0.7 }}>{icon}</span>
                  {label}
                </a>
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
