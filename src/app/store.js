import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slices/userSlices';
import cartReducer from '../slices/cartSlice';


export const store =configureStore({
    reducer:{
        userData:userReducer,     // userData only get and store the datas
        cartData:cartReducer
    }
})