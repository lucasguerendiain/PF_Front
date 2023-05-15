import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [],
  hotel: '',
  restaurant: '',
  error: '',
};

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    addActivitie: (state, action) => {
      state.activities = [...state.activities, action.payload];
    },
    deleteActivitie: (state, action) => {
      state.activities = state.activities.filter(
        (activity) => activity.name !== action.payload,
      );
    },
    estadoInicial: (state, action) => {
      state.activities = [];
    },
    addRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    deleteRestaurant: (state, action) => {
      state.restaurant = '';
    },
    addHotel: (state, action) => {
      state.hotel = action.payload;
    },
    deleteHotel: (state, action) => {
      state.hotel = '';
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addRestaurant,
  setError,
  estadoInicial,
  deleteRestaurant,
  addHotel,
  deleteHotel,
  addActivitie,
  deleteActivitie,
} = carritoSlice.actions;

export default carritoSlice.reducer;
