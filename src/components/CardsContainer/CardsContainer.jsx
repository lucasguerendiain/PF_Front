import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import Paquete from "../Cards/Paquetes";
import Actividades from "../Cards/Actividades"
import { getAllPackages } from "../../redux/actions/packageSlice";
import { getAllActivities } from "../../redux/actions/ActivitiesActions";

export default function CardsContainer() {
    const {paquetes} = useSelector((state) => state.allPackages)
    const {actividades} = useSelector((state) => state.allActivities)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPackages())
        dispatch(getAllActivities())
    },[])
    return (
        <>
        <div>
            {paquetes.length ? (
                paquetes.map((p, index) => (
                    <Paquete key={index} paquete={p}/>
                ))
            ) : (
                <p>No hay paquetes que mostrar</p>
            )}
        </div>
        <div>
            {actividades.length ? (
                actividades.map((a,index) => (
                    <Actividades key={index} actividad={a}/>
                ))
            ) : (
                <p>No hay actividades que mostrar</p>
            )}
        </div>
        </>
    )
}