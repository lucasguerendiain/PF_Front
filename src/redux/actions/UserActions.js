import axios from "axios";
import { postUser } from "../reducer/userSlice";

//eliasmotog3@gmail.com

export const addUser = (payload) => async (dispatch) => {
    try {
        if (payload.email === "lucasguere@hotmail.com") {
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