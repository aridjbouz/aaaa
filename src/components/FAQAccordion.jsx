import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  const faqs = [
    {
      q: t('faq_q1'),
      a: t('faq_a1')
    },
    {
      q: t('faq_q2'),
      a: t('faq_a2')
    },
    {
      q: t('faq_q3'),
      a: t('faq_a3')
    },
    {
      q: t('faq_q4'),
      a: t('faq_a4')
    },
    {
      q: t('faq_q5'),
      a: t('faq_a5')
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-sage">
            <HelpCircle size={14} />
            <span>{t('faq_badge')}</span>
          </div>
          <h2>{t('faq_title')}</h2>
          <p>{t('faq_sub')}</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-card ${isOpen ? 'is-open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <div className="faq-icon">
                    <ChevronDown size={20} className={isOpen ? 'rotated' : ''} />
                  </div>
                </div>
                
                <div 
                  className="faq-answer-wrapper"
                  style={{ height: isOpen ? 'auto' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 80px 0;
          background: var(--bg-main);
          position: relative;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          cursor: pointer;
          padding: 24px 28px;
          border-radius: 16px;
          background: rgba(13, 31, 60, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(30, 111, 255, 0.4);
          background: rgba(13, 31, 60, 0.6);
        }

        .faq-item.is-open {
          border-color: var(--accent-cyan);
          background: rgba(13, 31, 60, 0.8);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .faq-question h3 {
          font-size: 1.15rem;
          color: #FFFFFF;
          font-weight: 600;
          line-height: 1.4;
          margin: 0;
        }

        .faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
          transition: background 0.3s ease;
        }

        .faq-item:hover .faq-icon {
          background: rgba(30, 111, 255, 0.2);
        }

        .faq-icon svg {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .faq-icon svg.rotated {
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-answer-content {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 16px;
        }

        .faq-answer-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          font-size: 1rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .faq-item {
            padding: 20px;
          }
          .faq-question h3 {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
