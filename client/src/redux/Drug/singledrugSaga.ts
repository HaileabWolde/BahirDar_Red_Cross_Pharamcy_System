import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { FetchSingleDrug, StartInFailure, EndInLoading } from './drug';

function* workGetSingleDrug(action: PayloadAction<string>): Generator<any, void, any>{
    const id = action.payload
    try{
        const {data} = yield call(()=> axios.get(`http://localhost:5000/drugs/getsingleDrug/${id}`))
        yield put (FetchSingleDrug(data))
        yield put(EndInLoading())
    }
    catch(error){
        StartInFailure(error)
    }
}
function* SingleDrugSaga() {
    yield takeEvery('drug/StartInLoading', workGetSingleDrug)
}
export default SingleDrugSaga