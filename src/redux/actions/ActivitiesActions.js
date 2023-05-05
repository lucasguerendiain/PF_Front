import axios from "axios";
import { getAllActivities, getActivityById, setError } from "../reducer/activitiesSlice";

export const getAllActivity = () => async (dispatch) => {
    try {
        const response = await axios("http://localhost:3001/activity");
        dispatch(getAllActivities(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getActivityDetailById = (id) => async (dispatch) => {
    try {
        const  response = await axios.get(`http://localhost:3001/activity/byId/${id}`)
        dispatch(getActivityById(response.data))
    } catch (error){
        dispatch(setError(error.message));
    }
}