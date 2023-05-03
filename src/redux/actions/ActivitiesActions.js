import axios from "axios";
import { getAllActivities, setError } from "../reducer/activitiesSlice";

export const getAllActivity = () => async (dispatch) => {
    try {
        const response = await axios("http://localhost:3001/activity");
        dispatch(getAllActivities(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}