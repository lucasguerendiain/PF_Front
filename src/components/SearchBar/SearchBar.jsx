import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { getPackageByName } from '../../redux/actions/packageActions';
import { getActivityByName } from '../../redux/actions/ActivitiesActions';
import { getHotelByName } from '../../redux/actions/HotelesActions';
import { getRestaurantByName } from '../../redux/actions/RestaurantsActions';

const SearchBar = (dondeEstoy) => {
  const { ubicacion } = dondeEstoy;
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
    switch(ubicacion){
      case "activity":  
      dispatch(getActivityByName(e.target.value))
      break;
      case "package": 
      dispatch(getPackageByName(e.target.value))
      break;
      case "hotel": 
      dispatch(getHotelByName(e.target.value))
      break;
      case "restaurant": 
      dispatch(getRestaurantByName(e.target.value))
      break;
      default: e.preventDefault();
    }

  return (
    <form onSubmit={handleSearch} className='search-box'>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
        placeholder='Busca destinos, hoteles, actividades...'
        className='search-bar-input'
      />
      <button
        type='submit'
        className='search-bar-button'
      >
        <FontAwesomeIcon icon={faSearch} size='2x' />
      </button>
    </form>
  );
};
}

export default SearchBar;
