<template>
  <div>
    <div class="wrapper">
      <Sidebar></Sidebar>
      <div class="main-panel">
        <Header></Header>
        <Dashboard></Dashboard>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import Dashboard from "./components/pages/Dashboard.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Sidebar,
    Dashboard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
