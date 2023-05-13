import React from "react";
import { useState } from "react";
import { Box, TextField, Button, MenuItem } from '@mui/material';
import { useDispatch } from "react-redux";
import { getFilterRestaurant, getAllRestaurant } from "../../redux/actions/RestaurantsActions";


export default function FilterRestaurant(restaurant) {

    const [filter, setFilter] = useState({ priceMin: undefined, priceMax: undefined, order: undefined });
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
        if (filter.priceMin > filter.priceMax) {
            alert("El minimo no puede superar al maximo")
        } else {
            dispatch(getFilterRestaurant(restaurant, filter));
        }
    }
    const handleOnClick = (e) => {
        dispatch(getAllRestaurant());
    }

    return (
        <Box onSubmit={handleSubmit} sx={{display:"flex", alignItems: "center", justifyContent: "center"}}>

            <TextField sx={{ marginInline: "10px"}}
                name='priceMin'
                id='priceMin'
                label="Precio minimo"
                value={filter.priceMin}
                type='number'
                required
                onChange={handleChange}
            />
            <TextField sx={{ marginInline: "10px"}}
                name='priceMax'
                id='priceMax'
                label="Precio maximo"
                value={filter.priceMax}
                type='number'
                required
                onChange={handleChange}
            />
            <TextField sx={{width: "200px", marginInline: "10px"}}
                label="Ordenar por"
                name="order"
                select
                value={filter.order}
                onChange={handleChange}
                required
            >
                <MenuItem value={undefined}>Vaciar</MenuItem>
                <MenuItem value="priceMax">Mas Caros</MenuItem>
                <MenuItem value="priceMin">Mas Baratos</MenuItem>
                <MenuItem value="bestRating">Mejor Puntuados</MenuItem>

            </TextField>
            <Button sx={{ marginInline: "10px", mt: 3, mb: 2}}
                type="submit"
                variant="contained"
                onClick={handleSubmit}
            >
                Filtrar
            </Button>
            <Button sx={{ marginInline: "10px", mt: 3, mb: 2}}
                variant="contained"
                onClick={handleOnClick}
            >
                Todos
            </Button>
        </Box>

    )

}