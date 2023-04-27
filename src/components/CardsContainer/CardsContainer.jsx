import React from "react";
import Paquete from "../Cards/Paquetes";
import Actividades from "../Cards/Actividades"

export default function CardsContainer() {
    const paquetes = useSelector((state) => state.allPackages)
    
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

        </div>
        </>
    )
}