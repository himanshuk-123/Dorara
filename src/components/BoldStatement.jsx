import React from 'react';

const BoldStatement = () => {
  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 120px) 0',
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Gradient Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.15), transparent 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1,
        textAlign: 'center' 
      }}>
        {/* Main Bold Statement */}
        <h2 style={{
          fontSize: '80px',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          color: 'var(--text-primary)'
        }}>
          Faster. <span className="text-gradient">Smarter.</span>
        </h2>

        {/* Subtext */}
        <p className="body-lg" style={{
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '20px'
        }}>
          Use our service to significantly lower user friction, 
          and facilitate more transactions.
        </p>
      </div>

      {/* Responsive Typography */}
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BoldStatement;
