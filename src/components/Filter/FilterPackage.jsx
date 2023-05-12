import { Box, Button, Card, CardContent, CardHeader, Collapse, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPacks } from "../../redux/actions/packageActions";
import Calendar from "../Calendar/Calendar";

export default function FilterPackage({handleSubmit}) {
    const dispatch = useDispatch();
    const [pickDateInit, setPickDateInit] = useState(true);
    const [filters, setFilters] = useState({
        minPrice: "",
        maxPrice: "",
        minDuration: "",
        maxDuration: "",
        filterByDateInit: "", 
        filterByDateFin: ""
    });

    const [errors, setErrors] = useState({
        minPrice: "",
        maxPrice: "",
        minDuration: "",
        maxDuration: "",
        filterByDateInit: "", 
        filterByDateFin: "" 
    });

    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value
        });
    }

    const handleRadio = (event) => {
        if (event.target.value === "fecha inicio") {
            setPickDateInit(true);
        } else setPickDateInit(false);
    }

    const handleCalendar = (data) => {
        if (pickDateInit) {
            setFilters({
                ...filters,
                filterByDateInit: data
            });
        } else {
            setFilters({
                ...filters,
                filterByDateFin: data
            });
        }
    }

    const validation = () => {
        const { minPrice, maxPrice, minDuration, maxDuration, filterByDateInit, filterByDateFin } = filters;
        const errorsCheck = {}
        if (maxPrice && (minPrice >= maxPrice)) errorsCheck.minPrice = "el precio minimo no puede ser mayor al maximo";
        if (minPrice && minPrice < 0) errorsCheck.minPrice = "el precio minimo no puede ser menor que 0";
        if (maxPrice && maxPrice < 0) errorsCheck.maxPrice = "el precio maximo no puede ser 0";
        if (minDuration && (minDuration < 1 || minDuration > 60)) errorsCheck.minDuration = "nada menor a 1 ni mayor a 60";
        if (maxDuration && maxDuration < 2) errorsCheck.maxDuration = "la duracion maxima no puede ser menor que 2";
        if (maxDuration && (minDuration > maxDuration)) errorsCheck.minDuration = "la duracion minima no puede ser mayor que la maxima";
        if (filterByDateFin && filterByDateInit && ((filterByDateFin.getTime() - filterByDateInit.getTime()) <= 0)) errorsCheck.filterByDateInit = "la fecha inicial no puede ser mayor que la final";

        return errorsCheck;
    }

    const handleClean = () => {
        dispatch(getAllPacks());
        setFilters({
            minPrice: "",
            maxPrice: "",
            minDuration: "",
            maxDuration: "",
            filterByDateInit: "", //en formato fecha
            filterByDateFin: "" //en formato fecha
        });
        setOpen(false);
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0) {
            handleSubmit(filters);
        } else alert("hay un error en los filtros");
    }

    useEffect(() => {
        setErrors(validation());
    }, [filters]);

    return (
        <Grid sx={{width: "50vw", margin: "1% 1% 1% 20%", backgroundColor: "lightskyblue"}}>
            <Card>
                <CardHeader
                    title="Opciones de filtrado"
                    action={<Button onClick={() => setOpen(!open)} aria-label="expand">{open? "cerrar" : "abrir"}</Button>}
                >    
                </CardHeader>
            <Box>
                <Collapse in={open} unmountOnExit>
                    <CardContent>
                        <Grid container spacing={3} sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    name="minPrice"
                                    label="Precio minimo"
                                    type="number"
                                    value={filters.minPrice}
                                    onChange={handleChange}
                                    error={!!errors.minPrice}
                                    helperText={errors.minPrice}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    name="maxPrice"
                                    label="Precio maximo"
                                    type="number"
                                    value={filters.maxPrice}
                                    onChange={handleChange}
                                    error={!!errors.maxPrice}
                                    helperText={errors.maxPrice}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    name="minDuration"
                                    label="Duracion minima en dias"
                                    type="number"
                                    value={filters.minDuration}
                                    onChange={handleChange}
                                    error={!!errors.minDuration}
                                    helperText={errors.minDuration}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    name="maxDuration"
                                    label="Duracion maxima en dias"
                                    type="number"
                                    value={filters.maxDuration}
                                    onChange={handleChange}
                                    error={!!errors.maxDuration}
                                    helperText={errors.maxDuration}
                                />
                            </Grid>
                            <Grid item>
                                <Grid>
                                    {errors.filterByDateInit
                                        ? (<Typography color="red" variant="h4">{errors.filterByDateInit}</Typography>) 
                                        : ("")}
                                    <Typography variant="h5">fecha de inicio: {filters.filterByDateInit && filters.filterByDateInit.toLocaleString().split(",")[0]}</Typography>
                                    <Typography variant="h5">fecha de fin: {filters.filterByDateFin && filters.filterByDateFin.toLocaleString().split(",")[0]}</Typography>
                                </Grid>
                                <Grid display="flex" flexDirection="column" alignItems="center">
                                    <FormControl>
                                        <FormLabel>Fecha a modificar</FormLabel>
                                        <RadioGroup
                                            row
                                            defaultValue="fecha inicio"
                                            name="radioButtonsGroup"
                                            onChange={handleRadio}
                                        >
                                            <FormControlLabel value="fecha inicio" control={<Radio/>} label="fecha inicio"/>
                                            <FormControlLabel value="fecha fin" control={<Radio/>} label="fecha fin"/>
                                        </RadioGroup>
                                    </FormControl>
                                    <Calendar handleClick={handleCalendar}/>
                                </Grid>
                            </Grid>
                            <Grid item sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                                <Button onClick={handleClick} variant="contained">Aplicar filtros</Button>
                                <Button onClick={() => setOpen(false)} variant="contained">Cerrar</Button>
                                <Button onClick={handleClean} variant="contained" size="small">Cancelar filtros</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Box>
            </Card>
        </Grid>
    )
}