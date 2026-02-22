import React from 'react';
import { ArrowRight, Sparkles, Code2, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      paddingBottom: 'clamp(40px, 8vw, 60px)',
      background: 'linear-gradient(135deg, var(--bg-primary) 0%, rgba(16, 185, 129, 0.05) 100%)'
    }}>
      {/* Animated Background Shapes */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        zIndex: 0,
        animation: 'float 10s ease-in-out infinite reverse'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visual {
            min-height: 300px !important;
          }
          .hero-benefits {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .hero-visual {
            min-height: 250px !important;
          }
          .hero-card {
            transform: rotateY(0deg) rotateX(0deg) !important;
            padding: clamp(30px, 6vw, 40px) !important;
          }
          .hero-buttons {
            flex-direction: column !important;
          }
          .hero-buttons button {
            width: 100% !important;
          }
        }
      `}</style>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visual {
            min-height: 300px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-visual {
            min-height: 250px !important;
          }
        }
      `}</style>

      <div className="container" style={{
        position: 'relative',
        zIndex: 1
      }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 'clamp(40px, 8vw, 80px)',
          alignItems: 'center',
          maxWidth: '1300px',
          margin: '0 auto'
        }}>
          {/* Left Content */}
          <div style={{
            minWidth: 0
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '50px',
              padding: 'clamp(8px, 1vw, 12px) clamp(16px, 3vw, 24px)',
              marginBottom: 'clamp(20px, 4vw, 32px)',
              width: 'fit-content'
            }}>
              <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
              <span className="body-sm" style={{ 
                color: 'var(--accent-primary)', 
                fontWeight: 600
              }}>
                Powering Digital Transformation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-lg" style={{ 
              marginBottom: 'clamp(20px, 3vw, 28px)',
              color: '#fff',
              lineHeight: '1.1'
            }}>
              Ship Better Products, <span style={{ color: 'var(--accent-primary)' }}>Faster</span>
            </h1>

            {/* Subtext */}
            <p className="body-lg" style={{ 
              marginBottom: 'clamp(40px, 6vw, 56px)',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.7'
            }}>
              We build custom web and mobile applications, AI solutions, and digital products that solve real problems. Let us handle the complexity while you focus on growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons" style={{
              display: 'flex',
              gap: 'clamp(12px, 2vw, 16px)',
              flexWrap: 'wrap',
              marginBottom: 'clamp(40px, 8vw, 56px)'
            }}>
              <button 
                onClick={() => scrollToSection('contact')}
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), #10b981)',
                  color: '#fff',
                  fontWeight: 700,
                  border: 'none',
                  padding: 'clamp(12px, 1.5vw, 16px) clamp(24px, 4vw, 32px)',
                  borderRadius: '8px',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 35px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.3)';
                }}
              >
                Get Started
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  fontWeight: 700,
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: 'clamp(10px, 1.5vw, 14px) clamp(22px, 4vw, 30px)',
                  borderRadius: '8px',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                View Services
              </button>
            </div>

            {/* Benefits */}
            <div className="hero-benefits" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 'clamp(20px, 3vw, 30px)',
              paddingTop: 'clamp(20px, 3vw, 30px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Code2 size={20} style={{ color: 'var(--accent-primary)', marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <div className="body-sm" style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Clean Code</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Maintainable & scalable</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Zap size={20} style={{ color: 'var(--accent-primary)', marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <div className="body-sm" style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Fast Build</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Weeks, not months</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Shield size={20} style={{ color: 'var(--accent-primary)', marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <div className="body-sm" style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Secure & Reliable</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Enterprise grade</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="hero-visual" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
            perspective: '1000px'
          }}>
            <div className="hero-card" style={{
              width: '100%',
              maxWidth: '400px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '20px',
              padding: 'clamp(40px, 8vw, 60px)',
              backdropFilter: 'blur(10px)',
              transform: 'rotateY(-5deg) rotateX(2deg)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Card Inner Glow */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.2), transparent 70%)',
                pointerEvents: 'none'
              }} />

              {/* Card Content */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sparkles size={32} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                    Ready to Transform?
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '20px', lineHeight: '1.6' }}>
                    Let's discuss your project and how we can help you achieve your goals.
                  </p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    style={{
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      padding: '10px 16px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(16, 185, 129, 0.3)';
                      e.target.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(16, 185, 129, 0.2)';
                      e.target.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                    }}
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
