import axios from "axios";
import {getAllPackages, getPackageById, setError, getFilterPackages} from "../reducer/packageSlice";

export const getAllPacks = () => async (dispatch) => {
    try {
        axios("http://localhost:3001/package")
        .then(res=>dispatch(getAllPackages(res.data)))
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getPackageDetailById = (id) => async (dispatch) => {
    try {
        const  response = await axios.get(`http://localhost:3001/package/${id}`)
        dispatch(getPackageById(response.data))
    } catch (error){
        dispatch(setError(error.message));
    }
}

export const getFilterPacks = (filters, packages) => async (dispatch) => {
    try {
        const  response = await axios.get(`http://localhost:3001/package/filter`, {filters, packages} )
        dispatch(getFilterPackages(response.data))
    } catch (error){
        dispatch(setError(error.message));
    }
}