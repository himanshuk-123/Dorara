import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      background: 'var(--bg-primary)'
    }}>
      {/* Background Gradient Glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15), transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Gradient Card Container - Astra Style */}
        <div className="gradient-card" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Decorative Corner Elements */}
          <div style={{
            position: 'absolute',
            top: 'clamp(16px, 3vw, 20px)',
            right: 'clamp(16px, 3vw, 20px)',
            width: 'clamp(60px, 10vw, 100px)',
            height: 'clamp(60px, 10vw, 100px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            transform: 'rotate(45deg)',
            opacity: 0.3
          }} />
          <div style={{
            position: 'absolute',
            bottom: 'clamp(16px, 3vw, 20px)',
            left: 'clamp(16px, 3vw, 20px)',
            width: 'clamp(60px, 10vw, 80px)',
            height: 'clamp(60px, 10vw, 80px)',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            transform: 'rotate(-15deg)',
            opacity: 0.3
          }} />

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            padding: 'clamp(8px, 1vw, 8px) clamp(16px, 3vw, 24px)',
            marginBottom: 'clamp(20px, 4vw, 32px)'
          }}>
            <Sparkles size={16} style={{ color: '#fff' }} />
            <span className="body-sm" style={{ 
              color: '#fff', 
              fontWeight: 600
            }}>
              Powering Digital Transformation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="display-lg" style={{ 
            marginBottom: 'clamp(16px, 3vw, 24px)',
            color: '#fff'
          }}>
            Enterprise Software & AI Solutions That Scale
          </h1>

          {/* Subtext */}
          <p className="body-lg" style={{ 
            marginBottom: 'clamp(32px, 6vw, 48px)',
            maxWidth: '700px',
            margin: '0 auto clamp(32px, 6vw, 48px)',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Custom web & mobile apps, intelligent AI agents, data-driven solutions, and enterprise software—
            all built for growth, security, and performance.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: 'clamp(12px, 2vw, 16px)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: 'rgb(6, 78, 59)',
                fontWeight: 700
              }}
            >
              Get Started
              <ArrowRight size={20} />
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('services')}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#fff'
              }}
            >
              View Services
            </button>
          </div>
        </div>

        {/* Trust Indicators Below Card */}
        {/* <div style={{
          display: 'flex',
          gap: 'clamp(40px, 8vw, 64px)',
          marginTop: 'clamp(40px, 8vw, 64px)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div className="h1" style={{ color: 'var(--accent-primary)' }}>50+</div>
            <div className="body-sm">Enterprise Clients</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="h1" style={{ color: 'var(--accent-primary)' }}>200+</div>
            <div className="body-sm">Solutions Deployed</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="h1" style={{ color: 'var(--accent-primary)' }}>99.9%</div>
            <div className="body-sm">Uptime Guarantee</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
