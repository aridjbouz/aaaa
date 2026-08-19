import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Film, 
  Camera, 
  Clock, 
  Gift, 
  Calendar,
  Layers,
  Award
} from 'lucide-react';

export default function PackageCalculator({ onSelectPackage }) {
  const [selectedTier, setSelectedTier] = useState('cinematic');
  const [selectedAddons, setSelectedAddons] = useState({
    album: false,
    sibling: false,
    rush: false,
    rawFootage: false
  });

  const packages = [
    {
      id: 'miracle',
      name: 'The Little Miracle',
      subtitle: 'Essential Fine-Art Photo & Reel',
      basePrice: 450,
      badge: 'Starter Choice',
      badgeClass: 'badge-sage',
      duration: '2 Hours Session',
      photos: '20 High-Res Edited Photos',
      video: '60-Sec 4K Social Video Reel',
      setups: '3 Couture Baby Setups',
      features: [
        'Full access to sanitized baby wardrobe & props',
        '20 High-resolution retouched digital images',
        '60-second 4K cinematic Instagram/TikTok reel',
        'Gentle temperature-controlled studio environment',
        'Private online download gallery with printing rights'
      ]
    },
    {
      id: 'cinematic',
      name: 'Cinematic Milestone',
      subtitle: 'Our Signature Photo & 4K Film Duo',
      basePrice: 750,
      badge: '★ Most Popular & Loved',
      badgeClass: 'badge-gold',
      isPopular: true,
      duration: '3.5 Hours Relaxed Session',
      photos: '40 High-Res Edited Photos',
      video: '4K Cinematic Film (2-3 min) + 60s Reel',
      setups: '5 Styled Baby & Family Setups',
      features: [
        'Signature 4K Master Cinema Film (with custom score)',
        '40 Masterfully color-graded heirloom portraits',
        'Parents & sibling portraits included at no extra fee',
        '5 Curated baby setups (wooden props, clouds, nests)',
        'Sneak peek 4K reel delivered within 48 hours',
        'High-resolution print release + mobile app gallery'
      ]
    },
    {
      id: 'royal',
      name: 'The Royal Heirloom',
      subtitle: 'Complete Archival Cinema & Keepsake',
      basePrice: 1250,
      badge: 'Ultimate Luxury',
      badgeClass: 'badge-rose',
      duration: 'Unlimited Studio Time',
      photos: '60+ Fine-Art Heirloom Photos',
      video: 'Full 5-Min 4K Documentary + 2 Reels',
      setups: 'Unlimited Setups & Outfit Changes',
      features: [
        '5-Minute 4K Mini-Documentary of your baby’s story',
        'Bespoke 10x10 Handcrafted Italian Linen Photo Album',
        'All 60+ fully retouched archival quality images',
        'Full family, siblings, and grandparents coverage',
        'Expedited 48-hour delivery on all video deliverables',
        'Custom engraved wooden USB keepsake box & print set'
      ]
    }
  ];

  const addonsList = [
    { id: 'album', name: 'Handcrafted Velvet Linen Photo Album (10x10)', price: 180, icon: Gift },
    { id: 'sibling', name: 'Grandparents & Sibling Milestone Film Segment', price: 120, icon: Film },
    { id: 'rush', name: 'Expedited 48-Hour Delivery Guarantee', price: 95, icon: Clock },
    { id: 'rawFootage', name: 'All Uncut Raw 4K Video Clips on SSD', price: 150, icon: Layers },
  ];

  const toggleAddon = (id) => {
    setSelectedAddons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentPackage = packages.find(p => p.id === selectedTier) || packages[1];
  
  const addonsTotal = addonsList.reduce((acc, curr) => {
    return selectedAddons[curr.id] ? acc + curr.price : acc;
  }, 0);

  const totalPrice = currentPackage.basePrice + addonsTotal;

  return (
    <section className="packages-section" id="packages">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <Award size={14} />
            <span>Curated Session Collections</span>
          </div>
          <h2>Invest in Memories That Never Fade</h2>
          <p>
            Transparent, luxury packages tailored for newborn and milestone sessions with cinema-grade video storytelling.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="packages-grid">
          {packages.map((pkg) => {
            const isSelected = selectedTier === pkg.id;
            return (
              <div 
                key={pkg.id}
                onClick={() => setSelectedTier(pkg.id)}
                className={`package-card glass-card ${isSelected ? 'selected' : ''} ${pkg.isPopular ? 'popular-glow' : ''}`}
              >
                {pkg.badge && (
                  <div className={`package-top-badge ${pkg.badgeClass}`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="pkg-header">
                  <h3 className="pkg-name">{pkg.name}</h3>
                  <p className="pkg-sub">{pkg.subtitle}</p>
                  <div className="pkg-price-row">
                    <span className="price-curr">$</span>
                    <span className="price-num">{pkg.basePrice}</span>
                    <span className="price-period">/ session</span>
                  </div>
                </div>

                <div className="pkg-stats-strip">
                  <div className="pkg-stat-item">
                    <Clock size={14} className="stat-icon" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="pkg-stat-item">
                    <Camera size={14} className="stat-icon" />
                    <span>{pkg.photos}</span>
                  </div>
                  <div className="pkg-stat-item">
                    <Film size={14} className="stat-icon" />
                    <span>{pkg.video}</span>
                  </div>
                </div>

                <div className="pkg-features-list">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="pkg-feature-row">
                      <div className="check-bubble">
                        <Check size={13} color="#FFFFFF" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTier(pkg.id);
                    onSelectPackage(pkg.name, totalPrice);
                  }}
                  className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'} w-full pkg-select-btn`}
                >
                  <Calendar size={15} />
                  <span>{isSelected ? 'Reserve This Package' : 'Select Package'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Add-Ons & Total Calculator Banner */}
        <div className="calculator-box glass-card">
          <div className="calc-header">
            <div className="calc-title-group">
              <Sparkles className="calc-sparkle" size={20} />
              <h4>Custom Session Add-Ons</h4>
            </div>
            <span className="calc-tip">Enhance your collection with luxury physical heirlooms and fast delivery</span>
          </div>

          <div className="addons-grid">
            {addonsList.map((addon) => {
              const isChecked = selectedAddons[addon.id];
              const Icon = addon.icon;
              return (
                <div 
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`addon-chip ${isChecked ? 'active' : ''}`}
                >
                  <div className="addon-check-box">
                    {isChecked && <Check size={13} color="#FFFFFF" />}
                  </div>
                  <Icon size={16} className="addon-icon" />
                  <span className="addon-name">{addon.name}</span>
                  <span className="addon-price">+${addon.price}</span>
                </div>
              );
            })}
          </div>

          {/* Dynamic Summary Bar */}
          <div className="calc-summary-bar">
            <div className="summary-details">
              <span className="summary-label">Selected Collection:</span>
              <strong className="summary-value">{currentPackage.name} (${currentPackage.basePrice})</strong>
              {addonsTotal > 0 && (
                <span className="summary-addons"> + {Object.values(selectedAddons).filter(Boolean).length} Add-on(s) (${addonsTotal})</span>
              )}
            </div>

            <div className="summary-action-group">
              <div className="total-display">
                <span className="total-label">Total Estimated:</span>
                <span className="total-amount">${totalPrice}</span>
              </div>
              <button 
                onClick={() => onSelectPackage(currentPackage.name, totalPrice)}
                className="btn btn-primary"
              >
                <Calendar size={16} />
                <span>Book This Collection (${totalPrice})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .packages-section {
          padding: 80px 0;
          position: relative;
          background: linear-gradient(180deg, #F5EFE8 0%, var(--bg-main) 100%);
        }

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 50px;
          align-items: stretch;
        }

        .package-card {
          padding: 36px 28px;
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .package-card.selected {
          border-color: var(--primary-gold);
          box-shadow: 0 12px 35px rgba(197, 160, 89, 0.28);
          background: #FFFFFF;
        }

        .package-card.popular-glow {
          box-shadow: 0 16px 40px rgba(197, 160, 89, 0.2);
        }

        .package-top-badge {
          position: absolute;
          top: 14px;
          right: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .pkg-name {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }

        .pkg-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 18px;
        }

        .pkg-price-row {
          display: flex;
          align-items: baseline;
          margin-bottom: 24px;
        }

        .price-curr {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-gold-hover);
        }

        .price-num {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1;
        }

        .price-period {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-left: 6px;
        }

        .pkg-stats-strip {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 14px;
          background: var(--bg-card-subtle);
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .pkg-stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .stat-icon {
          color: var(--primary-gold);
        }

        .pkg-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
          flex: 1;
        }

        .pkg-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          line-height: 1.45;
          color: var(--text-main);
        }

        .check-bubble {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--primary-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pkg-select-btn {
          width: 100%;
        }

        /* Calculator Box */
        .calculator-box {
          padding: 36px;
          border: 1px solid rgba(197, 160, 89, 0.3);
          border-radius: 24px;
        }

        .calc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .calc-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .calc-sparkle {
          color: var(--primary-gold);
        }

        .calc-header h4 {
          font-size: 1.3rem;
        }

        .calc-tip {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .addons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 30px;
        }

        .addon-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 14px;
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .addon-chip:hover {
          border-color: var(--primary-gold);
          background: #FFFFFF;
        }

        .addon-chip.active {
          background: #FFFFFF;
          border-color: var(--primary-gold);
          box-shadow: 0 4px 14px rgba(197, 160, 89, 0.2);
        }

        .addon-check-box {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 1.5px solid #C4BCB3;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .addon-chip.active .addon-check-box {
          background: var(--primary-gold);
          border-color: var(--primary-gold);
        }

        .addon-icon {
          color: var(--primary-gold);
        }

        .addon-name {
          flex: 1;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .addon-price {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary-gold-hover);
        }

        .calc-summary-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 20px;
        }

        .summary-details {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .summary-value {
          color: var(--text-main);
          margin-left: 6px;
        }

        .summary-addons {
          color: var(--primary-gold-hover);
          font-weight: 600;
        }

        .summary-action-group {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .total-display {
          text-align: right;
        }

        .total-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-light);
        }

        .total-amount {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-gold-hover);
        }

        @media (max-width: 1024px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }
          .addons-grid {
            grid-template-columns: 1fr;
          }
          .calc-summary-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .summary-action-group {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .packages-section { padding: 40px 0; }
          .package-card { padding: 24px 16px; }
          .calculator-box { padding: 20px 16px; }
          .price-num { font-size: 2.2rem; }
          .summary-action-group { flex-direction: column; gap: 16px; align-items: stretch; }
          .total-display { text-align: left; }
        }
      `}</style>
    </section>
  );
}
