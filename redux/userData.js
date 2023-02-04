import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from './../firebase.init';

const initialState = {
    data : {},
    loading: false,
    error: null
}
export const fetchUser = createAsyncThunk('user/fetchUser', async(user) => {
    // const [user, loading, error] = useAuthState(auth)
    console.log(user)
    const response = await axios.get(`http://localhost:5000/user?email={user?email}`)
    return response.data
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchUser.pending, (state, action) => {
          state.loading = true
          state.data = {}
          state.error = null
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          state.loading = false
          state.error = null
          state.data = action.payload
        })
        .addCase(fetchUser.rejected, (state, action) => {
          state.error = action.error.message
          state.data = {}
          state.loading = false
        })
    }
  })


export default userSlice.reducer