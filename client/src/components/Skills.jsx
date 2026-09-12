import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Layers, 
  Database, 
  Wrench, 
  HeartHandshake, 
  Languages, 
  Check, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryMeta = {
  programming: {
    icon: Code2,
    gradient: 'linear-gradient(135deg, #E5A93C, #F39C12)',
    bgLight: 'var(--bg-card-mustard)',
    border: 'rgba(229, 169, 60, 0.35)',
    textColor: 'var(--mustard-dark)',
    badgeBg: 'rgba(229, 169, 60, 0.14)',
    badgeBorder: 'rgba(229, 169, 60, 0.3)'
  },
  web: {
    icon: Globe,
    gradient: 'var(--grad-rose-coral)',
    bgLight: 'var(--bg-card-rose)',
    border: 'rgba(224, 90, 136, 0.3)',
    textColor: 'var(--rose-pink)',
    badgeBg: 'rgba(224, 90, 136, 0.12)',
    badgeBorder: 'rgba(224, 90, 136, 0.28)'
  },
  frameworks: {
    icon: Layers,
    gradient: 'var(--grad-coral-mustard)',
    bgLight: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.35)',
    textColor: 'var(--coral)',
    badgeBg: 'rgba(247, 127, 103, 0.14)',
    badgeBorder: 'rgba(247, 127, 103, 0.3)'
  },
  database: {
    icon: Database,
    gradient: 'linear-gradient(135deg, #6B8E73, #85A38B)',
    bgLight: 'var(--bg-card-sage)',
    border: 'rgba(107, 142, 115, 0.35)',
    textColor: 'var(--sage)',
    badgeBg: 'rgba(107, 142, 115, 0.15)',
    badgeBorder: 'rgba(107, 142, 115, 0.3)'
  },
  tools: {
    icon: Wrench,
    gradient: 'var(--grad-rose-burgundy)',
    bgLight: 'rgba(254, 240, 246, 0.7)',
    border: 'rgba(74, 18, 39, 0.25)',
    textColor: 'var(--burgundy)',
    badgeBg: 'rgba(74, 18, 39, 0.08)',
    badgeBorder: 'rgba(74, 18, 39, 0.2)'
  },
  softSkills: {
    icon: HeartHandshake,
    gradient: 'linear-gradient(135deg, #F77F67, #E05A88)',
    bgLight: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.3)',
    textColor: 'var(--coral-hover)',
    badgeBg: 'rgba(247, 127, 103, 0.12)',
    badgeBorder: 'rgba(247, 127, 103, 0.25)'
  },
  languages: {
    icon: Languages,
    gradient: 'linear-gradient(135deg, #E05A88, #E5A93C)',
    bgLight: 'var(--bg-card-rose)',
    border: 'rgba(224, 90, 136, 0.25)',
    textColor: 'var(--rose-pink)',
    badgeBg: 'rgba(224, 90, 136, 0.1)',
    badgeBorder: 'rgba(224, 90, 136, 0.25)'
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-mustard">Technical Competencies</span>
          <h2 className="section-title">
            My <span className="highlight">Toolkit</span> &amp; Capabilities
          </h2>
          <p className="section-subtitle">
            An organized view of programming languages, frameworks, developer tools, and interpersonal strengths verified from my coursework and project builds.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {Object.entries(skillsData).map(([key, category], index) => {
            const meta = categoryMeta[key] || categoryMeta.programming;
            const Icon = meta.icon;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="skill-category-card"
                style={{
                  backgroundColor: meta.bgLight,
                  borderRadius: '26px',
                  border: `1.5px solid ${meta.border}`,
                  padding: '28px 24px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: meta.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 6px 16px rgba(74, 18, 39, 0.12)'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--burgundy)', margin: 0, fontWeight: 700 }}>
                      {category.category}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-soft)' }}>
                      {category.description}
                    </span>
                  </div>
                </div>

                {/* Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginTop: 'auto',
                    paddingTop: '16px'
                  }}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '999px',
                        backgroundColor: '#FFFFFFEE',
                        border: `1px solid ${meta.badgeBorder}`,
                        boxShadow: '0 2px 8px rgba(74, 18, 39, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--text-main)'
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: meta.gradient
                        }}
                      />
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <span
                          style={{
                            fontSize: '0.68rem',
                            padding: '2px 6px',
                            borderRadius: '6px',
                            background: meta.badgeBg,
                            color: meta.textColor,
                            fontWeight: 700,
                            letterSpacing: '0.02em'
                          }}
                        >
                          Core
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div
          style={{
            marginTop: '42px',
            textAlign: 'center',
            fontSize: '0.88rem',
            color: 'var(--text-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Sparkles size={16} color="var(--rose-pink)" />
          <span>All technologies are actively practiced through university coursework, hands-on internships, and personal projects.</span>
        </div>

      </div>
    </section>
  );
}
