import axios from "axios";
import { getAllHoteles, setError } from "../reducer/hotelesSlice";

export const getAllHotel = () => async (dispatch) => {
    try {
        const response = await axios("http://localhost:3001/hotel");
        dispatch(getAllHoteles(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}