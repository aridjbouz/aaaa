import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activePage, setActivePage }) {
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { id: 'home', label: t('nav_home') || 'Home' },
    { id: 'about', label: t('nav_about') || 'About Studio' },
    { id: 'contact', label: t('nav_contact') || 'Contact' }
  ];

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLangChange = (langCode) => {
    setLanguage(langCode);
  };

  return (
    <div className="nav-05">
      <div className="nav-05__bar">
        <a href="#" className="nav-05__logo" onClick={(e) => handleNavClick(e, 'home')}>
          <div className="logo-badge">
            <img src="/logo.jpg" alt="Mission Verse" className="logo-img-circle" />
          </div>
          <span className="brand-title">MISSION VERSE</span>
        </a>
        
        <div className="nav-05__sep"></div>
        
        <ul className="nav-05__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href="#" 
                className={activePage === link.id ? 'is-active' : ''}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="nav-05__sep"></div>
        
        <div className="nav-05__lang-switcher">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLangChange('en')}
          >
            EN
          </button>
          <button 
            className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
            onClick={() => handleLangChange('fr')}
          >
            FR
          </button>
          <button 
            className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
            onClick={() => handleLangChange('ar')}
          >
            AR
          </button>
        </div>
      </div>

      <style>{`
        .nav-05 {
          position: fixed;
          top: 24px;
          left: 0;
          right: 0;
          z-index: 999;
          display: flex;
          justify-content: center;
          padding: 0 16px;
          pointer-events: none; /* Allows clicking through empty space */
        }

        .nav-05__bar {
          pointer-events: auto;
          display: flex;
          align-items: center;
          background: rgba(5, 12, 24, 0.22); /* Ultra-transparent "chafaf" glass */
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 8px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
          gap: 16px;
        }

        .nav-05__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          padding-left: 6px;
        }

        .logo-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(30, 111, 255, 0.4);
          flex-shrink: 0;
        }

        .logo-img-circle {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .brand-title {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .nav-05__sep {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
        }

        .nav-05__links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-05__links a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9rem;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-05__links a:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.15);
        }

        .nav-05__links a.is-active {
          background: #FFFFFF;
          color: #050c18;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.25);
        }

        .nav-05__lang-switcher {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-right: 4px;
        }

        .lang-btn {
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          border: none;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-btn:hover {
          color: #FFFFFF;
        }

        .lang-btn.active {
          background: #FFFFFF;
          color: #050c18;
          box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
        }
        
        @media (max-width: 900px) {
          .nav-05__bar { gap: 10px; }
          .nav-05__links a { padding: 8px 12px; font-size: 0.85rem; }
          .brand-title { display: none; }
        }
        
        @media (max-width: 600px) {
          .nav-05__sep { display: none; }
          .nav-05__links { display: none; }
          .nav-05__bar { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </div>
  );
}
