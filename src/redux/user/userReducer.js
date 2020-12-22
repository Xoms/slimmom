import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import  authActions  from '../auth/authActions';
import userActions from './userActions';

const initialState = { 
    username: null, 
    email: null, 
    id: null, 
    userData: {
        notAllowedProducts: []
    }
};

const user = createReducer(initialState, {
    [authActions.registerSuccess]: (state, { payload }) => payload,
    [authActions.loginSuccess]: (state, { payload }) => {
        const {email, username, id} = {...payload.user};
        const user = {email, username, id};
        return user;
    },
    [authActions.getCurrentUserSuccess]: (state, { payload }) => payload, 
    [authActions.logoutSuccess]: () => initialState
})

export default user