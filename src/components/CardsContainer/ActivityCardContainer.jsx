import React, { useEffect, } from "react";
import Actividades from "../Cards/Actividades";
import { Grid, Button} from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { getAllActivity } from "../../redux/actions/ActivitiesActions";
import LoadingComponent from "../Loading/LoadingComponent"
import {Link} from "react-router-dom"

export default function ActivityCardontainer() {
  const actividades = useSelector((state) => state.activities.allActivities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllActivity())
  }, [dispatch]);

  return (
    <>
    <SearchBar/>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        marginBottom="2em"
      >
        {actividades.length ? (
          actividades.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Actividades key={index} actividad={p} />
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
