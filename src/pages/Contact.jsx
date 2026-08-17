import React, { useRef } from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { useGSAP3D } from '../hooks/useGSAP3D';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const pageRef = useRef(null);
  useGSAP3D(pageRef);
  const { t } = useLanguage();

  return (
    <div className="contact-page-root" ref={pageRef}>
      {/* ── Background Video v5 ── */}
      <div className="contact-video-bg-wrap">
        <video
          src="/vedios/v5.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="contact-video-el"
        />
        <div className="contact-video-overlay" />
      </div>

      {/* ── Content Layer ── */}
      <div className="contact-content-layer container">
        {/* Header */}
        <div className="contact-header" data-gsap="fade-up">
          <h1 className="contact-title">{t('contact_title')}</h1>
          <p className="contact-tagline">{t('contact_tagline')}</p>
        </div>

        {/* Info Cards Grid */}
        <div className="contact-cards-grid" data-gsap="stagger-cards">
          
          {/* Address Card */}
          <div className="contact-card glass-card">
            <div className="contact-icon-bubble">
              <MapPin size={24} className="text-gold" />
            </div>
            <h3>{t('contact_address_label')}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{t('contact_address_value')}</p>
          </div>

          {/* Phone Card */}
          <div className="contact-card glass-card">
            <div className="contact-icon-bubble">
              <Phone size={24} className="text-gold" />
            </div>
            <h3>{t('contact_phone_label')}</h3>
            <p>
              <a href="tel:0564589749" className="contact-link">0564589749</a>
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="contact-card glass-card">
            <div className="contact-icon-bubble">
              <MessageCircle size={24} className="text-gold" />
            </div>
            <h3>{t('contact_whatsapp_label')}</h3>
            <p>
              <a 
                href="https://wa.me/213564589749" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                +213 56 45 89 74 9
              </a>
            </p>
          </div>

          {/* Availability Card */}
          <div className="contact-card glass-card">
            <div className="contact-icon-bubble">
              <Clock size={24} className="text-gold" />
            </div>
            <h3>{t('contact_availability_label')}</h3>
            <p>{t('contact_availability_value')}</p>
          </div>

        </div>
      </div>

      <style>{`
        .contact-page-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000;
        }

        /* ── Video Background ── */
        .contact-video-bg-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .contact-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .contact-video-overlay {
          position: absolute;
          inset: 0;
          /* Dark gradient to ensure text readability */
          background: linear-gradient(
            135deg,
            rgba(5, 12, 24, 0.85) 0%,
            rgba(5, 12, 24, 0.65) 50%,
            rgba(5, 12, 24, 0.45) 100%
          );
          backdrop-filter: blur(4px);
        }

        /* ── Content Layer ── */
        .contact-content-layer {
          position: relative;
          z-index: 2;
          padding: 120px 20px 80px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }

        /* ── Header ── */
        .contact-header {
          text-align: center;
          color: #FFFFFF;
        }

        .contact-title {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 5vw, 4.5rem);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .contact-tagline {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 300;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ── Cards Grid ── */
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1200px;
        }

        .contact-card {
          background: rgba(13, 31, 60, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 40px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .contact-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-cyan);
          background: rgba(13, 31, 60, 0.8);
          box-shadow: 0 25px 50px rgba(0, 194, 255, 0.15);
        }

        .contact-icon-bubble {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(30, 111, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          border: 1px solid rgba(30, 111, 255, 0.3);
        }

        .text-gold {
          color: var(--accent-cyan);
        }

        .contact-card h3 {
          color: #FFFFFF;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .contact-card p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .contact-link {
          color: var(--accent-cyan);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #FFFFFF;
          text-shadow: 0 0 10px rgba(0, 194, 255, 0.5);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
          .contact-content-layer {
            padding: 100px 20px 60px 20px;
          }
        }
      `}</style>
    </div>
  );
}
