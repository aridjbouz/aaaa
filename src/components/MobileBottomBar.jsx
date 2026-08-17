import React from 'react';
import { Phone, MessageCircle, Film, Calendar, Sparkles } from 'lucide-react';

export default function MobileBottomBar({ onNavigate, onBookSession }) {
  return (
    <div className="mobile-bottom-dock">
      <div className="dock-container">
        {/* Direct Phone Call */}
        <a href="tel:+18005552229" className="dock-btn">
          <div className="dock-icon-circle">
            <Phone size={18} />
          </div>
          <span className="dock-label">Call Us</span>
        </a>

        {/* WhatsApp Chat */}
        <a 
          href="https://wa.me/18005552229?text=Hello%20Studio%20Mission%20Verse,%20I%20would%20like%20to%20inquire%20about%20a%20baby%20shooting%20session" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dock-btn"
        >
          <div className="dock-icon-circle whatsapp-green">
            <MessageCircle size={18} />
          </div>
          <span className="dock-label">WhatsApp</span>
        </a>

        {/* Watch Reels */}
        <button 
          onClick={() => {
            onNavigate('home');
            setTimeout(() => {
              const el = document.getElementById('cinema-reels');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} 
          className="dock-btn"
        >
          <div className="dock-icon-circle gold-circle">
            <Film size={18} />
          </div>
          <span className="dock-label">4K Reels</span>
        </button>

        {/* Quick Book */}
        <button 
          onClick={() => onBookSession()} 
          className="dock-btn dock-btn-primary"
        >
          <div className="dock-icon-circle primary-book">
            <Calendar size={18} />
          </div>
          <span className="dock-label">Book Now</span>
        </button>
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
          padding: 8px 12px 16px 12px;
        }
        .dock-container {
          display: flex; align-items: center; justify-content: space-around;
          max-width: 440px; margin: 0 auto;
        }
        .dock-btn {
          display: flex; flex-direction: column;
          align-items: center; gap: 4px;
          color: var(--text-muted);
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.02em;
        }
        .dock-icon-circle {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(13,31,60,0.9);
          border: 1px solid rgba(30,111,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }
        .whatsapp-green { background: rgba(46,125,50,0.2); color: #4CAF50; border-color: rgba(76,175,80,0.3); }
        .gold-circle    { background: rgba(30,111,255,0.15); color: var(--accent-cyan); border-color: rgba(30,111,255,0.3); }
        .primary-book   {
          background: linear-gradient(135deg, #1E6FFF, #00C2FF);
          color: #fff;
          border: none;
          box-shadow: 0 4px 14px rgba(30,111,255,0.45);
        }
        .dock-btn-primary .dock-label { color: var(--accent-cyan); }
        @media (max-width: 900px) {
          .mobile-bottom-dock { display: block; }
        }
      `}</style>
    </div>
  );
}
