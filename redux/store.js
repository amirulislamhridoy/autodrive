import { configureStore } from '@reduxjs/toolkit';
import dashboardToggle from './dashboardToggle';
import tokenSlice from './token';

const store = configureStore({
    reducer: {
        token: tokenSlice,
        dashboardToggle: dashboardToggle
    }
})
export default  store