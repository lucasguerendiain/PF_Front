import { Box, Button, Card, CardContent, CardHeader, Collapse, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPacks } from "../../redux/actions/packageActions";

export default function FilterPackage({handleSubmit}) {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        minPrice: "",
        maxPrice: "",
        minDuration: "",
        maxDuration: "",
        filterByDateInit: "", //en formato fecha
        filterByDateFin: "" //en formato fecha
    });

    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value
        });
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
        })
    }

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
                                />
                            </Grid>
                            <Grid item sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                                <Button onClick={() => handleSubmit(filters)} variant="contained">Aplicar filtros</Button>
                                <Button onClick={() => setOpen(false)} variant="contained">Cancelar</Button>
                                <Button onClick={handleClean} variant="contained" size="small">Deshacer filtros</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Box>
            </Card>
        </Grid>
    )
}