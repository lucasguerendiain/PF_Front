import axios from "axios";

import { getAllActivities, getActivityName, getActivityById, getFilteredActivities, setError } from "../reducer/activitiesSlice";
export const getAllActivity = () => async (dispatch) => {
    try {

        const response = await axios("/activity");
        dispatch(getAllActivities(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getActivityByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`/activity?name=${name}`)
        dispatch(getActivityName(response.data))
    } catch (error) {
          dispatch(setError(error.message));
    }
}

export const getActivityDetailById = (id) => async (dispatch) => {
    try {
        const  response = await axios.get(`/activity/byId/${id}`)
        dispatch(getActivityById(response.data))

    } catch (error) {
        dispatch(setError(error.message));
    }
}
export const getFilterActivities = (activities, filter) => async (dispatch) => {
    try {
        const response = await axios.post("/activity/filter", { activities, filter });
        dispatch(getFilteredActivities(response.data))
    } catch (error) {
        dispatch(setError(error.response.data.error));
    }
}

export const clearError = () => (dispatch) => {

    dispatch(setError(""))
    
}