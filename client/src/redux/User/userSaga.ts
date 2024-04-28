import axios from "axios"
import { call, put, takeEvery } from 'redux-saga/effects';
import { LogInSuccess, LogInError, EndInLoading } from "./User";
import { PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

interface FormDataPayload {
    UserName: string;
    email: string;
    password: string;
    confirmpassword: string;
  }
  

function* workGetUserFetch(action: PayloadAction<{
    formdata: FormDataPayload
    navigate: NavigateFunction;
  }>): Generator<any, void, any> {
    const formData = action.payload.formdata;
    const { navigate } = action.payload;
    let endpoint = ''
    if(formData.UserName || formData.confirmpassword){
       endpoint = `http://localhost:5000/user/signup`
    }
   else{
    endpoint = `http://localhost:5000/user/signin`
   }
    try {
      const res = yield call(fetch, endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = yield res.json();
      
      if (data.success === false) {
        yield put(LogInError(data));
        yield put(EndInLoading());
      } else {
        yield put(LogInSuccess(data));
        yield put(EndInLoading());
        if (navigate) {
          navigate('/');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
function* UserSaga() {
    yield takeEvery('user/StartInLogIn', workGetUserFetch);
}

export default UserSaga;