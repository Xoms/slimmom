import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import userActions from './userActions';

const initialState = {
  username: null,
  id: null,
  dailyRate: null,
  userData: {
    notAllowedProducts: [],
  },
  eatenProducts: [],
  daySummary: {}
};



const user = createReducer(initialState, {
  [authActions.loginSuccess]: (state, { payload }) => ({...state, ...payload}),
  [authActions.loginSuccess]: (state, { payload }) => payload.user,
  [userActions.getCurrentUserSuccess]: (state, { payload }) => ({...state, ...payload}),

  [authActions.logoutSuccess]: () => initialState,
  [userActions.getDailyRateSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [userActions.getProductsSuccess]: (state, {payload}) => ({
    ...state,
    daySummary: payload
  })
});

export default user;
