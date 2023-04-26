import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Importar el icono de usuario de react-icons
import style from "./Navbar.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.collapse + " collapse navbar-collapse"} id="navbarNav">
          <ul className={style.navbarNav + " navbar-nav ml-auto"}>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/">
                Inicio
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/destinos">
                Destinos
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/ofertas">
                Ofertas y paquetes
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/reservas">
                Reservas
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/contacto">
                Contacto
              </Link>
            </li>

            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/turismo">
                Turismo
              </Link>
            </li>
            <li className={style.navItem + " nav-item ml-auto"}>
              <Link className={style.navLink + " nav-link"} to="/iniciar-sesion">
                <FaUser /> Iniciar sesión {/* Icono de usuario de react-icons */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

