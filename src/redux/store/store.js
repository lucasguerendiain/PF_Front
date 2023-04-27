import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "../reducer/packageSlice";

export const store = configureStore({
    reducer: {
        packages: packagesReducer,
    },
})