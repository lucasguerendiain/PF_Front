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

    const transformDate = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleString().split(",")[0];
      }


    return(
        <Box sx={{ padding: '16px' }}>
        {reserva ? (
          reserva.map((r) => (
            <Box key={r.id} 
            sx={{
                marginBottom: "16px",
                border: "4px solid rgb(29, 102, 203);",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "rgb(4, 15, 57)",
                color: "white" ,
              }}
              >
              <Typography variant="h5">Reserva</Typography>
              <Typography variant="h6"><span style={{ textDecoration: "underline" }}>Usuario:</span> {r.user.email}</Typography>
              <Typography variant="h6"><span style={{ textDecoration: "underline" }}>Nombre del paquete:</span> {r.package.name}</Typography>
              <Typography variant="h6"><span style={{ textDecoration: "underline" }}>Fecha de inicio:</span> {transformDate(r.package.dateInit)}</Typography>
            </Box>
          ))
        ) : (
          <LoadingComponent />
        )}
      </Box> 
    )
}



