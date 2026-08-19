import React, { useRef } from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { useGSAP3D } from '../hooks/useGSAP3D';

export default function Contact() {
  const pageRef = useRef(null);
  useGSAP3D(pageRef);

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
          <h1 className="contact-title">Contact</h1>
          <p className="contact-tagline">Gros plan sur vos souvenirs et bien plus encore</p>
        </div>

        {/* Info Cards Grid */}
        <div className="contact-cards-grid" data-gsap="stagger">
          {/* Address */}
          <div className="contact-glass-item">
            <div className="contact-icon-bubble">
              <MapPin size={26} />
            </div>
            <h3>Adresse</h3>
            <p>Mall Bouwaher, Route de Biskra<br/>Wilaya de Batna</p>
          </div>

          {/* Phone */}
          <div className="contact-glass-item">
            <div className="contact-icon-bubble">
              <Phone size={26} />
            </div>
            <h3>Téléphone</h3>
            <p><a href="tel:0564589749">0564589749</a></p>
          </div>

          {/* WhatsApp */}
          <div className="contact-glass-item">
            <div className="contact-icon-bubble">
              <MessageCircle size={26} />
            </div>
            <h3>WhatsApp</h3>
            <p><a href="https://wa.me/213564589749" target="_blank" rel="noreferrer">0564589749</a></p>
          </div>

          {/* Availability */}
          <div className="contact-glass-item">
            <div className="contact-icon-bubble">
              <Clock size={26} />
            </div>
            <h3>Disponibilité</h3>
            <p>Nous travaillons sur rendez-vous</p>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page-root {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #050C18;
          color: #FFFFFF;
        }

        /* ── Video Background (same pattern as About) ── */
        .contact-video-bg-wrap {
          position: fixed;
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
          background: rgba(5, 12, 24, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1;
        }

        /* ── Content Layer ── */
        .contact-content-layer {
          position: relative;
          z-index: 2;
          padding: 140px 20px 100px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          text-align: center;
        }

        /* ── Header ── */
        .contact-header {
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-title {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1.1;
          color: #FFFFFF;
          margin-bottom: 16px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .contact-tagline {
          font-size: 1.25rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          font-style: italic;
          letter-spacing: 0.02em;
        }

        /* ── Cards Grid ── */
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          width: 100%;
          max-width: 1100px;
        }

        .contact-glass-item {
          background: rgba(13, 31, 60, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 36px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .contact-glass-item:hover {
          transform: translateY(-6px);
          border-color: var(--primary-blue, #1E6FFF);
        }

        .contact-icon-bubble {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan, #5CE1E6);
        }

        .contact-glass-item h3 {
          font-size: 1.2rem;
          color: #FFFFFF;
          margin: 0;
        }

        .contact-glass-item p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .contact-glass-item a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-glass-item a:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .contact-cards-grid { gap: 16px; }
          .contact-glass-item { padding: 24px 16px; gap: 10px; border-radius: 16px; }
          .contact-glass-item h3 { font-size: 1.1rem; }
          .contact-glass-item p { font-size: 0.85rem; line-height: 1.4; }
          .contact-icon-bubble { width: 44px; height: 44px; }
        }

        @media (max-width: 768px) {
          .contact-cards-grid { gap: 10px; }
          .contact-glass-item { padding: 16px 10px; gap: 8px; border-radius: 12px; }
          .contact-glass-item h3 { font-size: 0.95rem; }
          .contact-glass-item p { font-size: 0.75rem; line-height: 1.3; }
          .contact-icon-bubble { width: 36px; height: 36px; }
          .contact-icon-bubble svg { width: 18px; height: 18px; }
        }

        @media (max-width: 480px) {
          .contact-content-layer { padding: 100px 8px 80px 8px; gap: 40px; }
          .contact-title { font-size: 2.2rem; }
          .contact-tagline { font-size: 0.9rem; }
          
          .contact-cards-grid { gap: 6px; }
          .contact-glass-item { padding: 10px 6px; gap: 6px; border-radius: 8px; }
          .contact-glass-item h3 { font-size: 0.75rem; }
          .contact-glass-item p { font-size: 0.55rem; line-height: 1.2; word-break: break-word; }
          .contact-icon-bubble { width: 28px; height: 28px; border-radius: 8px; }
          .contact-icon-bubble svg { width: 14px; height: 14px; }
        }
      `}</style>
    </div>
  );
}
