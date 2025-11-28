import React, { useState, useEffect } from 'react';
import '../styles/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Detectar sección activa
      const sections = ['historia', 'aviones', 'sueno'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">✈️</span>
          <h1>Pasión por la Aviación</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#historia" className={activeSection === 'historia' ? 'active' : ''}>
                <span className="nav-icon">📚</span>
                Historia
              </a>
            </li>
            <li>
              <a href="#aviones" className={activeSection === 'aviones' ? 'active' : ''}>
                <span className="nav-icon">🛩️</span>
                Aviones
              </a>
            </li>
            <li>
              <a href="#sueno" className={activeSection === 'sueno' ? 'active' : ''}>
                <span className="nav-icon">💫</span>
                Mi Sueño
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-decoration">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="plane-animation"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;