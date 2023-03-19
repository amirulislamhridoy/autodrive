import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import carSlice from './features/toolkit/carSlice';
import dashboardSideBarSlice from './features/toolkit/dashboardSideBarSlice';
import tokenSlice from './features/toolkit/tokenSlice';
import userSlice from './features/toolkit/userSlice';

const store = configureStore({
    reducer: {
        token : tokenSlice,
        user : userSlice,
        dashboard : dashboardSideBarSlice,
        cars: carSlice
    }
})
export default  store