import React from 'react';

const WeatherCard = ({ name, temp, condition, onDelete, onFavorite }) => (
  <div className="card" style={{ width: '18rem', margin: '10px' }}>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{temp}°C - {condition}</p>
      <button className="btn btn-danger" onClick={onDelete}>Supprimer</button>
      <button className="btn btn-warning" onClick={onFavorite}>Favori</button>
    </div>
  </div>
);

export default WeatherCard;
