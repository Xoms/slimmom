import authActions from './authActions';
import api from '../../services/backend.service';

const register = credentials => dispatch => {
    
    dispatch(authActions.registerRequest());

    api.register(credentials)
        .then(({data}) => {
            //api.setToken(data.token); //токена нету О_о

            dispatch(authActions.registerSuccess(data));
        })
        .catch( err => dispatch(authActions.registerError(err)));
}

const login = credentials => (dispatch) => {
    
    dispatch(authActions.loginRequest());

    api.login(credentials)
        .then(({data}) => {
            api.setToken(data.accessToken);
            dispatch(authActions.loginSuccess(data));
        })
        .catch( err => dispatch(authActions.loginError(err)));
}

const logout = token => dispatch => {
    dispatch(authActions.logoutRequest());

    api.logout(token)
        .then(({data}) => {
            api.unsetToken();
            dispatch(authActions.logoutSuccess(data));
        })
        .catch( err => dispatch(authActions.logoutError(err)));
}

// const refresh = sid => dispatch => {
//     dispatch(authActions.refreshRequest());

//     api.logout(sid)
//         .then(({data}) => {
//             api.setToken(data.newAccessToken);
//             dispatch(authActions.logoutSuccess(data));
//         })
// }

const getCurrentUser = () => (dispatch, getState) => {

    const { auth: { token } } = getState()

    if (!token) return

    api.setToken(token)

    dispatch(authActions.getCurrentUserRequest());

    api.getCurrentUser()
        .then(({data}) => {
            dispatch(authActions.getCurrentUserSuccess(data))
        })
        .catch( err => dispatch(authActions.getCurrentUserError(err)));
}

const ops = { register, login, logout, getCurrentUser }
export default ops