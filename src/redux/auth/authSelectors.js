const getUserName = (state) => state.auth.user.name;
const getToken = state => state.auth.token;

export default {getUserName, getToken}