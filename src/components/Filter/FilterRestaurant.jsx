import React from "react";
import { useState } from "react";
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { getFilterRestaurant, getAllRestaurant} from "../../redux/actions/RestaurantsActions";


export default function FilterRestaurant(restaurant) {

    const [filter, setFilter] = useState({ priceMin: undefined, priceMax: undefined });
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
        dispatch(getFilterRestaurant(restaurant, filter));
    }
    const handleOnClick = (e) => {
        dispatch(getAllRestaurant());
    }
    
    return (
        <Box onSubmit={handleSubmit}>

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