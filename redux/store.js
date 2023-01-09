import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './token';

const store = configureStore({
    reducer: {
        token: tokenSlice
    }
})
export default  store