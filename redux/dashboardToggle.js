import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false
}

export const dashboardToggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
      dashboardToggle: (state, action) => {
        state.value = !state.value
      },
    },
  })

export const {dashboardToggle} = dashboardToggleSlice.actions
export default dashboardToggleSlice.reducer