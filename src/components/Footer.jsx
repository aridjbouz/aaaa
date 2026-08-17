import React from 'react';
import { 
  Camera, 
  MapPin, 
  Phone,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        
        {/* Brand & Socials Section */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <Camera size={28} className="logo-icon text-gold" />
            <span className="logo-text">Mission Verse</span>
          </div>
          <p className="footer-tagline">{t('footer_subtitle')}</p>
          <p className="footer-year">2026</p>
          
          <div className="footer-social-links">
            <a 
              href="https://www.instagram.com/mission_verse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <Heart size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact-col">
          <h4 className="footer-heading">{t('nav_contact')}</h4>
          <ul className="footer-info-list">
            <li>
              <MapPin size={18} className="info-icon" />
              <span>{t('contact_address_value')}</span>
            </li>
            <li>
              <Phone size={18} className="info-icon" />
              <span>{t('footer_tel')}: <a href="tel:0564589749">0564589749</a></span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <p>{t('footer_copyright')}</p>
      </div>

      <style>{`
        .footer-container {
          background: rgba(13, 31, 60, 0.6);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
          padding-top: 60px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        /* Brand Column */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .logo-text {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: #FFFFFF;
        }

        .text-gold {
          color: var(--accent-cyan);
        }

        .footer-tagline {
          font-size: 1rem;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-year {
          font-weight: 600;
          color: var(--accent-cyan);
          margin-bottom: 24px;
        }

        .footer-social-links {
          display: flex;
          gap: 16px;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-btn:hover {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
        }

        /* Contact Column */
        .footer-heading {
          font-size: 1.2rem;
          color: #FFFFFF;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .footer-info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.5;
        }

        .info-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-info-list a {
          color: var(--accent-cyan);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-info-list a:hover {
          color: #FFFFFF;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          background: rgba(5, 12, 24, 0.9);
          padding: 20px;
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
