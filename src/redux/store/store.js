import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "../reducer/packageSlice";
import activitiesReducer from "../reducer/activitiesSlice"
export const store = configureStore({
    reducer: {
        packages: packagesReducer,
        activities: activitiesReducer
    },
})