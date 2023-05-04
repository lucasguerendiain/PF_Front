
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,

  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

  Typography,
} from "@mui/material";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PackageDetail.css";

//PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import React from "react";

export default function PackageDetail() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptativeHeigth: true,
  };

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackageDetailById } from "../../../redux/actions/packageActions";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../Loading/LoadingComponent";

export default function PackageDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pack = useSelector((state) => state.packages.detail);

  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptativeHeigth: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptativeHeigth: false,
    variableWidth: false,
  };


  const handleBuy = () => {
    alert("no esta implementado esto todavia");
  };

  const viewHotel = () => {
    navigate("/hotelDetail");
  };


  const [pack, setPack] = useState({
    name: "cargando...",
    location: "cargando...",
    price: "",
    duration: "",
    img: [],
    description: "si estas viendo esto, fallo algo",
    quotas: 0,
    dateInit: "",
    dateEnd: "",
    hotel: "",
    resto: "",
    activities: [],
  });

  // const handleBuy = () => {
  //     alert("no esta implementado esto todavia");
  // }


  const viewHotel = () => {
    alert("funcionalidad no implementada");
  };

  useEffect(() => {
    //de momento no se puede buscar por id
    //const response = await axios.get(`http://localhost:3001/package/${id}`);
    //la otra que se puede hacer es buscarlo en el state del store
    setPack({
      name: "Paquete de turismo en Playa del Carmen",
      location: "Playa del Carmen, México",
      price: 1,
      duration: 7,
      img: [
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pehuajo246.JPG",
        "https://static.hendel.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31341.jpg",
        "https://production.listennotes.com/podcasts/los-duendes-de-la/la-tortuga-manuelita-sbq3Wk4yB2v-6TFmV49Ue5-.1400x1400.jpg",
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/O73ATX4NTFGWTGWNCFNTHZ56JU.jpg",
      ],
      description:
        "Disfruta de una semana inolvidable en Playa del Carmen, hospedándote en el Hotel Riviera Maya. Incluye todas las comidas en el restaurante del hotel y actividades como tour en lancha por la costa, visita a las ruinas mayas de Tulum y masajes relajantes en el spa del hotel. Cupos limitados. Fechas disponibles: del 1 al 7 de agosto de 2023.",
      quotas: 10,
      dateInit: "12/5/23",
      dateEnd: "12/9/23",
      activities: [
        {
          name: "Actividad 1",
          duration: 5,
          img: [
            "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg",
          ],
          description:
            "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
          typeAct: "treking",
          price: 250,
        },
        {
          name: "Actividad 2",
          duration: 4,
          img: [
            "https://cdn0.ecologiaverde.com/es/posts/7/7/4/animales_que_viven_en_el_campo_3477_orig.jpg",
          ],
          description:
            "Embárcate en una aventura única a través del Canal de Beagle, uno de los lugares más icónicos de la Patagonia. ",
          typeAct: "bike",
          price: 150,
        },
        {
          name: "Actividad 3",
          duration: 10,
          img: [
            "https://cdn0.ecologiaverde.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg",
          ],
          description:
            "Experimenta el desafío de una subida al Cerro Torre, la montaña más icónica de la Patagonia.",
          typeAct: "show",
          price: 370,
        },
        {
          name: "Actividad 4",
          duration: 6,
          img: [
            "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg",
          ],
          description:
            "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
          typeAct: "travel",
          price: 230,
        },
        {
          name: "Actividad 5",
          duration: 5,
          img: ["https://upload.wikimedia.org/wikipedia/commons/7/72/Igel.JPG"],
          description:
            "Descubre la Patagonia de una forma diferente, a caballo en la Estancia Cristina.",
          typeAct: "relax",
          price: 400,
        },
      ],
      hotel: {
        name: "Hotel 1",
        location: "El Calafate, Santa Cruz, Argentina",
        img: [
          "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        ],
        description:
          "Disfruta de una estadía inolvidable con vistas al lago Argentino y los glaciares cercanos.",
        stars: 4,
      },
      restaurant: "",
    });
  }, []);

  return (
    <Box className="containerDetail">
      <Typography variant="h1" gutterBottom>
        {pack.name}
      </Typography>
      <Slider {...settings}>
        {pack.img.map((item, index) => (
          <div key={index}>
            <img src={item} alt=""></img>
          </div>
        ))}
      </Slider>
      <div className="text-container">
        <Typography variant="h3" gutterBottom className="typography">
          Location: <span>{pack.location}</span>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Duration: {pack.duration} days
        </Typography>
        <Typography variant="h4" gutterBottom>
          Description: {pack.description}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Qutoas: {pack.quotas}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Date start: {pack.dateInit}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Date end: {pack.dateEnd}
        </Typography>
      </div>
      <Typography variant="h3">Actividades: </Typography>
      <Slider {...settings2}>
        {pack.activities.map((item, index) => {
          return (
            <div className="activity" key={index}>
              <h3>{item.name}</h3>
              <h4>{item.duration} hours</h4>
              <img src={item.img} alt={item.name} />
            </div>
          );
        })}
      </Slider>
      <br />
      <Typography variant="h3">Hotel:</Typography>
      {pack.hotel && (
        <Box
          sx={{
            width: "800px",
            height: "auto",
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20%",
          }}
        >
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={pack.hotel.img[0]}
              alt={pack.hotel.name}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {pack.hotel.name}
              </Typography>
              <Typography variant="h6">Stars: {pack.hotel.stars}</Typography>
              <Typography variant="subtitle1">
                {pack.hotel.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={viewHotel}>Learn more</Button>
            </CardActions>
          </Card>


  const viewActivity = () => {
    navigate("/activityDetail");
  };

  const viewResto = () => {
    navigate("/restoDetail");
  };

  useEffect(() => {
    const getDetail = async () => {
      try {
        await dispatch(getPackageDetailById(id));
      } catch (error) {
        console.log(
          "Ocurrió un error al obtener el detalle del paquete:",
          error
        );
      }
    };
    id && getDetail();
  }, [dispatch, id]);

  return (
    <Box className="containerDetail" marginTop="1%" marginBottom="1%">
      {Object.keys(pack).length ? (
        <Grid>
          <Typography
            variant="h1"
            component="h2"
            gutterBottom
            sx={{ marginTop: "1%" }}
          >
            {pack.name}
          </Typography>
          <Slider {...settings}>
            {pack.img.map((item, index) => (
              <Box
                key={index}
                sx={{
                  maxWidth: "70%",
                }}
              >
                <img src={item} alt=""></img>
              </Box>
            ))}
          </Slider>

          <Grid marginTop="4%" marginBottom="4%">
            <Typography variant="h3" gutterBottom className="typography">
              Ubicacion: <span>{pack.location}</span>
            </Typography>
            <Typography variant="h4" gutterBottom>
              Duracion: {pack.duration} dias
            </Typography>
            <Typography variant="h4" gutterBottom>
              Descripcion: {pack.description}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Cupos: {pack.quotas}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Fecha inicio: {pack.dateInit}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Fecha fin: {pack.dateEnd}
            </Typography>
          </Grid>
          <Typography variant="h3" sx={{ fontWeight: "700" }}>
            Actividades:{" "}
          </Typography>
          <Slider {...settings2}>
            {pack.activities.map((item, index) => {
              return (
                <div className="activity" key={index}>
                  <h3>{item.name}</h3>
                  <h4>{item.duration} hours</h4>
                  {item.img.map((e) => {
                    return <img src={e} alt={item.name} />;
                  })}

                  <Button
                    sx={{ marginTop: "2%" }}
                    variant="contained"
                    size="small"
                    onClick={viewActivity}
                  >
                    mas info
                  </Button>
                </div>
              );
            })}
          </Slider>
          <br />
          <Typography variant="h3" sx={{ fontWeight: "700", marginTop: "4%" }}>
            Hotel:
          </Typography>
          {pack.hotel && (
            <Box
              sx={{
                width: "800px",
                height: "auto",
                backgroundColor: "lightgrey",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20%",
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={pack.hotel.img[0]}
                  alt={pack.hotel.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {pack.hotel.name}
                  </Typography>
                  <Typography variant="h6">
                    Stars: {pack.hotel.stars}
                  </Typography>
                  <Typography variant="subtitle1">
                    {pack.hotel.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={viewHotel}>mas info</Button>
                </CardActions>
              </Card>
            </Box>
          )}
          {pack.restaurants.length ? (
            <Grid marginTop="3%" marginBottom="3%">
              <Typography variant="h2" gutterBottom sx={{ fontWeight: "700" }}>
                Restaurant/s:
              </Typography>
              <Slider {...settings2}>
                {pack.restaurants.map((item, index) => (
                  <Box
                    key={index}
                    sx={{

                      maxWidth: "70%",
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      {item.name}
                    </Typography>
                    <img src={item.img[0]} alt=""></img>
                    <Button
                      variant="text"
                      onClick={viewResto}
                      sx={{ marginTop: "2%" }}
                    >
                      mas info
                    </Button>
                  </Box>
                ))}
              </Slider>
            </Grid>
          ) : (
            "no incluye comida/s en restaurante/s"
          )}
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: "700" }}
            display="inline"
          >
            {"Precio: "}
            <Typography variant="h3" display="inline">
              {pack.price} USD
            </Typography>
          </Typography>
        </Grid>
      ) : (
        <LoadingComponent />
      )}
      <Button
        variant="contained"
        onClick={handleBuy}
        sx={{ maxWidth: "20vw", alignSelf: "center", marginBottom: "2%" }}
      >
        Comprar
      </Button>

                        width: "800px",
                        height: "auto",
                        backgroundColor: "lightgrey",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "20%"
                    }}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={pack.hotel.img[0]}
                            alt={pack.hotel.name}
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>{pack.hotel.name}</Typography>
                            <Typography variant="h6">Stars: {pack.hotel.stars}</Typography>
                            <Typography variant="subtitle1">{pack.hotel.description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={viewHotel}>mas info</Button>
                        </CardActions>
                    </Card>
                </Box>}
                {pack.resto.length
                ? (<Grid marginTop="3%" marginBottom="3%">
                    <Typography variant="h2" gutterBottom sx={{fontWeight: "700"}}>Restaurant/s:</Typography> 
                    <Slider {...settings2}>
                        {pack.resto.map((item, index) => (
                                <Box key={index} sx={{
                                    maxWidth: "70%",
                                }}>
                                    <Typography variant="h4" gutterBottom>{item.name}</Typography>
                                    <img src={item.img[0]} alt=""></img>
                                    <Button variant="text" onClick={viewResto} sx={{marginTop: "2%"}}>mas info</Button>
                                </Box>
                        ))}
                    </Slider>
                    </Grid>)
                : ("no incluye comida/s en restaurante/s")
                }
                <Typography variant="h2" gutterBottom sx={{fontWeight: "700"}} display="inline">{"Precio: "} 
                    <Typography variant="h3" display="inline">{pack.price} USD</Typography>
                </Typography>
                <Button variant="contained" onClick={handleBuy} sx={{maxWidth: "20vw", alignSelf:"center", marginBottom:"2%"}}>Comprar</Button>
        {/*
        abajo de esto vendria el componente de los comentarios:
        arriba del todo para dejar un comentario nuevo
        y abajo de eso el display de los comentarios ya existentes
        */}

        </Box>
      )}
      <Typography variant="h2" gutterBottom>
        Price: {pack.price} USD
      </Typography>

      <PayPalScriptProvider options={{ "client-id":"AYUz54121CeOUjgpCAsy19Y_mYQUlhihSs4Y0z_e5PK3MBjJxIsEHPRGOGLO6wxhnUtNd20Xw7k0z0km"
      }}>
        <PayPalButtons
        createOrder = {(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: pack.price,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function () {
                alert("¡Excelente! Tu transacción ha sido realizada con éxito.")
            })
          }}/>
      </PayPalScriptProvider>
      {/* handlePrecio={(pack) => handlePrecio(pack)} */}

    </Box>
  );
}
