import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from "../assets/imagen1.png";
import imagen2 from "../assets/imagen2.png";
import imagen3 from "../assets/imagen3.png";
import imagen4 from "../assets/imagen4.png";
import imagen5 from "../assets/imagen5.png";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Bienvenidos a nuestro sitio de turismo</h1>
        <h3>La Patagonia es una de las regiones más hermosas y salvajes de América del Sur. Con sus vastas llanuras, majestuosas montañas y glaciares, bosques imponentes y una fauna única, la Patagonia es un paraíso para los amantes de la naturaleza y los aventureros por igual.</h3>
        
        <div className="search-container">
          <SearchBar />
          <div className="search-img-container">
            <img src={imagen5} alt="Imagen 5" className="search-img" />
            <img src={imagen4} alt="Imagen 4" className="search-img-right" />
          </div>
        </div>
        <h1>Encuentra el mejor destino para tus próximas vacaciones</h1>
        <h3>Esta región ofrece una amplia gama de actividades al aire libre, como caminatas, kayak, pesca, observación de ballenas, esquí y snowboard, entre otras. Los turistas pueden recorrer los parques nacionales, como Torres del Paine, Nahuel Huapi, Los Glaciares y Tierra del Fuego, donde se pueden admirar las impresionantes formaciones rocosas, los glaciares majestuosos y los lagos cristalinos.</h3>
        <h4>
        La Patagonia es una de las pocas regiones del mundo donde se puede experimentar la naturaleza en su forma más pura y salvaje. Si estás buscando una experiencia única y emocionante en un entorno natural impresionante, no puedes dejar de visitar la Patagonia. Descubre la belleza de la naturaleza en su estado más puro y deja que la Patagonia te sorprenda.
        </h4>
        <Slider {...settings}>
          <div>
            <img src={imagen1} alt="Imagen 1" />
          </div>
          <div>
            <img src={imagen2} alt="Imagen 2" />
          </div>
          <div>
            <img src={imagen3} alt="Imagen 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;