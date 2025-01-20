import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWeather } from '../api'; // Appel API centralisé

const Detail = () => {
  const { city } = useParams(); // Récupère la ville depuis l'URL
  const [weather, setWeather] = useState(null); // Données météo de la ville

  // Appel API pour récupérer les détails météo de la ville
  useEffect(() => {
    fetchWeather(city)
      .then((data) => setWeather(data))
      .catch((error) => console.error('Erreur lors de l’appel API :', error));
  }, [city]);

  // Affiche un message de chargement si les données ne sont pas encore disponibles
  if (!weather) return <p>Chargement des données...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Météo à {city}</h1>
      <p>Température : {weather.current_condition[0].temp_C}°C</p>
      <p>Humidité : {weather.current_condition[0].humidity}%</p>
      <p>Vent : {weather.current_condition[0].windspeedKmph} km/h</p>
      <p>Conditions : {weather.current_condition[0].weatherDesc[0].value}</p>
    </div>
  );
};

export default Detail;
