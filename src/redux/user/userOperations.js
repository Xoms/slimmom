import userActions from './userActions';

import api from '../../services/backend.service';

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { accessToken },
  } = getState();

  if (!accessToken) return;

  api.setToken(accessToken);

  dispatch(userActions.getCurrentUserRequest());

  api
    .getCurrentUser()
    .then(({ data }) => {
      const { username, id, userData } = data;
      const userInfo = { username, id, userData };
      dispatch(userActions.getCurrentUserSuccess(userInfo));
    })
    .catch(err => dispatch(userActions.getCurrentUserError(err)));
};

const getDailyRate = userCharacteristics => dispatch => {
  //   const token =
  //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmUxZGNiODVjMmJhNzAwMDQ0NDA5NjUiLCJzaWQiOiI1ZmUxZjdmNTVjMmJhNzAwMDQ0NDA5NmUiLCJpYXQiOjE2MDg2NDQ1OTcsImV4cCI6MTYwODY0ODE5N30.mynRviNExi5wDgG9Mhxc-mNUEw-0FNycFKYL1LoNiJs'; // надо поменять логику, пока захардкодили

  //   const id = '5fcffaa7f7ae5300043515a6'; // надо поменять логику, пока захардкодили
  //   api.setToken(token);
  dispatch(userActions.getCurrentUserRequest());

  api.getDailyRate(userCharacteristics).then(({ data }) => {
    return dispatch(userActions.getDailyRateSuccess(data));
  });
};

const deleteEatenProduct = () => dispatch => {
  dispatch(userActions.deleteEatenProductRequest());
  api
    .deleteEatenProduct()
    .then(({ data }) => {
      return dispatch(userActions.deleteEatenProductSuccess(data));
    })
    .catch(err => dispatch(userActions.deleteEatenProductError(err)));
};

const addProduct = product => dispatch => {
  dispatch(userActions.addProductRequest());

  api
    .addProduct(product)
    .then(({ data }) => console.log(data))
    .catch(err => dispatch(userActions.addProductError(err)));
};

// {
//   "date": "2020-12-31",
//   "productId": "5d51694802b2373622ff552c",
//   "weight": 100
// }

const getProducts = date => (dispatch, getState) => {
  const {
    auth: { accessToken },
  } = getState();

  if (!accessToken) return;

  api.setToken(accessToken);

  dispatch(userActions.getProductsRequest());

  api
    .getProducts(date)
    .then(({ data }) => {
      dispatch(userActions.getProductsSuccess(data));
    })
    .catch(err => dispatch(userActions.getProductsError(err)));
};

export { getCurrentUser, getDailyRate, deleteEatenProduct, getProducts };

// dailyRate: 1351.5
// kcalConsumed: 0
// kcalLeft: 1351.5
// percentsOfDailyRate: 0
