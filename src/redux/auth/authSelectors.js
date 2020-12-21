

const getUserName = (state) => state.auth.user.name;
const getToken = state => state.auth.token;
const getError = state => state.auth.error;

const selectors = {getUserName, getToken, getError}
export default selectors;