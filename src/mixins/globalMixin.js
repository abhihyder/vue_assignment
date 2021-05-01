import store from "../packages/vuex";
export default {
  methods: {
    userLogout() {
      this.$store.dispatch("actUserUnauthentication");
      this.$router.push({ name: "login" });
    },
  },
  created() {
    const isAuthenticate = store.getters.getUserAuthenticate;
    const expiryTime = store.getters.getTokenExpiration;
    const currentTime = this.moment().format("YYYYMMDDHHmmss");
    const remainingTime = expiryTime - currentTime;
    if (remainingTime < 60 && isAuthenticate) {
      this.userLogout();
    }
  },
};
