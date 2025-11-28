import React from 'react';
import { MapContainer, TileLayer, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/maparutas.css';

const MapaRutas = () => {
  // Coordenadas de algunas rutas principales de Avianca
  const rutas = [
    {
      nombre: "Bogotá - Madrid",
      coordenadas: [
        [4.7016, -74.1469], // Bogotá
        [40.4936, -3.5668]  // Madrid
      ],
      aeropuertoSalida: "Aeropuerto Internacional El Dorado (BOG)",
      aeropuertoLlegada: "Aeropuerto Adolfo Suárez Madrid-Barajas (MAD)",
      avion: "Boeing 787-8 Dreamliner",
      duracion: "~10 horas"
    },
    {
      nombre: "Bogotá - Nueva York",
      coordenadas: [
        [4.7016, -74.1469],  // Bogotá
        [40.6413, -73.7781]  // Nueva York JFK
      ],
      aeropuertoSalida: "Aeropuerto Internacional El Dorado (BOG)",
      aeropuertoLlegada: "Aeropuerto Internacional John F. Kennedy (JFK)",
      avion: "Boeing 787-9 Dreamliner",
      duracion: "~6 horas"
    },
    {
      nombre: "Bogotá - Los Ángeles",
      coordenadas: [
        [4.7016, -74.1469],  // Bogotá
        [33.9416, -118.4085] // Los Ángeles
      ],
      aeropuertoSalida: "Aeropuerto Internacional El Dorado (BOG)",
      aeropuertoLlegada: "Aeropuerto Internacional de Los Ángeles (LAX)",
      avion: "Boeing 787-8 Dreamliner",
      duracion: "~8 horas"
    },
    {
      nombre: "Bogotá - São Paulo",
      coordenadas: [
        [4.7016, -74.1469],  // Bogotá
        [-23.4356, -46.4731] // São Paulo
      ],
      aeropuertoSalida: "Aeropuerto Internacional El Dorado (BOG)",
      aeropuertoLlegada: "Aeropuerto Internacional de São Paulo-Guarulhos (GRU)",
      avion: "Airbus A320",
      duracion: "~6 horas"
    }
  ];

  return (
    <div className="mapa-container">
      <h2>Rutas Principales de Avianca</h2>
      <p className="mapa-descripcion">
        Estas son algunas de las rutas internacionales más importantes que operan los pilotos de Avianca.
        Como futuro piloto, podría tener la oportunidad de volar estas y muchas otras rutas emocionantes.
      </p>
      <MapContainer
        center={[4.7016, -74.1469]}
        zoom={3}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {rutas.map((ruta, index) => (
          <Polyline
            key={index}
            positions={ruta.coordenadas}
            color="red"
            weight={2}
          >
            <Popup>
              <div className="ruta-popup">
                <h3>{ruta.nombre}</h3>
                <p><strong>Salida:</strong> {ruta.aeropuertoSalida}</p>
                <p><strong>Llegada:</strong> {ruta.aeropuertoLlegada}</p>
                <p><strong>Aeronave:</strong> {ruta.avion}</p>
                <p><strong>Duración:</strong> {ruta.duracion}</p>
              </div>
            </Popup>
          </Polyline>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaRutas;