import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';


test('allows user to type city and trigger search', () => {
  const mockSearch = jest.fn();
  render(<SearchBar onSearch={mockSearch} />);

  const input = screen.getByPlaceholderText(/Enter city/i);
  fireEvent.change(input, { target: { value: 'Kyiv' } });

  const button = screen.getByText(/Search/i);
  fireEvent.click(button);

  expect(mockSearch).toHaveBeenCalledWith('Kyiv');
});