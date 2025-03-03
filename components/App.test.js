import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

test('fetches weather data and updates UI', async () => {
  const mockResponse = {
    data: {
      name: 'Kyiv',
      main: { temp: 20, humidity: 50 },
      wind: { speed: 4 },
      weather: [{ description: 'cloudy' }],
    },
  };
  axios.get.mockResolvedValue(mockResponse);

  render(<App />);
  
  const input = screen.getByPlaceholderText(/Enter city/i);
  fireEvent.change(input, { target: { value: 'Kyiv' } });
  const button = screen.getByText(/Search/i);
  fireEvent.click(button);

  expect(await screen.findByText(/Kyiv/i)).toBeInTheDocument();
  expect(await screen.findByText(/Temperature: 20°C/i)).toBeInTheDocument();
});