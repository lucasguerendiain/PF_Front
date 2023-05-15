import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelDetailById } from "../../../redux/actions/HotelesActions";
import LoadingComponent from "../../Loading/LoadingComponent";
import CommentBoard from "../../CommentBoard/CommentBoard";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addHotelForm } from "../../../redux/actions/formActions";
import { agregarHotel } from "../../../redux/actions/carritoActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function HotelDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hoteles.detail);
  const toForm = useSelector((state) => state.form.toForm);
  const { id } = useParams();
  const setings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    adaptativeHeigth: false,
  };

  useEffect(() => {
    const getDetail = async () => {
      try {
        await dispatch(getHotelDetailById(id));
      } catch (error) {
        console.log("Ocurrio un error en el useEffect", error);
      }
    };
    id && getDetail();
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    if (toForm) {
      dispatch(addHotelForm(hotel));
      alert("añadida con exito");
    } else {
      dispatch(agregarHotel(hotel));
      alert("el hotel se añadio al carrito");
    }
  }

  return (
    <Grid sx={{
      width: "85vw",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      marginTop: "2%",
      marginLeft: "8%",
      marginRight: "8%",
      border: "1px solid black",
      backgroundColor: "beige"
    }}>
      {Object.keys(hotel).length ? (
        <Grid>
          <Typography variant="h1" gutterBottom marginTop="1%">
            {hotel.name}
          </Typography>
          <Slider {...setings}>
            {hotel.img
              ? hotel.img.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    maxWidth: "70%",
                  }}
                >
                  <img src={item} alt=""></img>
                </Box>
              ))
              : "cargando"}
          </Slider>
          <Grid marginTop="4%">
            <Typography variant="h3" sx={{ fontWeight: "600", whiteSpace: "pre-line" }} gutterBottom>
              {" "}
              Descripcion:
              <Typography variant="h4" sx={{ display: "block" }}>
                {hotel.description}
              </Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Ubicacion:
              <Typography variant="h4">{hotel.location}</Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Estrellas
              <Typography variant="h4">{hotel.stars}</Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Precio:
              <Typography variant="h4">{hotel.priceDay} por noche</Typography>
            </Typography>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <Button
              variant="contained"
              sx={{ fontSize: "1.4rem", marginRight: "3%" }}
              startIcon={toForm ? <AddCircleIcon /> : <AddShoppingCartIcon />}
              onClick={handleClick}
            >
              {toForm ? "Añadir al paquete" : "Añadir al Carrito"}
            </Button>
            <Button
              variant="contained"
              sx={{ fontSize: "1.6rem" }}
              startIcon={<ArrowBackIosIcon />}
              onClick={goBack}
            >
              volver
            </Button>
          </Box>
        </Grid>
      ) : (
        <LoadingComponent />
      )
      }
      <CommentBoard hotelId={hotel.id} arrayComments={hotel.comments} />
    </Grid>
  );
}

