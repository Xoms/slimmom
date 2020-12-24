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
    [authActions.refreshSuccess]: (state, { payload }) => payload.sid,
    [authActions.loginSuccess]: (state, { payload }) => payload.sid,
    [authActions.logoutSuccess]: () => null
})

const authReducer = combineReducers({
    accessToken,
    // refreshToken,
    sid
})

export default authReducer