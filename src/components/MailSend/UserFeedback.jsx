import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function UserFeedback() {
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
    if (lineas.length > 7) setError({ content: 'no mas de 7 lineas' });
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
        border: '1px solid black',
        width: '60vw',
        marginLeft: '20%',
        marginTop: '5%',
        marginBottom: '1%',
      }}
    >
      <Typography variant='h2' gutterBottom>
        Contactanos
      </Typography>
      <Grid item sx={{ width: '50vw' }}>
        <TextField
          name='from'
          label='Remitente'
          fullWidth
          placeholder='puede ser anonimo'
          value={inputs.from}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sx={{ width: '50vw' }}>
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
      <Button
        sx={{ marginTop: '1%', marginBottom: '1%' }}
        onClick={handleSubmit}
        variant='contained'
        size='medium'
      >
        Mandar
      </Button>
    </Grid>
  );
}
