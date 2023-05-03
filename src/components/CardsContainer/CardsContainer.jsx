import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux"
import Paquete from "../Cards/Paquetes";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { getAllPacks } from "../../redux/actions/packageActions";
//imports para los selects ⬇️⬇️⬇️⬇️⬇️
import { connect } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";


export default function CardsContainer() {
  const paquetes = useSelector((state) => state.packages.allPackages);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPacks());
  }, []);

  //estados, estilo y funcion de los selects ⬇️⬇️⬇️⬇️⬇️⬇️
  // const [filtros, setFiltros] = useState([{ estrellas: "" }, { opciones: "" }]);
  // const [inputs, setInputs] = useState({
  //   opciones: false,
  // });


  //estados de precios 
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  // const handleFilterPrice = () => {
  //   const filteredPaq = paquetes.filter(
  //     (paq) => paq.price >= minPrice && paq.price <= maxPrice
  //   );
  //   setPaquetes(filteredPaq);
  // };

  //estados de duracion
  const [minDuration, setMinDuration] = useState();
  const [maxDuration, setMaxDuration] = useState();


  // const handleFilterDuration = () => {
  //   const filteredPaq = paquetes.filter(
  //     (paq) => paq.duration >= minDuration && paq.duration <= maxDuration
  //   );
  //   setPaquetes(filteredPaq);
  // };

  // const handleChange = (event) => {
  //   console.log('mayor que: ' + event.target.value);
  //   // const numero = filtros.length - 1;
  //   // setFiltros([...filtros, { ["opciones" + numero]: "" }]);
  //   // setInputs({
  //   //   ...inputs,
  //   //   [event.target.name]: true,
  //   //   ["opciones" + numero]: false,
  //   // });
  //   handleFilterPrice();
  //   handleFilterDuration();
  // };

  // const handleDeleteFilters = () => {
  //   setPaquetes({
  //     ...paquetes,

  //   })
  //   setMaxDuration('');
  //   setMinDuration('');
  //   setMaxPrice('');
  //   setMinPrice('');
  // }

  return (
    <>
      <SearchBar />
      <div>{/*
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
        <button onClick={handleFilterDuration} variant="contained">Filtrar solo duracion</button>*/}
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
      {/*
      <Button variant="contained" onClick={handleChange}>Aplicar filtros</Button>
      <Button variant="contained" onClick={handleDeleteFilters}>Borrar filtros</Button>
      */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {paquetes? (
          paquetes.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Paquete key={index} paquete={p} />
            </Grid>
          ))
        ) : (
          <p>No hay paquetes que mostrar</p>
        )}
      </Grid>
      <Link to={"/home"}>
        <Button variant="contained">Home</Button>
      </Link>
    </>
  );
}