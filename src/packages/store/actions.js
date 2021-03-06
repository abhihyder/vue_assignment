export default {
  actUserAuthentication: (context, payload) => {
    context.commit("setAccessToken", payload.access_token);
    context.commit("setUserAuthenticate", true);
    context.commit("setLoggedInUserData", payload.auth_user);
    context.commit("setTokenExpiration", payload.expires_in);
  },

  actUserUnauthentication: (context) => {
    context.commit("setUserAuthenticate", false);
    context.commit("setAccessToken", null);
    context.commit("setLoggedInUserData", "");
    context.commit("setTokenExpiration", 0);
  },

  actUserRefresh: (context) => {
    context.commit("setUserRefresh");
  },

  actClearNotification: (context) => {
    context.commit("clearNotification");
  },

  actCheckinCheckout: (context) => {
    context.commit("setCheckedInOrNot");
    context.commit("setCheckedOutOrNot");
  },

  actCheckedIn: (context) => {
    context.commit("setCheckedIn");
  },
  actCheckedOut: (context) => {
    context.commit("setCheckedOut");
  },
};
