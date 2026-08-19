import React from 'react';
import { Home, Info, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MobileBottomBar({ onNavigate, onBookSession }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="mobile-bottom-dock">
      <div className="dock-container">
        {/* Logo → Home */}
        <button 
          className="dock-btn" 
          onClick={() => {
            if (onNavigate) onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Home"
        >
          <div className="logo-badge">
            <img src="/logo.jpg" alt="Mission Verse" className="logo-img-circle" />
          </div>
        </button>

        {/* Home */}
        <button 
          className="dock-btn" 
          onClick={() => {
            if (onNavigate) onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="dock-icon-circle">
            <Home size={20} />
          </div>
        </button>

        {/* About */}
        <button 
          className="dock-btn"
          onClick={() => {
            if (onNavigate) onNavigate('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="dock-icon-circle">
            <Info size={20} />
          </div>
        </button>

        {/* Contact */}
        <button 
          className="dock-btn"
          onClick={() => {
            if (onNavigate) onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="dock-icon-circle">
            <Phone size={20} />
          </div>
        </button>

        {/* Language Switcher */}
        <div className="mobile-lang-switcher">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
          <button 
            className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
            onClick={() => setLanguage('ar')}
          >
            AR
          </button>
        </div>
      </div>

      <style>{`
        .mobile-bottom-dock {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 1000;
          background: rgba(5, 12, 24, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(30, 111, 255, 0.25);
          box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.5);
          padding: 10px 16px 20px 16px;
        }
        .dock-container {
          display: flex; align-items: center; justify-content: space-between;
          max-width: 440px; margin: 0 auto;
        }
        .dock-btn {
          display: flex; flex-direction: column;
          align-items: center; gap: 4px;
          background: none; border: none; padding: 0;
          cursor: pointer;
        }
        .dock-icon-circle {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #FFFFFF;
          transition: var(--transition-smooth);
        }
        .logo-badge {
          width: 42px; height: 42px; border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(30, 111, 255, 0.6);
          box-shadow: 0 4px 10px rgba(30, 111, 255, 0.3);
        }
        .logo-img-circle {
          width: 100%; height: 100%; object-fit: cover;
        }
        .mobile-lang-switcher {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .lang-btn {
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          border: none;
          padding: 8px 12px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .lang-btn.active {
          background: #FFFFFF;
          color: #050c18;
          box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 900px) {
          .mobile-bottom-dock { display: block; }
        }
      `}</style>
    </div>
  );
}
