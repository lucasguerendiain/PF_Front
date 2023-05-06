import React  from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { agregarActivitie } from "../../redux/actions/carritoActions";
import { getActivityByName } from "../../redux/actions/ActivitiesActions";

export default function Actividades(props) {
  const { id, name, duration, img, description, typeAct, price } =
    props.actividad;
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    dispatch(agregarActivitie(props.actividad))
    alert("Se agrego la actividad al carrito.")
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea key={id} href={`/activity/byId/${id}`}>
        <CardMedia component="img" alt="actividad" height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography>{price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid display="flex" justify-content="space-between" align-items="center">
        <CardActions>
          <Button variant="outlined" value={name} onClick={ e => handleClick(e)}>
            Agregar al carrito
          </Button>
        </CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Grid>
    </Card>
  );
}
