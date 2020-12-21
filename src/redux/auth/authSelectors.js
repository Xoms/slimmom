

const getUserName = (state) => state.auth.user.name;
const getToken = state => state.auth.token;


const selectors = {getUserName, getToken}
export default selectors;