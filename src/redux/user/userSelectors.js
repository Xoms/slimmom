const getProductsSelectors = state => state.user.eatenProducts;
const getDaySummary = state => state.user.daySummary;
const getnotAllowedProducts = state => state.user.userData.notAllowedProducts;
const getCalories = state => state.user.dailyRate;
const getProducts = state => state.user.notAllowedProducts;
const getCurrentDayId = state => state.user.currentDayId;
const getUserId = state => state.user.id;
const getSummaries = state => state.user.summaries;

// const getCurrentDaySummary = state => {
//   const dayId = getCurrentDayId(state);
//   const summaries = getSummaries(state);
//   if (dayId && summaries.length) {
//     return summaries.find(daySummary => daySummary._id === dayId);
//   }
//   return getDaySummary(state);
// };

const selectors = {
  getProductsSelectors,
  getDaySummary,
  getnotAllowedProducts,
  getProducts,
  getCalories,
  getUserId,
  getCurrentDayId,
  // getCurrentDaySummary,
  getSummaries,
};
export default selectors;
