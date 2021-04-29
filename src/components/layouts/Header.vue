<template>
  <div>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"
    >
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <a class="navbar-brand" href="javascript:;">Dashboard</a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end">
          <form class="navbar-form">
            <div class="input-group no-border">
              <input
                type="text"
                value=""
                class="form-control"
                placeholder="Search..."
              />
              <button
                type="submit"
                class="btn btn-white btn-round btn-just-icon"
              >
                <i class="material-icons">search</i>
                <div class="ripple-container"></div>
              </button>
            </div>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="javascript:;">
                <i class="material-icons">dashboard</i>
                <p class="d-lg-none d-md-block">Stats</p>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="javascript:;"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="material-icons">notifications</i>
                <span class="notification">5</span>
                <p class="d-lg-none d-md-block">Some Actions</p>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="javascript:;"
                  >Mike John responded to your email</a
                >
                <a class="dropdown-item" href="javascript:;"
                  >You have 5 new tasks</a
                >
                <a class="dropdown-item" href="javascript:;"
                  >You're now friend with Andrew</a
                >
                <a class="dropdown-item" href="javascript:;"
                  >Another Notification</a
                >
                <a class="dropdown-item" href="javascript:;">Another One</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="javascript:;"
                id="navbarDropdownProfile"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="material-icons">person</i>
                <p class="d-lg-none d-md-block">Account</p>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownProfile"
              >
                <a class="dropdown-item" href="javascript:;">Profile</a>
                <a
                  v-if="getEmployeeCheckedin == 'no'"
                  class="dropdown-item"
                  href="javascript:;"
                  @click.prevent="checkin()"
                  >Check-In</a
                >
                <a
                  v-if="
                    getEmployeeCheckedin == 'yes' &&
                    getEmployeeCheckedout == 'no'
                  "
                  class="dropdown-item"
                  href="javascript:;"
                  @click.prevent="checkout()"
                  >Check-Out</a
                >
                <div class="dropdown-divider"></div>
                <a
                  v-if="getUserAuthenticate == 'yes'"
                  class="dropdown-item"
                  href="javascript:;"
                  @click.prevent="logout()"
                  >Log out</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters([
      "getUserAuthenticate",
      "getEmployeeCheckedin",
      "getEmployeeCheckedout",
    ]),
  },
  methods: {
    logout() {
      this.$http.post("auth/logout").then((results) => {
        localStorage.setItem("userAuthenticate", "no");
        this.$store.dispatch("setUserAuthenticate");
        this.$router.push({ name: "login" });
        console.log(results);
      });
    },
    checkin() {
      this.$http.post("attendance/checkin").then((results) => {
        localStorage.setItem("employeeCheckedin", "yes");
        localStorage.setItem("employeeCheckedout", "no");
        this.$store.dispatch("setEmployeeCheckedin");
        this.$store.dispatch("setEmployeeCheckedout");
        console.log(results);
      });
    },
    checkout() {
      this.$http.post("attendance/checkout").then((results) => {
        localStorage.setItem("employeeCheckedin", "yes");
        localStorage.setItem("employeeCheckedout", "yes");
        this.$store.dispatch("setEmployeeCheckedin");
        this.$store.dispatch("setEmployeeCheckedout");
        console.log(results);
      });
    },
  },
  created() {
    this.$store.dispatch("setEmployeeCheckedin");
    this.$store.dispatch("setEmployeeCheckedout");
  },
};
</script>