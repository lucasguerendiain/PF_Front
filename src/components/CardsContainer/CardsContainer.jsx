import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux"
import Paquete from "../Cards/Paquetes";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
// import Actividades from "../Cards/Actividades"
// import { getAllActivity } from "../../redux/actions/ActivitiesActions";
// import { getAllPacks } from "../../redux/actions/packageActions";
import { getAllPackages } from "../../redux/reducer/packageSlice";
//imports para los selects ⬇️⬇️⬇️⬇️⬇️

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";


export default function CardsContainer() {
  // const {paquetes} = useSelector((state) => state.allPackages)
  // const {actividades} = useSelector((state) => state.allActivities)
  const [paquetes, setPaquetes] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllPackages())
    // dispatch(getAllActivities())
    setPaquetes([
      {
        id: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
        name: "Paquete 5",
        location: "Playa del Carmen, México",
        price: 15000,
        duration: 3,
        img: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
        description: "Disfruta de una semana inolvidable en Playa del Carmen",
        quotas: 10,
        dateInit: 20230801,
        dateEnd: 20230807,
        hotelId: 1,
        userId: null,
        restaurants: [
          {
            id: 1,
            name: "Restaurant 1",
            location: "Lima, Perú",
            img: [
              "https://res.cloudinary.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://www.peru.travel/Contenido/Atractivo/Imagen/7643/3.png",
            ],
            price: 3380,
            description:
              "La Mar Cebichería es un restaurante famoso por su comida peruana fresca y deliciosa.",
            packageRestaurant: {
              createdAt: "2023-04-29T21:45:54.881Z",
              updatedAt: "2023-04-29T21:45:54.881Z",
              packageId: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
              restaurantId: 1,
            },
          },
        ],
        activities: [
          {
            id: 1,
            name: "Actividad 32",
            duration: 6,
            img: [
              "https://www.patagonia-argentina.com/wp-content/uploads/2017/12/parque-nacional-tierra-del-fuego.jpg",
            ],
            description:
              "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
            typeAct: "bike",
            price: 3500,
            packageActivity: {
              createdAt: "2023-04-29T21:45:54.856Z",
              updatedAt: "2023-04-29T21:45:54.856Z",
              packageId: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
              activityId: 1,
            },
          },
        ],
        hotel: {
          id: 1,
          name: "Hostel Gra",
          location: "Bariloche, Río Negro, Argentina",
          description:
            "Descubre la tranquilidad de la Patagonia en medio del bosque andino.",
          image: [
            "https://media-cdn.tripadvisor.com/media/photo-s/0c/0d/20/b8/hospedaje-del-bosque.jpg",
          ],
          stars: 4,
          priceDay: 2500,
        },
      },
      {
        id: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
        name: "Paquete 25",
        location: "Playa del Carmen, México",
        price: 500,
        duration: 10,
        img: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
        description: "Disfruta de una semana inolvidable en Playa del Carmen",
        quotas: 10,
        dateInit: 20230801,
        dateEnd: 20230807,
        hotelId: 1,
        userId: null,
        restaurants: [
          {
            id: 1,
            name: "Restaurant 1",
            location: "Lima, Perú",
            img: [
              "https://res.cloudinary.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://www.peru.travel/Contenido/Atractivo/Imagen/7643/3.png",
            ],
            price: 3380,
            description:
              "La Mar Cebichería es un restaurante famoso por su comida peruana fresca y deliciosa.",
            packageRestaurant: {
              createdAt: "2023-04-29T21:45:54.881Z",
              updatedAt: "2023-04-29T21:45:54.881Z",
              packageId: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
              restaurantId: 1,
            },
          },
        ],
        activities: [
          {
            id: 1,
            name: "Actividad 32",
            duration: 6,
            img: [
              "https://www.patagonia-argentina.com/wp-content/uploads/2017/12/parque-nacional-tierra-del-fuego.jpg",
            ],
            description:
              "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
            typeAct: "bike",
            price: 3500,
            packageActivity: {
              createdAt: "2023-04-29T21:45:54.856Z",
              updatedAt: "2023-04-29T21:45:54.856Z",
              packageId: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
              activityId: 1,
            },
          },
        ],
        hotel: {
          id: 1,
          name: "Hostel Gra",
          location: "Bariloche, Río Negro, Argentina",
          description:
            "Descubre la tranquilidad de la Patagonia en medio del bosque andino.",
          image: [
            "https://media-cdn.tripadvisor.com/media/photo-s/0c/0d/20/b8/hospedaje-del-bosque.jpg",
          ],
          stars: 4,
          priceDay: 2500,
        },
      },
      {
        id: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
        name: "Paquete 52",
        location: "Playa del Carmen, México",
        price: 150,
        duration: 7,
        img: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
        description: "Disfruta de una semana inolvidable en Playa del Carmen",
        quotas: 10,
        dateInit: 20230801,
        dateEnd: 20230807,
        hotelId: 1,
        userId: null,
        restaurants: [
          {
            id: 1,
            name: "Restaurant 1",
            location: "Lima, Perú",
            img: [
              "https://res.cloudinary.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://www.peru.travel/Contenido/Atractivo/Imagen/7643/3.png",
            ],
            price: 3380,
            description:
              "La Mar Cebichería es un restaurante famoso por su comida peruana fresca y deliciosa.",
            packageRestaurant: {
              createdAt: "2023-04-29T21:45:54.881Z",
              updatedAt: "2023-04-29T21:45:54.881Z",
              packageId: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
              restaurantId: 1,
            },
          },
        ],
        activities: [
          {
            id: 1,
            name: "Actividad 32",
            duration: 6,
            img: [
              "https://www.patagonia-argentina.com/wp-content/uploads/2017/12/parque-nacional-tierra-del-fuego.jpg",
            ],
            description:
              "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
            typeAct: "bike",
            price: 3500,
            packageActivity: {
              createdAt: "2023-04-29T21:45:54.856Z",
              updatedAt: "2023-04-29T21:45:54.856Z",
              packageId: "08fb554b-059a-4693-be3f-3e0ddcbd92c0",
              activityId: 1,
            },
          },
        ],
        hotel: {
          id: 1,
          name: "Hostel Gra",
          location: "Bariloche, Río Negro, Argentina",
          description:
            "Descubre la tranquilidad de la Patagonia en medio del bosque andino.",
          image: [
            "https://media-cdn.tripadvisor.com/media/photo-s/0c/0d/20/b8/hospedaje-del-bosque.jpg",
          ],
          stars: 4,
          priceDay: 2500,
        },
      },
    ]);
  }, [setPaquetes]);

  //estados, estilo y funcion de los selects ⬇️⬇️⬇️⬇️⬇️⬇️
  // const [filtros, setFiltros] = useState([{ estrellas: "" }, { opciones: "" }]);
  // const [inputs, setInputs] = useState({
  //   opciones: false,
  // });


  //estados de precios 
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  const handleFilterPrice = () => {
    const filteredPaq = paquetes.filter(
      (paq) => paq.price >= minPrice && paq.price <= maxPrice
    );
    setPaquetes(filteredPaq);
  };

  //estados de duracion
  const [minDuration, setMinDuration] = useState();
  const [maxDuration, setMaxDuration] = useState();


  const handleFilterDuration = () => {
    const filteredPaq = paquetes.filter(
      (paq) => paq.duration >= minDuration && paq.duration <= maxDuration
    );
    setPaquetes(filteredPaq);
  };

  const handleChange = (event) => {
    console.log('mayor que: ' + event.target.value);
    // const numero = filtros.length - 1;
    // setFiltros([...filtros, { ["opciones" + numero]: "" }]);
    // setInputs({
    //   ...inputs,
    //   [event.target.name]: true,
    //   ["opciones" + numero]: false,
    // });
    handleFilterPrice();
    handleFilterDuration();
  };

  const handleDeleteFilters = () => {
    setPaquetes({
      ...paquetes,

    })
    setMaxDuration('');
    setMinDuration('');
    setMaxPrice('');
    setMinPrice('');
  }

  return (
    <>
      <SearchBar />
      <div>
        <label>Precio:
          <input type="number" value={minPrice} placeholder="Minimo" onChange={(event)=>setMinPrice(parseInt(event.target.value))}/>
          <input type="number" value={maxPrice} placeholder="Maximo" onChange={(event)=>setMaxPrice(parseInt(event.target.value)) }/>
        </label>
        <button onClick={handleFilterPrice} variant="contained">Filtrar solo precio</button>
        
        <br/>
        <label>Duracion:
          <input type="number" value={minDuration} placeholder="Minimo" onChange={(event)=>setMinDuration(parseInt(event.target.value))}/>
          <input type="number" value={maxDuration} placeholder="Maximo" onChange={(event)=>setMaxDuration(parseInt(event.target.value))}/>
        </label>
        <button onClick={handleFilterDuration} variant="contained">Filtrar solo duracion</button>
        {/* {filtros && filtros.map((item) =>{
                if (item.hasOwnProperty("estrellas")){
                    return (
                        <div>
                        <select name={Object.keys(item)[0]}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <br/>
                        </div>
                    )
                }
                else return (
                    <div>
                    <select name={Object.keys(item)[0]} onChange={handleChange}>
                        <option>-----------</option>
                        <option>precio mayor que</option>
                        <option>precio menor que</option>
                        <option>duracion mayor que</option>
                        <option>duracion menor que</option>
                    </select>
                    {inputs[Object.keys(item)[0]]? (<input type="text" placeholder="ejemplo"></input>) : ("")}
                    <br/>
                    </div>
                )
            })} */}



      </div>
      <Button variant="contained" onClick={handleChange}>Aplicar filtros</Button>
      <Button variant="contained" onClick={handleDeleteFilters}>Borrar filtros</Button>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {paquetes.length ? (
          paquetes.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
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
