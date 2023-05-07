import React from "react";
import { useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { getPackageDetailById } from "../../../redux/actions/packageActions";
import LoadingComponent from "../../Loading/LoadingComponent";
import { useParams } from "react-router-dom/dist";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PackageDetail.css";
//PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CommentBoard from "../../CommentBoard/CommentBoard";

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

  const viewHotel = (id) => {
    navigate(`/hotel/byId/${id}`);
  };

  const viewActivity = (id) => {
    navigate(`/activity/byId/${id}`);
  };

  const viewRestaurant = () => {
    navigate(`/restaurant/byId/${id}`);
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
                    onClick={() => viewActivity(item.id)}
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
                  <Button onClick={() => viewHotel(pack.hotel.id)}>mas info</Button>
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
                      onClick={() => viewRestaurant(item.id)}
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
                    value: pack.price,
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
      {/* handlePrecio={(pack) => handlePrecio(pack)} */}
    <CommentBoard/>
    </Box>
  );
}
