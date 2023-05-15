import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CreationButtons from "./CreationButtons";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>ADMINISTRADOR</h1>
      <Grid>
        <Grid>
          <CreationButtons />
        </Grid>
        <Grid>
          <Grid item sx={{ m: "2em" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)" }}
            >
              Movimientos/reservas
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ mb: "1.25em", boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)" }}
              onClick={() => navigate("/adminMail")}
            >
              Mandar mails
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
