import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import './User.css';
import { Link } from "react-router-dom";
import ReservasCardContainer from '../CardsContainer/ReservasCardContainer';

const User = () => {
  const {user, isAuthenticated,} = useAuth0();
  const admin = process.env.REACT_APP_ADMIN_USERS;
  
  if (isAuthenticated && user.picture) {
    if(user.email === admin){
      return (
        <div className='container0'>
          <div className='container1'>
            <img src={user.picture} alt={user.name} className='imgRedonda' />
            <h2>{user.name}</h2>
          </div>
          <h3>Datos de Usuario:</h3>
          <div className='container2'>
            <p><b> Nombre:</b>    {user.given_name}</p>
            <p><b>Apellido:</b>    {user.family_name}</p>
            <p><b>Apodo:</b>    {user.nickname}</p>
            <p><b>correo electronico:</b>    {user.email}</p>
          </div>
            <h3>Herramientas de administrador</h3>
          <div className='container2'>
            <Link to='/dashboard'>
              Ir a pagina de Administrador
            </Link>
          </div>
        </div>  
      );
    } else {
    return (
      <div className='container0'>
        <div className='container1'>
          <img src={user.picture} alt={user.name} className='imgRedonda' />
          <h2>{user.name}</h2>
        </div>
        <h3>Datos de Usuario:</h3>
        <div className='container2'>
          <p><b> Nombre:</b>    {user.given_name}</p>
          <p><b>Apellido:</b>    {user.family_name}</p>
          <p><b>Apodo:</b>    {user.nickname}</p>
          <p><b>correo electronico:</b>    {user.email}</p>
        </div>
          <h3>Paquetes Reservados:</h3>
        <div className='container2'>
          <ReservasCardContainer/>
        </div>
      </div>
      );
    }
  }
};

export default withAuthenticationRequired(User);
