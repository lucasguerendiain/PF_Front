import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
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


export default function ActivityDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activity = useSelector((state) => state.activities.detail);
  const { id } = useParams();
  console.log(activity);

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
    <Grid>
        {Object.keys(activity).length ? (<Grid
        sx={{
          maxWidth: "70vw",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "2%",
          marginLeft: "8%",
        }}
      >
        <Typography variant="h1" gutterBottom>
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
          <Typography variant="h3" sx={{ fontWeight: "600" }} gutterBottom>
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
            startIcon={<AddShoppingCartIcon />}
          >
            Añadir al Carrito
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
      </Grid>) : <LoadingComponent/>
      }
       <CommentBoard/>
    </Grid>
  );
}

