import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    user:null,
}

export const userSlice = createSlice({
    name:'userProfile',
    initialState,
    reducers:({
        setUser:(state,action)=>{
            state.user = action.payload;
        },
        removeUser:(state)=>{
            state.user = null;
        }
    })
});

export const {setUser,removeUser} = userSlice.actions; // this line export only action that I create in inside the reducer

export default userSlice.reducer; // this line export entire reducer
