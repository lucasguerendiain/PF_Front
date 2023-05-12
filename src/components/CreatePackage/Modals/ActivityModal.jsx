import React from "react";
import BasicModal from "./BasicModal";
import { useState, useEffect } from "react";
import { validateActivity } from "./validateActivity";
import { Box, Grid, MenuItem, TextField } from '@mui/material';

export default function ActivityModal({open, handleClose, addNewItem, defaultValues}) {
    const [tipo, setTipo] = useState("");

    const handleSelect = (event) => {
        setTipo(event.target.value);
    }

    const getContent = () => {
        return(
        <Box sx={{
            display: "flex",
            flexDirection: "column", 
            overflowY: "scroll", 
            maxHeight: "70vh",
            '.MuiFormControl-root': {
                marginBottom: "3%"
            }
            }}>
        <TextField 
            placeholder='nombre' 
            name='name'
            id='name'
            label="Nombre"
            value={inputs.name} 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            />
        <TextField 
            placeholder='descripcion' 
            name='description'
            id='description'
            label="Descripcion"
            multiline
            rows={4}
            value={inputs.description} 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            />
        <TextField 
            placeholder='duracion' 
            name='duration'
            id='duration'
            label="Duracion"
            value={inputs.duration}
            type='number' 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.duration}
            helperText={errors.duration}
            />
        <TextField 
            placeholder='precio' 
            name='price'
            id='price'
            label="Precio"
            value={inputs.price}
            type='number' 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.price}
            helperText={errors.price}
            />
        <TextField 
            placeholder='img1' 
            name='img1'
            id='img1'
            label="Imagen 1"
            value={inputs.img1} 
            required
            fullWidth
            onChange={handleChange}
            error={!!errors.img1}
            helperText={errors.img1}
            />
        <TextField 
            placeholder='img2' 
            name='img2'
            id='img2'
            label="Imagen 2"
            value={inputs.img2} 
            fullWidth
            onChange={handleChange}
            error={!!errors.img2}
            helperText={errors.img2}
            />
        <TextField 
            placeholder='img3' 
            name='img3'
            id='img3'
            label="Imagen 3"
            value={inputs.img3} 
            fullWidth
            onChange={handleChange}
            error={!!errors.img3}
            helperText={errors.img3}
            />
        <TextField 
            placeholder='img 4' 
            name='img4'
            id='img4'
            label="Imagen 4"
            value={inputs.img4} 
            fullWidth
            onChange={handleChange}
            error={!!errors.img4}
            helperText={errors.img4}
            />
        <Grid>
            <TextField
                label="tipo de actividad"
                select
                value={tipo}
                onChange={handleSelect}
                fullWidth
                required
            >
                <MenuItem value="treking">treking</MenuItem>
                <MenuItem value="bike">bike</MenuItem>
                <MenuItem value="travel">travel</MenuItem>
                <MenuItem value="relax">relax</MenuItem>
                <MenuItem value="show">show</MenuItem>
            </TextField>
        </Grid>
        </Box>
        )
    }
    
    const [inputs, setInputs] = useState(defaultValues)
    const [errors, setErrors] = useState(defaultValues)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0){
            const datosCombinados = {
                name: inputs.name,
                description: inputs.description,
                duration: inputs.duration,
                img: Array.from([inputs.img1, inputs.img2, inputs.img3, inputs.img4]).filter((elem) => elem !== ""),
                typeAct: tipo,
                price: inputs.price
            }
            addNewItem(datosCombinados);
            setTipo("");
        } else alert("hay errores en el formulario");
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