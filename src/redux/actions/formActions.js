import { addActivity, deleteActivity, addHotel, deleteHotel, addResto, deleteResto, setToCart, setToForm, emptyForm, setInputs } from "../reducer/formSlice";

export const addActiForm = (acti) => (dispatch) => {
    dispatch(addActivity(acti));
}

export const deleteActiForm = (name) => (dispatch) => {
    dispatch(deleteActivity(name));
}

export const addHotelForm = (hotel) => (dispatch) => {
    dispatch(addHotel(hotel));
}

export const deleteHotelForm = () => (dispatch) => {
    dispatch(deleteHotel());
} 

export const addRestoForm = (resto) => (dispatch) => {
    dispatch(addResto(resto));
}

export const deleteRestoForm = (name) => (dispatch) => {
    dispatch(deleteResto(name));
}

export const setButtonToCart = () => (dispatch) => {
    dispatch(setToCart());
}

export const setButtonToForm = () => (dispatch) => {
    dispatch(setToForm())
}

export const emptyFormCommand = () => (dispatch) => {
    dispatch(emptyForm());
}

export const inputSet = (inputs) => (dispatch) => {
    dispatch(setInputs(inputs));
}