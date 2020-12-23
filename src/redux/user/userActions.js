import { createAction } from '@reduxjs/toolkit';

const getCurrentUserRequest = createAction('auth/getUserRequest');
const getCurrentUserSuccess = createAction('auth/getUserSuccess');
const getCurrentUserError = createAction('auth/getUserError');
const getDailyRateRequest = createAction('auth/getDailyRateRequest');
const getDailyRateSuccess = createAction('auth/getDailyRateSuccess');
const getDailyRateError = createAction('auth/getDailyRateError');
const deleteEatenProductRequest = createAction('user/deleteEatenProductRequest');
const deleteEatenProductSuccess = createAction('user/deleteEatenProductSuccess');
const deleteEatenProductError = createAction('user/deleteEatenProductError');
const getProductsRequest = createAction('user/getProductsRequest');
const getProductsSuccess = createAction('user/getProductsSuccess');
const getProductsError = createAction('user/getProductsError');

const actions = {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
  deleteEatenProductRequest,
  deleteEatenProductSuccess,
  deleteEatenProductError,
  getProductsRequest,
  getProductsSuccess,
  getProductsError
};

export default actions;
