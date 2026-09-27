import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight,
  X,
  Activity,
  Maximize2,
  ScanLine,
  Sliders,
  Network,
  CheckSquare,
  BarChart3,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { featuredProject, headAndNeckProject } from '../data/portfolioData';

const stepIcons = [FileText, Binary, Filter, Cpu, Award];
const stepGradients = [
  'var(--grad-rose-coral)',
  'var(--grad-coral-mustard)',
  'linear-gradient(135deg, #E5A93C, #F49D37)',
  'linear-gradient(135deg, #6B8E73, #85A38B)',
  'var(--grad-rose-burgundy)'
];

const workflowNodeIcons = [
  ScanLine,
  Sliders,
  Layers,
  Cpu,
  Network,
  CheckSquare,
  BarChart3
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="project" className="section" style={{ backgroundColor: 'var(--bg-cream-alt)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-rose">Deep Learning &amp; AI</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Rigorous technical implementations spanning deep learning medical image segmentation and natural language processing.
          </p>
        </div>

        {/* Projects List Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

          {/* ============================================================
              PROJECT 1: HEAD & NECK ORGAN SEGMENTATION (NEW PROJECT)
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card project-card-primary"
            style={{
              padding: '44px 38px',
              border: '2px solid rgba(224, 90, 136, 0.3)',
              background: 'linear-gradient(145deg, #FFFFFF, rgba(254, 240, 245, 0.85), rgba(254, 249, 238, 0.75))',
              boxShadow: '0 20px 50px rgba(74, 18, 39, 0.1)',
              position: 'relative'
            }}
          >
            {/* Top Banner: Badges & Year */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '20px',
                borderBottom: '1px solid rgba(74, 18, 39, 0.1)',
                paddingBottom: '28px',
                marginBottom: '32px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      padding: '5px 14px',
                      borderRadius: '999px',
                      background: 'var(--grad-rose-coral)',
                      color: '#FFF',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em'
                    }}
                  >
                    DEEP LEARNING / MEDICAL CV
                  </span>
                  <span
                    style={{
                      padding: '5px 14px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(229, 169, 60, 0.18)',
                      color: 'var(--mustard-dark)',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}
                  >
                    Year: {headAndNeckProject.year}
                  </span>
                  <span
                    style={{
                      padding: '5px 14px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(107, 142, 115, 0.15)',
                      color: 'var(--sage)',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}
                  >
                    30 OARs Segmented
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                    color: 'var(--burgundy)',
                    fontWeight: 800,
                    marginBottom: '8px',
                    letterSpacing: '-0.015em'
                  }}
                >
                  {headAndNeckProject.shortTitle}
                </h3>

                <p style={{ fontSize: '1.08rem', color: 'var(--coral)', fontWeight: 600, maxWidth: '820px' }}>
                  {headAndNeckProject.subtitle}
                </p>
              </div>

              {/* Technology Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '420px' }}>
                {headAndNeckProject.cardTechnologies.map((tech) => (
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
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '1.08rem', lineHeight: '1.8', color: 'var(--text-main)', maxWidth: '980px' }}>
                {headAndNeckProject.description}
              </p>
            </div>

            {/* Visual Project Preview in Card */}
            <div
              style={{
                marginBottom: '32px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid rgba(224, 90, 136, 0.2)',
                backgroundColor: '#FFFFFFCC',
                boxShadow: '0 4px 18px rgba(74, 18, 39, 0.05)'
              }}
            >
              <div
                style={{
                  padding: '12px 20px',
                  backgroundColor: 'rgba(254, 240, 245, 0.65)',
                  borderBottom: '1px solid rgba(224, 90, 136, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} color="var(--rose-pink)" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--burgundy)' }}>
                    Visual Comparison: Input CT Scan &rarr; Ground Truth &rarr; Hybrid U-Net + Transformer Prediction
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    backgroundColor: '#FFFFFF',
                    padding: '3px 10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(74, 18, 39, 0.1)'
                  }}
                >
                  HaN-Seg Benchmark Test Slice
                </span>
              </div>

              <div
                onClick={() => setIsModalOpen(true)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  backgroundColor: '#0F090C',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '220px',
                  overflow: 'hidden'
                }}
                className="project-image-preview-wrapper"
              >
                <img
                  src={headAndNeckProject.images.comparison}
                  alt="Head and Neck Organ Segmentation Visual Comparison showing Original CT Scan, Ground Truth, and Predicted Segmentation"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    maxHeight: '360px',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease'
                  }}
                  className="preview-img"
                  loading="lazy"
                />
                
                {/* Subtle Hover Overlay */}
                <div
                  className="preview-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(74, 18, 39, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    opacity: 0,
                    transition: 'opacity 0.25s ease'
                  }}
                >
                  <Maximize2 size={20} />
                  <span>Click to expand full architecture &amp; evaluation modal</span>
                </div>
              </div>
            </div>

            {/* Key Features Overview Snippet */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--burgundy)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={18} color="var(--rose-pink)" />
                <span>Key Technical Highlights</span>
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '12px'
                }}
              >
                {headAndNeckProject.features.slice(0, 4).map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      backgroundColor: '#FFFFFFCC',
                      border: '1px solid rgba(224, 90, 136, 0.16)'
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--rose-pink)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions: View Project Button & GitHub */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(74, 18, 39, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  id="btn-view-head-neck-project"
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary"
                  style={{
                    padding: '14px 30px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    cursor: 'pointer'
                  }}
                  aria-haspopup="dialog"
                  aria-expanded={isModalOpen}
                >
                  <span>View Project</span>
                  <ArrowRight size={18} className="btn-arrow" />
                </button>

                {headAndNeckProject.githubUrl && (
                  <a
                    href={headAndNeckProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      padding: '14px 24px',
                      fontSize: '0.95rem',
                      fontWeight: 600
                    }}
                    aria-label="View source repository on GitHub"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>

              <div style={{ fontSize: '0.86rem', color: 'var(--text-soft)', fontStyle: 'italic' }}>
                Multi-Organ Deep Learning Implementation · PyTorch
              </div>
            </div>

          </motion.div>


          {/* ============================================================
              PROJECT 2: RESUME SCREENING USING ML & NLP (PRESERVED)
              ============================================================ */}
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

      </div>

      {/* ============================================================
          PROJECT DETAILS MODAL: HEAD & NECK ORGAN SEGMENTATION
          ============================================================ */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="project-modal-backdrop"
            onClick={() => setIsModalOpen(false)}
            role="presentation"
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(50, 10, 26, 0.72)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 16px',
              overflowY: 'auto'
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                maxWidth: '960px',
                maxHeight: '90vh',
                overflowY: 'auto',
                backgroundColor: '#FFFFFF',
                borderRadius: '28px',
                border: '2px solid rgba(224, 90, 136, 0.3)',
                boxShadow: '0 25px 60px rgba(74, 18, 39, 0.3)',
                position: 'relative'
              }}
              className="project-modal-container"
            >
              {/* Modal Sticky Header Bar */}
              <div
                style={{
                  position: 'sticky',
                  top: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderBottom: '1px solid rgba(74, 18, 39, 0.1)',
                  padding: '20px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  zIndex: 10,
                  borderTopLeftRadius: '28px',
                  borderTopRightRadius: '28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {headAndNeckProject.categories.map((cat) => (
                    <span
                      key={cat}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(224, 90, 136, 0.1)',
                        color: 'var(--rose-pink)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: '1px solid rgba(224, 90, 136, 0.22)'
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close project details modal"
                  style={{
                    background: 'rgba(74, 18, 39, 0.06)',
                    border: '1px solid rgba(74, 18, 39, 0.12)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--burgundy)',
                    transition: 'all 0.2s ease'
                  }}
                  className="modal-close-btn"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body Content */}
              <div style={{ padding: '32px 32px 40px 32px' }}>

                {/* 1. Title & Subtitle */}
                <div style={{ marginBottom: '28px' }}>
                  <h3
                    id="modal-project-title"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                      color: 'var(--burgundy)',
                      fontWeight: 800,
                      lineHeight: 1.3,
                      marginBottom: '10px'
                    }}
                  >
                    {headAndNeckProject.title}
                  </h3>
                  <p style={{ fontSize: '1.08rem', color: 'var(--coral)', fontWeight: 600 }}>
                    {headAndNeckProject.subtitle}
                  </p>
                </div>

                {/* 2. Visual Project Preview Comparison */}
                <div
                  style={{
                    marginBottom: '36px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1.5px solid rgba(224, 90, 136, 0.22)',
                    backgroundColor: '#110A0E'
                  }}
                >
                  <div
                    style={{
                      padding: '12px 20px',
                      backgroundColor: 'rgba(254, 240, 245, 0.95)',
                      borderBottom: '1px solid rgba(224, 90, 136, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Activity size={18} color="var(--rose-pink)" />
                      <strong style={{ fontSize: '0.92rem', color: 'var(--burgundy)' }}>
                        Visual Prediction Evaluation: Input CT Scan | Ground Truth | Hybrid U-Net + Transformer
                      </strong>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-soft)', fontWeight: 600 }}>
                      Genuine Test Slice Visualization
                    </span>
                  </div>

                  <div style={{ padding: '16px', textAlign: 'center' }}>
                    <img
                      src={headAndNeckProject.images.comparison}
                      alt="Head and Neck Organ Segmentation Visual Comparison showing Original CT Scan, Ground Truth, and Predicted Segmentation"
                      style={{
                        width: '100%',
                        maxHeight: '440px',
                        objectFit: 'contain',
                        borderRadius: '12px'
                      }}
                      loading="lazy"
                    />
                  </div>

                  <div
                    style={{
                      padding: '12px 20px',
                      backgroundColor: '#1E1218',
                      color: 'rgba(255, 255, 255, 0.82)',
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <ShieldCheck size={16} color="var(--mustard)" style={{ flexShrink: 0 }} />
                    <span>
                      Original test evaluation output generated by model inference pipeline on benchmark CT axial slice.
                    </span>
                  </div>
                </div>

                {/* 3. Overview & Non-clinical Notice */}
                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--burgundy)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Sparkles size={20} color="var(--rose-pink)" />
                    <span>Overview</span>
                  </h4>
                  <p style={{ fontSize: '1.04rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '16px' }}>
                    {headAndNeckProject.detailedDescription}
                  </p>
                  
                  {/* Non-clinical disclaimer box */}
                  <div
                    style={{
                      padding: '14px 18px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(229, 169, 60, 0.1)',
                      border: '1px solid rgba(229, 169, 60, 0.3)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <AlertCircle size={20} color="var(--mustard-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--burgundy)', lineHeight: 1.5 }}>
                      <strong>Research Implementation Notice:</strong> {headAndNeckProject.disclaimer}
                    </span>
                  </div>
                </div>

                {/* 4. Problem Statement & Approach (Two Column Grid) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                    gap: '24px',
                    marginBottom: '36px'
                  }}
                >
                  {/* Problem Statement */}
                  <div
                    style={{
                      padding: '24px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(254, 240, 245, 0.5)',
                      border: '1px solid rgba(224, 90, 136, 0.2)'
                    }}
                  >
                    <h5 style={{ fontSize: '1.15rem', color: 'var(--burgundy)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertCircle size={18} color="var(--rose-pink)" />
                      <span>Problem Statement</span>
                    </h5>
                    <p style={{ fontSize: '0.98rem', lineHeight: '1.75', color: 'var(--text-main)' }}>
                      {headAndNeckProject.problemStatement}
                    </p>
                  </div>

                  {/* Approach */}
                  <div
                    style={{
                      padding: '24px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(254, 243, 239, 0.5)',
                      border: '1px solid rgba(247, 127, 103, 0.2)'
                    }}
                  >
                    <h5 style={{ fontSize: '1.15rem', color: 'var(--burgundy)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Cpu size={18} color="var(--coral)" />
                      <span>Approach</span>
                    </h5>
                    <p style={{ fontSize: '0.98rem', lineHeight: '1.75', color: 'var(--text-main)' }}>
                      {headAndNeckProject.approach}
                    </p>
                  </div>
                </div>

                {/* 5. Project Architecture & End-to-End Workflow */}
                <div
                  style={{
                    marginBottom: '36px',
                    padding: '28px',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(250, 245, 238, 0.8)',
                    border: '1.5px solid rgba(224, 90, 136, 0.2)'
                  }}
                >
                  <div style={{ marginBottom: '18px' }}>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--burgundy)', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <Workflow size={20} color="var(--rose-pink)" />
                      <span>Project Architecture &amp; Workflow</span>
                    </h4>
                    <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)' }}>
                      {headAndNeckProject.architectureDescription}
                    </p>
                  </div>

                  {/* Step-by-Step Workflow Nodes (Vertical / Horizontal Responsive) */}
                  <div
                    className="modal-architecture-flow"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '16px',
                      borderRadius: '16px',
                      backgroundColor: '#FFFFFFEE',
                      border: '1px solid rgba(74, 18, 39, 0.1)',
                      marginBottom: '20px'
                    }}
                  >
                    {headAndNeckProject.architectureFlow.map((nodeName, index) => {
                      const NodeIcon = workflowNodeIcons[index] || CheckCircle2;
                      const isLast = index === headAndNeckProject.architectureFlow.length - 1;

                      return (
                        <React.Fragment key={nodeName}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '10px 16px',
                              borderRadius: '12px',
                              backgroundColor: 'rgba(254, 240, 245, 0.8)',
                              border: '1px solid rgba(224, 90, 136, 0.25)',
                              color: 'var(--burgundy)',
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              boxShadow: '0 2px 6px rgba(74, 18, 39, 0.04)'
                            }}
                          >
                            <NodeIcon size={16} color="var(--rose-pink)" />
                            <span>{nodeName}</span>
                          </div>

                          {!isLast && (
                            <ChevronRight size={18} color="var(--coral)" style={{ flexShrink: 0 }} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Detailed Architecture Flow Ribbon */}
                  <div
                    style={{
                      padding: '16px 20px',
                      borderRadius: '14px',
                      backgroundColor: '#FFFFFF',
                      border: '1px dashed rgba(224, 90, 136, 0.35)',
                      fontSize: '0.92rem',
                      lineHeight: '1.7',
                      color: 'var(--text-main)'
                    }}
                  >
                    <strong style={{ color: 'var(--burgundy)' }}>Detailed Pipeline:</strong>{' '}
                    {headAndNeckProject.architectureDetailedFlow.join(' \u2192 ')}
                  </div>
                </div>

                {/* 6. Model Specifications Table */}
                <div style={{ marginBottom: '36px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--burgundy)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Layers size={20} color="var(--coral)" />
                    <span>Model Specifications</span>
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '14px'
                    }}
                  >
                    <div style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#FAFAFA', border: '1px solid rgba(74, 18, 39, 0.08)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Model</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--burgundy)' }}>{headAndNeckProject.modelSpecs.model}</div>
                    </div>

                    <div style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#FAFAFA', border: '1px solid rgba(74, 18, 39, 0.08)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Framework</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--burgundy)' }}>{headAndNeckProject.modelSpecs.framework}</div>
                    </div>

                    <div style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#FAFAFA', border: '1px solid rgba(74, 18, 39, 0.08)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Language</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--burgundy)' }}>{headAndNeckProject.modelSpecs.language}</div>
                    </div>

                    <div style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#FAFAFA', border: '1px solid rgba(74, 18, 39, 0.08)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Task</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--burgundy)' }}>{headAndNeckProject.modelSpecs.task}</div>
                    </div>

                    <div style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#FAFAFA', border: '1px solid rgba(74, 18, 39, 0.08)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Input</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--burgundy)' }}>{headAndNeckProject.modelSpecs.input}</div>
                    </div>

                    <div style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#FAFAFA', border: '1px solid rgba(74, 18, 39, 0.08)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Output</div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--burgundy)' }}>{headAndNeckProject.modelSpecs.output}</div>
                    </div>
                  </div>
                </div>

                {/* 7. Technologies Badge List */}
                <div style={{ marginBottom: '36px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--burgundy)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Binary size={20} color="var(--rose-pink)" />
                    <span>Technologies &amp; Frameworks</span>
                  </h4>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {headAndNeckProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '8px 18px',
                          borderRadius: '12px',
                          backgroundColor: '#FFFFFF',
                          border: '1.5px solid rgba(224, 90, 136, 0.28)',
                          color: 'var(--burgundy)',
                          fontSize: '0.92rem',
                          fontWeight: 600,
                          boxShadow: '0 2px 8px rgba(74, 18, 39, 0.04)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 8. Key Features Checklist */}
                <div style={{ marginBottom: '36px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--burgundy)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckSquare size={20} color="var(--sage)" />
                    <span>Key Features</span>
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '12px'
                    }}
                  >
                    {headAndNeckProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '14px 18px',
                          borderRadius: '16px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(74, 18, 39, 0.1)',
                          boxShadow: '0 2px 6px rgba(74, 18, 39, 0.03)'
                        }}
                      >
                        <CheckCircle2 size={18} color="var(--sage)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.94rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.5 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 9. Results / Evaluation Subsection */}
                <div
                  style={{
                    marginBottom: '36px',
                    padding: '28px',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(254, 240, 245, 0.6)',
                    border: '1.5px solid rgba(224, 90, 136, 0.25)'
                  }}
                >
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--burgundy)', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <BarChart3 size={20} color="var(--rose-pink)" />
                      <span>Results &amp; Evaluation</span>
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                      Quantitative evaluation measured across 1,040 test slices from the HaN-Seg benchmark dataset using model weights <code style={{ backgroundColor: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', color: 'var(--burgundy)' }}>hybrid_unet_transformer_multiorgan_best.pth</code>.
                    </p>
                  </div>

                  {/* Quantitative Metric Cards */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                      gap: '14px',
                      marginBottom: '20px'
                    }}
                  >
                    {headAndNeckProject.resultsEvaluation.metrics.map((item) => (
                      <div
                        key={item.label}
                        style={{
                          padding: '16px',
                          borderRadius: '16px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(224, 90, 136, 0.2)',
                          textAlign: 'center',
                          boxShadow: '0 4px 12px rgba(74, 18, 39, 0.04)'
                        }}
                      >
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '6px' }}>
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontSize: '1.35rem',
                            fontWeight: 800,
                            color: 'var(--burgundy)',
                            marginBottom: '4px'
                          }}
                        >
                          {item.value}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-soft)', lineHeight: 1.3 }}>
                          {item.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      padding: '12px 18px',
                      borderRadius: '12px',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.86rem',
                      color: 'var(--text-muted)',
                      border: '1px solid rgba(74, 18, 39, 0.1)',
                      lineHeight: 1.5
                    }}
                  >
                    <strong>Evaluation Note:</strong> {headAndNeckProject.resultsEvaluation.note}
                  </div>
                </div>

                {/* 10. Project Links (GitHub / Close) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(74, 18, 39, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    {headAndNeckProject.githubUrl && (
                      <a
                        href={headAndNeckProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                          padding: '14px 26px',
                          fontSize: '0.98rem',
                          fontWeight: 700
                        }}
                      >
                        <GithubIcon size={18} />
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {/* Live Demo button is intentionally omitted per instruction: no deployed live URL exists */}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn btn-secondary"
                    style={{
                      padding: '14px 26px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <span>Close Window</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Scoped CSS for Projects section & modal responsiveness */}
      <style>{`
        .project-card-primary:hover .preview-img {
          transform: scale(1.02);
        }
        .project-card-primary:hover .preview-overlay {
          opacity: 1 !important;
        }
        .project-card-primary:hover .btn-arrow {
          transform: translateX(4px);
        }
        .btn-arrow {
          transition: transform 0.2s ease;
        }
        .modal-close-btn:hover {
          background-color: rgba(224, 90, 136, 0.15) !important;
          color: var(--rose-pink) !important;
          transform: rotate(90deg);
        }
        @media (max-width: 840px) {
          .workflow-pipeline-container {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .modal-architecture-flow {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
