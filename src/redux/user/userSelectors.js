const getProductsSelectors = state => state.user.eatenProducts; 
const getDaySummary = state => state.user.daySummary; 
const getnotAllowedProducts = state => state.user.userData.notAllowedProducts;

const selectors = {getProductsSelectors, getDaySummary, getnotAllowedProducts}
export default selectors
