import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Paquete(props) {
  const {
    id,
    name,
    location,
    price,
    duration,
    img,
    description,
    quotas,
    dateInit,
    dateEnd,
    restaurants,
    activities,
    hotel,
  } = props.paquete;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea key={id} component={Link} to={`/package/${id}`}>
        <CardHeader
          action={
            <Typography>
              {`$ ${price}`}
            </Typography>
          }
          title={name}
          subheader={`${duration} dias`}
        />
        <CardMedia component="img" height="194" image={img[0]} alt="" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
      <CardActions>
        <Button variant="outlined">Agregar al carrito</Button>
      </CardActions>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Hotel: </Typography>
          <Typography paragraph>{hotel.name}</Typography>
          <Typography paragraph>Restoran: </Typography>
          <Typography paragraph>{restaurants[0].name}</Typography>
          <Typography paragraph>Actividad: </Typography>
          <Typography paragraph>{activities[0].name}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
