import { createAction } from '@reduxjs/toolkit';

const getCurrentUserRequest = createAction('auth/getUserRequest');
const getCurrentUserSuccess = createAction('auth/getUserSuccess');
const getCurrentUserError = createAction('auth/getUserError');

const actions = { 
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
}
export default actions