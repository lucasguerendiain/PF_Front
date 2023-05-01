import React from "react";
import BasicModal from "./BasicModal";
import { useState, useEffect } from "react";
import { validateActivity } from "./validateActivity";
import { Grid, MenuItem, TextField } from '@mui/material';

export default function ActivityModal({open, handleClose, addNewItem, defaultValues}) {
    const [tipo, setTipo] = useState("");

    const handleSelect = (event) => {
        setTipo(event.target.value);
    }

    const getContent = () => {
        return(
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
            placeholder='duration' 
            name='duration'
            id='duration'
            label="Duration"
            value={inputs.duration}
            type='number' 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.duration}
            helperText={errors.duration}
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
        <Grid >
            <TextField
                label="activity type"
                select
                value={tipo}
                onChange={handleSelect}
                fullWidth
            >
                <MenuItem value="treking">treking</MenuItem>
                <MenuItem value="bike">bike</MenuItem>
                <MenuItem value="travel">travel</MenuItem>
                <MenuItem value="relax">relax</MenuItem>
                <MenuItem value="show">show</MenuItem>
            </TextField>
        </Grid>
        </Grid>
        )
    }
    
    const [inputs, setInputs] = useState(defaultValues)
    const [errors, setErrors] = useState(defaultValues)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0){
            const datosCombinados = {
                ...inputs,
                typeAct: tipo
            }
            addNewItem(datosCombinados);
            setTipo("");
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
        setErrors(validateActivity(inputs));
    }, [inputs])

    return (
        <BasicModal
            open={open}
            handleClose={handleClose}
            addNewItem={addNewItem}
            defaultValues={defaultValues}
            title={"Nueva Actividad:"}
            content={getContent()}
            handleSubmit={handleSubmit}
        />
    )
}