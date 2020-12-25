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
      const userInfo = { username, id, userData, summaries: [] };
      dispatch(userActions.getCurrentUserSuccess(userInfo));
    })
    .catch(err => dispatch(userActions.getCurrentUserError(err)));
};

const getDailyRate = userCharacteristics => dispatch => {
  dispatch(userActions.getDailyRateRequest());

  api
    .getDailyRate(userCharacteristics)
    .then(({ data }) => {
      return dispatch(userActions.getDailyRateSuccess(data));
    })
    .catch(err => dispatch(userActions.getDailyRateWithIdError(err)));
};

const getDailyRateWithId = (userCharacteristics, userId) => dispatch => {
  dispatch(userActions.getDailyRateWithIdRequest());
  api
    .getDailyRate(userCharacteristics, userId)
    .then(({ data }) => {
      console.log(data);
      const { summaries, dailyRate } = data;
      const payload = { summaries, dailyRate };
      return dispatch(userActions.getDailyRateWithIdSuccess(payload));
    })
    .catch(err => dispatch(userActions.getDailyRateWithIdError(err)));
};

const addProduct = product => dispatch => {
  dispatch(userActions.addProductRequest());
  api
    .addProduct(product)
    .then(({ data }) => {
      console.log(data);
      let payload = {};
      if (data.newDay) {
        payload = {
          eatenProducts: data.newDay.eatenProducts,
          daySummary: data.newSummary,
        };
        dispatch(userActions.addProductSuccess(payload));
      } else {
        payload = {
          eatenProducts: data.day.eatenProducts,
          daySummary: data.daySummary,
        };
        dispatch(userActions.addProductSuccess(payload));
      }
    })
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

const deleteEatenProduct = (product, date) => dispatch => {
  dispatch(userActions.deleteEatenProductRequest());
  api
    .deleteEatenProduct(product)
    .then(({ data }) => {
      api
        .getProducts({ date })
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

      return dispatch(
        userActions.deleteEatenProductSuccess(data.newDaySummary),
      );
    })
    .catch(err => dispatch(userActions.deleteEatenProductError(err)));
};

export {
  getCurrentUser,
  getDailyRate,
  addProduct,
  deleteEatenProduct,
  getProducts,
  getDailyRateWithId,
};
