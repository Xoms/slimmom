const getProductsSelectors = state => state.user.eatenProducts;
const getDaySummary = state => state.user.daySummary;
const getnotAllowedProducts = state => state.user.userData.notAllowedProducts;
const getCalories = state => state.user.dailyRate;
const getProducts = state => state.user.notAllowedProducts;
const getCurrentDayId = state => state.user.currentDayId;

const selectors = {
  getProductsSelectors,
  getDaySummary,
  getnotAllowedProducts,
  getProducts,
  getCalories,
  getCurrentDayId,
};
export default selectors;
