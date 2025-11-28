import React from 'react';
import './App.css';
import Header from './components/javascript/Header';
import Historia from './components/javascript/Historia';
import Aviones from './components/javascript/Aviones';
import Avianca from './components/javascript/Avianca';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <Historia />
        
        <Aviones />
        
        <Avianca />

        <section id="sueno" className="section">
          <h2>Mi Sueño de Ser Piloto</h2>
          <div className="sueno-container">
            <div className="pasos-grid">
              <div className="paso-card">
                <h4>Formación Académica</h4>
                <p>Bachillerato científico y estudios específicos de aviación.</p>
              </div>
              <div className="paso-card">
                <h4>Licencias</h4>
                <p>PPL (Licencia de Piloto Privado) y CPL (Licencia de Piloto Comercial).</p>
              </div>
              <div className="paso-card">
                <h4>Experiencia de Vuelo</h4>
                <p>Acumulación de horas de vuelo y prácticas en simulador.</p>
              </div>
              <div className="paso-card">
                <h4>Especialización</h4>
                <p>Elección entre aviación comercial, privada o militar.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Pasión por la Aviación - Persiguiendo el sueño de volar</p>
      </footer>
    </div>
  );
}

export default App;