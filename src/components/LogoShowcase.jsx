import React from 'react';

const LogoShowcase = () => {
  // Placeholder company logos - can be replaced with real client logos
  const companies = [
    { name: 'HubSpot', width: '120px' },
    { name: 'Amazon', width: '100px' },
    { name: 'Airbnb', width: '110px' },
    { name: 'Canon', width: '100px' },
    { name: 'Stripe', width: '90px' },
    { name: 'Figma', width: '85px' }
  ];

  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 80px) 0',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(32px, 6vw, 48px)'
        }}>
          <p className="body-md" style={{ 
            color: 'var(--text-muted)',
            fontWeight: 500
          }}>
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Logo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(32px, 5vw, 48px)',
          alignItems: 'center',
          justifyItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {companies.map((company, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.5,
              transition: 'opacity 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.5';
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.5px'
              }}>
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
