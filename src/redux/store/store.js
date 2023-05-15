import { configureStore } from '@reduxjs/toolkit';
import packagesReducer from '../reducer/packageSlice';
import activitiesReducer from '../reducer/activitiesSlice';
import hotelesReducer from '../reducer/hotelesSlice';
import restaurantsReducer from '../reducer/restaurantsSlice';
import carritoReducer from '../reducer/carritoSlice';
import formReducer from '../reducer/formSlice';

export const store = configureStore({
  reducer: {
    packages: packagesReducer,
    activities: activitiesReducer,
    hoteles: hotelesReducer,
    restaurants: restaurantsReducer,
    carrito: carritoReducer,
    form: formReducer,
  },
});
