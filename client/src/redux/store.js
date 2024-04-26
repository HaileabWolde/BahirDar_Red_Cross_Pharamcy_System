import { configureStore, combineReducers } from "@reduxjs/toolkit";
import drugsReducer from './Drugs/drugs';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import productSaga from "./Drugs/drugSaga";

const saga = createSagaMiddleware()
const rootReducer = combineReducers({
    drugs: drugsReducer,
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
export const persistor = persistStore(store);