import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";

import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addRestoForm } from '../../redux/actions/formActions';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

export default function Actividades(props) {
  const { id, name, location, img, price, description, comments, rating } =
    props.restaurants;
  const toForm = useSelector((state) => state.form.toForm);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    if (toForm) {
      dispatch(addRestoForm(props.restaurants));
      alert('se agrego con exito');
    } else {
      alert('no deberias poder ver esto');
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea key={id} component={Link} to={`/restaurant/byId/${id}`}>
        <CardMedia
          component='img'
          alt='restaurant'
          height='140'
          image={img[0]}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography>{price}</Typography>

          <Rating
            name='half-rating-read'
            value={rating}
            precision={0.5}
            readOnly
          />
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid display='flex' justify-content='space-between' align-items='center'>
        <CardActions>
          {toForm ? (
            <Button variant='outlined' onClick={handleClick}>
              Agregar al paquete
            </Button>
          ) : (
            ''
          )}
        </CardActions>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
      </Grid>
    </Card>
  );
}
