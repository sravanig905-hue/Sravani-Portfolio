import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building, Cloud, Database, Cpu, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const itemStyles = {
  pink: {
    accent: 'var(--rose-pink)',
    bg: 'var(--bg-card-rose)',
    border: 'rgba(224, 90, 136, 0.35)',
    gradient: 'var(--grad-rose-coral)',
    dotShadow: '0 0 16px rgba(224, 90, 136, 0.6)',
    icon: Cpu
  },
  coral: {
    accent: 'var(--coral)',
    bg: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.35)',
    gradient: 'var(--grad-coral-mustard)',
    dotShadow: '0 0 16px rgba(247, 127, 103, 0.6)',
    icon: Cloud
  },
  mustard: {
    accent: 'var(--mustard-dark)',
    bg: 'var(--bg-card-mustard)',
    border: 'rgba(229, 169, 60, 0.35)',
    gradient: 'linear-gradient(135deg, #E5A93C, #F49D37)',
    dotShadow: '0 0 16px rgba(229, 169, 60, 0.6)',
    icon: Database
  }
};

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-coral">Industry Experience</span>
          <h2 className="section-title">
            Internships &amp; <span className="highlight">Practical Training</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical engagements across Machine Learning, Cloud Systems, and Data Engineering workflows.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div 
          className="timeline-wrapper" 
          style={{ 
            maxWidth: '860px', 
            margin: '0 auto', 
            position: 'relative',
            padding: '20px 0'
          }}
        >
          {/* Vertical Center Line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '30px',
              width: '4px',
              background: 'linear-gradient(180deg, #E05A88 0%, #F77F67 50%, #E5A93C 100%)',
              borderRadius: '999px',
              opacity: 0.6
            }}
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {experiences.map((exp, index) => {
              const style = itemStyles[exp.color] || itemStyles.pink;
              const Icon = style.icon;

              return (
                <motion.div
                  key={`${exp.organization}-${exp.period}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '28px',
                    position: 'relative'
                  }}
                >
                  {/* Timeline Pulse Indicator Node */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      flexShrink: 0,
                      borderRadius: '50%',
                      background: style.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: style.dotShadow,
                      zIndex: 2,
                      border: '4px solid #FFFFFF'
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  {/* Experience Card */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: '32px 30px',
                      backgroundColor: style.bg,
                      border: `1.5px solid ${style.border}`,
                      borderRadius: '24px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '14px'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                          <span
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              padding: '3px 10px',
                              borderRadius: '6px',
                              backgroundColor: '#FFFFFFEE',
                              color: style.accent
                            }}
                          >
                            {exp.type}
                          </span>
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-soft)' }}>•</span>
                          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-soft)' }}>
                            {exp.location}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '1.38rem', color: 'var(--burgundy)', fontWeight: 700, margin: 0 }}>
                          {exp.role}
                        </h3>
                      </div>

                      {/* Organization & Year Badge */}
                      <div style={{ textAlign: 'right' }}>
                        <div
                          style={{
                            fontSize: '1.15rem',
                            fontWeight: 800,
                            color: 'var(--burgundy)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <Building size={16} color={style.accent} />
                          <span>{exp.organization}</span>
                        </div>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.86rem',
                            fontWeight: 700,
                            color: style.accent,
                            marginTop: '4px'
                          }}
                        >
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description strictly from resume */}
                    <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '18px' }}>
                      {exp.description}
                    </p>

                    {/* Skill Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            padding: '4px 12px',
                            borderRadius: '999px',
                            backgroundColor: '#FFFFFF',
                            border: `1px solid ${style.border}`,
                            color: 'var(--burgundy)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-wrapper {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
