import { configureStore, combineReducers } from "@reduxjs/toolkit";
import drugsReducer from './Drugs/drugs';
import drugReducer from './Drug/drug'
import userReducer from './User/User';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import productSaga from "./Drugs/drugSaga";
import drugSaga from './Drug/singledrugSaga'
import UserSaga from "./User/userSaga";
const saga = createSagaMiddleware()
const rootReducer = combineReducers({
    drugs: drugsReducer,
    drug: drugReducer,
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [saga],
  });
saga.run(productSaga);
saga.run(UserSaga);
saga.run(drugSaga);
export const persistor = persistStore(store);