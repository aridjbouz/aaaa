import React, { useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Sparkles,
  Film,
  Camera,
  Heart,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Sun,
  Flame,
  CheckCircle,
  Play,
} from 'lucide-react';
import studioImages from '../assets/images';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useGSAP3D } from '../hooks/useGSAP3D';

export default function Home({ onNavigate, onBookSession }) {
  const { t } = useLanguage();
  const pageRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const allPhotos = [
    '/photos/1.jpg','/photos/2.jpg','/photos/3.jpg','/photos/4.jpg',
    '/photos/5.jpg','/photos/6.jpg','/photos/7.jpg','/photos/8.jpg',
    '/photos/9.jpg','/photos/10.jpg','/photos/11.jpg','/photos/12.jpg',
    '/photos/13.jpg','/photos/14.jpg','/photos/15.jpg','/photos/16.jpg',
    '/photos/17.jpg','/photos/18.jpg','/photos/19.jpg','/photos/21.jpg',
  ];

  const openLightbox = useCallback((src) => {
    const idx = allPhotos.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  }, []);

  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = (e) => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + allPhotos.length) % allPhotos.length); };
  const nextPhoto = (e) => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % allPhotos.length); };

  useGSAP3D(pageRef);

  return (
    <div className="home-page-root" ref={pageRef}>
      {/* ── Hero Section — full video background ── */}
      <section className="hero-section" id="hero">
        {/* Background video */}
        <div className="hero-video-bg">
          <video
            src="/vedios/v2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-el"
          />
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-container hero-centered">
          {/* Hero text */}
          <div className="hero-text-wrapper" data-gsap="parallax-hero-text">
            <h1 className="hero-poetic-text">
              {t('hero_poetic_1')}<br />
              {t('hero_poetic_2')}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Content Over Hero ── */}
      <div className="content-over-hero">
        {/* ── Section 2 & 3 Combined: Cinematic Reel & Photo Marquee over v1.mp4 ── */}
        <section className="v1-section-wrapper">
          <div className="v1-video-sticky-bg" data-gsap="pin-v1">
            <video
              src="/vedios/v1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="v1-video-el"
            />
            <div className="v1-video-overlay" />
          </div>

          <div className="v1-content-layer">
            {/* Block 1: 3 Transparent Text Frames */}
            <div className="v1-frames-container container" data-gsap="v1-frames">
              {/* Frame 1 */}
              <div className="v1-frame glass-card">
                <h2 className="v1-frame-title">{t('frame1_title')}</h2>
                <h3 className="v1-frame-subtitle" dangerouslySetInnerHTML={{ __html: t('frame1_sub') }} />
                <p dangerouslySetInnerHTML={{ __html: t('frame1_p1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('frame1_p2') }} />
              </div>

              {/* Frame 2 */}
              <div className="v1-frame glass-card">
                <h3 className="v1-frame-subtitle">{t('frame2_sub')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('frame2_p1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('frame2_p2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('frame2_p3') }} />
              </div>

              {/* Frame 3 */}
              <div className="v1-frame glass-card">
                <h3 className="v1-frame-subtitle">{t('frame3_sub')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('frame3_p') }} />
                <button onClick={() => onBookSession()} className="btn btn-primary v1-cta-btn">
                  <span>{t('frame3_btn')}</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Block 2: Photo Marquee Gallery over v1.mp4 */}
            <div className="photo-marquee-block" data-gsap="fade-up">
              <div className="container marquee-header-container">
                <h2 className="marquee-section-title dark-overlay-title">{t('marquee_title')}</h2>
              </div>

              <div className="marquee-wrapper">
                {/* Row 1: Left — photos 1-7 */}
                <div className="marquee-track track-left">
                  {[
                    '/photos/1.jpg', '/photos/2.jpg', '/photos/3.jpg', '/photos/4.jpg',
                    '/photos/5.jpg', '/photos/6.jpg', '/photos/7.jpg',
                    '/photos/1.jpg', '/photos/2.jpg', '/photos/3.jpg', '/photos/4.jpg',
                    '/photos/5.jpg', '/photos/6.jpg', '/photos/7.jpg',
                  ].map((src, idx) => (
                    <div key={`r1-${idx}`} className="photo-card glass-card" onClick={() => openLightbox(src)} style={{ cursor: 'pointer' }}>
                      <img src={src} alt={`Baby photo ${idx + 1}`} className="photo-card-img" />
                      <div className="photo-card-zoom-hint">🔍</div>
                    </div>
                  ))}
                </div>

                {/* Row 2: Right — photos 8-14 */}
                <div className="marquee-track track-right">
                  {[
                    '/photos/8.jpg', '/photos/9.jpg', '/photos/10.jpg', '/photos/11.jpg',
                    '/photos/12.jpg', '/photos/13.jpg', '/photos/14.jpg',
                    '/photos/8.jpg', '/photos/9.jpg', '/photos/10.jpg', '/photos/11.jpg',
                    '/photos/12.jpg', '/photos/13.jpg', '/photos/14.jpg',
                  ].map((src, idx) => (
                    <div key={`r2-${idx}`} className="photo-card glass-card" onClick={() => openLightbox(src)} style={{ cursor: 'pointer' }}>
                      <img src={src} alt={`Baby photo ${idx + 1}`} className="photo-card-img" />
                      <div className="photo-card-zoom-hint">🔍</div>
                    </div>
                  ))}
                </div>

                {/* Row 3: Left — photos 15-21 */}
                <div className="marquee-track track-left">
                  {[
                    '/photos/15.jpg', '/photos/16.jpg', '/photos/17.jpg', '/photos/18.jpg',
                    '/photos/19.jpg', '/photos/21.jpg',
                    '/photos/15.jpg', '/photos/16.jpg', '/photos/17.jpg', '/photos/18.jpg',
                    '/photos/19.jpg', '/photos/21.jpg',
                  ].map((src, idx) => (
                    <div key={`r3-${idx}`} className="photo-card glass-card" onClick={() => openLightbox(src)} style={{ cursor: 'pointer' }}>
                      <img src={src} alt={`Baby photo ${idx + 1}`} className="photo-card-img" />
                      <div className="photo-card-zoom-hint">🔍</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Block 3: Glass Footer over v1.mp4 */}
            <Footer onNavigate={onNavigate} />
          </div>
        </section>

      </div>

      {/* ── Marquee Lightbox ── */}
      {lightboxIndex !== null && (
        <div className="marquee-lightbox-backdrop" onClick={closeLightbox}>
          <button className="marquee-lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={28} />
          </button>

          {/* Prev */}
          <button className="marquee-lightbox-nav marquee-lightbox-prev" onClick={prevPhoto} aria-label="Previous">
            <ChevronLeft size={36} />
          </button>

          <div className="marquee-lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={allPhotos[lightboxIndex]} alt="Enlarged" className="marquee-lightbox-img" />
          </div>

          {/* Next */}
          <button className="marquee-lightbox-nav marquee-lightbox-next" onClick={nextPhoto} aria-label="Next">
            <ChevronRight size={36} />
          </button>
        </div>
      )}

      <style>{`
        .home-page-root { position: relative; background: var(--bg-main); }

        .content-over-hero {
          position: relative;
          z-index: 1;
          background: transparent; /* Changed from var(--bg-main) to transparent so v1.mp4 is visible all the way down */
          box-shadow: 0 -20px 40px rgba(0,0,0,0.5); /* subtle shadow when sliding over */
        }

        /* If we want a dark gradient background under the content so it's not fully transparent over the video: */
        .v1-content-layer {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 180px;
          padding: 120px 0 0 0; /* removed bottom padding so footer is at the end */
          background: transparent; /* Changed to fully transparent so video is visible */
        }

        /* ── Hero ── */
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-video-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(5,12,24,0.75) 0%,
            rgba(5,12,24,0.45) 55%,
            rgba(5,12,24,0.25) 100%
          );
        }

        .hero-container.hero-centered {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          padding-bottom: 80px;
          min-height: 100vh;
        }

        /* Hero Text */
        .hero-text-wrapper {
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
        }
        .hero-poetic-text {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          font-style: italic;
          font-weight: 400;
          line-height: 1.4;
          color: #FFFFFF;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }
        @media (max-width: 768px) {
          .hero-poetic-text {
            font-size: 1.8rem;
          }
        }

        /* ── Combined V1 Section (Sticky Video v1 + Content Layer) ── */
        .v1-section-wrapper {
          position: relative;
          width: 100%;
        }

        .v1-video-sticky-bg {
          /* Using GSAP pinning instead of CSS sticky */
          position: absolute; /* Reverted to absolute, GSAP will manage position: fixed pinning */
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
        }
        .v1-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .v1-video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 12, 24, 0.45);
          backdrop-filter: blur(2px);
          z-index: 1;
        }



        .v1-frames-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
          max-width: 1400px;
          padding: 0 20px;
        }

        .v1-frame {
          background: transparent; /* Made fully transparent */
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-style: italic;
        }

        .v1-frame-title {
          font-size: 2.2rem;
          color: #FFFFFF;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .v1-frame-subtitle {
          font-size: 1.4rem;
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .v1-frame p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .v1-frame strong {
          color: #FFFFFF;
          font-weight: 600;
        }

        .v1-cta-btn {
          margin-top: 16px;
          align-self: flex-start;
          font-style: normal;
        }

        /* ── Photo Marquee Block (over v1.mp4) ── */
        .photo-marquee-block {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .dark-overlay-title {
          color: #FFFFFF !important;
        }

        .marquee-header-container {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .marquee-section-title {
          font-size: clamp(2rem, 3.5vw, 3rem);
          color: var(--text-main);
        }

        .marquee-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
        }

        .track-left {
          animation: marqueeLeft 30s linear infinite;
        }

        .track-right {
          animation: marqueeRight 30s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .photo-card {
          width: clamp(240px, 75vw, 320px);
          height: 220px;
          flex-shrink: 0;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(30, 111, 255, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .photo-card:hover {
          transform: scale(1.05);
          border-color: var(--accent-cyan);
          box-shadow: 0 15px 40px rgba(0, 194, 255, 0.3);
        }

        .photo-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── CTA Banner ── */
        .cta-banner-section { padding: 60px 0 100px 0; }
        .cta-banner-card {
          background: linear-gradient(135deg, #0A1628 0%, #0D1F3C 50%, #080F1E 100%);
          border: 1px solid rgba(30,111,255,0.3);
          border-radius: 32px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .cta-banner-card::before {
          content: '';
          position: absolute;
          top: -40%; left: -10%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(30,111,255,0.12) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }
        .cta-banner-card::after {
          content: '';
          position: absolute;
          bottom: -30%; right: -10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,194,255,0.08) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }
        .cta-banner-content {
          max-width: 680px; margin: 0 auto;
          position: relative; z-index: 2;
        }
        .cta-banner-content h2 { color: #FFFFFF; margin-bottom: 16px; }
        .cta-banner-content p { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 32px; }
        .cta-buttons {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; flex-wrap: wrap;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .v1-frames-container {
            gap: 16px;
            padding: 0 16px;
          }
          .v1-frame {
            padding: 20px 16px;
            gap: 12px;
            border-radius: 16px;
          }
          .v1-frame-title { font-size: 1.8rem; }
          .v1-frame-subtitle { font-size: 1.2rem; }
          .v1-frame p { font-size: 0.95rem; line-height: 1.5; }
          .v1-cta-btn { font-size: 0.9rem; padding: 10px 16px; }
        }
        
        @media (max-width: 768px) {
          .hero-section { min-height: 80vh; }
          .hero-container.hero-centered { padding-top: 40px; padding-bottom: 60px; min-height: 80vh; }
          .hero-logo-ring { width: 200px; height: 200px; }
          .v1-content-layer { gap: 100px; padding: 60px 0 100px 0; }
          
          .v1-frames-container {
            gap: 10px;
            padding: 0 10px;
          }
          .v1-frame {
            padding: 14px 10px;
            gap: 8px;
            border-radius: 12px;
          }
          .v1-frame-title { font-size: 1.4rem; }
          .v1-frame-subtitle { font-size: 1rem; }
          .v1-frame p { font-size: 0.8rem; line-height: 1.4; }
          .v1-cta-btn { font-size: 0.8rem; padding: 8px 12px; }
          .v1-cta-btn svg { width: 14px; height: 14px; }
        }
        
        @media (max-width: 480px) {
          .hero-logo-ring { width: 160px; height: 160px; }
          .v1-content-layer { gap: 60px; padding: 40px 0 80px 0; }
          .photo-card { height: 180px; }
          
          .v1-frames-container {
            gap: 6px;
            padding: 0 6px;
          }
          .v1-frame {
            padding: 10px 8px;
            gap: 6px;
            border-radius: 8px;
          }
          .v1-frame-title { font-size: 1.1rem; }
          .v1-frame-subtitle { font-size: 0.85rem; }
          .v1-frame p { font-size: 0.65rem; line-height: 1.3; }
          .v1-cta-btn { font-size: 0.7rem; padding: 6px 10px; margin-top: 8px; }
          .v1-cta-btn svg { width: 12px; height: 12px; }
        }

        /* ── Photo Card Zoom Hint ── */
        .photo-card { position: relative; }
        .photo-card-zoom-hint {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) scale(0);
          font-size: 1.8rem;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
        }
        .photo-card:hover .photo-card-zoom-hint {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        /* ── Marquee Lightbox ── */
        .marquee-lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: lbFadeIn 0.25s ease;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .marquee-lightbox-close {
          position: fixed;
          top: 20px; right: 20px;
          z-index: 2100;
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .marquee-lightbox-close:hover { background: rgba(255,255,255,0.3); }
        .marquee-lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          animation: lbZoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes lbZoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        .marquee-lightbox-img {
          max-width: 90vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 16px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
        }
        
        .marquee-lightbox-nav {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2100;
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .marquee-lightbox-nav:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-50%) scale(1.1);
        }
        .marquee-lightbox-prev { left: 30px; }
        .marquee-lightbox-next { right: 30px; }

        @media (max-width: 768px) {
          .marquee-lightbox-nav { width: 44px; height: 44px; }
          .marquee-lightbox-prev { left: 10px; }
          .marquee-lightbox-next { right: 10px; }
        }
      `}</style>
    </div>
  );
}
