import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ActivityModal from "../CreatePackage/Modals/ActivityModal";
import axios from "axios";
import HotelModal from "../CreatePackage/Modals/HotelModal";
import RestoModal from "../CreatePackage/Modals/RestoModal";

export default function Dashboard() {
  const navigate = useNavigate();
  const [openActi, setOpenActi] = useState(false);
  const [openHotel, setOpenHotel] = useState(false);
  const [openResto, setOpenResto] = useState(false);

  const defaultValuesActivity = {
    name: "",
    description: "",
    duration: "",
    price: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    typeAct: ""
}
const defaultValuesHotel = {
    name: "",
    location: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    description: "",
    stars: "",
    priceDay: ""
}

const defaultValuesResto = {
    name: "",
    location: "",
    description: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    price: ""
}

  const goToForm = () => {
    navigate("/dashboard/form");
  };

  const handleSubmitActi = async (data) => {
    try {
      const response = await axios.post("/activity", data);
      console.log(response.data);
      alert("actividad creada con exito");
      setOpenActi(false);
    } catch(error) {
        alert(error.response.data.error || error.message);
    }
  }

  const handleSubmitHotel = async (data) => {
    try {
      const response = await axios.post("/hotel", data);
      alert("hotel creado con exito");
      setOpenHotel(false);
    } catch(error) {
        alert(error.response.data.error || error.message);
    }
  }

  const handleSubmitResto = async (data) => {
    try {
      const response = await axios.post("/restaurant", data);
      alert("restaurant creado con exito");
      setOpenResto(false);
    } catch(error) {
        alert(error.response.data.error || error.message);
    }
  }

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
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: "1.25em", boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)" }}
            onClick={()=> setOpenActi(true)}
          >
            Crear actividad
          </Button>
          <ActivityModal
            open={openActi}
            handleClose={() => setOpenActi(false)}
            addNewItem={handleSubmitActi}
            defaultValues={defaultValuesActivity}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: "1.25em", boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)" }}
            onClick={()=> setOpenHotel(true)}
          >
            Crear hotel
          </Button>
          <HotelModal
            open={openHotel}
            handleClose={() => setOpenHotel(false)}
            addNewItem={handleSubmitHotel}
            defaultValues={defaultValuesHotel}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: "1.25em", boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)" }}
            onClick={()=> setOpenResto(true)}
          >
            Crear restaurant
          </Button>
          <RestoModal
            open={openResto}
            handleClose={() => setOpenResto(false)}
            addNewItem={handleSubmitResto}
            defaultValues={defaultValuesResto}
          />
        </Box>
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
