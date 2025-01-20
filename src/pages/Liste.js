import React, { useState, useEffect, useMemo } from 'react';
import { fetchWeather } from '../api'; // Assure-toi que cette fonction existe et fonctionne correctement
import { Link } from 'react-router-dom';

const Liste = () => {
  const [city, setCity] = useState(''); // Ville entrée par l'utilisateur
  const [weatherList, setWeatherList] = useState([]); // Liste des villes avec météo
  const [search, setSearch] = useState(''); // Filtre de recherche

  // Fonction pour ajouter une ville et récupérer ses données météo
  const handleAddCity = () => {
    if (city.trim() === '') {
      alert('Veuillez entrer une ville valide.');
      return;
    }

    fetchWeather(city)
      .then((data) => {
        // Ajouter la météo de la ville à la liste
        setWeatherList((prevList) => [
          ...prevList,
          {
            name: city,
            temp: data.current_condition[0].temp_C,
            condition: data.current_condition[0].weatherDesc[0].value,
          },
        ]);
        setCity(''); // Réinitialiser le champ de saisie
      })
      .catch((error) => console.error('Erreur lors de l’appel API :', error));
  };

  // Filtrage des villes
  const filteredList = useMemo(() => {
    return weatherList.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, weatherList]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Liste des villes</h1>
      
      {/* Ajouter une ville */}
      <div>
        <input
          type="text"
          placeholder="Entrez une ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleAddCity}>Ajouter</button>
      </div>

      {/* Champ de recherche */}
      <div>
        <input
          type="text"
          placeholder="Rechercher une ville"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Affichage des villes */}
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>
            <Link to={`/detail/${item.name}`}>
              {item.name} : {item.temp}°C ({item.condition})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Liste;

