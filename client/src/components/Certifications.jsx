import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const certStyles = {
  pink: {
    bg: 'var(--bg-card-rose)',
    border: 'rgba(224, 90, 136, 0.3)',
    iconGrad: 'var(--grad-rose-coral)',
    accent: 'var(--rose-pink)'
  },
  mustard: {
    bg: 'var(--bg-card-mustard)',
    border: 'rgba(229, 169, 60, 0.35)',
    iconGrad: 'linear-gradient(135deg, #E5A93C, #F49D37)',
    accent: 'var(--mustard-dark)'
  },
  coral: {
    bg: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.35)',
    iconGrad: 'var(--grad-coral-mustard)',
    accent: 'var(--coral)'
  },
  sage: {
    bg: 'var(--bg-card-sage)',
    border: 'rgba(107, 142, 115, 0.35)',
    iconGrad: 'linear-gradient(135deg, #6B8E73, #85A38B)',
    accent: 'var(--sage)'
  }
};

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-mustard">Professional Verification</span>
          <h2 className="section-title">
            Recognized <span className="highlight">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal technical certifications completed across emerging Internet of Things, programming languages, and intelligent systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {certifications.map((cert, index) => {
            const style = certStyles[cert.accent] || certStyles.pink;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card"
                style={{
                  padding: '30px 24px',
                  backgroundColor: style.bg,
                  border: `1.5px solid ${style.border}`,
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: style.iconGrad,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 6px 16px rgba(74, 18, 39, 0.12)'
                    }}
                  >
                    <Award size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: '#FFFFFFEE',
                      color: style.accent,
                      border: `1px solid ${style.border}`
                    }}
                  >
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.18rem', color: 'var(--burgundy)', fontWeight: 700, lineHeight: 1.35, marginBottom: '8px' }}>
                    {cert.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-soft)', fontSize: '0.84rem' }}>
                    <ShieldCheck size={16} color={style.accent} />
                    <span>Verified Curriculum Completion</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
