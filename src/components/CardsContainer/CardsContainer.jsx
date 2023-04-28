import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import Paquete from "../Cards/Paquetes";
import Actividades from "../Cards/Actividades"
import { getAllActivity } from "../../redux/actions/ActivitiesActions";
import { getAllPacks } from "../../redux/actions/packageActions";

export default function CardsContainer() {
    const paquetes = useSelector((state) => state.allPackages)
    const actividades = useSelector((state) => state.allActivities)
    console.log(paquetes,actividades);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPacks())
        dispatch(getAllActivity())
    },[])

    return (
        <>
        <div>
            {paquetes ? (
                paquetes.map((p, index) => (
                    <Paquete key={index} paquete={p}/>
                ))
            ) : (
                <p>No hay paquetes que mostrar</p>
            )}
        </div>
        <div>
            {actividades ? (
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