import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Heart,
  Sparkles,
  Film
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t('test_t1_name'),
      baby: t('test_t1_baby'),
      rating: 5,
      story: t('test_t1_story'),
      package: t('test_t1_pkg'),
      tag: t('test_t1_tag')
    },
    {
      id: 2,
      name: t('test_t2_name'),
      baby: t('test_t2_baby'),
      rating: 5,
      story: t('test_t2_story'),
      package: t('test_t2_pkg'),
      tag: t('test_t2_tag')
    },
    {
      id: 3,
      name: t('test_t3_name'),
      baby: t('test_t3_baby'),
      rating: 5,
      story: t('test_t3_story'),
      package: t('test_t3_pkg'),
      tag: t('test_t3_tag')
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-blue">
            <Heart size={14} />
            <span>{t('test_badge')}</span>
          </div>
          <h2>{t('test_title')}</h2>
          <p>{t('test_sub')}</p>
        </div>

        <div className="testimonial-card-wrap glass-card">
          <div className="quote-icon-bubble">
            <Quote size={28} color="var(--accent-cyan)" />
          </div>

          <div className="testimonial-body">
            <div className="stars-row">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#1E6FFF" color="#1E6FFF" />
              ))}
            </div>

            <p className="testimonial-quote">"{current.story}"</p>

            <div className="testimonial-author-row">
              <div className="author-meta">
                <h4 className="author-name">{current.name}</h4>
                <span className="baby-meta">{current.baby} • <span className="text-gold">{current.package}</span></span>
              </div>
              <div className="badge badge-sage">
                <Sparkles size={12} />
                <span>{current.tag}</span>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <button onClick={handlePrev} className="slider-btn" aria-label="Previous Review">
              <ChevronLeft size={20} />
            </button>
            <span className="slider-dots">
              {testimonials.map((_, idx) => (
                <span 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                />
              ))}
            </span>
            <button onClick={handleNext} className="slider-btn" aria-label="Next Review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 80px 0;
          position: relative;
          background: var(--bg-main);
        }
        .testimonial-card-wrap {
          max-width: 860px;
          margin: 0 auto; padding: 48px;
          position: relative;
          border: 1px solid rgba(30,111,255,0.2);
          text-align: center;
          background: rgba(13,31,60,0.7);
        }
        .quote-icon-bubble {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(30,111,255,0.15);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 24px auto;
          border: 1px solid rgba(30,111,255,0.25);
        }
        .stars-row {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; margin-bottom: 20px;
        }
        .testimonial-quote {
          font-family: var(--font-serif);
          font-size: 1.2rem; line-height: 1.75;
          color: #FFFFFF; font-style: italic; margin-bottom: 30px;
        }
        .testimonial-author-row {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 22px;
          border-top: 1px solid rgba(30,111,255,0.12);
          flex-wrap: wrap; gap: 14px; text-align: left;
        }
        .author-name { font-size: 1.05rem; margin-bottom: 4px; color: #fff; }
        .baby-meta { font-size: 0.82rem; color: var(--text-muted); }
        .text-gold { color: var(--accent-cyan); }
        .slider-controls {
          display: flex; align-items: center; justify-content: center;
          gap: 20px; margin-top: 30px;
        }
        .slider-btn {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(13,31,60,0.9);
          border: 1px solid rgba(30,111,255,0.2);
          color: var(--text-muted);
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition-smooth);
        }
        .slider-btn:hover { background: var(--primary-blue); color: #fff; border-color: var(--primary-blue); }
        .slider-dots { display: flex; gap: 8px; }
        .dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(30,111,255,0.2);
          cursor: pointer; transition: var(--transition-smooth);
        }
        .dot.active { width: 24px; border-radius: 4px; background: var(--primary-blue); }
        @media (max-width: 768px) {
          .testimonial-card-wrap { padding: 28px 18px; }
          .testimonial-quote { font-size: 1rem; }
          .testimonial-author-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
