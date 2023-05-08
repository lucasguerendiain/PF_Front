import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/dashboard/form");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <Grid item sx={{ m: "2em" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: "1.25em", boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)" }}
          onClick={()=> goToForm()}
        >
          Crear paquetes
        </Button>
      </Grid>
      <Grid item sx={{ m: "2em" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)" }}
        >
          Movimientos/reservas
        </Button>
      </Grid>
    </Grid>
  );
}
