import axios from "axios";
import { getAllActivities, setError } from "../reducer/activitiesSlice";

export const getAllActivities = () => async (dispatch) => {
    try {
        axios("http://localhost:3001/activity")
        .then(res=>dispatch(getAllActivities(res.data.results)))
    } catch (error) {
        dispatch(setError(error.message));
    }
}