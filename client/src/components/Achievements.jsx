import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Code2, Rocket, Compass, Users, Sparkles, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  Trophy: Trophy,
  Lightbulb: Lightbulb,
  Code: Code2,
  Rocket: Rocket,
  Compass: Compass,
  Users: Users
};

const badgeStyles = {
  mustard: {
    gradient: 'linear-gradient(135deg, #E5A93C, #F49D37)',
    bg: 'var(--bg-card-mustard)',
    border: 'rgba(229, 169, 60, 0.35)',
    accent: 'var(--mustard-dark)',
    pillBg: 'rgba(229, 169, 60, 0.16)'
  },
  coral: {
    gradient: 'var(--grad-coral-mustard)',
    bg: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.35)',
    accent: 'var(--coral)',
    pillBg: 'rgba(247, 127, 103, 0.15)'
  },
  pink: {
    gradient: 'var(--grad-rose-coral)',
    bg: 'var(--bg-card-rose)',
    border: 'rgba(224, 90, 136, 0.3)',
    accent: 'var(--rose-pink)',
    pillBg: 'rgba(224, 90, 136, 0.14)'
  },
  sage: {
    gradient: 'linear-gradient(135deg, #6B8E73, #85A38B)',
    bg: 'var(--bg-card-sage)',
    border: 'rgba(107, 142, 115, 0.35)',
    accent: 'var(--sage)',
    pillBg: 'rgba(107, 142, 115, 0.15)'
  },
  burgundy: {
    gradient: 'var(--grad-rose-burgundy)',
    bg: 'rgba(254, 240, 246, 0.7)',
    border: 'rgba(74, 18, 39, 0.25)',
    accent: 'var(--burgundy)',
    pillBg: 'rgba(74, 18, 39, 0.1)'
  },
  peach: {
    gradient: 'linear-gradient(135deg, #F77F67, #E5A93C)',
    bg: 'var(--bg-card-coral)',
    border: 'rgba(247, 127, 103, 0.35)',
    accent: 'var(--coral-hover)',
    pillBg: 'rgba(247, 127, 103, 0.15)'
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-cream-alt)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-rose">Milestones &amp; Engagement</span>
          <h2 className="section-title">
            Beyond the <span className="highlight">Resume</span>
          </h2>
          <p className="section-subtitle">
            Extracurricular leadership, competitive hackathons, coding event involvement, and peer community participation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}
        >
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon] || Star;
            const style = badgeStyles[item.accent] || badgeStyles.pink;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{
                  padding: '30px 26px',
                  backgroundColor: style.bg,
                  border: `1.5px solid ${style.border}`,
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Card Top: Icon & Badge */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '16px',
                      background: style.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 8px 18px rgba(74, 18, 39, 0.12)'
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      backgroundColor: '#FFFFFFEE',
                      color: style.accent,
                      border: `1px solid ${style.border}`,
                      letterSpacing: '0.02em'
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.24rem',
                    color: 'var(--burgundy)',
                    fontWeight: 700,
                    marginBottom: '10px',
                    lineHeight: 1.35
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.68',
                    margin: 0
                  }}
                >
                  {item.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
