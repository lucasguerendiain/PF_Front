import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import LoadingComponent from "../Loading/LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import Paquete from "../Cards/Paquetes";
import { Box, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { getAllPacks, setFilterPacksByStars } from "../../redux/actions/packageActions";
//imports para los selects ⬇️⬇️⬇️⬇️⬇️
import { connect } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FilterPackage from "../Filter/FilterPackage";
import { getFilterPacks } from "../../redux/actions/packageActions";

export default function PackageCardContainer() {
  const paquetes = useSelector((state) => state.packages.viewPackages);
  const dispatch = useDispatch();
  const lugar = "package"

  const handleFilteredPackages = (data, stars) => {
    dispatch(getFilterPacks(data, paquetes, stars));
  }

  useEffect(() => {
    dispatch(getAllPacks());
  }, [dispatch]);

  return (
    <>
      <SearchBar ubicacion={lugar}/>
      <FilterPackage handleSubmit={handleFilteredPackages}/>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        marginBottom="2em"
      >
        {paquetes.length ? (
          paquetes.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Paquete key={index} paquete={p} />
            </Grid>
          ))
        ) : (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh" }}
          >
            <Grid item>
              <LoadingComponent />
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin= "1em"
      >
      <Link to={"/home"}>
        <Button variant="contained">Inicio</Button>
      </Link>
      </Grid>
    </>
  );
}
