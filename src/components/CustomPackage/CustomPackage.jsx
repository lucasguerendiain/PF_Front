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
import { Box } from "@mui/material";
//PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { borrarActivitie } from "../../redux/actions/carritoActions";

export default function CustomPackage() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [hotel, setHotel] = useState("");
    const dispatch = useDispatch();
    //esto tiene que pedir el carro del reducer;
    //el carro del reducer tiene que agregar objetos a medidda que le dan al boton "agregar al carro"
    //las cards del carro tienen que tenre la opcion de removerse
    //el carro tiene que calcular el precio total del viaje y los dias
    //tenemos que hacer que el componenete organize las actividades por dia
  const carrito = useSelector((state) => state.carrito)
  const { activities } = carrito

    const calcularPrecio = (activities, hotel = "") => {
        let suma = activities.reduce((acumulator, currentValue) => acumulator + currentValue.price, 0);
        if (hotel) {
            const dias = Math.ceil(activities.length / 2);
            suma += dias * hotel.priceDay;
        }
        return suma;
    }

    const handleDelete = async (name) => {
        //dispatch action del reducer para sacar del carro
        // console.log(name);
        dispatch(borrarActivitie(name))
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
                            : ("Carrito vacio")
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" onClick={() => navigate("/activitycards")}>Add Activity</Button>
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
                <Box sx={{backgroundColor: "lightcyan"}}>
                    <br/>
                    {activities.length? <Typography variant="h4">Total Price: {calcularPrecio(activities, hotel)} USD</Typography> : ""}
                    <br/>
                    {activities.length? <Typography variant="h4">Min days: {Math.ceil(activities.length / 2)}</Typography> : ""}
                    <br/>
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