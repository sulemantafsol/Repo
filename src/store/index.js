import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import authReducer from './reducer/authSlice'
import { combineReducers } from '@reduxjs/toolkit';

const combineReducer = combineReducers({
  authReducer
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};

const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);

export default store;
