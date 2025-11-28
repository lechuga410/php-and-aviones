import React from 'react';
import '../styles/misueno.css';

function MiSueno() {
  return (
    <section id="sueno" className="section">
      <h2>Mi Sueño de Ser Piloto</h2>
      <div className="content">
        <h3>El Camino para Convertirse en Piloto</h3>
        <div className="pasos">
          <div className="paso">
            <h4>1. Preparación Académica</h4>
            <p>Estudios necesarios y requisitos educativos</p>
          </div>
          <div className="paso">
            <h4>2. Licencias y Certificaciones</h4>
            <p>Desde la licencia de piloto privado hasta la comercial</p>
          </div>
          <div className="paso">
            <h4>3. Horas de Vuelo</h4>
            <p>Acumulación de experiencia y práctica</p>
          </div>
          <div className="paso">
            <h4>4. Especialización</h4>
            <p>Diferentes rutas profesionales en la aviación</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiSueno;