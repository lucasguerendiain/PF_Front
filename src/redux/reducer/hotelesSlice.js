import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewHoteles: [],
    allHoteles: [],
    detail: {},
    error: ""
}

export const hotelesSlice = createSlice({
    name: "hoteles",
    initialState,
    reducers: {
        getAllHoteles: (state, action) => {
            state.allHoteles = action.payload;
            state.viewHoteles = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload
        }

    }
})

export const {getAllHoteles, setError} = hotelesSlice.actions

export default hotelesSlice.reducer