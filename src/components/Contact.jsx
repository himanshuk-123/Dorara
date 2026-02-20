import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-development',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Frontend only - just show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'web-development',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" style={{
      padding: 'clamp(48px, 8vw, 120px) 0',
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 64px'
        }}>
          <div className="body-sm" style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Get In Touch
          </div>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Let's Start Building Together
          </h2>
          <p className="body-lg">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(32px, 5vw, 48px)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Contact Info */}
          <div>
            <h3 className="h2" style={{ marginBottom: '24px' }}>
              Contact Information
            </h3>
            <p className="body-md" style={{ marginBottom: '32px' }}>
              Reach out to us through any of these channels. We're here to help!
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Email */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  window.open('https://mail.google.com/mail/?view=cm&to=hr@dorara.tech', '_blank', 'noopener,noreferrer');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open('https://mail.google.com/mail/?view=cm&to=hr@dorara.tech', '_blank', 'noopener,noreferrer');
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '20px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--accent-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={20} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div>
                  <div className="body-sm" style={{ marginBottom: '4px' }}>Email</div>
                  <div className="h3">
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=hr@dorara.tech"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      hr@dorara.tech
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+918468087211"
                style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--accent-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={20} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div>
                  <div className="body-sm" style={{ marginBottom: '4px' }}>Phone</div>
                  <div className="h3">+91 8468087211</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918468087211"
                style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--accent-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MessageSquare size={20} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div>
                  <div className="body-sm" style={{ marginBottom: '4px' }}>WhatsApp</div>
                  <div className="h3">+91 8468087211</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'var(--bg-secondary)',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)'
          }}>
            {isSubmitted ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--accent-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <CheckCircle size={40} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="h2" style={{ marginBottom: '12px' }}>
                  Thank You!
                </h3>
                <p className="body-lg">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <label className="body-sm" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <div style={{ 
                      color: '#ff4444', 
                      fontSize: '12px', 
                      marginTop: '4px' 
                    }}>
                      {errors.name}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="body-sm" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="hr@dorara.tech"
                  />
                  {errors.email && (
                    <div style={{ 
                      color: '#ff4444', 
                      fontSize: '12px', 
                      marginTop: '4px' 
                    }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="body-sm" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+91 8468087211"
                  />
                  {errors.phone && (
                    <div style={{ 
                      color: '#ff4444', 
                      fontSize: '12px', 
                      marginTop: '4px' 
                    }}>
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="body-sm" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your company name"
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="body-sm" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="custom-solution">Custom Solution</option>
                    <option value="maintenance">Maintenance & Support</option>
                  </select>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label className="body-sm" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <div style={{ 
                      color: '#ff4444', 
                      fontSize: '12px', 
                      marginTop: '4px' 
                    }}>
                      {errors.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
