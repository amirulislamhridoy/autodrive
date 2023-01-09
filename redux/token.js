import { createSlice } from '@reduxjs/toolkit';

const initialState = {
//   value: module?.localStorage?.getItem('token') || "",
//   value: ''
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    changeByToken: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeByToken } = tokenSlice.actions

export default tokenSlice.reducer