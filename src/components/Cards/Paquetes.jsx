import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';



import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { CardActionArea, CardActions } from '@mui/material';


import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

//for expand-----------------------------
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
//----------------------------------------------

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
    raiting,
  } = props.paquete;
  console.log(props);

  const transformDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString().split(',')[0];
  };

  //For expand---------------------------
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //-------------------------------

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={10} md={10}>
        <Card>
          <CardActionArea key={id} component={Link} to={`/package/${id}`}>
            <CardHeader
              title={name}
              subheader={`${transformDate(dateInit)} to ${transformDate(
                dateEnd,
              )}`}
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
                  <CardActions>
                    <Typography>DESCRIPCION</Typography>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{description}</Typography>
                    </CardContent>
                  </Collapse>
                </Grid>

                <Grid>
                  <Grid container sapcing={3}>
                    <Grid item xs={4} >
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
                <Grid></Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
