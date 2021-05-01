import store from "../packages/vuex";
export default {
  methods: {
    userLogout() {
      console.log("logout call");
      this.$store.dispatch("actUserUnauthenticattion");
      this.$router.push({ name: "login" });
    },
  },
  created() {
    const expiryTime = store.getters.getTokenExpiration;
    const currentTime = this.moment().format("YYYYMMDDHHmmss");
    const remainingTime = expiryTime - currentTime;
    console.log(currentTime + " current");
    console.log(remainingTime + " remaining");
    console.log(expiryTime + " expire");
    if (remainingTime < 60) {
      this.userLogout();
    }
  },
};
