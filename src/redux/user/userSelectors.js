const getProductsSelectors = state => state.user.eatenProducts;
const getDaySummary = state => state.user.daySummary;
const getnotAllowedProducts = state => state.user.userData.notAllowedProducts;
const getCalories = state => state.user.dailyRate; //для модалки расчета каллорий
const getProducts = state => state.user.notAllowedProducts;
const getCurrentDayId = state => state.user.currentDayId;
const getCurrentDay = state => state.user.currentDay;
const getUserId = state => state.user.id;
const getSummaries = state => state.user.summaries;
const getUserDataDailyRate = state => state.user.userData.dailyRate; //для только что зареганного польз-ля


const selectors = {
  getProductsSelectors,
  getDaySummary,
  getnotAllowedProducts,
  getProducts,
  getCalories,
  getUserId,
  getCurrentDayId,
  getCurrentDay,
  getUserDataDailyRate,
  getSummaries,
};
export default selectors;
