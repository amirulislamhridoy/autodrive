import { createSlice } from '@reduxjs/toolkit';

let token;
if(typeof window !== 'undefined') {
  token = localStorage.getItem('token')
}
const initialState = {
  value: token || ""
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