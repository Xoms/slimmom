import { createAction } from '@reduxjs/toolkit';

const getCurrentUserRequest = createAction('auth/getUserRequest');
const getCurrentUserSuccess = createAction('auth/getUserSuccess');
const getCurrentUserError = createAction('auth/getUserError');

const getDailyRateRequest = createAction('auth/getDailyRateRequest');
const getDailyRateSuccess = createAction('auth/getDailyRateSuccess');
const getDailyRateError = createAction('auth/getDailyRateError');

const getDailyRateWithIdRequest = createAction(
  'auth/getDailyRateWithIdRequest',
);
const getDailyRateWithIdSuccess = createAction(
  'auth/getDailyRateWithIdSuccess',
);
const getDailyRateWithIdError = createAction('auth/getDailyRateWithIdError');

const deleteEatenProductRequest = createAction(
  'user/deleteEatenProductRequest',
);
const deleteEatenProductSuccess = createAction(
  'user/deleteEatenProductSuccess',
);
const deleteEatenProductError = createAction('user/deleteEatenProductError');

const getProductsRequest = createAction('user/getProductsRequest');
const getProductsSuccess = createAction('user/getProductsSuccess');
const getProductsError = createAction('user/getProductsError');

const addProductRequest = createAction('user/addProductRequest');
const addProductSuccess = createAction('user/addProductSuccess');
const addProductError = createAction('user/addProductError');

const setCurrentDay = createAction('user/setCurrentDay');

const notifyGetDailyRate = createAction('user/notifyGetDailyRate'); // для записис в стор меседжа
const clearNotify = createAction('user/clearNotify'); // для очистки error

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
  addProductRequest,
  addProductSuccess,
  addProductError,
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  setCurrentDay,
  notifyGetDailyRate,
  clearNotify,
  getDailyRateWithIdRequest,
  getDailyRateWithIdSuccess,
  getDailyRateWithIdError,
};

export default actions;
