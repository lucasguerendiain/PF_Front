import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { agregarActivitie } from "../../redux/actions/carritoActions";

export default function Actividades(props) {
  const { name, duration, img, description, typeAct, price } = props.actividad;
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="actividad" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography>
            {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={dispatch(agregarActivitie)}>Add to cart</Button>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
