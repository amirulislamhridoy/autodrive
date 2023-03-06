import { configureStore } from '@reduxjs/toolkit';
import dashboardSideBarReducer from './dashboardSideBar';
import tokenSlice from './token';
import userData from './userData';

const store = configureStore({
    reducer: {
        token: tokenSlice,
        user: userData,
        dashboard: dashboardSideBarReducer
    }
})
export default  store