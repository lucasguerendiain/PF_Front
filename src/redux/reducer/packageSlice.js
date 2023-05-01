import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewPackages: [],
    allPackages: [],
    detail: {},
    error: ""
}

export const packageSlice = createSlice({
    name: "packages",
    initialState,
    reducers: {
        getAllPackages: (state, action) => {
            state.allPackages = action.payload;
            state.viewPackages = action.payload;
        },
        getPackageById: (state, action) => {
            state.detail = action.payload;
        },
        getFilterPackages: (state, action) => {
            state.viewPackages = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {getAllPackages, getPackageById, setError, getFilterPackages} = packageSlice.actions;

export default packageSlice.reducer;