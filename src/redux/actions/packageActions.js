import axios from "axios";
import {getAllPackages, getPackageById, setError, getFilterPackages, getPackageName} from "../reducer/packageSlice";

export const getAllPacks = () => async (dispatch) => {
    try {
        axios("/package")
        .then(res=>dispatch(getAllPackages(res.data)))
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getPackageByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`/package?name=${name}`)
        dispatch(getPackageName(response.data))
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const getPackageDetailById = (id) => async (dispatch) => {
    try {
        const  response = await axios.get(`/package/${id}`)
        dispatch(getPackageById(response.data))
    } catch (error){
        dispatch(setError(error.message));
    }
}

export const getFilterPacks = (filters, packages) => async (dispatch) => {
    try {
        const  response = await axios.post(`/package/filter`, {filters, packages} )
        dispatch(getFilterPackages(response.data))
    } catch (error){
        dispatch(setError(error.message));
    }
}
