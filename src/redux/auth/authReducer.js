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

const accessToken = createReducer(null, {
    //[authActions.registerSuccess]: (state, {payload}) => payload.accessToken, 
    [authActions.loginSuccess]: (state, { payload }) => payload.accessToken,
    [authActions.logoutSuccess]: () => null
})

const refreshToken = createReducer(null, {
    //[authActions.registerSuccess]: (state, {payload}) => payload.accessToken,
    [authActions.refreshSuccess]: (state, { payload }) => { 
        const {newRefreshToken: refreshToken, newAccessToken: accessToken} = {...payload};
        const newTokens = {refreshToken, accessToken};
        return {...newTokens}        
    },
    [authActions.logoutSuccess]: () => null
})

const sid = createReducer(null, {
    //[authActions.registerSuccess]: (state, {payload}) => payload.accessToken,
    [authActions.loginSuccess]: (state, { payload }) => payload.sid,
    [authActions.logoutSuccess]: () => null
})

const authReducer = combineReducers({
    user,
    accessToken,
    refreshToken,
    sid
})

export default authReducer