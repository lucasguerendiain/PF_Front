import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FindHotelModal from "./FindHotelModal";
import { useNavigate } from "react-router-dom";

export default function CustomPackage() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [hotel, setHotel] = useState("");
    //esto tiene que pedir el carro del reducer;
    //el carro del reducer tiene que agregar objetos a medidda que le dan al boton "agregar al carro"
    //las cards del carro tienen que tenre la opcion de removerse
    //el carro tiene que calcular el precio total del viaje y los dias
    //tenemos que hacer que el componenete organize las actividades por dia
    const [carro, setCarro] = useState([
        {
          "name": "Actividad 1",
          "duration": 5,
          "img": ["https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg"],
          "description": "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
          "typeAct": "traking",
          "price": 3000
        },
        {
          "name": "Actividad 2",
          "duration": 4,
          "img": ["https://cdn0.ecologiaverde.com/es/posts/7/7/4/animales_que_viven_en_el_campo_3477_orig.jpg"],
          "description": "Embárcate en una aventura única a través del Canal de Beagle, uno de los lugares más icónicos de la Patagonia. ",
          "typeAct": "travel",
          "price": 6000
        },
        {
          "name": "Actividad 3",
          "duration": 10,
          "img": ["https://cdn0.ecologiaverde.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg"],
          "description": "Experimenta el desafío de una subida al Cerro Torre, la montaña más icónica de la Patagonia.",
          "typeAct": "treking",
          "price": 4000
        },
        {
          "name": "Actividad 4",
          "duration": 6,
          "img": ["https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"],
          "description": "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
          "typeAct": "bike",
          "price": 3500
        },
        {
          "name": "Actividad 5",
          "duration": 5,
          "img": ["https://upload.wikimedia.org/wikipedia/commons/7/72/Igel.JPG"],
          "description": "Descubre la Patagonia de una forma diferente, a caballo en la Estancia Cristina.",
          "typeAct": "show",
          "price": 3700
        }
      ]);

    const handleDelete = (name) => {
        //dispatch action del reducer para sacar del carro
        alert(name);
    }

    const handleViewActivity = (name) => {
        //abre un modal con la info de la actividad
        // o tambien puede agrandar la tarjeta
        alert(name);
    }

    const addHotel = (data) => {
        setHotel(data);
        setOpen(false);
    }

    return(
        <Container sx={{ py: 4, backgroundColor: "lightgray"}} maxWidth="xl">
        <Grid container spacing={4}>
            <Grid item xs={8} sx={{marginLeft:"320px"}}>
                <Card sx={{
                    border: "1px solid black",
                    backgroundColor: "lightgreen",
                }}>
                    <Typography variant="h1">Carrito:</Typography>
                    <CardContent>
                        {carro
                            ? (carro.map((item) => {
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
                                                    price: {item.price} USD
                                                    <br/>
                                                    duration: {item.duration} hours
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" variant="contained" onClick={() => handleDelete(item.name)}>delete</Button>
                                                <Button size="small" variant="contained" onClick={() => handleViewActivity(item.name)}>more info</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            }))
                            : ("carrito vacio")
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" onClick={() => navigate("/cards")}>Add Activity</Button>
                        {/* add activity te lleva al componente que muestra todas las actividades */}
                        <Button size="medium" variant="contained" onClick={() => (setOpen(true))}>Add Hotel</Button>
                    </CardActions>
                    {hotel
                        ? (
                        <Card>{hotel.name}
                            <CardContent>
                                <Typography>price: {hotel.priceDay} USD/day</Typography>
                                <Typography>location: {hotel.location}</Typography>
                                <Typography>stars: {hotel.stars}</Typography>
                                <img src={hotel.img} alt={hotel.name} width="45px" />
                            </CardContent>
                        </Card>) 
                    : ("")}
                    <FindHotelModal 
                        open={open}
                        handleClose={() => setOpen(false)}
                        handleAdd={addHotel}
                    />
                </Card>
                <br/>
                <Button size="large" variant="contained" onClick={() => alert("no esta implementado")}>Buy</Button>
            </Grid>
        </Grid>
        </Container>
    );
}