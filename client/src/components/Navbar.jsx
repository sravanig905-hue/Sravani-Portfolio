import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Track scrolled state for navbar background shrink & shadow
      setIsScrolled(window.scrollY > 40);

      // Track active section via viewport position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the absolute top */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
        role="progressbar" 
        aria-valuenow={Math.round(scrollProgress)} 
        aria-valuemin="0" 
        aria-valuemax="100" 
      />

      <header
        className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: isScrolled ? '12px' : '22px',
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          transition: 'top 0.3s ease'
        }}
      >
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="navbar-pill"
          style={{
            width: '100%',
            maxWidth: '1180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '10px 22px' : '14px 28px',
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            borderRadius: '999px',
            border: '1px solid rgba(224, 90, 136, 0.18)',
            boxShadow: isScrolled 
              ? '0 14px 34px rgba(74, 18, 39, 0.09)' 
              : '0 8px 24px rgba(74, 18, 39, 0.05)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          aria-label="Main Navigation"
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="brand-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'var(--grad-rose-coral)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.25rem',
                boxShadow: '0 4px 14px rgba(224, 90, 136, 0.35)'
              }}
            >
              S
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--burgundy)',
                  lineHeight: 1.1
                }}
              >
                Sravani Gedela
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--coral)',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                Data Analyst &amp; Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div
            className="nav-links-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    position: 'relative',
                    padding: '8px 14px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--rose-pink)' : 'var(--text-main)',
                    textDecoration: 'none',
                    borderRadius: '999px',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(224, 90, 136, 0.12)',
                        border: '1px solid rgba(224, 90, 136, 0.25)',
                        borderRadius: '999px',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Connect CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-primary nav-cta-btn"
              style={{
                padding: '9px 18px',
                fontSize: '0.86rem',
                borderRadius: '999px'
              }}
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'none',
                background: 'rgba(224, 90, 136, 0.1)',
                border: '1px solid rgba(224, 90, 136, 0.25)',
                color: 'var(--burgundy)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '16px',
              right: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '24px 20px',
              zIndex: 999,
              boxShadow: '0 20px 48px rgba(74, 18, 39, 0.18)',
              border: '1px solid rgba(224, 90, 136, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '14px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: isActive ? 'var(--rose-pink)' : 'var(--text-main)',
                    backgroundColor: isActive ? 'rgba(224, 90, 136, 0.1)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles size={16} color="var(--rose-pink)" />}
                </a>
              );
            })}

            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(74, 18, 39, 0.08)' }}>
              <a
                href={personalInfo.resumeUrl}
                download="Sravani_Gedela_Resume.pdf"
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
          .nav-cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
