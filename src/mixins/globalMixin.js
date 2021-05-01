import store from "../packages/vuex";
export default {
  mounted() {
    const expiryTime = store.getters.getTokenExpiration;
    const currentTime = this.moment().format("YYYYMMDDHHmmss");
    const remainingTime = expiryTime - currentTime;
    console.log(this.moment().format("YYYYMMDDHHmmss"));
    console.log(remainingTime);
  },
};
