import { useDispatch, useSelector } from "react-redux"
import { getReservaByUserId } from "../../redux/actions/reservaActions"
import { useEffect } from "react"
import Reservas from "../Cards/Reservas"
import React from "react"


export default function ReservasCardContainer() {
    const user = useSelector((state) => state.users.user)
    const reservas = useSelector((state) => state.reserva.userReservas)
    const { id } = user
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReservaByUserId(id))
    },[id])

    return (
        <div>
        {reservas.length ? (
            reservas.map((p, index) => (
                <Reservas key={index} reserva={p}/>
            ))
        ) : <h1>No hay ninguna reserva</h1>}
        </div>
    )
}