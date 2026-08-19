import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  Film, 
  Clock, 
  Sliders, 
  Camera,
  CheckCircle2,
  Share2,
  Calendar
} from 'lucide-react';
import studioImages from '../assets/images';

export default function VideoReelPlayer({ onBookSession }) {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [progress, setProgress] = useState(28);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const reels = [
    {
      id: 'newborn-slumber',
      title: 'Newborn Slumber Symphony (4K Cinema)',
      category: 'Newborn Film (5-12 Days)',
      duration: '01:34',
      image: studioImages.heroBaby,
      description: 'Slow-motion 60fps cinematic film capturing the peaceful dreams, tiny yawns, and rhythmic breathing of baby Liam on his 8th day of life.',
      gear: 'Sony FX3 Cinema • 50mm f/1.2 GM • Golden Honey LUT',
      stats: '4K ProRes 422 HQ • Master Sound Design'
    },
    {
      id: 'sitter-giggles',
      title: 'The Little Explorer - Sitter Milestone',
      category: 'Milestone Film (6-9 Months)',
      duration: '01:15',
      image: studioImages.sitterMilestone,
      description: 'Joyful cinematic highlight capturing sparkling eyes, adorable belly laughs, and curious first grasps of wooden handcrafted toys.',
      gear: 'Sony A7S III • 35mm f/1.4 GM • Warm Ivory LUT',
      stats: '4K 120fps Slow-Mo • Certified Baby-Safe Studio'
    },
    {
      id: 'cake-smash-grand',
      title: 'First Birthday Cake Smash Jubilee',
      category: '1st Birthday Film (12 Months)',
      duration: '02:10',
      image: studioImages.cakeSmash,
      description: 'An explosion of organic cream cake, giggles, pastel confetti, and happy little foot stomps captured in ultra-sharp 4K HDR.',
      gear: 'Sony FX3 Cinema • 24-70mm f/2.8 GM II • Pastel Luxe LUT',
      stats: 'Full Milestone Featurette + 60s Social Reel'
    },
    {
      id: 'family-bond-cinema',
      title: 'The Miracle of Touch - Family Story',
      category: 'Family & Newborn Cinema',
      duration: '02:45',
      image: studioImages.familyBaby,
      description: 'Intimate emotional documentary film capturing the unrepeatable bond between parents and their newborn miracle in soft backlight.',
      gear: 'Sony FX3 • Anamorphic 50mm • Timeless Grain Grade',
      stats: 'Heirloom 4K Master Video & Archival Audio'
    }
  ];

  const currentReel = reels[activeReelIndex];

  // Auto increment simulated playback progress
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="video-showcase-section" id="cinema-reels">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <Film size={14} />
            <span>Cinematic Baby Videography</span>
          </div>
          <h2>Living Memories in 4K Cinema Motion</h2>
          <p>
            Photographs freeze a moment, but our signature 4K baby films capture the breath, the gentle sighs, and the unrepeatable first days of your baby’s journey.
          </p>
        </div>

        {/* Video Player Main Arena */}
        <div className="video-player-container glass-card">
          {/* Top Metadata Bar */}
          <div className="player-top-bar">
            <div className="player-status">
              <span className="live-rec-dot" />
              <span className="rec-text">4K CINEMA MASTER REEL</span>
            </div>
            <div className="player-badge-group">
              <span className="badge badge-dark">60 FPS UHD</span>
              <span className="badge badge-gold">COLOR GRADED</span>
            </div>
          </div>

          {/* Video Visual Viewport */}
          <div className="player-viewport">
            {/* Background Simulated Cinema Canvas with Ken Burns */}
            <div 
              className={`cinema-canvas ${isPlaying ? 'canvas-playing' : ''}`}
              style={{ backgroundImage: `url(${currentReel.image})` }}
            >
              <div className="cinema-overlay-gradient" />
              <div className="film-grain" />
            </div>

            {/* Center Big Play / Pause Overlay Button */}
            <button 
              className="center-play-button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? (
                <div className="pause-icon-wrapper">
                  <Pause size={28} color="#FFFFFF" />
                </div>
              ) : (
                <div className="play-icon-wrapper">
                  <Play size={28} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '4px' }} />
                </div>
              )}
            </button>

            {/* Ambience Audio Wave Visualizer Simulation */}
            <div className="audio-wave-pill">
              <button 
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className="audio-toggle-btn"
                title={isAudioMuted ? 'Unmute Ambient Lullaby' : 'Mute Audio'}
              >
                {isAudioMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <div className="wave-bars">
                {[40, 70, 30, 90, 50, 80, 45, 65, 85, 35].map((h, i) => (
                  <span 
                    key={i} 
                    className={`wave-bar ${isPlaying && !isAudioMuted ? 'active' : ''}`}
                    style={{ height: isPlaying && !isAudioMuted ? `${h}%` : '20%' }}
                  />
                ))}
              </div>
              <span className="audio-label">{isAudioMuted ? 'Ambience Muted' : 'Lullaby Sound Master'}</span>
            </div>

            {/* Video Lower Overlay Information */}
            <div className="player-bottom-overlay">
              <div className="video-meta-details">
                <span className="reel-category-pill">{currentReel.category}</span>
                <h3 className="reel-title">{currentReel.title}</h3>
                <p className="reel-description">{currentReel.description}</p>
                <div className="reel-gear-info">
                  <Camera size={14} className="gear-icon" />
                  <span>{currentReel.gear}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="player-cta-wrap">
                <button 
                  onClick={() => onBookSession(currentReel.title)}
                  className="btn btn-primary"
                >
                  <Calendar size={16} />
                  <span>Book This Video Style</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Scrub Bar & Controls */}
          <div className="player-controls-bar">
            <div className="scrubber-row">
              <span className="time-code">
                00:{Math.floor((progress / 100) * 94).toString().padStart(2, '0')}
              </span>
              <div 
                className="progress-track"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newProg = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                  setProgress(newProg);
                }}
              >
                <div className="progress-fill" style={{ width: `${progress}%` }}>
                  <div className="progress-handle" />
                </div>
              </div>
              <span className="time-code">{currentReel.duration}</span>
            </div>

            <div className="controls-bottom-row">
              <div className="reel-quick-switcher">
                {reels.map((reel, idx) => (
                  <button
                    key={reel.id}
                    onClick={() => {
                      setActiveReelIndex(idx);
                      setProgress(0);
                      setIsPlaying(true);
                    }}
                    className={`reel-tab-btn ${idx === activeReelIndex ? 'active' : ''}`}
                  >
                    <span className="tab-number">0{idx + 1}</span>
                    <span className="tab-name">{reel.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights for Baby Video Shooting */}
        <div className="video-features-grid">
          <div className="feature-item-card glass-card">
            <div className="feature-icon-circle">
              <Sparkles size={20} />
            </div>
            <h4>True 4K 60fps Cinema</h4>
            <p>Shot with cinema-grade sensors capturing fine eyelash flutter and subtle smiles in ultra-high resolution.</p>
          </div>

          <div className="feature-item-card glass-card">
            <div className="feature-icon-circle">
              <Sliders size={20} />
            </div>
            <h4>Custom Color Grading</h4>
            <p>Every clip is hand-graded in our signature soft warm golden tones, ensuring skin tones look pristine and soft.</p>
          </div>

          <div className="feature-item-card glass-card">
            <div className="feature-icon-circle">
              <Film size={20} />
            </div>
            <h4>Social Reel + Full Film</h4>
            <p>Receive both an Instagram/TikTok ready 9:16 vertical teaser and a 16:9 full archival family documentary.</p>
          </div>

          <div className="feature-item-card glass-card">
            <div className="feature-icon-circle">
              <CheckCircle2 size={20} />
            </div>
            <h4>Baby-Safe Lighting</h4>
            <p>100% continuous diffused warm softboxes with zero harsh strobes or sudden flashes for delicate baby eyes.</p>
          </div>
        </div>
      </div>

      <style>{`
        .video-showcase-section {
          padding: 80px 0;
          position: relative;
          background: linear-gradient(180deg, var(--bg-main) 0%, #F5EFE8 100%);
        }

        .video-player-container {
          background: #151311;
          border: 1px solid rgba(197, 160, 89, 0.3);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          margin-bottom: 50px;
        }

        .player-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: #1E1B18;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .player-status {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .live-rec-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #E53E3E;
          box-shadow: 0 0 10px #E53E3E;
          animation: pulseGlow 1.5s infinite;
        }

        .rec-text {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #E2DDD6;
        }

        .player-badge-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .player-viewport {
          position: relative;
          height: 520px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cinema-canvas {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 8s ease-out;
        }

        .cinema-canvas.canvas-playing {
          transform: scale(1.06);
        }

        .cinema-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(15,13,11,0.92) 100%);
        }

        .film-grain {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(#FFF 1px, transparent 0);
          background-size: 4px 4px;
          pointer-events: none;
        }

        .center-play-button {
          position: relative;
          z-index: 10;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(197, 160, 89, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(197, 160, 89, 0.6);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .center-play-button:hover {
          transform: scale(1.12);
          background: var(--primary-gold);
          box-shadow: 0 0 50px rgba(197, 160, 89, 0.9);
        }

        .audio-wave-pill {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          background: rgba(20, 18, 16, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
        }

        .audio-toggle-btn {
          color: var(--primary-gold);
          display: flex;
          align-items: center;
        }

        .wave-bars {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 18px;
        }

        .wave-bar {
          width: 3px;
          background: var(--primary-gold);
          border-radius: 2px;
          transition: height 0.2s ease;
        }

        .wave-bar.active {
          animation: waveJump 0.6s ease-in-out infinite alternate;
        }

        @keyframes waveJump {
          from { height: 20%; }
          to { height: 100%; }
        }

        .audio-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #DCD6CD;
        }

        .player-bottom-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 30px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .video-meta-details {
          max-width: 650px;
        }

        .reel-category-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-gold);
          margin-bottom: 6px;
        }

        .reel-title {
          color: #FFFFFF;
          font-size: 1.8rem;
          margin-bottom: 8px;
        }

        .reel-description {
          color: #D2CBC2;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .reel-gear-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--primary-gold-light);
        }

        .gear-icon {
          color: var(--primary-gold);
        }

        .player-controls-bar {
          background: #181513;
          padding: 20px 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .scrubber-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .time-code {
          font-family: monospace;
          font-size: 0.85rem;
          color: #9C948A;
          min-width: 44px;
        }

        .progress-track {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          cursor: pointer;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-gold) 0%, #E8D2A0 100%);
          border-radius: 4px;
          position: relative;
        }

        .progress-handle {
          position: absolute;
          right: -6px;
          top: -4px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 8px rgba(197, 160, 89, 0.8);
        }

        .reel-quick-switcher {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .reel-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #A8A095;
          font-size: 0.82rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .reel-tab-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
        }

        .reel-tab-btn.active {
          background: var(--primary-gold);
          color: #FFFFFF;
          border-color: var(--primary-gold);
          box-shadow: 0 4px 14px rgba(197, 160, 89, 0.4);
        }

        .tab-number {
          font-size: 0.7rem;
          font-weight: 800;
          opacity: 0.8;
        }

        /* 4 Features Grid */
        .video-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .feature-item-card {
          padding: 24px;
          text-align: left;
        }

        .feature-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--primary-gold-light);
          color: var(--primary-gold-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .feature-item-card h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .feature-item-card p {
          font-size: 0.88rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .video-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .player-viewport {
            height: 420px;
          }
          .player-bottom-overlay {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }
          .reel-title {
            font-size: 1.3rem;
          }
          .reel-description {
            font-size: 0.85rem;
          }
          .player-cta-wrap {
            width: 100%;
          }
          .player-cta-wrap .btn {
            width: 100%;
          }
          .video-features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .player-viewport { height: 360px; }
          .player-top-bar { padding: 12px; flex-direction: column; align-items: flex-start; gap: 8px; }
          .player-controls-bar { padding: 16px; }
          .center-play-button { width: 56px; height: 56px; }
          .audio-wave-pill { top: 12px; right: 12px; padding: 6px 10px; }
        }
      `}</style>
    </section>
  );
}
