import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Python', 'FastAPI', 'Express', 'Django']
    },
    {
      category: 'Mobile',
      techs: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      category: 'AI & ML',
      techs: ['OpenAI', 'GPT-4', 'LangChain', 'TensorFlow', 'PyTorch']
    },
    {
      category: 'Database',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      category: 'Cloud & DevOps',
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD']
    }
  ];

  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 120px) 0',
      background: 'var(--bg-secondary)'
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
            Technology Stack
          </div>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Powered by Modern Technologies
          </h2>
          <p className="body-lg">
            We leverage cutting-edge tools and frameworks to build high-performance solutions
          </p>
        </div>

        {/* Tech Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {technologies.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{
              padding: '32px',
              background: 'var(--bg-primary)',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.3s ease',
              animationDelay: `${index * 0.1}s`
            }}>
              <h3 className="h3" style={{ 
                marginBottom: '20px',
                color: 'var(--accent-primary)'
              }}>
                {category.category}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {category.techs.map((tech, i) => (
                  <span key={i} style={{
                    padding: '8px 16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--accent-primary)';
                    e.target.style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border-subtle)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(40px, 8vw, 64px)',
          padding: '40px',
          background: 'var(--bg-primary)',
          borderRadius: '16px',
          border: '1px solid var(--border-subtle)'
        }}>
          <p className="body-lg" style={{ marginBottom: '8px' }}>
            Need a specific technology or framework?
          </p>
          <p className="body-md">
            We're always learning and adapting to new technologies. Let's discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
