import axios from "axios";
import { getAllActivities, setError } from "../reducer/activitiesSlice";

export const getAllActivity = () => async (dispatch) => {
    try {
        console.log("holas");
        axios("/activity")
        .then(res=>dispatch(getAllActivities(res.data.results)))
    } catch (error) {
        console.log("holas");
        dispatch(setError(error.message));
    }
}