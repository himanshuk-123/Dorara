import React from 'react';
import { Zap, Code, Target, MessageSquare, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising quality. Agile methodology ensures quick iterations.'
    },
    {
      icon: Code,
      title: 'Clean & Scalable Code',
      description: 'We write maintainable, well-documented code following industry best practices and standards.'
    },
    {
      icon: Target,
      title: 'Business-Focused Solutions',
      description: 'We understand your business goals and build solutions that drive real results and ROI.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Regular updates, clear documentation, and open communication throughout the project lifecycle.'
    },
    {
      icon: Shield,
      title: 'Long-Term Support',
      description: 'We don\'t just deliver and disappear. Ongoing support and maintenance to ensure your success.'
    }
  ];

  return (
    <section id="about" style={{
      padding: 'clamp(48px, 8vw, 120px) 0',
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating 3D Card */}
      <div className="floating-card" style={{
        position: 'absolute',
        right: '10%',
        top: '20%',
        width: '280px',
        height: '180px',
        background: 'var(--gradient-primary)',
        borderRadius: '20px',
        opacity: 0.2,
        transform: 'rotate(-15deg) perspective(800px) rotateY(20deg)',
        boxShadow: '0 30px 60px rgba(16, 185, 129, 0.3)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{
          maxWidth: '500px',
          marginBottom: 'clamp(40px, 8vw, 64px)'
        }}>
          <div className="body-sm" style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Optimized For Security
          </div>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Why Choose <span className="text-gradient">Our Services</span>
          </h2>
          <p className="body-lg">
            Designed with a focus on security, we apply battle-tested encryption protocols, 
            regular security reviews, and advanced authentication measures.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1100px'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-card animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`,
              display: 'flex',
              gap: '20px'
            }}>
              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--accent-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <benefit.icon size={24} style={{ color: 'var(--accent-primary)' }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 className="h3" style={{ marginBottom: '8px' }}>
                  {benefit.title}
                </h3>
                <p className="body-md">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
