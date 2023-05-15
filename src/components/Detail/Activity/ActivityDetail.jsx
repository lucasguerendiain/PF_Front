import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { getActivityDetailById } from "../../../redux/actions/ActivitiesActions";
import LoadingComponent from "../../Loading/LoadingComponent";
import CommentBoard from "../../CommentBoard/CommentBoard";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addActiForm } from "../../../redux/actions/formActions";
import { agregarActivitie } from "../../../redux/actions/carritoActions";


export default function ActivityDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activity = useSelector((state) => state.activities.detail);
  const toForm = useSelector((state) => state.form.toForm);
  const { id } = useParams();
  // const [comment, setComment] = useState(activity.comments)

  useEffect(() => {
    const getDetail = async () => {
      try {
        await dispatch(getActivityDetailById(id));
      } catch (error) {
        console.log(
          "Ocurrió un error al obtener el detalle del paquete:",
          error
        );
      }
    };
    id && getDetail();
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

//   useEffect(() => {
//     setComment(activity.comments)
// }, [activity])

  const handleClick = () => {
    if (toForm) {
      dispatch(addActiForm(activity));
      alert("añadida con exito");
    } else {
      dispatch(agregarActivitie(activity));
      alert("la actividad se añadio al carrito");
    }
  }

  const setings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    adaptativeHeigth: false,
  };

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
      {Object.keys(activity).length ? (
        <Grid>
          <Typography
            variant="h1"
            gutterBottom
            fontWeight="600"
            sx={{ marginTop: "1%" }}
          >
            {activity.name}
          </Typography>
          <Slider {...setings}>
            {activity.img
              ? activity.img.map((item, index) => (
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
                {activity.description}
              </Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Duracion:
              <Typography variant="h4">{activity.duration} horas</Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Tipo de actividad:
              <Typography variant="h4">{activity.typeAct}</Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Precio:
              <Typography variant="h4">{activity.price} USD</Typography>
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
              sx={{ fontSize: "1.4rem" }}
              startIcon={<ArrowBackIosIcon />}
              onClick={goBack}
            >
              volver
            </Button>
          </Box>
        </Grid>) : <LoadingComponent />
      }
      <CommentBoard activityId={activity.id} arrayComments={activity.comments} />
    </Grid>
  );
}


