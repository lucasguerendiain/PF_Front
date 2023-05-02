import React, { useEffect, useState } from "react";
import Actividades from "../Cards/Actividades";
import { Grid } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllActivities } from "../../redux/reducer/activitiesSlice";

export default function ActivityCardontainer() {
  const [actividades, setActividads] = useState([]);
// const {actividades} = useSelector(state => state.allActivities)
//   const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllActivities())
    setActividads([
      {
        name: "Actividad 1",
        duration: 5,
        img: [
          "https://www.patagonia-argentina.com/wp-content/uploads/2017/12/glaciar-viedma.jpg",
        ],
        description:
          "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
        typeAct: "traking",
        price: 3000,
      },
      {
        name: "Actividad 2",
        duration: 4,
        img: [
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6d/1d/36.jpg",
        ],
        description:
          "Embárcate en una aventura única a través del Canal de Beagle, uno de los lugares más icónicos de la Patagonia. ",
        typeAct: "travel",
        price: 6000,
      },
      {
        name: "Actividad 3",
        duration: 10,
        img: [
          "https://www.patagonia-argentina.com/wp-content/uploads/2017/12/Cerro-Torre.jpg",
        ],
        description:
          "Experimenta el desafío de una subida al Cerro Torre, la montaña más icónica de la Patagonia.",
        typeAct: "treking",
        price: 4000,
      },
      {
        name: "Actividad 4",
        duration: 6,
        img: [
          "https://www.patagonia-argentina.com/wp-content/uploads/2017/12/parque-nacional-tierra-del-fuego.jpg",
        ],
        description:
          "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
        typeAct: "bike",
        price: 3500,
      },
      {
        name: "Actividad 5",
        duration: 5,
        img: [
          "https://www.patagonia-argentina.com/wp-content/uploads/2017/12/estancia-cristina-2.jpg",
        ],
        description:
          "Descubre la Patagonia de una forma diferente, a caballo en la Estancia Cristina.",
        typeAct: "show",
        price: 3700,
      },
    ]);
  }, [setActividads]);

  return (
    <>
    <SearchBar/>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {actividades.length ? (
          actividades.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Actividades key={index} actividad={p} />
            </Grid>
          ))
        ) : (
          <p>No hay actvidades que mostrar</p>
        )}
      </Grid>
    </>
  );
}
