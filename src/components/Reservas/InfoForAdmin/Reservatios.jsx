import React, { useEffect }from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllreservas } from "../../../redux/actions/reservaActions";
import LoadingComponent from "../../Loading/LoadingComponent"
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Reservations(){
    const reserva = useSelector((state) => state.reserva.allReservas)
    const dispatch = useDispatch()
    console.log(reserva)

    useEffect(()=>{
        dispatch(getAllreservas());;
    },[dispatch])

    return(
        <Box sx={{ padding: '16px' }}>
        {reserva ? (
          reserva.map((r) => (
            <Box key={r.id} s  
            sx={{
                marginBottom: "16px",
                border: "1px solid black",
                borderRadius: "4px",
                padding: "16px",
              }}
              >
              <Typography variant="h5">Reserva</Typography>
              <Typography variant="h6">Nombre del paquete: {r.package.name}</Typography>
              <Typography variant="h6">Usuario: {r.user.email}</Typography>
            </Box>
          ))
        ) : (
          <LoadingComponent />
        )}
      </Box> 
    )
}