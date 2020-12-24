import authActions from './authActions';
import api from '../../services/backend.service';

const register = credentials => dispatch => {
    
    dispatch(authActions.registerRequest());

    api.register(credentials)
        .then(({data}) => {
            dispatch(authActions.registerSuccess(data));
        })
        .catch( err => dispatch(authActions.loginError(err)));
}

const login = credentials => (dispatch) => {
    
    dispatch(authActions.loginRequest());

    api.login(credentials)
        .then(({data}) => {
            api.setToken(data.accessToken);
    
            const  { user: {username, id, userData}, accessToken } = data;
            
            const userInfo = { auth: {accessToken}, user: {username, id, userData, eatenProducts : [], daySummary: {} } }
            dispatch(authActions.loginSuccess(userInfo));
        })
        .catch( err => dispatch(authActions.loginError(err)));
}

const logout = () => dispatch => {
    dispatch(authActions.logoutRequest());

    api.logout()
        .then(({data}) => {
            api.unsetToken();
            dispatch(authActions.logoutSuccess(data));
        })
        .catch( err => dispatch(authActions.logoutError(err)));
}

const refresh = sid => dispatch => {
    dispatch(authActions.refreshRequest());

    api.refresh(sid)
        .then(({data}) => {
            api.setToken(data.newAccessToken);
            dispatch(authActions.refreshSuccess(data));
        })
}

const ops = { register, login, logout, refresh }
export default ops