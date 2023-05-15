import React, { useState } from 'react';
import './Footer.css';
import BasicModal from '../CreatePackage/Modals/BasicModal';
import UserFeedback from '../MailSend/UserFeedback';
import { Box } from '@mui/material';

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-options'>
          <a href='#'>Acerca de nosotros</a>
          <a href='#'>Destinos turísticos</a>
          <a href='#'>Reservas y precios</a>
          <a onClick={() => setOpen(true)}>Contacto</a>
          <Box>
          <BasicModal
            open={open}
            handleClose={() => setOpen(false)}
            title=""
            content={<UserFeedback handleClose={() => setOpen(false)}/>}
            handleSubmit={false}
          />
          </Box>
        </div>
        <div className='footer-text'>
          <p>
            Explora y descubre nuevos lugares para visitar en tus próximas
            vacaciones.
          </p>
          <p>
            Suscríbete a nuestro boletín y recibe ofertas exclusivas para
            viajar.
          </p>
          <form>
            <input type='email' placeholder='Ingresa tu correo electrónico' />
            <button type='submit'>Suscribirme</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
