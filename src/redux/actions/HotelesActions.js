import axios from "axios";
import { getAllHoteles, getHotelById, getHotelName, setError } from "../reducer/hotelesSlice";

export const getAllHotel = () => async (dispatch) => {
    try {
        const response = await axios("/hotel");
        dispatch(getAllHoteles(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getHotelByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`/hotel?name=${name}`)
        dispatch(getHotelName(response.data))
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