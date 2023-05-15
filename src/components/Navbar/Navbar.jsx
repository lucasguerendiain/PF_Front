import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { addUser } from "../../redux/actions/UserActions";
import style from './Navbar.css';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/Horizons2.png';


  






const Navbar = () => {
  const {logout, loginWithRedirect, user, isAuthenticated, isLoading, error } = useAuth0();
  const dispatch = useDispatch();


  const [data, setData] =useState({
    email : "",
    name: "",
    lastName:"",
    picture :"",
    validator: "",
    sent: false,
    admin : false,
  });


  if (isAuthenticated && user.email) {
    
    if (!data.sent) {
      
      setData({
        email : user.email,
        name: user.given_name,
        lastName:user.family_name,
        picture :user.picture,
        validator: user.sub,
        sent : true,  
      })
    }
    if(data.sent){
      dispatch(addUser(data))
      console.log( data, user)
    }

    return (
      <nav className={style.navbar}>
        <div className={style.container}>
          <Link to='/' className={style.navLogo}>
            <img src={logo} alt='Logo' style={{ width: '75px' }} />
          </Link>
          <div
            className={style.collapse + ' collapse navbar-collapse'}
            id='navbarNav'
          >
            <ul className={style.navbarNav + ' navbar-nav ml-auto'}>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/'>
                  Inicio
                </Link>
              </li>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/dashboard'>
                  Administrador
                </Link>
              </li>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/packagecards'>
                  Paquetes
                </Link>
              </li>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/activitycards'>
                  Actividades
                </Link>
              </li>
              
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/carrito'>
                  <FaShoppingCart /> Carrito
                </Link>
  
                <Link className={style.navLink + ' nav-link'} to='/user'>
                  <FaUser /> Usuario {/* Icono de usuario de react-icons */}
                </Link>
              </li>
              <li className={style.navItem + ' nav-item ml-auto'}>
                <Link className={style.navLink + ' nav-link'} onClick={() => logout({ returnTo: window.location.origin })}>
                  <FaUser /> Cerrar sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }



  if (!isAuthenticated && !isLoading) {
    

    return (
      <nav className={style.navbar}>
        <div className={style.container}>
          <Link to='/' className={style.navLogo}>
            <img src={logo} alt='Logo' style={{ width: '75px' }} />
          </Link>
          <div
            className={style.collapse + ' collapse navbar-collapse'}
            id='navbarNav'
          >
            <ul className={style.navbarNav + ' navbar-nav ml-auto'}>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/'>
                  Inicio
                </Link>
              </li>
              {/* <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/dashboard'>
                  Administrador
                </Link>
              </li> */}
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/packagecards'>
                  Paquetes
                </Link>
              </li>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/activitycards'>
                  Actividades
                </Link>
              </li>
              <li className={style.navItem + ' nav-item ml-auto'}>
                <Link className={style.navLink + ' nav-link'} onClick={loginWithRedirect} >
                  <FaUser /> Iniciar sesión
                </Link>
              </li>
               {/*<li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/carrito'>
                  <FaShoppingCart /> Carrito
                </Link>
              </li>
              <li>
                <Link className={style.navLink + ' nav-link'} to='/user'>
                  <FaUser /> Usuario {/* Icono de usuario de react-icons 
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }





  
};

export default Navbar;
