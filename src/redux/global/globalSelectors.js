const getLoading = state => state.loading;
const getError = state => state.error;
const getAlertReducer = state => state.alertReducer;

const selectors = {
  getLoading,
  getError,
  getAlertReducer
};
export default selectors