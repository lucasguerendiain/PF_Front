import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
// import { useDispatch, useSelector } from "react-redux"
import Paquete from "../Cards/Paquetes";
// import Actividades from "../Cards/Actividades"

// import { getAllPackages } from "../../redux/actions/packageSlice";
// import { getAllActivities } from "../../redux/actions/ActivitiesActions";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function CardsContainer() {
  // const {paquetes} = useSelector((state) => state.allPackages)
  // const {actividades} = useSelector((state) => state.allActivities)
  const [paquetes, setPaquetes] = useState([]);

  // const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllPackages())
    // dispatch(getAllActivities())
    setPaquetes([
      {
        id: "7c214ea0-4636-42bf-853d-01925d09b409",
        name: "elias",
        location: "Cusco, Perú",
        price: 2000,
        duration: 9,
        img: [
          "https://example.com/image10.jpg",
          "https://example.com/image11.jpg",
          "https://example.com/image12.jpg",
        ],
        description:
          "Explora la ciudadela inca de Machu Picchu y mucho más en este paquete de turismo en Cusco. ",
        quotas: 6,
        date: "2024-01-02 - 2024-01-10",
      },
      {
        id: "7d4b5d62-ed7e-4b4f-8782-0503de1e039f",
        name: "Paquete 3",
        location: "Bali, Indonesia",
        price: 1800,
        duration: 8,
        img: [
          "https://example.com/image7.jpg",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg",
        ],
        description:
          "Vive una experiencia única en Bali durante 8 días. Hospédate en el Hotel Ayana Resort and Spa y disfruta de las playas paradisíacas de la isla, la cultura local y la gastronomía balinesa.",
        quotas: 12,
        date: "2023-11-10 - 2023-11-17",
      },
      {
        id: "4067c7b7-9073-4f2f-b98c-d2cf37583a66",
        name: "Paquete 1",
        location: "Playa del Carmen, México",
        price: 1500,
        duration: 7,
        img: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
        description:
          "Disfruta de una semana inolvidable en Playa del Carmen, hospedándote en el Hotel Riviera Maya.",
        quotas: 10,
        date: "2023-08-01 - 2023-08-07",
      },
      {id: "7c214ea0-4636-42bf-853d-01925d09b409",
      name: "elias",
      location: "Cusco, Perú",
      price: 2000,
      duration: 9,
      img: [
        "https://example.com/image10.jpg",
        "https://example.com/image11.jpg",
        "https://example.com/image12.jpg",
      ],
      description:
        "Explora la ciudadela inca de Machu Picchu y mucho más en este paquete de turismo en Cusco. ",
      quotas: 6,
      date: "2024-01-02 - 2024-01-10",
    },
    {
      id: "7d4b5d62-ed7e-4b4f-8782-0503de1e039f",
      name: "Paquete 3",
      location: "Bali, Indonesia",
      price: 1800,
      duration: 8,
      img: [
        "https://example.com/image7.jpg",
        "https://example.com/image8.jpg",
        "https://example.com/image9.jpg",
      ],
      description:
        "Vive una experiencia única en Bali durante 8 días. Hospédate en el Hotel Ayana Resort and Spa y disfruta de las playas paradisíacas de la isla, la cultura local y la gastronomía balinesa.",
      quotas: 12,
      date: "2023-11-10 - 2023-11-17",
    },
    {
      id: "4067c7b7-9073-4f2f-b98c-d2cf37583a66",
      name: "Paquete 1",
      location: "Playa del Carmen, México",
      price: 1500,
      duration: 7,
      img: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
      ],
      description:
        "Disfruta de una semana inolvidable en Playa del Carmen, hospedándote en el Hotel Riviera Maya.",
      quotas: 10,
      date: "2023-08-01 - 2023-08-07",
    },
    ]);
  }, [setPaquetes]);

  return (
    <>
      <SearchBar />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {paquetes.length ? (
          paquetes.map((p, index) => (
            <Grid  item xs={2} sm={4} md={4} key={index}>
              <Paquete key={index} paquete={p} />
            </Grid>
          ))
        ) : (
          <p>No hay paquetes que mostrar</p>
        )}
      </Grid>
      {/* <div>
            {actividades.length ? (
                actividades.map((a,index) => (
                    <Actividades key={index} actividad={a}/>
                ))
            ) : (
                <p>No hay actividades que mostrar</p>
            )}
        </div> */}
      <Link to={"/home"}>
        <Button variant="contained">Home</Button>
      </Link>
    </>
  );
}
