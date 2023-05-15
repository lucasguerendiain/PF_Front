import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewRestaurants: [],
    allRestaurants: [],
    detail: {},
    error: ""
}

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {
        getAllRestaurants: (state, action) => {
            state.allRestaurants = action.payload;
            state.viewRestaurants = action.payload;
        },
        getRestaurantById: (state, action) => {
            state.detail = action.payload
        },
        getRestaurantName: (state, action) => {
            state.viewRestaurants = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }

    }
})

export const {getAllRestaurants, getRestaurantName, getRestaurantById, setError} = restaurantsSlice.actions

export default restaurantsSlice.reducer