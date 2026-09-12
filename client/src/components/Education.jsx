import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { educationList } from '../data/portfolioData';

const eduStyles = {
  pink: {
    gradient: 'var(--grad-rose-coral)',
    bg: 'var(--bg-card-rose)',
    border: 'rgba(224, 90, 136, 0.35)',
    accent: 'var(--rose-pink)',
    cgpaBg: 'var(--grad-rose-coral)',
    icon: GraduationCap
  },
  coral: {
    gradient: 'var(--grad-coral-mustard)',
    bg: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.35)',
    accent: 'var(--coral)',
    cgpaBg: 'var(--grad-coral-mustard)',
    icon: BookOpen
  },
  mustard: {
    gradient: 'linear-gradient(135deg, #E5A93C, #F49D37)',
    bg: 'var(--bg-card-mustard)',
    border: 'rgba(229, 169, 60, 0.35)',
    accent: 'var(--mustard-dark)',
    cgpaBg: 'linear-gradient(135deg, #E5A93C, #F49D37)',
    icon: School
  }
};

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg-cream-alt)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-sage">Academic Background</span>
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <p className="section-subtitle">
            A consistent record of academic discipline, technical rigor, and competitive performance.
          </p>
        </div>

        {/* Education Connected Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}
        >
          {educationList.map((edu, idx) => {
            const style = eduStyles[edu.accent] || eduStyles.pink;
            const Icon = style.icon;

            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{
                  padding: '34px 28px',
                  backgroundColor: style.bg,
                  border: `1.5px solid ${style.border}`,
                  borderRadius: '26px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Top Row: Icon + CGPA Tag */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: style.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 8px 20px rgba(74, 18, 39, 0.12)'
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  {/* Highlighting verified CGPA */}
                  <div
                    style={{
                      padding: '6px 16px',
                      borderRadius: '999px',
                      background: style.cgpaBg,
                      color: '#FFFFFF',
                      boxShadow: '0 4px 14px rgba(74, 18, 39, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Award size={16} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--burgundy)',
                    fontWeight: 700,
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}
                >
                  {edu.degree}
                </h3>

                <h4
                  style={{
                    fontSize: '1.02rem',
                    color: 'var(--coral)',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}
                >
                  {edu.institution}
                </h4>

                {/* Details Meta */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '20px',
                    paddingBottom: '16px',
                    borderBottom: `1px solid ${style.border}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-soft)' }}>
                    <Calendar size={15} color={style.accent} />
                    <span style={{ fontWeight: 600 }}>{edu.period}</span>
                    <span>•</span>
                    <span style={{ color: style.accent, fontWeight: 700 }}>{edu.status}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-soft)' }}>
                    <MapPin size={15} color={style.accent} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.65',
                    marginTop: 'auto',
                    margin: 0
                  }}
                >
                  {edu.highlights}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
