import axios from "axios"
import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { FetchAll, StartInFailure, EndInLoading } from './drugs';

function* workGetAllDrugsFetch(): Generator<any, void, any> {
    const {data} = yield call(() => axios.get("http://localhost:5000/drugs/getDrugs"))
    if(data.success === false){
        yield put(StartInFailure(data.message));
    }
    yield put(FetchAll(data))
}
function* DrugSaga() {
yield takeEvery('drugs/StartInLoading', workGetAllDrugsFetch);

}

export default DrugSaga;