import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    data: [],
    error: null,
    pages: 0
}

export const fetchCar = createAsyncThunk('car/fetchCar', async({page, limit, name}, thunkApi) => {
    const response = await axios.get(`https://autodrive-server.vercel.app/car/getAll?page=${page}&limit=${limit}&name=${name}`)
    thunkApi.dispatch(changePages(response.data.pages))
    return response.data
})

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        changePages: (state, action) => {
            state.pages = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCar.pending, (state, action) => {
            state.loading = true
            state.data = []
            state.error = null
        })
        builder.addCase(fetchCar.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(fetchCar.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})
export const { changePages } = carSlice.actions
export default carSlice.reducer