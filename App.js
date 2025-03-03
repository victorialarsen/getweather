import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default App;