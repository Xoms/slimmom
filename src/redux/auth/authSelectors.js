const getUserName = (state) => state.auth.user.name;
const getToken = state => state.auth.accessToken;
const getProductsSelectors = state => state.user.eatenProducts;
const getDaySummary = state => state.user.daySummary;
const getnotAllowedProducts = state => state.user.notAllowedProducts;

export default {getUserName, getToken, getProductsSelectors, getDaySummary, getnotAllowedProducts}