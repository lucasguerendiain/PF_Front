import axios from "axios";
import {getAllPackages, getPackageById, setError, getFilterPackages, getPackageName, getOrderedPackages} from "../reducer/packageSlice";

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

export const getFilterPacks = (filters, packages, stars) => async (dispatch) => {
    try {
        const  response = await axios.post(`/package/filter`, {filters, packages, stars})
        dispatch(getFilterPackages(response.data))
    } catch (error){
        dispatch(setError(error.message));
    }
}

export const orderPackages = (order, type , packages) => (dispatch) => {
    if (packages) {
        var toBeOrdered = [...packages];
        if (type === "price") {
            if (order === "descendent") toBeOrdered.sort((a,b) => b.price - a.price);
            if (order === "ascendent") toBeOrdered.sort((a,b) => a.price - b.price);
        } else if (type === "duration") {
            if (order === "descendent") toBeOrdered.sort((a,b) => b.duration - a.duration);
            if (order === "ascendent") toBeOrdered.sort((a,b) => a.duration - b.duration);
        } else  {
            if (order === "descendent") toBeOrdered.sort((a,b) => b.rating - a.rating);
            if (order === "ascendent") toBeOrdered.sort((a,b) => a.rating - b.rating);
        }
        dispatch(getOrderedPackages(toBeOrdered));
    }
}
