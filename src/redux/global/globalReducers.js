import { createReducer } from '@reduxjs/toolkit';
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
} from '../auth/authActions'

const loading = createReducer(false, {
    [registerRequest]: () => true,
    [registerSuccess]: () => false,
    [registerError]: () => false,
    [loginRequest]: () => true,
    [loginSuccess]: () => false,
    [loginError]: () => false,
    [logoutRequest]: () => true,
    [logoutSuccess]: () => false,
    [logoutError]: () => false,
    [getCurrentUserRequest]: () => true,
    [getCurrentUserSuccess]: () => false,
    [getCurrentUserError]: () => false,
  });
  
  export { loading };
