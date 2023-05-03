import axios from "axios";
import { getAllRestaurants, setError } from "../reducer/restaurantsSlice";

export const getAllRestaurant = () => async (dispatch) => {
    try {
        const response = await axios("http://localhost:3001/restaurant");
        dispatch(getAllRestaurants(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}