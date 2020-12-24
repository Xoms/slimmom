const getProductsSelectors = state => state.user.eatenProducts;
const getDaySummary = state => state.user.daySummary;
const getnotAllowedProducts = state => state.user.userData.notAllowedProducts;
const getCalories = state => state.user.dailyRate;
const getProducts = state => state.user.notAllowedProducts;
const getCurrentDayId = state => state.user.currentDayId;
const getUserId = (state) => state.user.id;

const selectors = {
  getProductsSelectors,
  getDaySummary,
  getnotAllowedProducts,
  getProducts,
  getCalories,
  getUserId,
  getCurrentDayId,
};
export default selectors;
