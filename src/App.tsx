import { useState, useEffect, useRef } from 'react';
import logoImg from './assets/Logo.png';
import previewImg from './assets/Preview.png';
import FeaturesPage from './Features';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import './App.css';


// --- SCROLL REVEAL COMPONENT ---
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.15 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div ref={domRef} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

// --- ANIMATED BACKGROUND COMPONENT ---
const FloatingPixels = () => {
  const [pixels, setPixels] = useState<any[]>([]);

  useEffect(() => {
    const colors = ['#8C9CB6', '#76B4AF', '#E68386', '#EED18C', '#EFBD31'];
    const newPixels = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.floor(Math.random() * 25) + 15}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 6}s`
    }));
    setPixels(newPixels);
  }, []);

  return (
    <div className="floating-pixels-container">
      {pixels.map((p) => (
        <div key={p.id} className="floating-pixel" style={{
          left: p.left, top: p.top, width: p.size, height: p.size,
          backgroundColor: p.color, animationDelay: p.delay, animationDuration: p.duration
        }}
        />
      ))}
    </div>
  );
};

// --- HOME PAGE CONTENT ---
const HomeContent = () => (
  <div>
    <ScrollReveal>
      <main className="hero-section">
        <div className="hero-text-content">
          <h2 className="title">Master 8th Grade Math <br /> Anywhere, Anytime.</h2>
          <p className="description">
            Download the official Gr8 Math Learning Management System mobile app. Access your daily lesson logs, take assessments, and track your progress right from your Android device.
          </p>

          {/* CTA BUTTONS WITH OFFICIAL LOGOS */}
          <div className="cta-buttons">

            {/* ANDROID APK BUTTON */}
            <a href="/Gr8Math.apk" download="Gr8Math_App.apk" className="download-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.2561 13.8533 7.85 12 7.85s-3.5902.4061-5.1367 1.1006L4.841 5.4474a.416.416 0 0 0-.5676-.1521.416.416 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
              </svg>
              ANDROID APK
            </a>

            {/* WEB APP BUTTON */}
            <a href="https://gr8math-webapp.onrender.com" target="_blank" rel="noopener noreferrer" className="web-app-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              OPEN WEB APP
            </a>

          </div>

          <div className="requirements">
            <p style={{ margin: '0 0 4px 0' }}>App Version 1.0 • Target SDK: 35 (Android 15)</p>
            <p style={{ margin: '0 0 4px 0' }}>Minimum SDK: 25 (Android 7.0)</p>
            <p style={{ margin: 0 }}>Last Updated: May 2026</p>
          </div>
        </div>

        <div className="hero-mockup-wrapper">
          <div className="phone-mockup">
            <div className="phone-screen" style={{ padding: 0 }}>
              <img
                src={previewImg}
                alt="Gr8 Math App Preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </main>
    </ScrollReveal>

    <ScrollReveal>
      <section className="features-section">
        <h3 className="section-title">Why use Gr8 Math?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon bg-blue">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h4 className="feature-title">Virtual Blackboard</h4>
            <p className="feature-desc">Draw, calculate, and solve equations in real-time with our interactive digital canvas.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon bg-red">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h4 className="feature-title">Daily Lesson Logs</h4>
            <p className="feature-desc">Stay on track with organized, easy-to-read daily lessons aligned with your curriculum.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon bg-yellow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h4 className="feature-title">Live Assessments</h4>
            <p className="feature-desc">Test your knowledge with built-in quizzes and track your performance instantly.</p>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="contact-section">
        <div className="contact-card">
          <h3 className="section-title">Get in Touch</h3>
          <p className="feature-desc" style={{ marginBottom: '24px' }}>
            Gr8 Math is developed by Color Rush Studios. We are dedicated to making 8th-grade mathematics accessible, engaging, and fun. Need help with the app? Reach out to our team!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A4C8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>main@colorrush.com</span>
            </div>
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A4C8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Color Rush Building, 17th Ave., Fort Bonifacio, Taguig City</span>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'features' | 'privacy' | 'terms'>('home');
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) setShowScroll(true);
      else if (showScroll && window.pageYOffset <= 300) setShowScroll(false);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app-container">
      <FloatingPixels />

      <header className="gr8-header">
        <div className="gr8-header-left">
          <img src={logoImg} alt="Gr8Math Logo" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          <span className="gr8-header-title">Gr8 Math App</span>
        </div>

        <nav className="gr8-nav">
          <button className={`nav-link ${(currentPage === 'home' || currentPage === 'privacy' || currentPage === 'terms') ? 'active' : ''}`} onClick={() => setCurrentPage('home')}>
            Home
          </button>
          <button className={`nav-link ${currentPage === 'features' ? 'active' : ''}`} onClick={() => setCurrentPage('features')}>
            Full Features
          </button>
        </nav>

        <div style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: '240px', zIndex: 0, opacity: 0.95 }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '20px', backgroundColor: '#1E4B95', boxShadow: '-3px 0 6px rgba(0,0,0,0.15)' }}></div>
          <div style={{ position: 'absolute', top: 0, right: '0px', width: '20px', height: '20px', backgroundColor: '#EFBD31' }}></div>
          <div style={{ position: 'absolute', top: '20px', right: 0, width: '140px', height: '20px', backgroundColor: '#1E4B95', boxShadow: '-3px 0 6px rgba(0,0,0,0.15)' }}></div>
          <div style={{ position: 'absolute', top: '20px', right: '60px', width: '20px', height: '20px', backgroundColor: '#EFBD31' }}></div>
          <div style={{ position: 'absolute', top: '40px', right: 0, width: '160px', height: '20px', backgroundColor: '#1E4B95', boxShadow: '-3px 0 6px rgba(0,0,0,0.15)' }}></div>
          <div style={{ position: 'absolute', top: '40px', right: '40px', width: '20px', height: '20px', backgroundColor: '#EFBD31' }}></div>
          <div style={{ position: 'absolute', top: '40px', right: '100px', width: '20px', height: '20px', backgroundColor: '#EFBD31' }}></div>
        </div>
      </header>

      {currentPage === 'home' && <HomeContent />}
      {currentPage === 'features' && <ScrollReveal><FeaturesPage /></ScrollReveal>}
      {currentPage === 'privacy' && <PrivacyPolicy onBack={() => setCurrentPage('home')} />}
      {currentPage === 'terms' && <TermsAndConditions onBack={() => setCurrentPage('home')} />}

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Color Rush Studios. All rights reserved.</p>
          <div className="footer-links">
            <button className="footer-link-btn" onClick={() => setCurrentPage('privacy')}>Privacy Policy</button>
            <span className="separator">|</span>
            <button className="footer-link-btn" onClick={() => setCurrentPage('terms')}>Terms & Conditions</button>
          </div>
        </div>
      </footer>

      <button className={`scroll-to-top ${showScroll ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Scroll to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

    </div>
  )
}