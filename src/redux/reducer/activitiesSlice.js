import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewActivities: [],
    allActivities: [],
    detail: {},
    error: ""
}

export const activitiesSlice = createSlice({
    name: "activities",
    initialState,
    reducers: {
        getAllActivities: (state, action) => {
            state.allActivities = action.payload;
            state.viewActivities = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {getAllActivities, setError} = activitiesSlice.actions;

export default activitiesSlice.reducer;