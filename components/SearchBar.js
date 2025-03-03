import React from 'react';
import './SearchBar.css';
const SearchBar = ({ onSearch }) => {
  const [city, setCity] = React.useState('');
  
  const handleSearch = () => {
    onSearch(city);
  };
  
  return (
    <div>
      <input type="text" placeholder="Enter city..." value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;