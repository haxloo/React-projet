import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Carte = () => {
  const villes = [
    { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'Lyon', lat: 45.764, lon: 4.8357 },
  ];

  return (
    <div style={{ height: '80vh', margin: '20px' }}>
      <MapContainer center={[48.8566, 2.3522]} zoom={5} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {villes.map((ville, index) => (
          <Marker key={index} position={[ville.lat, ville.lon]}>
            <Popup>
              {ville.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Carte;
