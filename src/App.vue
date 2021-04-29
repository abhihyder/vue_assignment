<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  beforeCreate() {
    this.$store.dispatch("setLoggedInUserData");
    this.$store.dispatch("setAccessToken");
  },
};
</script>
