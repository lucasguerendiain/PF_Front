import React, { useEffect }from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllreservas } from "../../../redux/actions/reservaActions";

export default function Reservations(){
    const reserva = useSelector((state) => state.reserva.allReservas)
    const dispatch = useDispatch()
    console.log(reserva)

    useEffect(()=>{
        dispatch(getAllreservas());
    },[dispatch])

    return(
      <div></div>  
    )
}