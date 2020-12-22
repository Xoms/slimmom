import userActions from './userActions';

import api from '../../services/backend.service';
import axios from 'axios';

const getCurrentUser = () => (dispatch, getState) => {
  const {
    user: { token },
  } = getState();

  if (!token) return;

  api.setToken(token);

  dispatch(userActions.getCurrentUserRequest());

  api
    .getCurrentUser()
    .then(({ data }) => {
      dispatch(userActions.getCurrentUserSuccess(data));
    })
    .catch(err => dispatch(userActions.getCurrentUserError(err)));
};

const userCharacteristics = {
  height: '170',
  weight: '83',
  age: '26',
  desiredWeight: '76',
  bloodType: '2',
};

const getDailyRate = () => dispatch => {
  dispatch(userActions.getCurrentUserRequest());

  axios.defaults.headers.common.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmUxZGNiODVjMmJhNzAwMDQ0NDA5NjUiLCJzaWQiOiI1ZmUxZGNjMjVjMmJhNzAwMDQ0NDA5NjYiLCJpYXQiOjE2MDg2Mzc2MzQsImV4cCI6MTYwODY0MTIzNH0.LUdm7gIfo8gLD8EZWyRP5j8l225ZrWvpvqD0-Nb_lsg';
  axios
    .post('/daily-rate/5fcffaa7f7ae5300043515a6', userCharacteristics)
    .than(data => console.log(data));
};

export { getCurrentUser, getDailyRate };
