import axios from "axios";
import { getAllHoteles, getHotelById, setError } from "../reducer/hotelesSlice";

export const getAllHotel = () => async (dispatch) => {
    try {
        const response = await axios("/hotel");
        dispatch(getAllHoteles(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getHotelDetailById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`/hotel/byId/${id}`);
        dispatch(getHotelById(response.data))
    } catch (error) {
        dispatch(setError(error.message));
    }
}