
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { loading } from '../redux/global/globalReducers';
import authReducer from './auth/authReducer';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
  },
});

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