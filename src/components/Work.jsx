import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Built a scalable e-commerce platform with React and Node.js, handling 10K+ daily users with seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW58ZW58MHx8fHwxNzcxNDIzMjc2fDA&ixlib=rb-4.1.0&q=85',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile app for patient management and telemedicine with real-time video consultations.',
      image: 'https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg',
      tags: ['React Native', 'Firebase', 'WebRTC']
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI & Automation',
      description: 'Intelligent dashboard with predictive analytics and automated reporting using machine learning models.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc3MTQyMzI1OHww&ixlib=rb-4.1.0&q=85',
      tags: ['Python', 'OpenAI', 'React', 'PostgreSQL']
    }
  ];

  return (
    <section id="work" style={{
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
            Selected Work (Showcase)
          </div>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Featured Project Showcases
          </h2>
          <p className="body-lg">
            Concept and demo projects that highlight our capabilities across web, mobile, and AI solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="feature-card animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`,
              padding: 0,
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              {/* Project Image */}
              <div style={{
                width: '100%',
                height: '220px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '6px 12px',
                  background: 'rgba(17, 17, 19, 0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--accent-primary)'
                }}>
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: '32px' }}>
                <h3 className="h2" style={{ marginBottom: '12px' }}>
                  {project.title}
                </h3>
                <p className="body-md" style={{ marginBottom: '20px' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      padding: '4px 12px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      fontWeight: 500
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  fontSize: '14px',
                  transition: 'gap 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '8px';
                }}>
                  View Case Study
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about samples */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(32px, 6vw, 48px)',
          padding: '24px',
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--border-subtle)'
        }}>
          <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
            Note: These are showcase examples for demonstration purposes only.
          </p>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(40px, 8vw, 64px)'
        }}>
          <p className="body-lg" style={{ marginBottom: '24px' }}>
            Want to see your project here?
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
