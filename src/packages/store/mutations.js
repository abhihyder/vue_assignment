import axios from "../axios";
import moment from "moment";
export default {
  setUserAuthenticate: (state, payload) => {
    state.userAuthenticate = payload;
  },

  setAccessToken: (state, payload) => {
    state.accessToken = payload;
  },

  setLoggedInUserData: (state, payload) => {
    state.loggedInUserData = payload;
  },

  setTokenExpiration: (state, payload) => {
    state.tokenExpiration = moment()
      .add(payload, "seconds")
      .format("YYYY-MM-DD HH:mm:ss");
  },

  setUserRefresh: (state) => {
    console.log("setUserRefresh");
    axios
      .post("/auth/refresh")
      .then((results) => {
        state.accessToken = "Bearer " + results.data.access_token;
        state.tokenExpiration = moment()
          .add(results.data.expires_in, "seconds")
          .format("YYYY-MM-DD HH:mm:ss");
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  setCheckedInOrNot: (state) => {
    axios
      .get("/checkin_or_not")
      .then((results) => {
        if (results.data.success.message == "yes") {
          state.employeeCheckedin = true;
        } else {
          state.employeeCheckedin = false;
        }
      })
      .catch((error) => {
        console.log(error);
        state.employeeCheckedin = false;
      });
  },

  setCheckedOutOrNot: (state) => {
    axios
      .get("/checkout_or_not", {
        headers: { Authorization: state.accessToken },
      })
      .then((results) => {
        if (results.data.success.message == "yes") {
          state.employeeCheckedout = true;
        } else {
          state.employeeCheckedout = false;
        }
      })
      .catch((error) => {
        console.log(error);
        state.employeeCheckedout = false;
      });
  },

  setCheckedIn: (state) => {
    axios
      .post("/attendance/checkin")
      .then((results) => {
        if (results.data.success) {
          state.employeeCheckedin = true;
          state.pushNotification = results.data.success.message;
          state.pushNotificationType = "success";
        } else {
          state.pushNotification = results.data.error.message;
          state.pushNotificationType = "danger";
        }
      })
      .catch((error) => {
        state.pushNotification = error.data.error.message;
        state.pushNotificationType = "danger";
      });
  },

  setCheckedOut: (state) => {
    axios
      .post("/attendance/checkout")
      .then((results) => {
        if (results.data.success) {
          state.employeeCheckedout = true;
          state.pushNotification = results.data.success.message;
          state.pushNotificationType = "success";
        } else {
          state.pushNotification = results.data.error.message;
          state.pushNotificationType = "danger";
        }
      })
      .catch((error) => {
        state.pushNotification = error.data.error.message;
        state.pushNotificationType = "danger";
      });
  },

  clearNotification: (state) => {
    state.pushNotification = null;
  },
};
