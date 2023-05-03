import React from "react";
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

export default function Actividades(props) {
  const { id, name, location, description, img, stars, priceDay } =
    props.hotel;
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea key={id} href={`/hotel/byId/${id}`}>
        <CardMedia component="img" alt="hotel" height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography>{priceDay}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid display="flex" justify-content="space-between" align-items="center">
        <CardActions>
          <Button variant="outlined" onClick={dispatch(agregarActivitie)}>
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