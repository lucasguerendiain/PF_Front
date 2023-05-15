import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import style from './Navbar.css';

import logo from '../../assets/Horizons2.png';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

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
            <li
              className={`${style.navItem} nav-item dropdown ${
                showDropdown ? 'show' : ''
              }`}
              onClick={handleDropdownToggle}
            >
              <a
                className={style.navLink + ' nav-link dropdown-toggle'}
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded={showDropdown ? 'true' : 'false'}
              >
                Destinos
              </a>
              <div
                className={`${style.dropdownMenu} dropdown-menu`}
                aria-labelledby='navbarDropdown'
              >
              
                {showDropdown && (
                  <>
                    <Link
                      className='dropdown-item'
                      to='/hotelcards'
                      onClick={closeDropdown}
                    >
                      Hoteles
                    </Link>
                    <Link
                  className='dropdown-item'
                  to='/activitycards'
                  onClick={closeDropdown}
                >
                  Actividades
                </Link>
                    <Link
                      className='dropdown-item'
                      to='/restaurantcards'
                      onClick={closeDropdown}
                    >
                      Restaurantes
                    </Link>
                  </>
                )}
              </div>
            </li>
            <li className={style.navItem + ' nav-item ml-auto'}>
              <Link className={style.navLink + ' nav-link'} to='/login'>
                <FaUser /> Iniciar sesión
              </Link>
            </li>
            <li className={style.navItem + ' nav-item'}>
              <Link className={style.navLink + ' nav-link'} to='/carrito'>
                <FaShoppingCart /> Carrito
              </Link>
            </li>
            <li className={style.navItem + ' nav-item'}>
              <Link className={style.navLink + ' nav-link'} to='/user'>
                <FaUser /> Usuario {/* Icono de usuario de react-icons */}
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
