import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

const styles = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            display: "flex",
            flexDirection: "column",
            transform: 'translate(-50%, -50%)',
            width: "100%",
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
            maxHeight: "80%",
            alignItems: "center"
        }

export default function FindHotelModal({open, handleClose, handleAdd}) {
    //lo tiene que pedir del back
    const [hoteles, setHoteles] = useState([
        {
          "name": "Hotel 1",
          "location": "El Calafate, Santa Cruz, Argentina",
          "img": ["https://logodownload.org/wp-content/uploads/2015/05/river-plate-logo-6.png"],
          "description": "Disfruta de una estadía inolvidable con vistas al lago Argentino y los glaciares cercanos.",
          "stars": 4,
          "priceDay": 1500
        },
        {
          "name": "Hostel 2",
          "location": "Bariloche, Río Negro, Argentina",
          "img": ["https://logodownload.org/wp-content/uploads/2016/10/boca-juniors-logo-escudo-0.png"],
          "description": "Descubre la tranquilidad de la Patagonia en medio del bosque andino.",
          "stars": 3,
          "priceDay": 2500
        },
        {
          "name": "Hotel 3",
          "location": "Puerto Madryn, Chubut, Argentina",
          "img": ["https://es.logodownload.org/wp-content/uploads/2018/10/independiente-logo-0.png"],
          "description": "Disfruta de una experiencia única en la costa patagónica, cerca de la reserva natural de ballenas.",
          "stars": 2,
          "priceDay": 4000
        },
        {
          "name": "Hostel 4",
          "location": "El Chaltén, Santa Cruz, Argentina",
          "img": ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Escudo_de_Racing_Club.svg/1200px-Escudo_de_Racing_Club.svg.png"],
          "description": "Sumérgete en la naturaleza virgen de los glaciares, en el corazón de la Patagonia argentina.",
          "stars": 5,
          "priceDay": 2700
        },
        {
          "name": "Hotel 5",
          "location": "Ushuaia, Tierra del Fuego, Argentina",
          "img": ["https://logodownload.org/wp-content/uploads/2018/09/san-lorenzo-logo-escudo-5.png"],
          "description": "Vive la experiencia de estar en el fin del mundo, rodeado de la majestuosidad de la Tierra del Fuego.",
          "stars": 4,
          "priceDay": 1200
        }
      ]);

    const [views, setViews] = useState({});

    useEffect(() => {
        hoteles.forEach((elem) => {
            setViews({
                ...views,
                [elem.name]: false
            })
        })
    }, [])

    const handleView = (hotel) => {
        setViews({
            ...views,
            [hotel]: !views[hotel]
        })
    }

    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Container sx={styles}>
            <Grid container spacing={4}>
                <Grid item xs={8} sx={{marginLeft:"320px"}}>
                    <Card sx={{
                        border: "1px solid black",
                        backgroundColor: "lightgreen",
                    }}>
                        <Typography variant="h1">Hoteles Disponibles:</Typography>
                        <CardContent>
                            {hoteles
                                ? (hoteles.map((item) => {
                                    return(
                                        <Grid item key={item.name} xs={12} sm={6} md={4} margin={1}>
                                            <Card   sx={{
                                                height: "100%",
                                                display: "flex", 
                                                flexDirection: "column",
                                                border: "1px solid gray",
                                                borderRadius: "1px 3px 5px"
                                            }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    sx={{
                                                        pt: "46.25%"
                                                    }}
                                                    image={item.img}
                                                    alt={item.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography>
                                                        price: {item.priceDay} USD/day
                                                        <br/>
                                                        location: {item.location}
                                                        <br/>
                                                        stars: {item.stars}
                                                    </Typography>
                                                    <br/>
                                                    {views[item.name]
                                                        ? (<Typography>
                                                            Descripcion: {item.description}
                                                        </Typography>)
                                                        : ("")
                                                    }
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" variant="contained" onClick={() => handleAdd(item)}>Hospedarse</Button>
                                                    <Button size="small" variant="contained" onClick={() => handleView(item.name)}>more info</Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    );
                                }))
                                : ("carrito vacio")
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Button onClick={handleClose} variant='contained' sx={{width: "15%"}}>cancel</Button>
            </Container>
        </Modal>
    );
}