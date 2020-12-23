const getUserName = (state) => state.auth.user.name;
const getToken = state => state.auth.accessToken;

export default {getUserName, getToken}