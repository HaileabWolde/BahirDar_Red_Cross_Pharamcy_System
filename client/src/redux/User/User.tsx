import { createSlice } from "@reduxjs/toolkit";

interface Iprops {
    user: {
        isLoading: null | boolean,
        error: null | string | boolean,
        userInfo: null | {},
        token: null | string
    }
}
const initialState: Iprops['user'] = {
    isLoading: false,
    error: null,
    userInfo: {},
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        StartInLoading: (state)=>{
            state.isLoading = true;
        },
        LogInSuccess: (state, action)=>{
            state.userInfo = action.payload.rest;
            state.token = action.payload.token;
            state.error = false;
        },
        LogInError: (state, action)=>{
            state.error = action.payload
        },
        EndInLoading: (state)=>{
            state.isLoading = false
        }
    }
});
export const {
    StartInLoading,  LogInSuccess, LogInError,  EndInLoading
} = userSlice.actions;
export default userSlice.reducer;