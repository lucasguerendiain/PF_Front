import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom/dist';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
  console.log(props);

  const navigate = useNavigate();

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={10} md={10}>
        <Card>
          <CardActionArea key={id} component={Link} to={`/package/${id}`}>
            <CardHeader
              title={name}
              subheader={`${dateInit} to ${dateEnd}`}
              action={
                <Typography variant='h6' component='span' color='textSecondary'>
                  ${price}
                </Typography>
              }
            />
          </CardActionArea>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Carousel>
                  {img?.map((i) => {
                    return (
                      <div>
                        <img src={i} alt='.' />
                      </div>
                    );
                  })}
                </Carousel>
              </Grid>

              <Grid item xs={8}>
                <Grid>
                  <Typography variant='body2' color='text.secondary'>
                    {description}
                  </Typography>
                </Grid>

                <Grid container sapcing={3}>
                  <Grid item xs={4}>
                    <Typography>Actividades</Typography>
                    {activities?.map((a) => {
                      return (
                        <ul>
                          <li>{a.name}</li>
                        </ul>
                      );
                    })}
                  </Grid>

                  <Grid item xs={4}>
                    <Typography>Restaurants</Typography>
                    {restaurants?.map((r) => {
                      return (
                        <ul>
                          <li>{r.name}</li>
                        </ul>
                      );
                    })}
                  </Grid>

                  <Grid item xs={4}>
                    <Typography>Hotel</Typography>
                    <ul>
                      <li>{hotel.name}</li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
