import userActions from './userActions';

import api from '../../services/backend.service';


const getCurrentUser = () => (dispatch, getState) => {

const { user: { token } } = getState()

    if (!token) return

    api.setToken(token)

    dispatch(userActions.getCurrentUserRequest());

    api.getCurrentUser()
        .then(({data}) => {
            dispatch(userActions.getCurrentUserSuccess(data))
        })
        .catch( err => dispatch(userActions.getCurrentUserError(err)));
}

export { getCurrentUser }