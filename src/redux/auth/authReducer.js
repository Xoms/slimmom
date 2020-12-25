import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const accessToken = createReducer(null, { 
    [authActions.loginSuccess]: (state, { payload }) => (payload.auth.accessToken),
    [authActions.logoutSuccess]: () => null
})

// const refreshToken = createReducer(null, {
//     [authActions.refreshSuccess]: (state, { payload }) => payload.refreshToken,
//     [authActions.logoutSuccess]: () => null
// })

const sid = createReducer(null, {
    [authActions.refreshSuccess]: (state, { payload }) => payload.auth.sid,
    [authActions.loginSuccess]: (state, { payload }) => payload.auth.sid,
    [authActions.logoutSuccess]: () => null
})

const authReducer = combineReducers({
    accessToken,
    // refreshToken,
    sid
})

export default authReducer