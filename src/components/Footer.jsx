import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const instaUrl = "https://www.instagram.com/mission_verse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const phone = "0564589749";
  const whatsappUrl = "https://wa.me/213564589749";

  return (
    <footer className="footer-section">
      <div className="container footer-clean-container">
        {/* Brand & Dev Studio info */}
        <div className="footer-brand-box">
          <div className="brand-logo">
            <div className="logo-badge">
              <img src="/logo.jpg" alt="Mission Verse" className="logo-img-circle" />
            </div>
            <div className="logo-text-group">
              <span className="brand-title">MISSION VERSE</span>
              <span className="brand-subtitle">Boîte de développement et communication</span>
            </div>
          </div>
        </div>

        {/* Contact & Social Links */}
        <div className="footer-contacts-row">
          <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>@mission_verse</span>
          </a>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-pill">
            <MessageCircle size={18} color="#25D366" />
            <span>WhatsApp: {phone}</span>
          </a>

          <a href={`tel:${phone}`} className="footer-contact-pill">
            <Phone size={18} color="#1E6FFF" />
            <span>Tél: {phone}</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2026 Mission Verse. Tous droits réservés.</p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: transparent;
          color: rgba(255, 255, 255, 0.85);
          padding: 60px 0 100px 0; /* Add bottom padding so mobile bottom bar doesn't cover footer content */
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          width: 100%;
        }

        .footer-clean-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          text-align: center;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .logo-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(30, 111, 255, 0.4);
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(30, 111, 255, 0.2);
        }

        .logo-img-circle {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .brand-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 0.05em;
          line-height: 1.2;
        }

        .brand-subtitle {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
        }

        .footer-contacts-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-contact-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 24px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          color: #FFFFFF;
          font-size: 0.92rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-contact-pill:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.25);
          border-color: #FFFFFF;
          box-shadow: 0 6px 20px rgba(30, 111, 255, 0.35);
          color: #FFFFFF;
        }

        .footer-copyright p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 480px) {
          .footer-section { padding: 40px 0 30px 0; }
          .footer-contacts-row { flex-direction: column; width: 100%; gap: 12px; }
          .footer-contact-pill { width: 100%; justify-content: center; padding: 10px 16px; font-size: 0.85rem; }
          .brand-title { font-size: 1.15rem; }
        }
      `}</style>
    </footer>
  );
}
