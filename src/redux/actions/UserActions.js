import axios from "axios";
import { postUser } from "../reducer/userSlice";

export const addUser = (payload) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3001/user",payload);
        console.log(response)
        dispatch(postUser(response.data));
    } catch (error) {
        console.log(error.message);
    }
}