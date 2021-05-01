import moment from "moment";

export default {
  actUserAuthentication: (context, payload) => {
    context.commit("setUserAuthenticate", true);
    context.commit("setAccessToken", payload.access_token);
    context.commit("setLoggedInUserData", payload.auth_user);
    context.commit("setTokenExpiration", payload.expires_in);
    console.log(moment().format("YYYY MM DD"));
  },
  actUserUnauthenticattion: (context) => {
    context.commit("setUserAuthenticate", false);
    context.commit("setAccessToken", "");
    context.commit("setLoggedInUserData", "");
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
