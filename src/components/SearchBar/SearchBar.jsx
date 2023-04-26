import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para realizar la búsqueda
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Busca destinos, hoteles, actividades..."
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>
    </form>
  );
};

export default SearchBar;