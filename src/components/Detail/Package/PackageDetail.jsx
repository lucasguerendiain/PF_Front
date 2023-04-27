import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PackageDetail() {
    const {id} = useParams();
    const [pack, setPack] = useState({
        name: "cargando...",
        location: "cargando...",
        price: "",
        duration: "",
        img: "",
        description: "si estas viendo esto, fallo algo",
        quotas: 0,
        date: "",
        hotel: "",
        resto: "",
        activities: [],
    });

    const handleBuy = () => {
        console.log("no esta implementado esto todavia");
    }

    useEffect(async () => {
        //de momento no se puede buscar por id
        //const response = await axios.get(`http://localhost:3001/package/${id}`);
        //la otra que se puede hacer es buscarlo en el state del store
        //setPack(response.data);
    }, []);

    return (
        <div>
            <img src={pack.img} alt={pack.name}/>
            <h1>Name: {pack.name}</h1>
            <h1>Location: {pack.location}</h1>
            <h3>Duration: {pack.duration} dias</h3>
            <h2>Description: {pack.description}</h2>
            <h3>Qutoas: {pack.quotas}</h3>
            <h3>Date: {pack.date}</h3>
            <ul>
                {/*
                    aca iria un mapeo de las actividades que se pueden hacer
                    falta saber en que formato las mandan al front
                 */}
            </ul>
            {/* esto se puede cambiar por un pop up que tenga el detalle del hotel */}
            <Link to={"/hotelDetail"}>
                <h2>hotel: {pack.hotel}</h2>
            </Link>
            {pack.resto
                ? (<Link to={"/restaurantDetail"}>
                        <h2>Restaurant: {pack.resto}</h2>
                    </Link>) 
                : ("")
            }
            <h1>Price: {pack.price}</h1>
            <button onClick={handleBuy}>Buy package</button>
        {/*
        abajo de esto vendria el componente de los comentarios:
        arriba del todo para dejar un comentario nuevo
        y abajo de eso el display de los comentarios ya existentes
        */}
        </div>
    );
}

export default PackageDetail;