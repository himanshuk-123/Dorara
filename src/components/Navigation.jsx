import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../dorara-animated.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(10, 17, 20, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }} onClick={() => scrollToSection('home')}>
          {/* <span style={{ color: 'var(--accent-primary)' }}>Dorara</span> */}
          <img
            src={logo}
            alt="Dorara logo"
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="btn-ghost"
              style={{ padding: '8px 16px' }}
            >
              {link.name}
            </button>
          ))}
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" style={{
          display: 'none',
          background: 'rgba(15, 23, 27, 0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '24px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="btn-ghost"
                style={{ width: '100%', textAlign: 'left' }}
              >
                {link.name}
              </button>
            ))}
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              style={{ width: '100%' }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
