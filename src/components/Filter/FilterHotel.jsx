import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, MenuItem, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterHotels,
  getAllHotel,
  clearError,
} from '../../redux/actions/HotelesActions';

export default function FilterHotel(hoteles) {
  const [filter, setFilter] = useState({
    starsMin: undefined,
    starsMax: undefined,
    priceMin: undefined,
    priceMax: undefined,
    order: undefined,
  });
  const error = useSelector((state) => state.hoteles.error);
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
      filter.starsMin &&
      filter.starsMax &&
      Number(filter.starsMin) > Number(filter.starsMax)
    )
      alert(
        'Las estrellas minimas no pueden ser mayores que las estrellas maximas',
      );
    if (
      filter.priceMin &&
      filter.priceMax &&
      Number(filter.priceMin) > Number(filter.priceMax)
    )
      alert('El precio minimo no puede superar al precio maximo');

    dispatch(getFilterHotels(hoteles, filter));
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
    dispatch(getAllHotel());
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
        label='Minimo de estrellas'
        name='starsMin'
        select
        value={filter.starsMin}
        onChange={handleChange}
        required
      >
        <MenuItem value={undefined}>Vaciar</MenuItem>
        <MenuItem value='1'>1 Star</MenuItem>
        <MenuItem value='2'>2 Stars</MenuItem>
        <MenuItem value='3'>3 Stars</MenuItem>
        <MenuItem value='4'>4 Stars</MenuItem>
        <MenuItem value='5'>5 Stars</MenuItem>
      </TextField>

      <TextField
        sx={{ width: '200px', marginInline: '10px' }}
        label='Maximo de estrellas'
        name='starsMax'
        select
        value={filter.starsMax}
        onChange={handleChange}
        required
      >
        <MenuItem value={undefined}>Vaciar</MenuItem>
        <MenuItem value='1'>1 Start</MenuItem>
        <MenuItem value='2'>2 Stars</MenuItem>
        <MenuItem value='3'>3 Stars</MenuItem>
        <MenuItem value='4'>4 Stars</MenuItem>
        <MenuItem value='5'>5 Stars</MenuItem>
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
        sx={{ width: '200px', marginInline: '10px' }}
        label='Ordenar por'
        name='order'
        select
        value={filter.order}
        onChange={handleChange}
        required
      >
        <MenuItem value={undefined}>Vaciar</MenuItem>
        <MenuItem value='starsMax'>Mas Estrellas</MenuItem>
        <MenuItem value='starsMin'>Menos Estrellas</MenuItem>
        <MenuItem value='priceMax'>Mas Caros</MenuItem>
        <MenuItem value='priceMin'>Mas Baratos</MenuItem>
        <MenuItem value='bestRating'>Mejor Puntaje</MenuItem>
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
