import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function UserFeedback({handleClose}) {
  const [inputs, setInputs] = useState({
    from: '',
    content: '',
    img: '',
  });

  const [error, setError] = useState({
    content: '',
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const validate = (content) => {
    const lineas = content.slice('\n');
    if (lineas.length > 15) setError({ content: 'no mas de 15 lineas' });
    else setError({ content: '' });
  };

  useEffect(() => {
    validate(inputs.content);
  }, [inputs]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.values(error)) {
      const mensaje = {
        from: inputs.from || 'anonimo',
        content: inputs.content,
      };
      const response = await axios.post('/mails', mensaje);
      if (response.status === 200) {
        alert('gracias por comunicarte con nosotros');
        handleClose();
      }
    } else console.log(error.content);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: "60vw"
      }}
    >
      <Typography variant='h2' gutterBottom>
        Contactanos
      </Typography>
      <Grid item sx={{ width: '90%' }}>
        <TextField
          name='from'
          label='Remitente'
          fullWidth
          placeholder='puede ser anonimo'
          value={inputs.from}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sx={{ width: '90%' }}>
        <TextField
          multiline
          fullWidth
          rows={6}
          name='content'
          label='Mensaje'
          placeholder='que tenes para decirnos?'
          value={inputs.content}
          onChange={handleChange}
        />
      </Grid>
      <Grid sx={{display:"flex", flexDirection: "row", marginTop: '1%', marginBottom: '1%' }}>
      <Button
        sx={{marginRight: "1%"}}
        onClick={handleSubmit}
        variant='contained'
        size='medium'
      >
        Mandar
      </Button>
      {handleClose
      ? (<Button
        onClick={handleClose}
        size='medium'
        variant='contained'
        >
        Cancelar
      </Button>) 
      : ""
      }
      </Grid>
    </Grid>
  );
}
