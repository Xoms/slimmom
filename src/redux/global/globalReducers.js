import { createReducer } from "@reduxjs/toolkit";
import authActions from "../auth/authActions";
import userActions from "../user/userActions";
const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  clearError,
} = { ...authActions };

const {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
} = userActions;

const error = createReducer(null, {
  [loginError]: (state, { payload }) => payload.message,
  [getCurrentUserError]: (state, { payload }) => payload.error,
  [registerError]: (state, { payload }) => payload.error,
  [logoutError]: (state, { payload }) => payload.error,
  [getProductsError]: (state, { payload }) => payload.message,
  [clearError]: () => null,
  [getDailyRateError]: (state, { payload }) => payload.message,
});

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
  [getProductsRequest]: () => true,
  [getProductsSuccess]: () => false,
  [getProductsError]: () => false,
  [getDailyRateRequest]: () => true,
  [getDailyRateSuccess]: () => false,
  [getDailyRateError]: () => false,
});

export { loading, error };
