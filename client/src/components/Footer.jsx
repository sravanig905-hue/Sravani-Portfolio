import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--burgundy)',
        color: '#FAF5EE',
        paddingTop: '70px',
        paddingBottom: '36px',
        position: 'relative',
        zIndex: 1,
        borderTop: '3px solid rgba(224, 90, 136, 0.4)'
      }}
    >
      {/* Decorative Gradient Glow Arc at top of footer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'var(--grad-rose-coral)',
          boxShadow: '0 0 24px var(--rose-pink)'
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 0.8fr',
            gap: '48px',
            marginBottom: '48px',
            alignItems: 'start'
          }}
          className="footer-grid"
        >
          {/* Brand & Summary */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'var(--grad-rose-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: '1.35rem'
                }}
              >
                S
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#FAF5EE', margin: 0, fontFamily: 'var(--font-serif)' }}>
                Sravani Gedela
              </h3>
            </div>
            <p style={{ color: '#F7DDE5', fontSize: '0.98rem', lineHeight: '1.7', maxWidth: '420px', marginBottom: '20px' }}>
              Data Analyst &amp; Full Stack Developer based in Vijayawada, India. Passionate about machine learning, structured data engineering, and modern web applications.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--coral)',
                  border: '1px solid rgba(224, 90, 136, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                className="footer-social"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--mustard)',
                  border: '1px solid rgba(229, 169, 60, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                className="footer-social"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--rose-pink)',
                  border: '1px solid rgba(224, 90, 136, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                className="footer-social"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ color: 'var(--coral)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.04em' }}>
              EXPLORE
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: '#F4DCE3',
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--rose-pink)')}
                  onMouseLeave={(e) => (e.target.style.color = '#F4DCE3')}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top & Location */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px' }}>
            <h4 style={{ color: 'var(--mustard)', fontSize: '1.05rem', fontWeight: 700, margin: 0, letterSpacing: '0.04em' }}>
              LOCATION
            </h4>
            <p style={{ color: '#F4DCE3', fontSize: '0.95rem', margin: 0 }}>
              Vijayawada, Andhra Pradesh, India
            </p>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{
                marginTop: '12px',
                padding: '10px 20px',
                fontSize: '0.88rem',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FAF5EE',
                border: '1px solid rgba(224, 90, 136, 0.35)',
                gap: '8px'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '0.88rem',
            color: '#D8B8C4'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Sravani Gedela. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Designed &amp; Developed with</span>
            <Heart size={14} color="var(--rose-pink)" fill="var(--rose-pink)" />
            <span>for Modern Data &amp; Web Engineering</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        .footer-social:hover {
          background-color: rgba(255, 255, 255, 0.18) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
