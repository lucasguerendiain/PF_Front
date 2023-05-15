import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-options'>
          <a href='#'>Acerca de nosotros</a>
          <a href='#'>Destinos turísticos</a>
          <a href='#'>Reservas y precios</a>
          <a href='#'>Contacto</a>
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
