import axios from "axios";
import { postUser } from "../reducer/userSlice";

//eliasmotog3@gmail.com


export const addUser = (payload) => async (dispatch) => {
    try {
        if (payload.email === "dnbdt86@gmail.com") {
            payload.isAdmin = true;
            const response = await axios.post("/user", payload);
            dispatch(postUser(response.data));
        } else {
            payload.isAdmin = false;
            const response = await axios.post("/user", payload);
            dispatch(postUser(response.data));
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const setSpam = (id, notification) => async (dispatch) => {
    try {
        const response = await axios.put(`/user/spam`, {id, notification});
        if (response.data) dispatch(postUser(response.data));
    } catch (error) {
        console.log(error.message);
    }
}