import { addHotel, setError, deleteHotel, addRestaurant, deleteRestaurant, addActivitie, deleteActivitie } from "../reducer/carritoSlice"

export const agregarActivitie = (Actividad) => async (dispatch) => {
    try {
         dispatch(addActivitie(Actividad))
    } catch (error) {
        dispatch(setError(error.message))
    }
   
}

export const borrarActivitie = (Actividad) => async (dispatch) => {
    try {
        dispatch(deleteActivitie(Actividad))
    } catch (error) {
        dispatch(setError(error.message)) 
    }
} 

export const agregarHotel = (Hotel) => async (dispatch) => {
    const { name } = Hotel
    dispatch(addHotel(name))
}

export const borrarHotel = () => async (dispatch) => {
    dispatch(deleteHotel())
}

export const agregarRestaurant = (Restaurant) => async (dispatch) => {
    const { name} = Restaurant
    dispatch(addRestaurant(name))
}

export const borrarRestaurant = () => async (dispatch) => {
    dispatch(deleteRestaurant())
}

