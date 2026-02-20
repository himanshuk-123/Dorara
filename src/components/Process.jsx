import React from 'react';
import { MessageCircle, Lightbulb, Code2, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Requirement Discussion',
      description: 'We start by understanding your goals, target audience, and project requirements in detail.'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Design & Planning',
      description: 'Create wireframes, mockups, and technical architecture that aligns with your vision.'
    },
    {
      icon: Code2,
      number: '03',
      title: 'Development',
      description: 'Build your product using modern technologies with clean, scalable, and maintainable code.'
    },
    {
      icon: TestTube,
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers to ensure flawless functionality.'
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Launch & Support',
      description: 'Deploy to production and provide ongoing support, updates, and maintenance.'
    }
  ];

  return (
    <section style={{
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
            Our Process
          </div>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            How We Work With You
          </h2>
          <p className="body-lg">
            A streamlined approach from concept to launch, ensuring success at every stage
          </p>
        </div>

        {/* Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {steps.map((step, index) => (
            <div key={index} className="animate-fade-in" style={{
              position: 'relative',
              padding: '32px',
              background: 'var(--bg-secondary)',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.3s ease',
              animationDelay: `${index * 0.1}s`
            }}>
              {/* Step Number */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '48px',
                fontWeight: 700,
                color: 'var(--border-primary)',
                lineHeight: 1
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'var(--accent-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <step.icon size={28} style={{ color: 'var(--accent-primary)' }} />
              </div>

              {/* Content */}
              <h3 className="h3" style={{ marginBottom: '12px' }}>
                {step.title}
              </h3>
              <p className="body-md">
                {step.description}
              </p>

              {/* Connector Line - Hide on mobile and last item */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-16px',
                  width: '32px',
                  height: '2px',
                  background: 'var(--border-subtle)',
                  display: 'none'
                }} className="connector-line" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(40px, 8vw, 64px)'
        }}>
          <p className="body-lg" style={{ marginBottom: '24px' }}>
            Ready to start your project?
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .connector-line {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
