import React from 'react';
import { useState, useEffect } from 'react';
import { Box, MenuItem, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterActivities,
  getAllActivity,
  clearError,
} from '../../redux/actions/ActivitiesActions';


export default function FilterActivity(activities) {
  const [filter, setFilter] = useState({
    type: "",
    priceMin: "",
    priceMax: "",
    durationMin: "",
    durationMax: "",
    order: "",
  });
  const error = useSelector((state) => state.activities.error);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      filter.priceMin &&
      filter.priceMax &&
      Number(filter.priceMin) > Number(filter.priceMax)
    ) {
      alert("El precio minimo no puede ser mayor que el precio maximo")
      return
    }
    if (
      filter.durationMin &&
      filter.durationMax &&
      Number(filter.durationMin) > Number(filter.durationMax)
    ) {
      alert('La duracion minima no puede ser mayor a la duracion maxima');
      return
    }

    dispatch(getFilterActivities(activities, filter));
  };

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, []);

  const handleOnClick = (e) => {
    dispatch(getAllActivity());
  };

  return (
    <Box
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextField
        sx={{ width: '200px', marginInline: '10px' }}
        label='Tipo de Actividad'
        name='type'
        select
        value={filter.type}
        onChange={handleChange}
        required
      >
        <MenuItem value="">Vaciar</MenuItem>
        <MenuItem value='treking'>Treking </MenuItem>
        <MenuItem value='bike'>Bike</MenuItem>
        <MenuItem value='travel'>Travel</MenuItem>
        <MenuItem value='relax'>Relax</MenuItem>
        <MenuItem value='show'>Show</MenuItem>
      </TextField>

      <TextField
        sx={{ marginInline: '10px' }}
        name='priceMin'
        id='priceMin'
        label='Precio minimo'
        value={filter.priceMin}
        type='number'
        required
        onChange={handleChange}
      />
      <TextField
        sx={{ marginInline: '10px' }}
        name='priceMax'
        id='priceMax'
        label='Precio maximo'
        value={filter.priceMax}
        type='number'
        required
        onChange={handleChange}
      />
      <TextField
        sx={{ marginInline: '10px' }}
        name='durationMin'
        id='durationMin'
        label='Duracion minima'
        value={filter.durationMin}
        type='number'
        required
        onChange={handleChange}
      />
      <TextField
        sx={{ marginInline: '10px' }}
        name='durationMax'
        id='durationMax'
        label='Duracion maxima'
        value={filter.durationMax}
        type='number'
        required
        onChange={handleChange}
      />
      <TextField
        sx={{ width: '200px', marginInline: '10px' }}
        label='Ordenar por'
        name='order'
        select
        value={filter.order}
        onChange={handleChange}
        required
      >
        <MenuItem value="">Vaciar</MenuItem>
        <MenuItem value='priceMax'>Mas Caras</MenuItem>
        <MenuItem value='priceMin'>Mas Baratas</MenuItem>
        <MenuItem value='durationMax'>Mas Largas</MenuItem>
        <MenuItem value='durationMin'>Mas Cortas</MenuItem>
        <MenuItem value='bestRating'>Mejor Puntuadas</MenuItem>
      </TextField>
      <Button
        sx={{ marginInline: '10px', mt: 3, mb: 2 }}
        type='submit'
        variant='contained'
        onClick={handleSubmit}
      >
        Filtrar
      </Button>
      <Button
        sx={{ marginInline: '10px', mt: 3, mb: 2 }}
        variant='contained'
        onClick={handleOnClick}
      >
        Todos
      </Button>
    </Box>
  );
}
