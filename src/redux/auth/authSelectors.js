const getUserName = (state) => state.auth.user.name;
const getToken = state => state.auth.accessToken;
const getProductsSelectors = state => state.user.days[0].eatenProducts; // в объекте
const getDaySummary = state => state.user.days[0].daySummary; // в объекте
const getnotAllowedProducts = state => state.user.userData.notAllowedProducts;

export default {getUserName, getToken, getProductsSelectors, getDaySummary, getnotAllowedProducts}
