const getUserName = (state) => state.auth.user.name;
const getToken = state => state.auth.accessToken;
const selectors = {getUserName, getToken}
export default selectors