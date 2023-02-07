import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './token';
import userData from './userData';

const store = configureStore({
    reducer: {
        token: tokenSlice,
        user: userData
    }
})
export default  store