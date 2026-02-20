import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 120px) 0',
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218, 255, 1, 0.1), transparent 70%)',
        filter: 'blur(60px)',
        transform: 'translateY(-50%)'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(127, 74, 142, 0.08), transparent 70%)',
        filter: 'blur(60px)',
        transform: 'translateY(-50%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 80px) clamp(32px, 5vw, 48px)',
          background: 'linear-gradient(135deg, var(--bg-primary) 0%, rgba(26, 28, 30, 0.8) 100%)',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top accent line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)'
          }} />

          {/* Content */}
          <h2 className="display-md" style={{ 
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            Have an Idea?{' '}
            <span style={{ color: 'var(--accent-primary)' }}>
              Let's Build It Together.
            </span>
          </h2>

          <p className="body-lg" style={{ 
            marginBottom: 'clamp(32px, 6vw, 48px)',
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}>
            From MVP to enterprise solutions, we turn your vision into reality. 
            Schedule a free consultation and let's discuss how we can help your business grow.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              className="btn-primary"
              onClick={scrollToContact}
              style={{
                fontSize: '18px',
                padding: '18px 40px',
                minHeight: '56px'
              }}
            >
              <Calendar size={22} />
              Book Free Consultation
            </button>
            <button 
              className="btn-secondary"
              onClick={scrollToContact}
              style={{
                fontSize: '18px',
                padding: '16px 38px',
                minHeight: '56px'
              }}
            >
              Get Started
              <ArrowRight size={22} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{
            marginTop: 'clamp(32px, 6vw, 48px)',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: 'clamp(24px, 4vw, 48px)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div>
              <div className="h2" style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>
                48h
              </div>
              <div className="body-sm">Response Time</div>
            </div>
            <div>
              <div className="h2" style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>
                Free
              </div>
              <div className="body-sm">Consultation</div>
            </div>
            <div>
              <div className="h2" style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>
                100%
              </div>
              <div className="body-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
