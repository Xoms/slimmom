import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import userActions from './userActions';

const initialState = {
  username: null,
  email: null,
  id: null,
  dailyRate: null,
  notAllowedProducts: [],
  eatenProducts: [],
  daySummary: {}
};

const user = createReducer(initialState, {
  [authActions.loginSuccess]: (state, { payload }) => {
    const { email, username, id, userData: {dailyRate, notAllowedProducts, eatenProducts} } = { ...payload.user };
    const user = { email, username, id, dailyRate, notAllowedProducts, eatenProducts};
    console.log(payload);
    return user;
  },
  [userActions.getCurrentUserSuccess]: (state, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialState,
  [userActions.getDailyRateSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [userActions.getProductsSuccess]: (state, {payload: {eatenProducts, daySummary}}) => ({
    ...state,
    eatenProducts,
    daySummary,
  })
});

export default user;
