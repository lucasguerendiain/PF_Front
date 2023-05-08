import axios from "axios";
import { getAllRestaurants, getRestaurantById, setError } from "../reducer/restaurantsSlice";

export const getAllRestaurant = () => async (dispatch) => {
    try {
        const response = await axios("/restaurant");
        dispatch(getAllRestaurants(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getRestaurantDetailById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`/restaurant/byId/${id}`);
        dispatch(getRestaurantById(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}