import { configureStore } from '@reduxjs/toolkit';
import dashboardToggle from './dashboardToggle';
import tokenSlice from './token';
import userData from './userData';

const store = configureStore({
    reducer: {
        token: tokenSlice,
        dashboardToggle: dashboardToggle,
        user: userData
    }
})
export default  store