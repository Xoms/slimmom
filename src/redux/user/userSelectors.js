const getProductsSelectors = state => state.user.eatenProducts;
const getDaySummary = state => state.user.daySummary;
const getnotAllowedProducts = state => state.user.userData.notAllowedProducts;
const getCalories = state => state.user.dailyRate;
const getProducts = state => state.user.notAllowedProducts;
const getCurrentDayId = state => state.user.currentDayId;
const getUserId = (state) => state.user.id;
const getSummaries = (state) => state.user.summaries;

const getCurrentDaySummary = (state) => {
    const dayId = getCurrentDayId(state);
    const summaries = getSummaries(state);
    if (dayId) {
        return summaries.find(daySummary => daySummary._id === dayId);
    }
    const today = new Date().toJSON().slice(0,10);
    return summaries.find(daySummary => daySummary.date === today)
}

const selectors = {
  getProductsSelectors,
  getDaySummary,
  getnotAllowedProducts,
  getProducts,
  getCalories,
  getUserId,
  getCurrentDayId,
  getCurrentDaySummary
};
export default selectors;
