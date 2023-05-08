import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { getRestaurantDetailById } from "../../../redux/actions/RestaurantsActions";
import LoadingComponent from "../../Loading/LoadingComponent";
import CommentBoard from "../../CommentBoard/CommentBoard";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addRestoForm } from "../../../redux/actions/formActions";

export default function RestoDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurants.detail);
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
        dispatch(getRestaurantDetailById(id));
      } catch (error) {
        console.log("Error en el useEffect", error);
      }
    };

    id && getDetail();
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    if (toForm) {
      dispatch(addRestoForm(restaurant));
      alert("añadida con exito");
    } else {
      alert("no deberias estar viendo esto");
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
      {Object.keys(restaurant).length ? (
        <Grid
          sx={{
            maxWidth: "70vw",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: "2%",
            marginLeft: "8%",
          }}
        >
          <Typography variant="h1" component="subtitle1" gutterBottom marginTop="1%">
            {restaurant.name}
          </Typography>
          <Slider {...setings}>
            {restaurant.img
              ? restaurant.img.map((item, index) => (
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
                {restaurant.description}
              </Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Ubicacion:
              <Typography variant="h4">{restaurant.location}</Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              ¿Precio aproximado por plato...?:
              <Typography variant="h4">{restaurant.price} USD</Typography>
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
              startIcon={toForm? <AddCircleIcon/> : ""}
              onClick={handleClick}
              disabled={toForm? false : true}
            >
              {toForm? "Añadir al paquete" : ""}
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
      )}
       <CommentBoard/>
    </Grid>
  );
}
