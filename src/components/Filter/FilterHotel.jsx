import React from "react";
import { useState, useEffect } from "react";
import { Box, Grid, MenuItem, TextField, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { getFilterHotels, getAllHotel } from "../../redux/actions/HotelesActions";


export default function FilterHotel(hoteles) {

    const [filter, setFilter] = useState({ starsMin: undefined, starsMax: undefined, priceMin: undefined, priceMax: undefined });
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFilter({
            ...filter,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         if (filter.starsMin > filter.starsMax || filter.priceMin > filter.priceMax) {
            alert("El minimo no puede superar al maximo")
         }else{
            dispatch(getFilterHotels(hoteles, filter));
         }
    }
    
    const handleOnClick = (e) => {
        dispatch(getAllHotel());
    }
    
    return (
        <Box onSubmit={handleSubmit}>

            <TextField
                label="Minimo de estrellas"
                name="starsMin"
                select
                value={filter.starsMin}
                onChange={handleChange}
                required
            >
                <MenuItem value="1">1 start</MenuItem>
                <MenuItem value="2">2 Starts</MenuItem>
                <MenuItem value="3">3 Starts</MenuItem>
                <MenuItem value="4">4 Starts</MenuItem>
                <MenuItem value="5">5 Starts</MenuItem>
            </TextField>


            <TextField
                label="Miaximo de estrellas"
                name="starsMax"
                select
                value={filter.starsMax}
                onChange={handleChange}
                required
            >
                <MenuItem value="1">1 start</MenuItem>
                <MenuItem value="2">2 Starts</MenuItem>
                <MenuItem value="3">3 Starts</MenuItem>
                <MenuItem value="4">4 Starts</MenuItem>
                <MenuItem value="5">5 Starts</MenuItem>
            </TextField>

            <TextField
                name='priceMin'
                id='priceMin'
                label="Precio minimo"
                value={filter.priceMin}
                type='number'
                required
                onChange={handleChange}
            />
            <TextField
                // placeholder='Precio minimo'
                name='priceMax'
                id='priceMax'
                label="Precio maximo"
                value={filter.priceMax}
                type='number'
                required
                onChange={handleChange}
            />
            <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
            >
                Filtrar
            </Button>
            <Button
                variant="contained"
                onClick={handleOnClick}
                sx={{ mt: 3, mb: 2 }}
            >
                Todos
            </Button>
        </Box>

    )

}