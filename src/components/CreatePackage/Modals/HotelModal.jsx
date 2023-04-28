import React from "react";
import BasicModal from "./BasicModal";
import { useState, useEffect } from "react";
import { validateHotel } from "./validateHotel";
import { Grid, TextField } from '@mui/material';

export default function HotelModal({open, handleClose, addNewItem, defaultValues}) {
    const getContent = () => {
        return (
        <Grid container spacing={2} sx={{display: "flex", flexDirection: "column", m: 2}}>
        <Grid>
        <TextField 
            placeholder='name' 
            name='name'
            id='name'
            label="Name"
            value={inputs.name} 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            />
        </Grid>
        <Grid>
        <TextField 
            placeholder='description' 
            name='description'
            id='description'
            label="Description"
            value={inputs.description} 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            />
        </Grid>
        <Grid>
        <TextField 
            placeholder='location' 
            name='location'
            id='location'
            label="Location"
            value={inputs.location}
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.location}
            helperText={errors.location}
            />
        </Grid>
        <Grid>
        <TextField 
            placeholder='img' 
            name='img'
            id='img'
            label="Image"
            value={inputs.img} 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.img}
            helperText={errors.img}
            />
        </Grid>
        <Grid>
        <TextField 
            placeholder='stars' 
            name='stars'
            id='stars'
            label="Stars"
            value={inputs.stars} 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.stars}
            helperText={errors.stars}
            />
        </Grid>
        </Grid>
        )
    }

    const [inputs, setInputs] = useState(defaultValues);
    const [errors, setErrors] = useState(defaultValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0){
            addNewItem(inputs);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    useEffect(() => {
        setInputs(defaultValues);
    },[open])

    useEffect(() => {
        setErrors(validateHotel(inputs));
    }, [inputs])

    return (
        <BasicModal
            open={open}
            handleClose={handleClose}
            addNewItem={addNewItem}
            defaultValues={defaultValues}
            title={"Nuevo Hotel:"}
            content={getContent()}
            handleSubmit={handleSubmit}
        />
    )
}