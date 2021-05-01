<template>
  <div>
    <div
      class="sidebar"
      data-color="purple"
      data-background-color="white"
      data-image="./assets/img/sidebar-1.jpg"
    >
      <div class="logo">
        <a href="javascript:;" class="simple-text logo-normal">
          Creative Tim
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <router-link
            :to="{ name: 'root' }"
            class="nav-item"
            active-class="active"
            exact
            tag="li"
          >
            <a class="nav-link" href="javascript:;">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p></a
            >
          </router-link>
          <router-link
            :to="{ name: 'profile' }"
            class="nav-item"
            active-class="active"
            exact
            tag="li"
          >
            <a class="nav-link"
              ><i class="material-icons">person</i>
              <p>User Profile</p></a
            >
          </router-link>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">
              <i class="material-icons">content_paste</i>
              <p>Table List</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">
              <i class="material-icons">library_books</i>
              <p>Typography</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">
              <i class="material-icons">bubble_chart</i>
              <p>Icons</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">
              <i class="material-icons">location_ons</i>
              <p>Maps</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">
              <i class="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">
              <i class="material-icons">language</i>
              <p>RTL Support</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
