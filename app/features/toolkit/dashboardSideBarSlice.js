import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: true
}

const dashboardSideBarSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        change: state => {
            state.value = !state.value
        }
    }
})

export const {change} = dashboardSideBarSlice.actions
export default dashboardSideBarSlice.reducer