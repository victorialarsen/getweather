import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return <p>No data available</p>;

  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;