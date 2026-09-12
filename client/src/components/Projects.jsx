import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Binary, 
  Cpu, 
  Filter, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { featuredProject } from '../data/portfolioData';

const stepIcons = [FileText, Binary, Filter, Cpu, Award];
const stepGradients = [
  'var(--grad-rose-coral)',
  'var(--grad-coral-mustard)',
  'linear-gradient(135deg, #E5A93C, #F49D37)',
  'linear-gradient(135deg, #6B8E73, #85A38B)',
  'var(--grad-rose-burgundy)'
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="project" className="section" style={{ backgroundColor: 'var(--bg-cream-alt)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-rose">Machine Learning &amp; NLP</span>
          <h2 className="section-title">
            Featured <span className="highlight">Project</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive case study on leveraging Natural Language Processing and Machine Learning to streamline talent recruitment.
          </p>
        </div>

        {/* Featured Project Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card"
          style={{
            padding: '44px 38px',
            border: '2px solid rgba(224, 90, 136, 0.25)',
            background: 'linear-gradient(145deg, #FFFFFF, rgba(254, 240, 245, 0.75), rgba(254, 249, 238, 0.75))',
            boxShadow: '0 20px 50px rgba(74, 18, 39, 0.1)'
          }}
        >
          {/* Top Banner: Project Title, Year, Category */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '20px',
              borderBottom: '1px solid rgba(74, 18, 39, 0.1)',
              paddingBottom: '28px',
              marginBottom: '36px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'var(--grad-rose-coral)',
                    color: '#FFF',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  ACADEMIC / APPLIED ML
                </span>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(229, 169, 60, 0.15)',
                    color: 'var(--mustard-dark)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  Year: {featuredProject.year}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                  color: 'var(--burgundy)',
                  fontWeight: 800,
                  marginBottom: '8px'
                }}
              >
                {featuredProject.title}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--coral)', fontWeight: 600 }}>
                {featuredProject.category}
              </p>
            </div>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '400px' }}>
              {featuredProject.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFFEE',
                    border: '1px solid rgba(224, 90, 136, 0.25)',
                    color: 'var(--burgundy)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    boxShadow: '0 2px 6px rgba(74, 18, 39, 0.04)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Summary Description */}
          <div style={{ marginBottom: '36px' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--burgundy)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={20} color="var(--rose-pink)" />
              <span>Project Overview &amp; Objective</span>
            </h4>
            <p style={{ fontSize: '1.06rem', lineHeight: '1.8', color: 'var(--text-main)', maxWidth: '920px' }}>
              {featuredProject.description} By transforming unstructured resume PDFs and documents into normalized skill vectors and lexical representations, this project automates candidate evaluation and shortlisting with systematic NLP algorithms.
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div style={{ marginBottom: '44px' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--burgundy)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Layers size={18} color="var(--coral)" />
              <span>Core Solution Capabilities</span>
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px'
              }}
            >
              {featuredProject.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFFCC',
                    border: '1px solid rgba(224, 90, 136, 0.16)',
                    boxShadow: '0 2px 8px rgba(74, 18, 39, 0.03)'
                  }}
                >
                  <CheckCircle2 size={20} color="var(--rose-pink)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.94rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.5 }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL WORKFLOW PIPELINE: Resume -> Text Extraction -> Skill Extraction -> Resume Analysis -> Candidate Ranking */}
          <div
            style={{
              padding: '32px 28px',
              borderRadius: '24px',
              backgroundColor: '#FFFFFFEE',
              border: '1.5px solid rgba(247, 127, 103, 0.25)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Workflow size={22} color="var(--coral)" />
                <h4 style={{ fontSize: '1.2rem', color: 'var(--burgundy)', margin: 0 }}>
                  End-to-End NLP Screening Architecture Pipeline
                </h4>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-soft)', fontWeight: 600 }}>
                Click steps to explore pipeline details
              </span>
            </div>

            {/* Interactive Pipeline Nodes */}
            <div
              className="workflow-pipeline-container"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '14px',
                position: 'relative'
              }}
            >
              {featuredProject.workflowSteps.map((stepItem, idx) => {
                const Icon = stepIcons[idx] || FileText;
                const isSelected = activeStep === idx;
                const gradient = stepGradients[idx];

                return (
                  <motion.div
                    key={stepItem.step}
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ y: -4 }}
                    style={{
                      cursor: 'pointer',
                      padding: '20px 16px',
                      borderRadius: '18px',
                      backgroundColor: isSelected ? 'rgba(254, 240, 245, 0.9)' : '#FAFAFA',
                      border: isSelected ? '2px solid var(--rose-pink)' : '1px solid rgba(74, 18, 39, 0.1)',
                      boxShadow: isSelected ? '0 8px 24px rgba(224, 90, 136, 0.2)' : 'none',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    {/* Node Step Number Tag */}
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        color: isSelected ? 'var(--rose-pink)' : 'var(--text-soft)',
                        letterSpacing: '0.06em',
                        marginBottom: '8px'
                      }}
                    >
                      STEP {stepItem.step}
                    </span>

                    {/* Step Icon Circle */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        marginBottom: '12px',
                        boxShadow: '0 4px 14px rgba(74, 18, 39, 0.15)'
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <div
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: 'var(--burgundy)',
                        marginBottom: '6px'
                      }}
                    >
                      {stepItem.title}
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(74, 18, 39, 0.06)',
                        color: 'var(--text-muted)',
                        fontWeight: 600
                      }}
                    >
                      {stepItem.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Active Step Detailed View */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: '24px',
                padding: '18px 24px',
                borderRadius: '16px',
                backgroundColor: 'rgba(254, 240, 245, 0.6)',
                border: '1px solid rgba(224, 90, 136, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: stepGradients[activeStep],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  fontSize: '0.85rem',
                  fontWeight: 700
                }}
              >
                {featuredProject.workflowSteps[activeStep].step}
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ color: 'var(--burgundy)', fontSize: '0.98rem' }}>
                  {featuredProject.workflowSteps[activeStep].title}:
                </strong>{' '}
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {featuredProject.workflowSteps[activeStep].desc}
                </span>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>

      <style>{`
        @media (max-width: 840px) {
          .workflow-pipeline-container {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
