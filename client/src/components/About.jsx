import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, Sparkles, Brain, Award, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutCards } from '../data/portfolioData';

const iconMap = {
  Database: Database,
  Layers: Layers,
  Sparkles: Sparkles,
  Brain: Brain
};

const cardStyles = {
  pink: {
    bg: 'var(--bg-card-rose)',
    border: 'rgba(224, 90, 136, 0.3)',
    iconBg: 'var(--grad-rose-coral)',
    accent: 'var(--rose-pink)',
    tagBg: 'rgba(224, 90, 136, 0.12)'
  },
  coral: {
    bg: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.35)',
    iconBg: 'var(--grad-coral-mustard)',
    accent: 'var(--coral)',
    tagBg: 'rgba(247, 127, 103, 0.12)'
  },
  mustard: {
    bg: 'var(--bg-card-mustard)',
    border: 'rgba(229, 169, 60, 0.35)',
    iconBg: 'linear-gradient(135deg, #E5A93C, #F49D37)',
    accent: 'var(--mustard-dark)',
    tagBg: 'rgba(229, 169, 60, 0.15)'
  },
  sage: {
    bg: 'var(--bg-card-sage)',
    border: 'rgba(107, 142, 115, 0.35)',
    iconBg: 'linear-gradient(135deg, #6B8E73, #85A38B)',
    accent: 'var(--sage)',
    tagBg: 'rgba(107, 142, 115, 0.14)'
  }
};

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-cream-alt)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-coral">About Me</span>
          <h2 className="section-title">
            Passionate About Turning <span className="highlight">Data &amp; Code</span> Into Solutions
          </h2>
          <p className="section-subtitle">
            An aspiring Data Analyst and Full Stack Developer combining machine learning engineering with modern web architecture.
          </p>
        </div>

        {/* Story Narrative & Bio */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 0.8fr', 
            gap: '36px', 
            alignItems: 'center',
            marginBottom: '64px'
          }}
          className="about-bio-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card"
            style={{ padding: '36px 32px' }}
          >
            <h3 style={{ fontSize: '1.55rem', marginBottom: '18px', color: 'var(--burgundy)' }}>
              Analytical Mindset, Technical Precision
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '18px', color: 'var(--text-muted)' }}>
              Based in Vijayawada, India, I am pursuing my Bachelor of Technology at Usha Rama College of Engineering and Technology, maintaining an academic CGPA of <strong>8.70</strong>. My journey centers on the powerful synergy between <strong>data analysis</strong>, <strong>machine learning algorithms</strong>, and <strong>full-stack development</strong>.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '24px', color: 'var(--text-muted)' }}>
              With hands-on internship experience in <strong>Machine Learning and Deep Learning (AOTMS)</strong> alongside <strong>Cloud and Data Engineering (AWS)</strong>, I bridge algorithmic research with intuitive user-facing products. Whether it is extracting insights from unstructured text through NLP or constructing scalable React &amp; Django platforms, I focus on delivering clean, reliable solutions.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--burgundy)' }}>
                <CheckCircle2 size={18} color="var(--rose-pink)" />
                <span>Continuous Learner</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--burgundy)' }}>
                <CheckCircle2 size={18} color="var(--coral)" />
                <span>Collaborative Teammate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--burgundy)' }}>
                <CheckCircle2 size={18} color="var(--mustard-dark)" />
                <span>Hackathon Top 50 Finalist</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics & Pillars Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div
              className="glass-card"
              style={{
                padding: '28px',
                borderLeft: '5px solid var(--rose-pink)',
                backgroundColor: '#FFFFFFEE'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--grad-rose-coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 600 }}>Education</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--burgundy)' }}>B.Tech (2023–2027)</div>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
                Usha Rama College of Engineering &amp; Technology · <strong>8.70 CGPA</strong>
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '28px',
                borderLeft: '5px solid var(--mustard)',
                backgroundColor: '#FFFFFFEE'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--grad-coral-mustard)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <Award size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 600 }}>Hackathon Recognition</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--burgundy)' }}>KL University Hackathon</div>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
                Shortlisted in the <strong>Top 50 teams</strong> for the next round.
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '28px',
                borderLeft: '5px solid var(--sage)',
                backgroundColor: '#FFFFFFEE'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #6B8E73, #85A38B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--burgundy)' }}>Vijayawada, India</div>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
                Available for internships, full-time engineering roles, and innovative projects.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Cards (Data, Web, AI/ML, Problem Solving) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {aboutCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            const styling = cardStyles[card.accent];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: styling.bg,
                  borderRadius: '24px',
                  border: `1.5px solid ${styling.border}`,
                  padding: '30px 26px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    background: styling.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginBottom: '20px',
                    boxShadow: '0 8px 20px rgba(74, 18, 39, 0.12)'
                  }}
                >
                  <Icon size={24} />
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    backgroundColor: styling.tagBg,
                    color: styling.accent,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '10px'
                  }}
                >
                  {card.subtitle}
                </span>

                <h4
                  style={{
                    fontSize: '1.28rem',
                    color: 'var(--burgundy)',
                    marginBottom: '10px',
                    fontWeight: 700
                  }}
                >
                  {card.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.65',
                    margin: 0
                  }}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-bio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
