<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    this.$store.dispatch("setUserAuthenticate");
    this.$store.dispatch("setAccessToken");
  },
};
</script>
