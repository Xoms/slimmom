import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialState = { name: null, email: null};

//user reducer
const user = createReducer(initialState, {
    [authActions.registerSuccess]: (state, { payload }) => payload.user,
    [authActions.loginSuccess]: (state, { payload }) => payload.user,
    [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
    [authActions.logoutSuccess]: () => initialState
})

const token = createReducer(null, {
    [authActions.registerSuccess]: (state, {payload}) => payload.token,
    [authActions.loginSuccess]: (state, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null
})

const error = createReducer(null, {
    [authActions.registerError]: (state, {payload}) => payload.error,
    [authActions.loginError]: (state, {payload}) => payload.error,
    [authActions.getCurrentUserError]: (state, {payload}) => payload.error,
    [authActions.logoutError]: (state, {payload}) => payload.error
} );

const authReducer = combineReducers({
    user,
    token,
    error
})

export default authReducer