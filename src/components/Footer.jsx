import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: 'clamp(48px, 8vw, 80px) 0 clamp(24px, 5vw, 40px)',
      marginTop: '0'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(32px, 5vw, 48px)',
          marginBottom: 'clamp(40px, 8vw, 64px)'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              Dorara<span style={{ color: 'var(--accent-primary)' }}>.tech</span>
            </div>
            <p className="body-md" style={{ 
              marginBottom: '24px',
              maxWidth: '300px'
            }}>
              Enterprise software, AI agents, and data solutions. 
              Your trusted technology partner for digital transformation.
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Mail, label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent-primary)';
                    e.currentTarget.style.color = 'var(--bg-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="h3" style={{ marginBottom: '20px' }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {[
                'Web Development',
                'Mobile Development',
                'AI & Automation',
                'UI/UX Design',
                'Maintenance & Support'
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: 0,
                      fontSize: '16px',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="h3" style={{ marginBottom: '20px' }}>
              Company
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {[
                { name: 'About Us', id: 'about' },
                { name: 'Our Work', id: 'work' },
                { name: 'Process', id: 'process' },
                { name: 'Contact', id: 'contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: 0,
                      fontSize: '16px',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="h3" style={{ marginBottom: '20px' }}>
              Get In Touch
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li className="body-md">
                <strong>Email:</strong><br />
                hello@Dorara.com
              </li>
              <li className="body-md">
                <strong>Phone:</strong><br />
                +1 (555) 123-4567
              </li>
              <li className="body-md">
                <strong>WhatsApp:</strong><br />
                +1 (555) 987-6543
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p className="body-sm">
            © {currentYear} Dorara. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '24px'
          }}>
            <a href="#" style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
            }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
