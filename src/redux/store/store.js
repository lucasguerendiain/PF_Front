import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "../reducer/packageSlice";
import activitiesReducer from "../reducer/activitiesSlice"
import hotelesReducer from "../reducer/hotelesSlice"
export const store = configureStore({
    reducer: {
        packages: packagesReducer,
        activities: activitiesReducer,
        hoteles: hotelesReducer
    },
})