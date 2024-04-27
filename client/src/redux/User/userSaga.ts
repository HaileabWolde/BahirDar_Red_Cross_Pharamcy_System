import axios from "axios"
import { call, put, takeEvery } from 'redux-saga/effects';
import { LogInSuccess, LogInError, EndInLoading } from "./User";
import { PayloadAction } from "@reduxjs/toolkit";
import {  NavigateFunction } from 'react-router-dom'; // Import the necessary dependencies

function* workGetUserFetch(action: PayloadAction<{ data: FormData, navigate: NavigateFunction}>): Generator<any, void, any>{
    const formData = action.payload;
    const {data: FormData, navigate} = formData;

    const endpoint = `http://localhost:5000/user/signup`;
    try{
        const {data} = yield call(()=> axios.post(endpoint, JSON.stringify(FormData), {
            headers: {
                'Content-Type': 'application/json',
              },
        }));
        if(data.success === false){
            yield put(LogInError(data.message))
        }
        else {
            yield put(LogInSuccess(data))
            yield put(EndInLoading())
            if(navigate){
                navigate('/');
            }
        }
      
    }
    catch(error) {
        console.log(error)
    }
}
function* UserSaga() {
    yield takeEvery('user/StartInLoading', workGetUserFetch);
}

export default UserSaga;