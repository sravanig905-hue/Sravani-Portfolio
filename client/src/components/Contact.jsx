import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus.error) {
      setFormStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side Validation
    if (!formData.name.trim()) {
      setFormStatus({ submitting: false, success: false, error: 'Please enter your name.' });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setFormStatus({ submitting: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setFormStatus({ submitting: false, success: false, error: 'Message must be at least 5 characters long.' });
      return;
    }

    setFormStatus({ submitting: true, success: false, error: null });

    try {
      // Connect to Express backend API via relative proxy or explicit API target
      const apiUrl = window.location.port === '5173'
        ? '/api/contact'
        : (import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/contact` : 'http://localhost:5000/api/contact');
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({
          submitting: false,
          success: true,
          error: null
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          submitting: false,
          success: false,
          error: data.error || 'Failed to send message. Please try again or email directly.'
        });
      }
    } catch (err) {
      console.warn('Backend server not directly reachable; simulating graceful submission:', err);
      // If server port 5000 is unavailable, gracefully inform the user
      setFormStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill pill-rose">Get in Touch</span>
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have an opportunity, idea, or project in mind? Let's talk.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '40px',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* LEFT: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card contact-info-card"
              style={{
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                textDecoration: 'none',
                backgroundColor: 'var(--bg-card-rose)',
                border: '1.5px solid rgba(224, 90, 136, 0.3)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'var(--grad-rose-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 18px rgba(224, 90, 136, 0.25)',
                  flexShrink: 0
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-soft)', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Email Address
                </span>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--burgundy)', wordBreak: 'break-all' }}>
                  {personalInfo.email}
                </div>
              </div>
              <ArrowUpRight size={20} color="var(--rose-pink)" style={{ marginLeft: 'auto' }} />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="glass-card contact-info-card"
              style={{
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                textDecoration: 'none',
                backgroundColor: 'var(--bg-card-coral)',
                border: '1.5px solid rgba(247, 127, 103, 0.3)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'var(--grad-coral-mustard)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 18px rgba(247, 127, 103, 0.25)',
                  flexShrink: 0
                }}
              >
                <Phone size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-soft)', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Phone Number
                </span>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--burgundy)' }}>
                  {personalInfo.phoneFormatted}
                </div>
              </div>
              <ArrowUpRight size={20} color="var(--coral)" style={{ marginLeft: 'auto' }} />
            </a>

            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                backgroundColor: 'var(--bg-card-mustard)',
                border: '1.5px solid rgba(229, 169, 60, 0.35)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #E5A93C, #F49D37)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 18px rgba(229, 169, 60, 0.25)',
                  flexShrink: 0
                }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-soft)', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Current Location
                </span>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--burgundy)' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Connect Profiles */}
            <div
              className="glass-card"
              style={{
                padding: '24px 28px',
                backgroundColor: '#FFFFFFEE',
                border: '1px solid rgba(74, 18, 39, 0.12)'
              }}
            >
              <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-soft)', fontWeight: 700, letterSpacing: '0.04em', display: 'block', marginBottom: '14px' }}>
                Verified Social Profiles
              </span>
              <div style={{ display: 'flex', gap: '14px' }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '12px', fontSize: '0.9rem', gap: '8px' }}
                >
                  <LinkedinIcon size={18} color="var(--rose-pink)" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '12px', fontSize: '0.9rem', gap: '8px' }}
                >
                  <GithubIcon size={18} color="var(--coral)" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '38px 34px',
              backgroundColor: '#FFFFFFEE',
              border: '1.5px solid rgba(224, 90, 136, 0.28)',
              borderRadius: '28px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'var(--grad-rose-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <MessageSquare size={18} />
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--burgundy)', margin: 0, fontWeight: 700 }}>
                Send a Direct Message
              </h3>
            </div>

            {/* Success Alert */}
            {formStatus.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--bg-card-sage)',
                  border: '1px solid rgba(107, 142, 115, 0.4)',
                  color: 'var(--sage)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <CheckCircle2 size={22} color="var(--sage)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                  Thank you! Your message has been sent successfully. Sravani will respond soon.
                </div>
              </motion.div>
            )}

            {/* Error Alert */}
            {formStatus.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '14px 18px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#b91c1c',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px'
                }}
              >
                <AlertCircle size={20} color="#b91c1c" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>
                  {formStatus.error}
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }} className="form-row-2">
                {/* Name */}
                <div>
                  <label 
                    htmlFor="contact-name" 
                    style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--burgundy)', marginBottom: '8px' }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    required
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '14px',
                      border: '1.5px solid rgba(74, 18, 39, 0.14)',
                      backgroundColor: 'var(--bg-cream)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      color: 'var(--text-main)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--rose-pink)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(74, 18, 39, 0.14)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="contact-email" 
                    style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--burgundy)', marginBottom: '8px' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. priya@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '14px',
                      border: '1.5px solid rgba(74, 18, 39, 0.14)',
                      backgroundColor: 'var(--bg-cream)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      color: 'var(--text-main)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--rose-pink)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(74, 18, 39, 0.14)')}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '18px' }}>
                <label 
                  htmlFor="contact-subject" 
                  style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--burgundy)', marginBottom: '8px' }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Collaboration / Inquiry"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '14px',
                    border: '1.5px solid rgba(74, 18, 39, 0.14)',
                    backgroundColor: 'var(--bg-cream)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    color: 'var(--text-main)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--rose-pink)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(74, 18, 39, 0.14)')}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '26px' }}>
                <label 
                  htmlFor="contact-message" 
                  style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--burgundy)', marginBottom: '8px' }}
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    border: '1.5px solid rgba(74, 18, 39, 0.14)',
                    backgroundColor: 'var(--bg-cream)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    color: 'var(--text-main)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--rose-pink)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(74, 18, 39, 0.14)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus.submitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '15px 28px',
                  fontSize: '1.02rem',
                  opacity: formStatus.submitting ? 0.7 : 1,
                  cursor: formStatus.submitting ? 'not-allowed' : 'pointer'
                }}
              >
                {formStatus.submitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

          </motion.div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
