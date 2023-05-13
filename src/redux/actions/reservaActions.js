import axios from "axios";
import { postReserva, setError, getUserReserva, getAllreserva} from "../reducer/reservaSlice";

export const addReserva = (reserva) => async (dispatch) => {
  try {
    const response = await axios.post("/reservation", reserva);
    dispatch(postReserva(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getAllreservas = () => async (dispatch) => {
  try {
    const response = await axios.get("/reservation")
    dispatch(getAllreserva(response.data))
  } catch (error) {
    dispatch(setError(error.message));
  }
}

export const getReservaByUserId = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`/reservation/${userId}`)
    dispatch(getUserReserva(response.data))
  } catch (error) {
    dispatch(setError(error.message));
  }
}