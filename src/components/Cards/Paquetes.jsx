import React from "react";

const Paquete = (props) => {
    const { name,img,duration,price,date,location } = props.paquete
    return(
        <div>
            <h1>{name}</h1>
            <img src={img} alt="image"></img>
            <p>Duración: {duration}</p>
            <p>Fecha: {date}</p>
            <p>Ubicación: {location}</p>
            <p>Precio: ${price}</p>
        </div>
    )
}

export default Paquete