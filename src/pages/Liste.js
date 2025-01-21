import React, { useState, useEffect, useMemo } from 'react';
import { fetchWeather } from '../api'; // Assure-toi que cette fonction existe et fonctionne correctement
import { Link } from 'react-router-dom';

const Liste = () => {
  const [city, setCity] = useState(''); // Ville entrée par l'utilisateur
  const [weatherList, setWeatherList] = useState([]); // Liste des villes avec météo
  const [search, setSearch] = useState(''); // Filtre de recherche
  const [error, setError] = useState(null); // Message d'erreur
  const [isLoading, setIsLoading] = useState(false); // État de chargement

  // Fonction pour ajouter une ville et récupérer ses données météo
  const handleAddCity = () => {
    if (city.trim() === '') {
      setError('Veuillez entrer une ville valide.');
      return;
    }

    // Vérifie si la ville est déjà dans la liste
    if (weatherList.some((item) => item.name.toLowerCase() === city.toLowerCase())) {
      setError('Cette ville est déjà dans la liste.');
      return;
    }

    setIsLoading(true); // Active le loader
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
        setError(null); // Réinitialiser les erreurs
      })
      .catch((error) => {
        setError('Ville introuvable ou erreur lors de l’appel API.');
        console.error('Erreur lors de l’appel API :', error);
      })
      .finally(() => {
        setIsLoading(false); // Désactive le loader
      });
  };

  // Filtrage des villes
  const filteredList = useMemo(() => {
    return weatherList.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, weatherList]);

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h1>Liste des villes</h1>

      {/* Ajouter une ville */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Entrez une ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddCity}>
          Ajouter
        </button>
      </div>

      {/* Affichage d'un message d'erreur */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Loader */}
      {isLoading && <p>Chargement...</p>}

      {/* Champ de recherche */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher une ville"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Affichage des villes */}
      <ul className="list-group">
        {filteredList.map((item, index) => (
          <li key={index} className="list-group-item">
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
