import React from 'react';
import '../styles/historia.css';

function Historia() {
  return (
    <section id="historia" className="historia-section">
      <h2>Historia de la Aviación</h2>
      <div className="historia-content">
        <div className="historia-timeline">

          <div className="timeline-item">
            <h3>1903</h3>
            <p>Los hermanos Wright realizan el primer vuelo controlado y sostenido en Kitty Hawk, Carolina del Norte, durante 12 segundos y 37 metros.</p>
          </div>

          <div className="timeline-item">
            <h3>1914-1918</h3>
            <p>Primera Guerra Mundial: Rápido desarrollo de la tecnología aeronáutica. Se introducen los primeros aviones de combate y reconocimiento.</p>
          </div>

          <div className="timeline-item">
            <h3>1927</h3>
            <p>Charles Lindbergh completa el primer vuelo transatlántico en solitario sin escalas de Nueva York a París en el "Spirit of St. Louis".</p>
          </div>

          <div className="timeline-item">
            <h3>1939-1945</h3>
            <p>Segunda Guerra Mundial: Avances significativos en tecnología aeronáutica, incluyendo el primer avión a reacción operativo, el Messerschmitt Me 262.</p>
          </div>

          <div className="timeline-item">
            <h3>1947</h3>
            <p>Chuck Yeager rompe la barrera del sonido en el Bell X-1, alcanzando Mach 1.07 (1,127 km/h).</p>
          </div>

          <div className="timeline-item">
            <h3>1969</h3>
            <p>Primer vuelo del Boeing 747, revolucionando el transporte aéreo comercial. El "Jumbo Jet" se convierte en el rey de los cielos.</p>
          </div>

          <div className="timeline-item">
            <h3>1976</h3>
            <p>Primer vuelo del Concorde en servicio comercial, marcando la era de los vuelos supersónicos de pasajeros.</p>
          </div>

          <div className="timeline-item">
            <h3>2005</h3>
            <p>Primer vuelo del Airbus A380, el avión de pasajeros más grande del mundo, capaz de transportar hasta 853 pasajeros.</p>
          </div>

          <div className="timeline-item">
            <h3>2009</h3>
            <p>Primer vuelo del Boeing 787 Dreamliner, introduciendo nuevos estándares en eficiencia y confort para los pasajeros.</p>
          </div>

          <div className="timeline-item">
            <h3>2015</h3>
            <p>Solar Impulse 2 completa la primera vuelta al mundo en un avión propulsado únicamente por energía solar.</p>
          </div>

          <div className="timeline-item">
            <h3>2020</h3>
            <p>La pandemia de COVID-19 causa el mayor impacto en la historia de la aviación comercial, provocando cambios fundamentales en la industria.</p>
          </div>

          <div className="timeline-item">
            <h3>2021</h3>
            <p>Primer vuelo comercial con 100% de combustible sostenible (SAF) por United Airlines, marcando un hito en la aviación sostenible.</p>
          </div>

          <div className="timeline-item">
            <h3>2023</h3>
            <p>Boeing entrega el último 747 después de más de 50 años de producción, marcando el fin de una era en la aviación comercial.</p>
          </div>

          <div className="timeline-item">
            <h3>2024</h3>
            <p>Desarrollo acelerado de aeronaves eléctricas e híbridas para aviación regional, con empresas como Heart Aerospace y ZeroAvia liderando la revolución verde.</p>
          </div>

          <div className="timeline-item">
            <h3>2025</h3>
            <p>Implementación global de navegación basada en satélite (GNSS) y nuevos sistemas de gestión del tráfico aéreo para aumentar la eficiencia y reducir emisiones.</p>
          </div>
        </div>

        <div className="historia-resumen">
          <h3>Eras Principales de la Aviación</h3>
          <div className="historia-eras-grid">

            <div className="era-card">
              <h4>Era Pionera (1903-1914)</h4>
              <p>Primeros vuelos y experimentación básica en aerodinámica.</p>
            </div>
            <div className="era-card">
              <h4>Era de las Guerras (1914-1945)</h4>
              <p>Rápido desarrollo tecnológico impulsado por conflictos mundiales.</p>
            </div>
            <div className="era-card">
              <h4>Era Dorada (1945-1970)</h4>
              <p>Expansión de la aviación comercial y vuelos transcontinentales.</p>
            </div>
            <div className="era-card">
              <h4>Era del Jet (1970-2000)</h4>
              <p>Democratización del transporte aéreo y avances en eficiencia.</p>
            </div>
            <div className="era-card">
              <h4>Era Digital (2000-2020)</h4>
              <p>Integración de tecnologías digitales y automatización.</p>
            </div>
            <div className="era-card">
              <h4>Era Sostenible (2020-presente)</h4>
              <p>Foco en sostenibilidad, eficiencia y nuevas tecnologías verdes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Historia;