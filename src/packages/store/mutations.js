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
    state.tokenExpiration = moment().add(payload, 'seconds').format("YYYYMMDDHHmmss");
  },

  setCheckedInOrNot: (state) => {
    console.log(moment().format("YYYY MM DD"));
    axios
      .get("/checkin_or_not")
      .then((results) => {
        if (results.data.success.message == "yes") {
          state.employeeCheckedin = true;
        } else {
          state.employeeCheckedin = false;
        }
      })
      .catch(() => {
        state.employeeCheckedin = false;
      });
  },

  setCheckedOutOrNot: (state) => {
    axios
      .get("/checkout_or_not")
      .then((results) => {
        if (results.data.success.message == "yes") {
          state.employeeCheckedout = true;
        } else {
          state.employeeCheckedout = false;
        }
      })
      .catch(() => {
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
        } else {
          state.pushNotification = results.data.error.message;
        }
      })
      .catch((error) => {
        state.pushNotification = error.data.error.message;
      });
  },

  setCheckedOut: (state) => {
    axios
      .post("/attendance/checkout")
      .then((results) => {
        if (results.data.success) {
          state.employeeCheckedout = true;
          state.pushNotification = results.data.success.message;
        } else {
          state.pushNotification = results.data.error.message;
        }
      })
      .catch((error) => {
        state.pushNotification = error.data.error.message;
      });
  },
};
