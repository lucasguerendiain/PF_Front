import React  from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { agregarActivitie } from "../../redux/actions/carritoActions";
import { addActiForm } from "../../redux/actions/formActions"
import { Link } from "react-router-dom";


export default function Actividades(props) {
  const { id, name, duration, img, description, typeAct, price, rating } =
    props.actividad;
  const dispatch = useDispatch();
  const toForm = useSelector((state) => state.form.toForm);

  const handleClick = async (e) => {
    if (toForm) {
      dispatch(addActiForm(props.actividad));
      alert("se agrego con exito");
    } else {
      dispatch(agregarActivitie(props.actividad))
      alert("Se agrego la actividad al carrito.")
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea key={id} component={Link} to={`/activity/byId/${id}`}>
        <CardMedia component="img" alt="actividad" height="140" image={img[0]} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
          <Typography>{price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid display="flex" justify-content="space-between" align-items="center">
        <CardActions>
          <Button variant="outlined" value={name} onClick={ e => handleClick(e)}>
            {toForm? "Agregar al paquete" : "Agregar al carrito"}
          </Button>
        </CardActions>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
      </Grid>
    </Card>
  );
}
