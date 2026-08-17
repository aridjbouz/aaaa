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
import { useLanguage } from '../context/LanguageContext';

export default function PackageCalculator({ onSelectPackage }) {
  const [selectedTier, setSelectedTier] = useState('cinematic');
  const [selectedAddons, setSelectedAddons] = useState({
    album: false,
    sibling: false,
    rush: false,
    rawFootage: false
  });
  const { t } = useLanguage();

  const packages = [
    {
      id: 'miracle',
      name: t('pkg_miracle_name'),
      subtitle: t('pkg_miracle_sub'),
      basePrice: 450,
      badge: t('pkg_miracle_badge'),
      badgeClass: 'badge-sage',
      duration: t('pkg_miracle_duration'),
      photos: t('pkg_miracle_photos'),
      video: t('pkg_miracle_video'),
      features: [
        t('pkg_miracle_f1'),
        t('pkg_miracle_f2'),
        t('pkg_miracle_f3'),
        t('pkg_miracle_f4'),
        t('pkg_miracle_f5')
      ]
    },
    {
      id: 'cinematic',
      name: t('pkg_cinematic_name'),
      subtitle: t('pkg_cinematic_sub'),
      basePrice: 750,
      badge: t('pkg_cinematic_badge'),
      badgeClass: 'badge-gold',
      isPopular: true,
      duration: t('pkg_cinematic_duration'),
      photos: t('pkg_cinematic_photos'),
      video: t('pkg_cinematic_video'),
      features: [
        t('pkg_cinematic_f1'),
        t('pkg_cinematic_f2'),
        t('pkg_cinematic_f3'),
        t('pkg_cinematic_f4'),
        t('pkg_cinematic_f5'),
        t('pkg_cinematic_f6')
      ]
    },
    {
      id: 'royal',
      name: t('pkg_royal_name'),
      subtitle: t('pkg_royal_sub'),
      basePrice: 1250,
      badge: t('pkg_royal_badge'),
      badgeClass: 'badge-rose',
      duration: t('pkg_royal_duration'),
      photos: t('pkg_royal_photos'),
      video: t('pkg_royal_video'),
      features: [
        t('pkg_royal_f1'),
        t('pkg_royal_f2'),
        t('pkg_royal_f3'),
        t('pkg_royal_f4'),
        t('pkg_royal_f5'),
        t('pkg_royal_f6')
      ]
    }
  ];

  const addonsList = [
    { id: 'album', name: t('pkg_addon_album'), price: 180, icon: Gift },
    { id: 'sibling', name: t('pkg_addon_sibling'), price: 120, icon: Film },
    { id: 'rush', name: t('pkg_addon_rush'), price: 95, icon: Clock },
    { id: 'rawFootage', name: t('pkg_addon_raw'), price: 150, icon: Layers },
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
            <span>{t('pkg_badge')}</span>
          </div>
          <h2>{t('pkg_title')}</h2>
          <p>{t('pkg_sub')}</p>
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
                    <span className="price-period">{t('pkg_per_session')}</span>
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
                  <span>{isSelected ? t('pkg_reserve') : t('pkg_select')}</span>
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
              <h4>{t('pkg_addons_title')}</h4>
            </div>
            <span className="calc-tip">{t('pkg_addons_tip')}</span>
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
              <span className="summary-label">{t('pkg_selected_collection')}</span>
              <strong className="summary-value">{currentPackage.name} (${currentPackage.basePrice})</strong>
              {addonsTotal > 0 && (
                <span className="summary-addons"> + {Object.values(selectedAddons).filter(Boolean).length} {t('pkg_addons_count')} (${addonsTotal})</span>
              )}
            </div>

            <div className="summary-action-group">
              <div className="total-display">
                <span className="total-label">{t('pkg_total')}</span>
                <span className="total-amount">${totalPrice}</span>
              </div>
              <button 
                onClick={() => onSelectPackage(currentPackage.name, totalPrice)}
                className="btn btn-primary"
              >
                <Calendar size={16} />
                <span>{t('pkg_book_collection')} (${totalPrice})</span>
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
      `}</style>
    </section>
  );
}
