import React, { useEffect, useState } from "react";
import Actividades from "../Cards/Actividades";
import { Grid } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { getAllActivity } from "../../redux/actions/ActivitiesActions";
import { connect } from "react-redux";

function ActivityCardontainer({allActivities}) {
  const actividades = allActivities;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllActivity())
  }, []);

  return (
    <>
    <SearchBar/>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {actividades? (
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

export function mapStateToProps(state) {
  return {
      paquetes: state.allActivities
  };
}


export default connect(mapStateToProps, null)(ActivityCardontainer);
