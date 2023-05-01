import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activities: [],
    hotel:'',
    restaurant:''
}

export const carritoSlice = createSlice({
    name:"carrito",
    initialState,
    reducers: {
        addActivities: (state, action) => {
            state.activities = [...state.activities, action.payload]
        },
        deleteActivities: (state, action) => {
            state.activities = state.activities.filter(activity => activity.name !== action.payload)
        },
        addRestaurant: (state, action) => {
            state.restaurant = action.payload;
        },
        deleteRestaurant: (state, action) => {
            state.restaurant = "";
        },
        addHotel: (state, action) => {
            state.hotel = action.payload;
        },
        deleteHotel: (state, action) => {
            state.hotel = action.payload;
        }
    }
})

export const { addRestaurant, deleteRestaurant, addHotel, deleteHotel} = carritoSlice.actions;

export default carritoSlice.reducer;