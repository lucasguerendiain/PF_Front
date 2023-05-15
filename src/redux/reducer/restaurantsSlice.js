import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewRestaurants: [],
  allRestaurants: [],
  detail: {},
  error: '',
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    getAllRestaurants: (state, action) => {
      state.allRestaurants = action.payload;
      state.viewRestaurants = action.payload;
    },
    getRestaurantById: (state, action) => {
      state.detail = action.payload;
    },
    getFilteredRestaurant: (state, action) => {
      state.viewRestaurants = action.payload;
    },
    getRestaurantName: (state, action) => {
      state.viewRestaurants = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getAllRestaurants,
  getRestaurantById,
  getFilteredRestaurant,
  setError,
  getRestaurantName,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
