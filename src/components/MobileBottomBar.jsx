import React from 'react';
import { Phone, MessageCircle, Calendar, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MobileBottomBar({ onNavigate, onBookSession }) {
  const { t } = useLanguage();

  return (
    <div className="mobile-bottom-bar">
      <div className="mobile-bar-inner">
        <a href="tel:0564589749" className="mobile-action-btn">
          <Phone size={20} />
          <span>{t('mobile_call')}</span>
        </a>
        
        <a 
          href="https://wa.me/213564589749" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-action-btn"
        >
          <MessageCircle size={20} />
          <span>{t('mobile_whatsapp')}</span>
        </a>

        <button 
          onClick={() => {
            const reelsSection = document.getElementById('cinema-reels');
            if (reelsSection) {
              reelsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              onNavigate('home');
              setTimeout(() => {
                document.getElementById('cinema-reels')?.scrollIntoView({ behavior: 'smooth' });
              }, 500);
            }
          }} 
          className="mobile-action-btn"
        >
          <Film size={20} />
          <span>{t('mobile_reels')}</span>
        </button>

        <button onClick={onBookSession} className="mobile-action-btn primary-mobile-btn">
          <Calendar size={20} />
          <span>{t('mobile_book')}</span>
        </button>
      </div>

      <style>{`
        .mobile-bottom-bar {
          display: none; /* hidden on desktop */
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(5, 12, 24, 0.95);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          padding-bottom: env(safe-area-inset-bottom, 16px);
        }

        .mobile-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 12px 8px;
        }

        .mobile-action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          flex: 1;
        }

        .mobile-action-btn.primary-mobile-btn {
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
