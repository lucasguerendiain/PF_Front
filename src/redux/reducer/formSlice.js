import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toForm: false,
    inputs: {
        name: "",
        location: "",
        price: "",
        duration: "",
        img: "",
        description: "",
        quotas: "",
        dateInit: "",
        dateEnd: "",
    },
    activities: [],
    hotel: "",
    restaurants: []
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setInputs: (state,action) => {
            state.inputs = action.payload;
        },
        addActivity: (state, action) => {
            state.activities = [...state.activities, action.payload];
        },
        deleteActivity: (state, action) => {
            state.activities = state.activities.filter((elem) => elem.name !== action.payload);
        },
        addHotel: (state, action) => {
            state.hotel = action.payload;
        },
        deleteHotel: (state) => {
            state.hotel = "";
        },
        addResto: (state, action) => {
            state.restaurants = [...state.restaurants, action.payload];
        },
        deleteResto: (state, action) => {
            state.restaurants = state.restaurants.filter((elem) => elem.name !== action.payload);
        },
        setToForm: (state) => {
            state.toForm = true;
        },
        setToCart: (state) => {
            state.toForm = false;
        },
        emptyForm: (state) => {
            state.activities = [];
            state.hotel = "";
            state.restaurants = [];
            state.toForm = false;
            state.inputs = {
                name: "",
                location: "",
                price: "",
                duration: "",
                img: "",
                description: "",
                quotas: "",
                dateInit: "",
                dateEnd: "",
            };
        }
    }
})

export const {addActivity, deleteActivity, addHotel, deleteHotel, addResto, deleteResto, setToCart, setToForm, emptyForm, setInputs} = formSlice.actions;

export default formSlice.reducer;