import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validation } from "./validation";
import { useState, useEffect } from 'react';
import BasicCard from './commons/BasicCard';
import GenericSearchBar from './commons/GenericSearchBar';
import ActivityModal from './Modals/ActivityModal';
import HotelModal from './Modals/HotelModal';
import FindHotelModal from '../CustomPackage/FindHotelModal';

const theme = createTheme();

const styles = {
    width: "100%",
    border: "1px solid black",
    borderRadius: "3px",
    borderShadow: "5px",
    fontSize: "1.3rem"
}

export default function CreatePackageForm() {
    const [openActi, setOpenActi] = useState(false);
    const [openHotel, setOpenHotel] = useState(false);
    //const [openResto, setOpenResto] = useState(false);
    const [findHotelOpen, setFindHotelOpen] = useState(false);
    //const [findRestoOpen, setFinRestoOpen] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        location: "",
        price: "",
        duration: "",
        img: "",
        description: "",
        quotas: "",
        dateInit: "",
        dateEnd: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        location: "",
        price: "",
        duration: "",
        img: "",
        description: "",
        quotas: "",
        dateInit: "",
        dateEnd: ""
    });
    const [activities, setActivities] = useState([]);
    const [hotels, setHotels] = useState([]);
    //const [resto, setResto] = useState([]);

    const defaultValuesActivity = {
        name: "",
        description: "",
        duration: "",
        img: "",
        typeAct: ""
    }
    const defaultValuesHotel = {
        name: "",
        location: "",
        img: "",
        description: "",
        stars: "",
        priceDay: ""
    }

    const getHeader = (texto, boton1, boton2, funcionOpen, funcionOpen2 = () => {}) => {
        return (
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "10px",
                paddingRight: "10px",
                height: "100%",
                backgroundColor: 'lightcyan',
                border: "1px solid black",
                width: "100%"
            }}>
                <GenericSearchBar placeholder={texto} onChange={(event) => {console.log(event.target.value)}}/>
                <Box >
                    <Button
                        onClick={funcionOpen}
                        variant='contained'
                        size='small'
                    >
                        {boton1}
                    </Button>
                    <br/>
                    <Button
                        onClick={funcionOpen2}
                        variant='contained'
                        size='small'
                    >
                        {boton2}
                    </Button>
                </Box>
            </Box>
        )
    }

    const addNewActivity = (data) => {
        setActivities([
            ...activities,
            data
        ]);
        setOpenActi(false);
    }

    const addNewHotel = (data) => {
        setHotels([
            data
        ]);
        setOpenHotel(false);
        setFindHotelOpen(false);
    }

    const deleteActi = (id) => {
        setActivities(activities.filter((elem, index) => index !== id));
    }

    const deleteHotel = () => {
        setHotels("");
    }

    const getContent = (type) => {
        switch(type) {
            case "ACTIVITY": {
                return activities.length
                ? (activities.map((item, index) => {
                    return (
                        <Box 
                            key={index} 
                            sx={{
                                border: "1px solid black",
                                backgroundColor: 'lightsalmon',
                                marginBottom: "4px",
                                marginTop: "4px"}
                            }> Actividad {index}: 
                            <Typography>{item.name}</Typography>
                            <Typography>{item.description}</Typography>
                            <Typography>{item.duration} days</Typography>
                            <Typography>{item.img}</Typography>
                            <Typography>{item.typeAct}</Typography>
                            <Button variant='contained' size='small' onClick={() => deleteActi(index)}>X</Button>
                        </Box> 
                    )
                }))
                : ("no hay actividades cargadas")
            };
            case "HOTEL": {
                return hotels.length
                ? (hotels.map((item, index) => {
                    return (
                        <Box 
                            key={index} 
                            sx={{
                                border: "1px solid black",
                                backgroundColor: 'cyan',
                                marginBottom: "4px",
                                marginTop: "4px"}
                            }> Hotel: 
                            <Typography>{item.name}</Typography>
                            <Typography>{item.description}</Typography>
                            <Typography>{item.location}</Typography>
                            <Typography>{item.img}</Typography>
                            <Typography>{item.stars} estrellas</Typography>
                            <Typography>{item.priceDay} USD/day</Typography>
                            <Button variant='contained' size='small' onClick={() => deleteHotel()}>X</Button>
                        </Box> 
                    )
                })) : ("no hay hoteles de momento")
            };
            default: {
                return "fallo algo"
            };
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            name: inputs.name,
            location: inputs.location,
            price: inputs.price,
            activities: activities,
            duration: inputs.duration,
            img: inputs.img,
            description: inputs.description,
            quotas: inputs.quotas,
            dateInit: inputs.dateInit,
            dateEnd: inputs.dateEnd,
            hotel: hotels
        });
    };

    useEffect(() => {
        setErrors(validation(inputs, activities));
    }, [inputs]);

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                width: "40vw"
            }}
            >
            <Typography component="h1" variant="h3">
                Crear paquete
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    autoFocus
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    name="location"
                    autoComplete="location"
                    onChange={handleChange}
                    error={!!errors.location}
                    helperText={errors.location}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type='number'
                    id="price"
                    autoComplete="price"
                    onChange={handleChange}
                    error={!!errors.price}
                    helperText={errors.price}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="duration"
                    label="Duration"
                    type="number"
                    id="duration"
                    autoComplete="duration(in days)"
                    onChange={handleChange}
                    error={!!errors.duration}
                    helperText={errors.duration}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="img"
                    label="Imagen"
                    name="img"
                    autoComplete="imagen"
                    onChange={handleChange}
                    error={!!errors.img}
                    helperText={errors.img}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    onChange={handleChange}
                    error={!!errors.description}
                    helperText={errors.description}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="quotas"
                    label="Quotas"
                    name="quotas"
                    autoComplete="quotas"
                    onChange={handleChange}
                    error={!!errors.quotas}
                    helperText={errors.quotas}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="dateInit"
                    label="Date init"
                    name="dateInit"
                    autoComplete="dateInit"
                    onChange={handleChange}
                    error={!!errors.dateInit}
                    helperText={errors.dateInit}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="dateEnd"
                    label="Date finish"
                    name="dateEnd"
                    autoComplete="dateEnd"
                    onChange={handleChange}
                    error={!!errors.dateEnd}
                    helperText={errors.dateEnd}
                    />
                </Grid>
                </Grid>
                <br/>
                <Grid item xs={8} sx={styles}>
                    <BasicCard 
                        header={getHeader("buscate la actividad", "Add new Activity", "add existing activity", () => setOpenActi(true), () => alert("componente muestra actividades"))} 
                        content={getContent("ACTIVITY")}/>
                    <ActivityModal 
                        open={openActi} 
                        handleClose={() => setOpenActi(false)} 
                        addNewItem={addNewActivity} 
                        defaultValues={defaultValuesActivity}/>
                </Grid>
                <br/>
                <Grid item xs={8} sx={styles}>
                    <BasicCard 
                        header={getHeader("buscate el hotel", "Add new Hotel", "add existing hotel", () => setOpenHotel(true), () => setFindHotelOpen(true))} 
                        content={getContent("HOTEL")}/>
                    <HotelModal 
                        open={openHotel} 
                        handleClose={() => setOpenHotel(false)} 
                        addNewItem={addNewHotel} 
                        defaultValues={defaultValuesHotel}/>
                    <FindHotelModal
                        open={findHotelOpen}
                        handleClose={() => setFindHotelOpen(false)}
                        handleAdd={addNewHotel}
                    />
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Confirmar
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}