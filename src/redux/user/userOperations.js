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

const getDailyRate = (userCharacteristics, userId) => dispatch => {
  dispatch(userActions.getDailyRateRequest());

  api.getDailyRate(userCharacteristics, userId).then(({ data }) => {
    if (userId) {
      const { summaries } = data;
      return dispatch(userActions.getDailyRateSuccess(summaries));
    }
    return dispatch(userActions.getDailyRateSuccess(data));
  });
};

const getDailyRateWithId = (userCharacteristics, userId) => dispatch => {
  dispatch(userActions.getDailyRateWithIdRequest());
  api
    .getDailyRate(userCharacteristics, userId)
    .then(({ data }) => {
      const { summaries, dailyRate } = data;
      const payload = { summaries, dailyRate };
      return dispatch(userActions.getDailyRateWithIdSuccess(payload));
    })
    .catch(err => dispatch(userActions.getDailyRateWithIdError(err)));
};

const deleteEatenProduct = product => dispatch => {
  dispatch(userActions.deleteEatenProductRequest());
  api
    .deleteEatenProduct(product)
    .then(({ data }) => {
      return dispatch(
        userActions.deleteEatenProductSuccess(data.newDaySummary),
      );
    })
    .catch(err => dispatch(userActions.deleteEatenProductError(err)));
};

const addProduct = product => dispatch => {
  dispatch(userActions.addProductRequest());
  api
    .addProduct(product)
    .then(({ data }) => dispatch(userActions.addProductSuccess(data.day)))
    .catch(err => dispatch(userActions.addProductError(err)));
};

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
      let payload = {};
      if (data.daySummary) {
        const { daySummary, eatenProducts, id } = data;
        payload = { daySummary, eatenProducts, currentDayId: id };
      } else {
        payload = {
          daySummary: { ...data },
          eatenProducts: [],
          currentDayId: null,
        };
        // payload.daySummary = { ...data };
      }
      dispatch(userActions.getProductsSuccess(payload));
    })
    .catch(err => dispatch(userActions.getProductsError(err)));
};

export {
  getCurrentUser,
  getDailyRate,
  addProduct,
  deleteEatenProduct,
  getProducts,
  getDailyRateWithId,
};
