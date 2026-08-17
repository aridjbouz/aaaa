import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'When is the ideal time to book and film a newborn shooting session?',
      a: 'The golden window for newborn photography and cinematic video is between 5 to 14 days after birth. During this sweet period, babies are very sleepy and naturally curl into peaceful womb-like poses. We recommend reserving your session during your second or third trimester based on your estimated due date; we will adjust the exact shoot date once baby arrives!'
    },
    {
      q: 'What safety precautions and sanitization standards are followed in the studio?',
      a: 'Baby safety is our highest pledge. Our studio space is heated to a comfortable 25°C (77°F) to ensure baby remains cozy and warm. All swaddles, organic blankets, and handcrafted wooden props are sanitized before every single session using hospital-grade UV sterilization and non-toxic pediatric detergents. Our videographers and photographers are certified newborn safety specialists.'
    },
    {
      q: 'Do parents and siblings participate in the shoot and video film?',
      a: 'Absolutely! We love filming and photographing the emotional bond between parents, older siblings, and the new baby. Sibling and family portraits are included in our Cinematic Milestone and Royal Heirloom collections with no extra hidden charge.'
    },
    {
      q: 'What do parents need to prepare or bring to the studio session?',
      a: 'You only need to bring baby essentials: extra milk or formula, diapers, wipes, and a soothing pacifier. We provide everything else — hundreds of couture swaddles, headbands, bonnets, handcrafted props, neutral parent gowns, and cozy lounge snacks in our private nursery suite.'
    },
    {
      q: 'When and how will we receive our 4K video reel and photo gallery?',
      a: 'You will receive your 4K teaser video reel within 48 to 72 hours so you can share the joyous arrival with loved ones immediately! Your complete collection of masterfully color-graded 4K films and retouched heirloom images will be ready in your private online gallery within 10 to 14 days.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-blue">
            <HelpCircle size={14} />
            <span>Parent Questions &amp; Answers</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before stepping into our warm, baby-safe cinema studio.</p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggle(idx)}
              >
                <div className="faq-question-row">
                  <div className="faq-q-text">
                    <span className="faq-number">0{idx + 1}</span>
                    <h3>{faq.q}</h3>
                  </div>
                  <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <div className="faq-answer-wrap">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 80px 0;
          background: var(--bg-main);
        }
        .faq-accordion-list {
          max-width: 840px;
          margin: 0 auto;
          display: flex; flex-direction: column; gap: 14px;
        }
        .faq-item {
          padding: 22px 26px;
          cursor: pointer;
          border: 1px solid rgba(30,111,255,0.15);
          border-radius: 18px;
          transition: var(--transition-smooth);
          background: rgba(13,31,60,0.5);
        }
        .faq-item:hover { border-color: rgba(30,111,255,0.3); }
        .faq-item.open {
          background: rgba(13,31,60,0.9);
          border-color: var(--primary-blue);
          box-shadow: 0 0 20px rgba(30,111,255,0.12), var(--shadow-md);
        }
        .faq-question-row {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
        }
        .faq-q-text { display: flex; align-items: center; gap: 14px; }
        .faq-number {
          font-family: var(--font-serif);
          font-size: 1rem; font-weight: 700;
          color: var(--primary-blue);
          min-width: 28px;
        }
        .faq-q-text h3 {
          font-family: var(--font-sans);
          font-size: 1rem; font-weight: 600;
          color: #FFFFFF; line-height: 1.4;
        }
        .faq-chevron {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(30,111,255,0.1);
          border: 1px solid rgba(30,111,255,0.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .faq-chevron.rotated {
          transform: rotate(180deg);
          background: rgba(30,111,255,0.25);
          color: var(--accent-cyan);
        }
        .faq-answer-wrap {
          margin-top: 14px; padding-top: 14px;
          border-top: 1px solid rgba(30,111,255,0.1);
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(-4px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .faq-answer-wrap p { font-size: 0.93rem; line-height: 1.7; color: var(--text-muted); }
        @media (max-width: 768px) {
          .faq-item { padding: 16px 18px; }
          .faq-q-text h3 { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
}
