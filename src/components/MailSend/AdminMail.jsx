import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminMail() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    to: '',
    title: '',
    img: '',
    content: '',
    link: '',
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mensaje = {
        to: inputs.to.replace(/\s+/g, '').split(','),
        title: inputs.title,
        content: inputs.content,
        img: inputs.img,
        link: inputs.link,
      };
      const response = await axios.post('/mails/admin', mensaje);
      if (response.status === 200) {
        alert('mensaje mandado con exito');
        navigate(0);
      } else console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80vw',
          border: '1px solid black',
          marginLeft: '10%',
          marginTop: '0.5%',
        }}
      >
        <Typography gutterBottom variant='h2' fontWeight='600'>
          Mail a enviar:{' '}
        </Typography>
        <Grid item sx={{ width: '70vw' }}>
          <TextField
            fullWidth
            name='title'
            label='Titulo del mail'
            value={inputs.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sx={{ width: '70vw' }}>
          <TextField
            fullWidth
            name='to'
            label='Para quien/es es el mail'
            value={inputs.to}
            onChange={handleChange}
            palceholder='cada usuario va separado por una coma'
          />
        </Grid>
        <Grid item sx={{ width: '70vw' }}>
          <TextField
            multiline
            rows={7}
            fullWidth
            name='content'
            label='Contenido del mail'
            onChange={handleChange}
            value={inputs.content}
          />
        </Grid>
        <Grid item sx={{ width: '70vw', marginBottom: '0.5%' }}>
          <TextField
            fullWidth
            name='link'
            label='Link unico'
            value={inputs.link}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          border: '1px solid black',
          width: '78.2vw',
          marginLeft: '10%',
          backgroundColor: 'lightgray',
          paddingTop: '1%',
        }}
      >
        <Typography gutterBottom fontWeight='600' variant='h2'>
          Vista previa:
        </Typography>
        <Grid sx={{ border: '1px solid black', width: '75vw' }}>
          <Typography
            variant='h2'
            gutterBottom
            sx={{ marginLeft: '1%', border: '1px solid black' }}
          >
            Titulo :
            <Typography variant='h3' marginLeft='1%'>
              {inputs.title}
            </Typography>
          </Typography>
          <Typography
            variant='h2'
            gutterBottom
            sx={{ marginLeft: '1%', border: '1px solid black' }}
          >
            Destinatarios:
            <Typography variant='h3' marginLeft='1%'>
              {inputs.to
                .replace(/\s+/g, '')
                .split(',')
                .map((elem) => {
                  return `<${elem}>`;
                })}
            </Typography>
            <Typography variant='h4' marginLeft='1%'>
              {inputs.to && inputs.to.split(',').length} destinatario/s
            </Typography>
          </Typography>
          <Typography
            variant='h2'
            gutterBottom
            sx={{ marginLeft: '1%', border: '1px solid black' }}
          >
            Contenido:
            <Typography
              variant='h3'
              sx={{ whiteSpace: 'pre-line', marginLeft: '1%' }}
            >
              {`
                            ${inputs.content}
                            `}
              <a href={inputs.link}>{inputs.link}</a>
            </Typography>
          </Typography>
        </Grid>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          sx={{ alignSelf: 'center' }}
          variant='contained'
          size='large'
          onClick={handleSubmit}
        >
          Mandar
        </Button>
      </CardActions>
    </Card>
  );
}
