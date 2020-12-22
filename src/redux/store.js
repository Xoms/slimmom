import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { loading } from '../redux/global/globalReducers';

import authReducer from './auth/authReducer';

const defaultMiddleware = getDefaultMiddleware();

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid']
}

export const store = configureStore({
  reducer: {
    loading,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  middleware: [...defaultMiddleware, ],
})

export const persistor = persistStore(store);