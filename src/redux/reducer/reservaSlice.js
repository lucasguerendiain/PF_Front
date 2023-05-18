import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allReservas: [],
  userReservas: [],
  error: '',
};

export const reservaSlice = createSlice({
  name: 'reserva',
  initialState,
  reducers: {
    postReserva: (state, action) => {
      state.reservas = [...state.reservas, action.payload];
    },
    getAllreserva: (state, action) => {
      state.allReservas = action.payload;
    },
    getUserReserva: (state, action) => {
      state.userReservas = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { postReserva, setError, getUserReserva, getAllreserva } =
  reservaSlice.actions;

export default reservaSlice.reducer;
