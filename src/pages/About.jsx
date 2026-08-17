import React, { useRef } from 'react';
import { Sparkles, Heart, Film, Camera, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { useGSAP3D } from '../hooks/useGSAP3D';
import { useLanguage } from '../context/LanguageContext';

export default function About({ onBookSession }) {
  const { t } = useLanguage();
  const pageRef = useRef(null);
  useGSAP3D(pageRef);

  return (
    <div className="about-page-root" ref={pageRef}>
      {/* ── Background Video v3 ── */}
      <div className="about-video-bg">
        <video
          src="/vedios/v3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="about-video-el"
        />
        <div className="about-video-overlay" />
      </div>

      {/* ── Main Content Layer ── */}
      <div className="about-content-layer container">
        {/* Header Block */}
        <div className="about-header-block" data-gsap="fade-up">
          <h1 className="about-main-title">L'Art de Capturer l'Inoubliable</h1>
          <p className="about-main-sub">
            Chez <strong>Mission Verse</strong>, nous transformons les premiers instants précieux de votre bébé en œuvres cinématographiques 4K et portraits d'art intemporels.
          </p>
        </div>

        {/* 3 Core Values Glass Cards Grid */}
        <div className="about-cards-grid" data-gsap="stagger">
          {/* Card 1 */}
          <div className="about-glass-card glass-card">
            <div className="about-card-icon">
              <Film size={26} color="var(--accent-cyan)" />
            </div>
            <h3>Vidéographie 4K Cinéma</h3>
            <p>
              Nos films capturent chaque respiration, chaque petit bâillement et les émotions pures de votre nouveau-né avec une qualité cinématographique exceptionnelle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="about-glass-card glass-card">
            <div className="about-card-icon">
              <ShieldCheck size={26} color="var(--primary-blue)" />
            </div>
            <h3>Sécurité & Confort Absolu</h3>
            <p>
              Chaque séance est réalisée dans un environnement chauffé à 25°C, désinfecté par UV et adapté au rythme naturel de votre bébé, sans aucune précipitation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="about-glass-card glass-card">
            <div className="about-card-icon">
              <Heart size={26} color="#E1306C" />
            </div>
            <h3>Souvenirs pour la Vie</h3>
            <p>
              De la préparation des décors à la retouche couleur sur-mesure, nous créons des trésors familiaux que vous chérirez pour toujours.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-page-root {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #050C18;
          color: #FFFFFF;
        }

        .about-video-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
        }

        .about-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 12, 24, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1;
        }

        .about-content-layer {
          position: relative;
          z-index: 2;
          padding: 120px 20px 100px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          text-align: center;
        }

        .about-header-block {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-main-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.2;
          color: #FFFFFF;
          margin-bottom: 20px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .about-main-sub {
          font-size: 1.15rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.85);
        }

        .about-main-sub strong {
          color: var(--accent-cyan);
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
          max-width: 1200px;
        }

        .about-glass-card {
          background: rgba(13, 31, 60, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 36px 28px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .about-glass-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary-blue);
        }

        .about-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-glass-card h3 {
          font-size: 1.35rem;
          color: #FFFFFF;
        }

        .about-glass-card p {
          font-size: 0.98rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.8);
        }

        .about-action-card {
          width: 100%;
          max-width: 900px;
          background: linear-gradient(135deg, rgba(13, 31, 60, 0.7) 0%, rgba(5, 12, 24, 0.8) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(30, 111, 255, 0.3);
          border-radius: 32px;
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
        }

        .about-action-card h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          color: #FFFFFF;
        }

        .about-action-card p {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .about-cta-btn {
          padding: 14px 32px;
          font-size: 1rem;
          margin-top: 10px;
        }

        @media (max-width: 900px) {
          .about-cards-grid {
            grid-template-columns: 1fr;
          }
          .about-action-card {
            padding: 36px 24px;
          }
        }
      `}</style>
    </div>
  );
}
