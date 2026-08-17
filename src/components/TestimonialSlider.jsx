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

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Elena & Marcus Vance',
      baby: 'Baby Theo (Day 8 Newborn)',
      rating: 5,
      story: 'When we received our 4K video reel, my husband and I both burst into tears of pure happiness. The way Studio Mission Verse captured our baby’s sleepy yawns and tiny fingers with such soft cinematic light is simply unmatched. The studio was so warm, calm, and spotlessly clean.',
      package: 'The Cinematic Milestone Collection',
      tag: 'Verified Newborn Parent'
    },
    {
      id: 2,
      name: 'Sophia & David Chen',
      baby: 'Baby Mia (1st Birthday Cake Smash)',
      rating: 5,
      story: 'We were nervous Mia might cry during the cake smash, but the team had an angelic gentleness with her. The video recap looked like an authentic high-end movie! Our entire family in London and Tokyo watched the 4K link with pure awe. Worth every single penny.',
      package: 'The Royal Heirloom Experience',
      tag: '1st Birthday Milestone'
    },
    {
      id: 3,
      name: 'Amara & Julian Brooks',
      baby: 'Baby Noah (7-Month Sitter)',
      rating: 5,
      story: 'Safety was our number one concern as first-time parents. From the temperature-controlled nursery room to the UV sanitized props, Studio Mission Verse treated Noah like royalty. The photos and video reels are now our family’s greatest treasure.',
      package: 'The Cinematic Milestone Collection',
      tag: 'Milestone Sitter Session'
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
            <span>Parent Love & Praise</span>
          </div>
          <h2>Cherished by Over 800+ Happy Families</h2>
          <p>Read why parents trust Studio Mission Verse to film and photograph their baby's once-in-a-lifetime beginnings.</p>
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
