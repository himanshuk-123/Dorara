import React, { useState } from 'react';
import { Globe, Smartphone, Bot, Palette, ChevronRight } from 'lucide-react';

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build fast, responsive, and scalable web applications using React, Next.js, and modern frameworks.',
      details: 'We create high-performance web applications with clean architecture, SEO optimization, and seamless user experiences. From landing pages to complex SaaS platforms.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
      details: 'Deliver beautiful, performant mobile applications that users love. We handle everything from design to deployment on both app stores.',
      technologies: ['React Native', 'Android', 'iOS', 'Flutter']
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions powered by AI, LLMs, and machine learning technologies.',
      details: 'Leverage cutting-edge AI to automate workflows, analyze data, and create intelligent chatbots that transform your business operations.',
      technologies: ['OpenAI', 'Python', 'LangChain', 'GPT-4']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that convert visitors into customers.',
      details: 'Design systems that scale. We create pixel-perfect interfaces with user research, prototyping, and continuous iteration.',
      technologies: ['Figma', 'Design Systems', 'User Research']
    }
  ];

  return (
    <section id="services" style={{
      padding: 'clamp(48px, 8vw, 120px) 0',
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Gradient */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
            Our Services
          </div>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Simplify Your Development{' '}
            <span className="text-gradient">With Our Services</span>
          </h2>
          <p className="body-lg">
            Outcome-focused solutions tailored to your business goals, delivered with clear timelines and measurable impact.
          </p>
        </div>

        {/* Services Grid with Accordion Style */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: openIndex === index ? 'var(--bg-primary)' : 'var(--bg-tertiary)',
              border: `1px solid ${openIndex === index ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => setOpenIndex(index)}>
              {/* Header */}
              <div style={{
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  flex: 1
                }}>
                  {/* Icon */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: openIndex === index ? 'var(--accent-bg)' : 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <service.icon size={24} style={{ 
                      color: openIndex === index ? 'var(--accent-primary)' : 'var(--text-muted)' 
                    }} />
                  </div>

                  {/* Title & Description */}
                  <div style={{ flex: 1 }}>
                    <h3 className="h3" style={{ marginBottom: '4px' }}>
                      {service.title}
                    </h3>
                    {openIndex !== index && (
                      <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight 
                  size={24} 
                  style={{ 
                    color: openIndex === index ? 'var(--accent-primary)' : 'var(--text-muted)',
                    transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'all 0.3s ease'
                  }} 
                />
              </div>

              {/* Expanded Content */}
              {openIndex === index && (
                <div style={{
                  padding: '0 32px 32px',
                  animation: 'slideDown 0.3s ease'
                }}>
                  <p className="body-md" style={{ 
                    marginBottom: '20px',
                    color: 'var(--text-secondary)'
                  }}>
                    {service.details}
                  </p>
                  
                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {service.technologies.map((tech, i) => (
                      <span key={i} style={{
                        padding: '6px 14px',
                        background: 'var(--accent-bg)',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: '8px',
                        fontSize: '13px',
                        color: 'var(--accent-primary)',
                        fontWeight: 600
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating 3D Element */}
        <div className="floating-card" style={{
          position: 'absolute',
          right: '5%',
          top: '40%',
          width: '200px',
          height: '200px',
          background: 'var(--gradient-primary)',
          borderRadius: '20px',
          opacity: 0.15,
          transform: 'rotate(25deg)',
          pointerEvents: 'none'
        }} />
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
