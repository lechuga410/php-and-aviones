import React from 'react';
import airbusA320 from '../../img/airbus_A320.jfif';
import boeing747 from '../../img/boeing_747.jfif';
import boeing787 from '../../img/boeing_787_dreamliner.jfif';
import boeing787_2 from '../../img/boeing_787_dreamliner_2_img.jfif';

function Aviones() {
  return (
    <section id="aviones" className="section">
      <h2>Aviones Que Me Fascinan</h2>
      <div className="galeria-aviones">
        <div className="avion-item">
          <img src={airbusA320} alt="Airbus A320" />
          <div className="descripcion">
            <h3>El Airbus A320</h3>
            <p>Este avión es increíble porque tiene la tecnología más avanzada en su cabina de cristal. 
               Puede transportar hasta 180 pasajeros y es muy eficiente en consumo de combustible.
               ¡Es uno de mis favoritos por su diseño moderno!</p>
          </div>
        </div>

        <div className="avion-item">
          <img src={boeing747} alt="Boeing 747" />
          <div className="descripcion">
            <h3>El Majestuoso Boeing 747</h3>
            <p>El "Rey de los Cielos" como lo llaman, ¡y con razón! 
               Su característica joroba lo hace inconfundible.
               Este gigante puede llevar hasta 366 pasajeros y 
               ha estado volando por más de 50 años.</p>
          </div>
        </div>

        <div className="avion-item">
          <img src={boeing787} alt="Boeing 787 Dreamliner" />
          <div className="descripcion">
            <h3>El Moderno Boeing 787 Dreamliner</h3>
            <p>¡Este avión es el futuro! Sus alas flexibles y su construcción en materiales compuestos
               lo hacen súper eficiente. Me encanta cómo sus ventanas se oscurecen electrónicamente
               y su diseño aerodinámico.</p>
          </div>
        </div>

        <div className="avion-item">
          <img src={boeing787_2} alt="Interior del Boeing 787" />
          <div className="descripcion">
            <h3>El Dreamliner Por Dentro</h3>
            <p>¡Mira qué espectacular es el interior! Las ventanas son un 30% más grandes que 
               las de otros aviones, la iluminación ambiental LED es relajante y la presurización 
               es más confortable para los pasajeros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aviones;