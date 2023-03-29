import { configureStore } from '@reduxjs/toolkit';
import carSlice from './features/toolkit/carSlice';
import dashboardSideBarSlice from './features/toolkit/dashboardSideBarSlice';

const store = configureStore({
    reducer: {
        dashboard : dashboardSideBarSlice,
        cars: carSlice
    }
})
export default  store