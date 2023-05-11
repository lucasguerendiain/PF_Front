import React from "react";
import { useState,  } from "react";
import { Box, MenuItem, TextField, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { getFilterActivities, getAllActivity } from "../../redux/actions/ActivitiesActions";


export default function FilterActivity(activities) {

    const [filter, setFilter] = useState({ typeAct: undefined, priceMin: undefined, priceMax: undefined, durationMin: undefined, durationMax: undefined });
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
        if(filter.priceMin > filter.priceMax || filter.durationMin > filter.durationMax ) {
            alert("El minimo no puede ser mayor al maximo")
        }else{
            dispatch(getFilterActivities(activities, filter));
        }
        
    }
    const handleOnClick = (e) => {
        dispatch(getAllActivity());
    }

    return (
        <Box onSubmit={handleSubmit}>

            <TextField
                label="typeAct"
                name="typeAct"
                select
                value={filter.typeAct}
                onChange={handleChange}
                required
            >
                <MenuItem value="treking">trekingt</MenuItem>
                <MenuItem value="bike">bike</MenuItem>
                <MenuItem value="travel">travel</MenuItem>
                <MenuItem value="relax">relax</MenuItem>
                <MenuItem value="show">show</MenuItem>
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
                name='priceMax'
                id='priceMax'
                label="Precio maximo"
                value={filter.priceMax}
                type='number'
                required
                onChange={handleChange}
            />
            <TextField
                name='durationMin'
                id='durationMin'
                label="Duracion minima"
                value={filter.durationMin}
                type='number'
                required
                onChange={handleChange}

            />
            <TextField
                name='durationMax'
                id='durationMax'
                label="Duracion maxima"
                value={filter.durationMax}
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