export default {
  getUserAuthenticate: (state) => {
    return state.userAuthenticate;
  },
  getAccessToken: (state) => {
    return state.accessToken;
  },
  getTokenExpiration: (state) => {
    return state.tokenExpiration;
  },
  getLoggedInUserData: (state) => {
    return state.loggedInUserData;
  },
  getEmployeeCheckedin: (state) => {
    return state.employeeCheckedin;
  },
  getEmployeeCheckedout: (state) => {
    return state.employeeCheckedout;
  },
  getPushNotification: (state) => {
    return state.pushNotification;
  },
};
