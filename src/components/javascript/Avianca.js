import React from 'react';
import MapaRutas from './MapaRutas';
import '../styles/avianca.css';

function Avianca() {
  return (
    <section id="avianca" className="section">
      <h2>Mi Meta: Avianca</h2>
      <div className="avianca-container">
        <div className="avianca-historia">
          <h3>Sobre Avianca</h3>
          <p>
            Avianca, fundada en 1919, es la segunda aerolínea más antigua del mundo y la más antigua 
            en América. Con su sede principal en Bogotá, Colombia, es una de las aerolíneas más 
            importantes de América Latina.
          </p>
          <div className="avianca-datos">
            <div className="dato">
              <h4>Fundación</h4>
              <p>5 de diciembre de 1919</p>
            </div>
            <div className="dato">
              <h4>Hub Principal</h4>
              <p>Aeropuerto Internacional El Dorado, Bogotá</p>
            </div>
            <div className="dato">
              <h4>Flota</h4>
              <p>Más de 100 aeronaves modernas</p>
            </div>
          </div>
        </div>

        <div className="por-que-avianca">
          <h3>¿Por qué Quiero Ser Parte de Avianca?</h3>
          <div className="razones">
            <div className="razon">
              <h4>Legado Histórico</h4>
              <p>Ser parte de una aerolínea centenaria con una rica historia en la aviación latinoamericana.</p>
            </div>
            <div className="razon">
              <h4>Innovación Constante</h4>
              <p>Avianca siempre está a la vanguardia en tecnología y servicios para sus pasajeros.</p>
            </div>
            <div className="razon">
              <h4>Flota Moderna</h4>
              <p>Operan aeronaves modernas como el A320neo y Boeing 787 Dreamliner.</p>
            </div>
            <div className="razon">
              <h4>Desarrollo Profesional</h4>
              <p>Oportunidades de crecimiento y entrenamiento continuo para sus pilotos.</p>
            </div>
          </div>
        </div>

        <div className="mi-camino">
          <h3>Mi Camino Hacia Avianca</h3>
          <div className="pasos-avianca">
            <div className="paso">
              <span className="numero">1</span>
              <h4>Formación Necesaria</h4>
              <p>Obtener todas las licencias y certificaciones requeridas por la aerolínea.</p>
            </div>
            <div className="paso">
              <span className="numero">2</span>
              <h4>Horas de Vuelo</h4>
              <p>Acumular las horas de vuelo necesarias para aplicar como piloto comercial.</p>
            </div>
            <div className="paso">
              <span className="numero">3</span>
              <h4>Requisitos Específicos</h4>
              <p>Cumplir con los estándares y requisitos específicos de Avianca.</p>
            </div>
            <div className="paso">
              <span className="numero">4</span>
              <h4>Preparación Continua</h4>
              <p>Mantenerme actualizado en procedimientos y regulaciones aeronáuticas.</p>
            </div>
          </div>
        </div>

        <div className="rutas-avianca">
          <MapaRutas />
        </div>
      </div>
    </section>
  );
}

export default Avianca;