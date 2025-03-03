import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders GetWeather header', () => {
  render(<Header />);
  expect(screen.getByText(/GetWeather/i)).toBeInTheDocument();
});