import React, { useState } from 'react';
import { 
  Camera, 
  Eye, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Heart,
  Calendar,
  Layers,
  ZoomIn
} from 'lucide-react';
import studioImages from '../assets/images';

export default function PhotoGallery({ onBookSession }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState({});

  const categories = [
    { id: 'all', label: 'All Curations' },
    { id: 'newborn', label: 'Newborn Dreams (5-14d)' },
    { id: 'milestone', label: 'Milestone Sitters (6-9m)' },
    { id: 'cakesmash', label: '1st Birthday Smash' },
    { id: 'family', label: 'Family & Newborn' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Moonlit Slumber & Fairy Glow',
      category: 'newborn',
      age: 'Day 7 Newborn',
      image: studioImages.heroBaby,
      theme: 'Rustic Crescent Moon & Angora Knit',
      description: 'Gently swaddled in natural organic cashmere surrounded by ambient warm fairy lights.',
      colorPalette: ['#FAF8F5', '#C5A059', '#D9C5B2']
    },
    {
      id: 2,
      title: 'The Little Explorer Sitter Session',
      category: 'milestone',
      age: '7 Months Sitter',
      image: studioImages.sitterMilestone,
      theme: 'Natural Sheepskin & Wooden Keepsakes',
      description: 'Capturing sparkling curious eyes, gentle giggles, and sitting milestones in neutral warm tones.',
      colorPalette: ['#EAE4DC', '#8F9E8B', '#B49363']
    },
    {
      id: 'cake-1',
      idNum: 3,
      title: 'Boho First Birthday Smash',
      category: 'cakesmash',
      age: '12 Months Toddler',
      image: studioImages.cakeSmash,
      theme: 'Organic Buttercream & Gold Balloon Arch',
      description: 'Joyful first taste of birthday cake surrounded by hand-tied pampas grass and gold accents.',
      colorPalette: ['#F7F3EE', '#D4AF37', '#E8D3CB']
    },
    {
      id: 'fam-1',
      idNum: 4,
      title: 'The Purest Embrace',
      category: 'family',
      age: 'Day 10 Newborn + Parents',
      image: studioImages.familyBaby,
      theme: 'Intimate Backlit Studio Portrait',
      description: 'Timeless heirloom portrait capturing the warmth, devotion, and gentle kisses of mom and dad.',
      colorPalette: ['#1C1917', '#EFE6DE', '#C5A059']
    },
    {
      id: 'studio-1',
      idNum: 5,
      title: 'Sanitized Comfort Studio Suite',
      category: 'newborn',
      age: 'Behind the Scenes',
      image: studioImages.studioInterior,
      theme: 'Temperature-Controlled Baby Suite (25°C)',
      description: 'Our certified baby sanctuary featuring organic swaddle banks and nursing relaxation armchairs.',
      colorPalette: ['#FAF8F5', '#6B655E', '#C5A059']
    },
    {
      id: 'reel-1',
      idNum: 6,
      title: 'Angelic Whispers Macro Film',
      category: 'newborn',
      age: 'Day 9 Newborn',
      image: studioImages.newbornReel,
      theme: 'Close-Up Eyelashes & Fleece Cocoon',
      description: 'Fine-art macro capture revealing the exquisite fragility and serenity of baby Liam.',
      colorPalette: ['#F5EFE9', '#D9C5B2', '#8F9E8B']
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedPhotos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="photo-gallery-section" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <Camera size={14} />
            <span>Masterpiece Portfolio</span>
          </div>
          <h2>Timeless Heirloom Baby Portraits</h2>
          <p>
            Every frame at Studio Mission Verse is an artistic celebration of new life, crafted with organic textures, soft continuous lighting, and safety-first posing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.label}</span>
              {activeCategory === cat.id && <Sparkles size={14} className="filter-sparkle" />}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => {
            const isLiked = likedPhotos[item.idNum || item.id];
            return (
              <div 
                key={item.idNum || item.id} 
                className="gallery-card glass-card"
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-image-wrap">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <button 
                      className="zoom-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(item);
                      }}
                      aria-label="Zoom Photo"
                    >
                      <ZoomIn size={18} />
                    </button>
                    <button 
                      className={`like-btn ${isLiked ? 'liked' : ''}`}
                      onClick={(e) => toggleLike(item.idNum || item.id, e)}
                      aria-label="Favorite Photo"
                    >
                      <Heart size={18} fill={isLiked ? '#E53E3E' : 'none'} color={isLiked ? '#E53E3E' : '#FFFFFF'} />
                    </button>
                  </div>
                  <span className="gallery-age-badge">{item.age}</span>
                </div>

                <div className="gallery-card-body">
                  <span className="gallery-theme-tag">{item.theme}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                  
                  <div className="gallery-card-footer">
                    <div className="color-swatches">
                      {item.colorPalette.map((color, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="swatch-dot" 
                          style={{ backgroundColor: color }}
                          title={`Color ${color}`}
                        />
                      ))}
                    </div>
                    <button 
                      className="btn-link-inquire"
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookSession(`Theme: ${item.title}`);
                      }}
                    >
                      Book Style →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox}>
              <X size={24} />
            </button>

            <div className="lightbox-content-split">
              <div className="lightbox-image-side">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="lightbox-full-img"
                />
              </div>

              <div className="lightbox-details-side">
                <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
                  <span>{selectedImage.age}</span>
                </div>
                <h2>{selectedImage.title}</h2>
                <h4 className="lightbox-theme">{selectedImage.theme}</h4>
                <p className="lightbox-desc">{selectedImage.description}</p>

                <div className="lightbox-feature-list">
                  <div className="lightbox-feature-row">
                    <Sparkles size={16} className="text-gold" />
                    <span>Prop Sanitization: UV & Pediatric Organic Clean</span>
                  </div>
                  <div className="lightbox-feature-row">
                    <Layers size={16} className="text-gold" />
                    <span>Includes 4K Video Reel & High-Res Retouched Images</span>
                  </div>
                  <div className="lightbox-feature-row">
                    <Camera size={16} className="text-gold" />
                    <span>Continuous Eye-Safe Soft Lighting System</span>
                  </div>
                </div>

                <div className="lightbox-actions">
                  <button 
                    className="btn btn-primary w-full"
                    onClick={() => {
                      closeLightbox();
                      onBookSession(selectedImage.title);
                    }}
                  >
                    <Calendar size={16} />
                    <span>Reserve Session For This Style</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .photo-gallery-section {
          padding: 80px 0;
          position: relative;
        }

        .gallery-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .filter-pill-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid var(--border-color);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .filter-pill-btn:hover {
          background: #FFFFFF;
          color: var(--primary-gold-hover);
          border-color: var(--primary-gold);
          box-shadow: var(--shadow-sm);
        }

        .filter-pill-btn.active {
          background: var(--primary-gold);
          color: #FFFFFF;
          border-color: var(--primary-gold);
          box-shadow: var(--shadow-gold);
        }

        .filter-sparkle {
          animation: pulseGlow 2s infinite;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .gallery-card {
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          border-radius: 20px;
        }

        .gallery-image-wrap {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: #EAE5DE;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.06);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(20, 18, 16, 0.35);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: opacity 0.3s ease;
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }

        .zoom-btn, .like-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: var(--transition-smooth);
        }

        .zoom-btn:hover, .like-btn:hover {
          transform: scale(1.1);
          background: #FFFFFF;
          color: var(--primary-gold-hover);
        }

        .gallery-age-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(20, 18, 16, 0.75);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .gallery-card-body {
          padding: 22px;
        }

        .gallery-theme-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary-gold-hover);
          display: block;
          margin-bottom: 4px;
        }

        .gallery-item-title {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }

        .gallery-item-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .gallery-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid var(--border-light);
        }

        .color-swatches {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .swatch-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .btn-link-inquire {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-gold-hover);
          transition: var(--transition-smooth);
        }

        .btn-link-inquire:hover {
          color: var(--primary-gold);
          transform: translateX(3px);
        }

        /* Lightbox Modal */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1100;
          background: rgba(15, 13, 11, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-dialog {
          background: var(--bg-card);
          max-width: 960px;
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          position: relative;
          border: 1px solid rgba(197, 160, 89, 0.3);
        }

        .lightbox-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 20;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: var(--transition-smooth);
        }

        .lightbox-close-btn:hover {
          background: var(--primary-gold);
          color: white;
        }

        .lightbox-content-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
        }

        .lightbox-image-side {
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-full-img {
          width: 100%;
          height: 100%;
          max-height: 540px;
          object-fit: cover;
        }

        .lightbox-details-side {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .lightbox-theme {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--primary-gold-hover);
          margin-bottom: 14px;
        }

        .lightbox-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .lightbox-feature-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
          padding: 16px;
          background: var(--bg-card-subtle);
          border-radius: 16px;
        }

        .lightbox-feature-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .text-gold {
          color: var(--primary-gold);
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .lightbox-content-split {
            grid-template-columns: 1fr;
          }
          .lightbox-details-side {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
