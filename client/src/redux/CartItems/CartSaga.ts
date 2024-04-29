import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AddItemInCart, CartFinshedLoading } from './CartItems';

function* addCartItemFunction(action: PayloadAction<{id: string,  qty: number}>): Generator<any, void, any>{
    const {id, qty} = action.payload;

    try{
        const {data} = yield call(()=> axios.get(`http://localhost:5000/drugs/getsingleDrug/${id}`))
        yield put (AddItemInCart({...data, qty}))
        yield put(CartFinshedLoading)
    }
    catch(error){
        console.log(error)
    }
}

function* CartSaga(){
    yield takeEvery('cart/CartInLoading', addCartItemFunction)
}
export default CartSaga;