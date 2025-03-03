import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

const mockWeatherData = {
  name: 'Kyiv',
  main: { temp: 15, humidity: 60 },
  wind: { speed: 5 },
  weather: [{ description: 'clear sky' }],
};

test('displays weather data correctly', () => {
  render(<WeatherCard weatherData={mockWeatherData} />);

  expect(screen.getByText(/Kyiv/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature: 15°C/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity: 60%/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed: 5 km/h/i)).toBeInTheDocument();
});