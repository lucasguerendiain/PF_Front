import axios from "axios";
import { getAllHoteles, getHotelById, setError } from "../reducer/hotelesSlice";

export const getAllHotel = () => async (dispatch) => {
    try {
        const response = await axios("http://localhost:3001/hotel");
        dispatch(getAllHoteles(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getHotelDetailById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/hotel/byId/${id}`);
        dispatch(getHotelById(response.data))
    } catch (error) {
        dispatch(setError(error.message));
    }
}