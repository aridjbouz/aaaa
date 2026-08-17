import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isMobileView, setIsMobileView] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState(null);

  const handleBookSession = (packageName) => {
    if (packageName) setPreselectedPackage(packageName);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetPreselected = () => setPreselectedPackage(null);

  const renderContent = () => {
    switch (activePage) {
      case 'about':
        return <About onBookSession={handleBookSession} />;
      case 'contact':
        return (
          <Contact
            preselectedPackage={preselectedPackage}
            onResetPreselected={handleResetPreselected}
          />
        );
      case 'home':
      default:
        return (
          <Home
            onNavigate={setActivePage}
            onBookSession={handleBookSession}
          />
        );
    }
  };

  return (
    <LanguageProvider>
      <div className={`app-root ${isMobileView ? 'simulator-active' : ''}`}>
        {isMobileView ? (
          <div className="mobile-frame-mockup">
            <div className="mobile-notch" />
            <Navbar
              activePage={activePage}
              setActivePage={setActivePage}
              isMobileView={isMobileView}
              setIsMobileView={setIsMobileView}
            />
            <main className="main-content">{renderContent()}</main>
            <Footer onNavigate={setActivePage} />
            <MobileBottomBar
              onNavigate={setActivePage}
              onBookSession={handleBookSession}
            />
          </div>
        ) : (
          <div className="desktop-view-wrapper">
            <Navbar
              activePage={activePage}
              setActivePage={setActivePage}
              isMobileView={isMobileView}
              setIsMobileView={setIsMobileView}
            />
            <main className="main-content">{renderContent()}</main>
            {activePage !== 'home' && <Footer onNavigate={setActivePage} />}
            <MobileBottomBar
              onNavigate={setActivePage}
              onBookSession={handleBookSession}
            />
          </div>
        )}
      </div>
    </LanguageProvider>
  );
}
