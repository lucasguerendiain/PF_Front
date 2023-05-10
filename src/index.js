import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from "./redux/store/store";

import axios from "axios"

// axios.defaults.baseURL= "https://pfback-production.up.railway.app"
axios.defaults.baseURL= "http://localhost:3001"


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();



