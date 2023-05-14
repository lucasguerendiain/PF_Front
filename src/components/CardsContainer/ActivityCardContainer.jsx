import React, { useEffect, useState } from 'react';
import Actividades from '../Cards/Actividades';
import { Grid, Button, Typography, Box } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { getAllActivity } from '../../redux/actions/ActivitiesActions';
import LoadingComponent from '../Loading/LoadingComponent';
import { Link } from 'react-router-dom';
import FilterActivity from '../Filter/FilterActivity';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function ActivityCardontainer() {
  const actividades = useSelector((state) => state.activities.viewActivities);
  const allActivities = useSelector((state) => state.activities.allActivities);
  const [paginado, setPaginado] = useState([]);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const lugar = 'activity';

  const handlePageChange = (name) => {
    if (name === 'left') {
      if (page > 0) setPage(page - 1);
    } else {
      if (page < paginado.length - 1) setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(getAllActivity());
  }, [dispatch]);

  useEffect(() => {
    setPage(0);
    const pivotArray = [];
    for (let i = 0; i < actividades.length; i += 9) {
      pivotArray.push(actividades.slice(i, i + 9));
    }
    setPaginado(pivotArray);
  }, [actividades]);

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
      }}
    >
      <SearchBar ubicacion={lugar} />
      <FilterActivity activities={allActivities} />
      <Box display='flex' flexDirection='row' marginTop='1%' marginBottom='1%'>
        <Button
          size='large'
          disableRipple
          onClick={() => handlePageChange('left')}
        >
          <ArrowCircleLeftIcon />
        </Button>
        <Typography variant='h4'>Pagina {page + 1}</Typography>
        <Button
          size='large'
          disableRipple
          onClick={() => handlePageChange('right')}
        >
          <ArrowCircleRightIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        marginBottom='2em'
      >
        {paginado.length ? (
          paginado[page].map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Actividades key={index} actividad={p} />
            </Grid>
          ))
        ) : (
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            style={{ height: '100vh' }}
          >
            <Grid item>
              <LoadingComponent />
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        margin='1em'
      >
        <Link to={'/home'}>
          <Button variant='contained'>Inicio</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
