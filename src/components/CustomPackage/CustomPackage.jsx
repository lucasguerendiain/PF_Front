import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
//PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { borrarActivitie, estadoInicialCarrito } from "../../redux/actions/carritoActions";
import Calendar from "../Calendar/Calendar";
import { setButtonToCart } from "../../redux/actions/formActions";

export default function CustomPackage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    //esto tiene que pedir el carro del reducer;
    //el carro del reducer tiene que agregar objetos a medidda que le dan al boton "agregar al carro"
    //las cards del carro tienen que tenre la opcion de removerse
    //el carro tiene que calcular el precio total del viaje y los dias
    //tenemos que hacer que el componenete organize las actividades por dia
  const carrito = useSelector((state) => state.carrito)
  const { activities, hotel } = carrito

    const calcularPrecio = (activities, hotel = "") => {
        let suma = activities.reduce((acumulator, currentValue) => acumulator + currentValue.price, 0);
        if (hotel) {
            const dias = Math.ceil(activities.length / 2);
            suma += dias * hotel.priceDay;
        }
        return suma;
    }

    const handleAprove = async () => {
        dispatch(estadoInicialCarrito())
    }

    const handleDelete = async (name) => {
        dispatch(borrarActivitie(name))
    }

    const handleClick = (data) => {
        setDate(data.toLocaleString());
    }

    const handleNav = (name) => {
        dispatch(setButtonToCart());
        switch(name) {
            case "ACTIVIDAD":
                navigate("/activitycards");
                break;
            case "HOTEL":
                navigate("/hotelcards");
                break;
            default:
                alert("fallo algo");
        }
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
                        {activities.length
                            ? (activities.map((item) => {
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
                                                    height: "20vh"
                                                }}
                                                image={item.img[0]}
                                                alt={item.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography>
                                                    Precio: {item.price} USD
                                                    <br/>
                                                    duracion: {item.duration} horas
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" variant="contained" onClick={() => handleDelete(item.name)}>eliminar</Button>
                                                <Button size="small" variant="contained" onClick={() => navigate(`/activity/byId/${item.id}`)}>mas info</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            }))
                            : ("Carrito vacio")
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" onClick={() => handleNav("ACTIVIDAD")}>Añadir Actividad</Button>
                        <Button size="medium" variant="contained" onClick={() => handleNav("HOTEL")}>Añadir Hotel</Button>
                    </CardActions>
                    {hotel
                        ? (
                        <Card>{hotel.name}
                            <CardContent>
                                <Typography>precio: {hotel.priceDay} USD/noche</Typography>
                                <Typography>ubicacion: {hotel.location}</Typography>
                                <Typography>estrellas: {hotel.stars}</Typography>
                                <img src={hotel.img} alt={hotel.name} width="45px" />
                            </CardContent>
                        </Card>) 
                    : ("")}
                </Card>
                <Box sx={{backgroundColor: "lightgrey", marginTop: "2%", marginBottom: "2%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Calendar handleClick={handleClick}/>
                    <Typography marginTop="1%" variant="h4" gutterBottom>fecha de inicio: {date}</Typography>
                    {activities.length? <Typography gutterBottom variant="h4">precio total: {calcularPrecio(activities, hotel)} USD</Typography> : ""}
                    {activities.length? <Typography gutterBottom variant="h4">duracion del viaje: {Math.ceil(activities.length / 2)} dias</Typography> : ""}
                </Box>
                <PayPalScriptProvider
        options={{
          "client-id":
            "AYUz54121CeOUjgpCAsy19Y_mYQUlhihSs4Y0z_e5PK3MBjJxIsEHPRGOGLO6wxhnUtNd20Xw7k0z0km",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: calcularPrecio(activities, hotel),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function () {
              handleAprove()
              alert("¡Excelente! Tu transacción ha sido realizada con éxito.");
            });
          }}
        />
      </PayPalScriptProvider>
            </Grid>
        </Grid>
        </Container>
    );
}