<template>
  <div>
    <div class="wrapper">
      <Sidebar></Sidebar>
      <div class="main-panel">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
import Footer from "../layouts/Footer.vue";
import Sidebar from "../layouts/Sidebar.vue";

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
  created() {
    this.$store.dispatch("setCheckedInOrNot");
    this.$store.dispatch("setCheckedOutOrNot");
  },
};
</script>

