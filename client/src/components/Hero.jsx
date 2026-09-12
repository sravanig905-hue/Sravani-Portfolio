import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  Sparkles, 
  MapPin, 
  Mail, 
  ArrowRight, 
  Terminal,
  Activity,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import photoPath from '../assets/sravani-photo.jpeg';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = personalInfo.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="hero-section" style={{ minHeight: '94vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '70px', position: 'relative' }}>
      {/* Decorative Floating Tech Nodes in Background */}
      <div className="hero-tech-nodes" aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Subtle grid dots */}
        <svg width="100%" height="100%" style={{ opacity: 0.28 }}>
          <defs>
            <pattern id="dotGrid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#E05A88" />
            </pattern>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F77F67" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E5A93C" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
          {/* Subtle connected graph bezier lines */}
          <path d="M 50 150 Q 250 80 450 200 T 850 150" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6,6" />
          <path d="M 200 450 Q 500 350 750 480 T 1150 400" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6,6" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '56px', alignItems: 'center' }}>
          
          {/* LEFT: Introduction & Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text-content"
          >
            {/* Location & Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(224, 90, 136, 0.3)',
                boxShadow: '0 4px 16px rgba(224, 90, 136, 0.1)',
                backdropFilter: 'blur(8px)',
                marginBottom: '20px'
              }}
            >
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--burgundy)' }}>
                {personalInfo.location}
              </span>
              <span style={{ color: 'var(--coral)', fontSize: '0.8rem' }}>•</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--rose-pink)' }}>
                Open to Opportunities
              </span>
            </div>

            {/* Main Greeting */}
            <div style={{ marginBottom: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                  fontStyle: 'italic',
                  color: 'var(--coral)',
                  fontWeight: 600,
                  letterSpacing: '0.01em'
                }}
              >
                Hi, I'm
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                color: 'var(--burgundy)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                marginBottom: '16px'
              }}
            >
              Sravani Gedela
            </h1>

            {/* Dynamic Animated Role Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                flexWrap: 'wrap'
              }}
            >
              <div
                style={{
                  padding: '8px 18px',
                  borderRadius: '16px',
                  background: 'var(--grad-rose-coral)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: 'var(--shadow-rose)',
                  fontWeight: 700,
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)'
                }}
              >
                <Sparkles size={18} />
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </div>

              <div
                style={{
                  padding: '6px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(229, 169, 60, 0.15)',
                  border: '1px solid rgba(229, 169, 60, 0.35)',
                  color: 'var(--mustard-dark)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Terminal size={15} />
                <span>B.Tech AI &amp; DS</span>
              </div>
            </div>

            {/* Verified Introduction from Resume */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.18rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.72,
                maxWidth: '580px',
                marginBottom: '32px'
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '36px'
              }}
            >
              <a
                href="#project"
                className="btn btn-primary"
                style={{
                  padding: '14px 28px',
                  fontSize: '1rem'
                }}
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Sravani_Gedela_Resume.pdf"
                className="btn btn-secondary"
                style={{
                  padding: '14px 26px',
                  fontSize: '1rem'
                }}
              >
                <FileDown size={18} color="var(--rose-pink)" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Verified Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Follow me:
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sravani Gedela on LinkedIn"
                  className="social-icon-pill"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(224, 90, 136, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--rose-pink)',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 12px rgba(74, 18, 39, 0.04)'
                  }}
                >
                  <LinkedinIcon size={19} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sravani Gedela on GitHub"
                  className="social-icon-pill"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(247, 127, 103, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--coral)',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 12px rgba(74, 18, 39, 0.04)'
                  }}
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email to Sravani"
                  className="social-icon-pill"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(229, 169, 60, 0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--mustard-dark)',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 12px rgba(74, 18, 39, 0.04)'
                  }}
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Profile Photo with Layered Architectural Shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="hero-image-wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Background Layer 1: Warm Coral-Pink Soft Blob */}
            <div
              style={{
                position: 'absolute',
                width: '108%',
                height: '108%',
                background: 'radial-gradient(circle, rgba(224, 90, 136, 0.2) 0%, rgba(247, 127, 103, 0.14) 40%, rgba(229, 169, 60, 0.08) 70%, transparent 80%)',
                borderRadius: '42% 58% 68% 32% / 45% 45% 55% 55%',
                filter: 'blur(28px)',
                zIndex: 0,
                animation: 'floatSlow 18s infinite alternate ease-in-out'
              }}
            />

            {/* Background Layer 2: Decorative Gradient Frame Outline */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '470px',
                borderRadius: '140px 140px 48px 48px',
                border: '2px dashed rgba(224, 90, 136, 0.45)',
                transform: 'rotate(4deg)',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />

            {/* Background Layer 3: Mustard Accent Corner Element */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '15px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(229, 169, 60, 0.3), rgba(247, 127, 103, 0.2))',
                zIndex: 1,
                filter: 'blur(4px)'
              }}
            />

            {/* Main Portrait Frame with Arched Dome Profile */}
            <div
              className="photo-frame-card"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '360px',
                maxWidth: '90vw',
                height: '450px',
                borderRadius: '130px 130px 42px 42px',
                padding: '9px',
                background: 'linear-gradient(145deg, #FFFFFF, rgba(255, 240, 245, 0.9), rgba(254, 247, 235, 0.9))',
                boxShadow: '0 24px 60px rgba(74, 18, 39, 0.16), 0 0 0 1px rgba(224, 90, 136, 0.25)',
                overflow: 'hidden'
              }}
            >
              {/* Inner Gradient Rim */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '122px 122px 34px 34px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#FFF0F5'
                }}
              >
                <img
                  src={photoPath}
                  alt="Sravani Gedela — Data Analyst and Full Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="hero-portrait-img"
                />

                {/* Subtle Gradient Shadow at Image Bottom */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 'auto 0 0 0',
                    height: '80px',
                    background: 'linear-gradient(to top, rgba(74, 18, 39, 0.45) 0%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>

            {/* Floating Badge 1: Top Left - Machine Learning & Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                position: 'absolute',
                top: '40px',
                left: '-20px',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '10px 18px',
                borderRadius: '20px',
                boxShadow: '0 12px 28px rgba(74, 18, 39, 0.12)',
                border: '1px solid rgba(224, 90, 136, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'var(--grad-rose-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Cpu size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-soft)', fontWeight: 600 }}>Specialization</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--burgundy)' }}>AI &amp; Data Science</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Bottom Right - Academic Standing CGPA */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '-15px',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '10px 18px',
                borderRadius: '20px',
                boxShadow: '0 12px 28px rgba(74, 18, 39, 0.12)',
                border: '1px solid rgba(229, 169, 60, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'var(--grad-coral-mustard)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Activity size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-soft)', fontWeight: 600 }}>Academic Standing</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--burgundy)' }}>8.70 CGPA (B.Tech)</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-wrapper {
            order: -1;
            margin-bottom: 20px;
          }
          .hero-text-content p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .social-icon-pill:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(74, 18, 39, 0.15) !important;
        }
        .photo-frame-card:hover .hero-portrait-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
