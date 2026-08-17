import React, { useRef } from 'react';
import { Film, Shield, Heart } from 'lucide-react';
import { useGSAP3D } from '../hooks/useGSAP3D';
import studioImages from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const pageRef = useRef(null);
  useGSAP3D(pageRef);
  const { t } = useLanguage();

  return (
    <div className="about-page-root" ref={pageRef}>
      {/* ── Section 1: Hero Image ── */}
      <section className="about-hero-section">
        <div className="about-hero-image-wrap">
          <img src={studioImages.aboutHero} alt="Studio Mission Verse" className="about-hero-img" />
          <div className="about-hero-overlay" />
        </div>
        
        <div className="container about-hero-content" data-gsap="fade-up">
          <h1 className="about-title">{t('about_title')}</h1>
          <p className="about-subtitle" dangerouslySetInnerHTML={{ __html: t('about_sub') }} />
        </div>
      </section>

      {/* ── Section 2: Values Cards (GSAP Background) ── */}
      <section className="about-values-section" data-gsap="bg-color-shift">
        <div className="container">
          <div className="values-grid" data-gsap="stagger-cards">
            
            <div className="value-card glass-card">
              <div className="value-icon">
                <Film size={28} />
              </div>
              <h3>{t('about_card1_title')}</h3>
              <p>{t('about_card1_p')}</p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon">
                <Shield size={28} />
              </div>
              <h3>{t('about_card2_title')}</h3>
              <p>{t('about_card2_p')}</p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon">
                <Heart size={28} />
              </div>
              <h3>{t('about_card3_title')}</h3>
              <p>{t('about_card3_p')}</p>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .about-page-root {
          background: var(--bg-main);
          color: var(--text-main);
        }

        /* ── Hero Section ── */
        .about-hero-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .about-hero-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .about-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          /* Slight ken burns effect */
          animation: slowZoom 20s ease-out forwards;
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(5,12,24,0.4) 0%,
            rgba(5,12,24,0.7) 50%,
            var(--bg-main) 100%
          );
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding-top: 100px; /* To account for navbar */
        }

        .about-title {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 6vw, 5rem);
          color: #FFFFFF;
          margin-bottom: 24px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }

        .about-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-subtitle strong {
          color: #FFFFFF;
          font-weight: 600;
        }

        /* ── Values Section ── */
        .about-values-section {
          padding: 80px 0 120px 0;
          position: relative;
          z-index: 2;
          background: var(--bg-main); /* Will be animated by GSAP if you set up the hook */
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .value-card {
          padding: 48px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          background: rgba(13,31,60,0.5); /* slight blueish tint */
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .value-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-cyan);
        }

        .value-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(30, 111, 255, 0.15);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(30, 111, 255, 0.3);
        }

        .value-card h3 {
          font-size: 1.5rem;
          color: #FFFFFF;
        }

        .value-card p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1.05rem;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .values-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
