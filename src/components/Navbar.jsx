import React, { useState } from 'react';
import { Camera, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onNavigate, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' }
  ];

  return (
    <nav className="navbar-glass">
      <div className="container nav-container">
        
        {/* Brand */}
        <div className="nav-brand" onClick={() => onNavigate('home')}>
          <div className="brand-logo-wrap">
            <Camera size={24} color="var(--accent-cyan)" />
          </div>
          <span className="brand-name">Mission Verse</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links desktop-only">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            {t('nav_home')}
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => onNavigate('about')}
          >
            {t('nav_about')}
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => onNavigate('contact')}
          >
            {t('nav_contact')}
          </button>
        </div>

        {/* Right Side: Language Switcher & Mobile Toggle */}
        <div className="nav-actions">
          
          {/* Custom Language Switcher Dropdown */}
          <div className="lang-switcher-container">
            <button 
              className="lang-toggle-btn"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <Globe size={18} />
              <span className="lang-current-label">
                {languages.find(l => l.code === language)?.label}
              </span>
            </button>

            {isLangMenuOpen && (
              <div className="lang-dropdown-menu glass-card">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    className={`lang-option ${language === lng.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lng.code);
                      setIsLangMenuOpen(false);
                    }}
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="mobile-toggle mobile-only" onClick={toggleMenu}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <div className="container mobile-links">
          <button onClick={() => { onNavigate('home'); toggleMenu(); }}>{t('nav_home')}</button>
          <button onClick={() => { onNavigate('about'); toggleMenu(); }}>{t('nav_about')}</button>
          <button onClick={() => { onNavigate('contact'); toggleMenu(); }}>{t('nav_contact')}</button>
        </div>
      </div>

      <style>{`
        .navbar-glass {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: rgba(5, 12, 24, 0.6);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .brand-logo-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(30, 111, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(30, 111, 255, 0.3);
        }

        .brand-name {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: 0.02em;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: var(--transition-smooth);
          position: relative;
          padding: 8px 0;
        }

        .nav-link:hover, .nav-link.active {
          color: #FFFFFF;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0%;
          height: 2px;
          background: var(--accent-cyan);
          transition: var(--transition-smooth);
        }

        .nav-link.active::after, .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* Language Switcher */
        .lang-switcher-container {
          position: relative;
        }

        .lang-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .lang-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 140px;
          display: flex;
          flex-direction: column;
          padding: 8px;
          border-radius: 12px;
          z-index: 1010;
        }

        .lang-option {
          background: none;
          border: none;
          text-align: left;
          padding: 10px 16px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .lang-option:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }

        .lang-option.active {
          background: var(--accent-cyan);
          color: #000;
          font-weight: 600;
        }

        .mobile-toggle {
          background: none;
          border: none;
          color: #FFFFFF;
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0; right: 0;
          background: rgba(5, 12, 24, 0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 24px 0;
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.is-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-links button {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #FFFFFF;
          text-align: left;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .desktop-only { display: flex; }
        .mobile-only { display: none; }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: flex; }
          .lang-current-label { display: none; } /* hide text on mobile */
          .lang-toggle-btn { padding: 8px; border-radius: 50%; }
        }
      `}</style>
    </nav>
  );
}
