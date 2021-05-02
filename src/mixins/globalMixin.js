import store from "../packages/vuex";
export default {
  methods: {
    userLogout() {
      this.$store.dispatch("actUserUnauthentication");
      this.$router.push({ name: "login" });
    },
    userRefresh() {
      this.$store.dispatch("actUserRefresh");
    },

    diff_in_seconds(expiryTime, currentTime) {
      const from = new Date(currentTime);
      const to = new Date(expiryTime);
      const diff = (to.getTime() - from.getTime()) / 1000;

      return diff;
    },
  },
  created() {
    const isAuthenticate = store.getters.getUserAuthenticate;
    const expiryTime = store.getters.getTokenExpiration;
    const currentTime = this.moment().format("YYYY-MM-DD HH:mm:ss");
    const remainingTime = this.diff_in_seconds(expiryTime, currentTime);

    if (remainingTime < 60 && isAuthenticate) {
      this.userLogout();
    } else if (remainingTime > 60 && remainingTime < 600 && isAuthenticate) {
      this.userRefresh();
    }
  },
};
