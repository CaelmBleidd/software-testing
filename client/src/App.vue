<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand" id="moveToMainPage">Main Page</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/films" class="nav-link" id="moveToFilms">Films</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link" id="moveToAdd">Add</router-link>
        </li>
      </div>
      <div class="navbar-end">
        <div v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link" id="signupButton">
              <font-awesome-icon icon="user-plus" />Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" id="loginButton">
              <font-awesome-icon icon="sign-in-alt" />Login
            </router-link>
          </li>
        </div>

        <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href @click.prevent="logOut" id="logoutButton">
              <font-awesome-icon icon="sign-out-alt" />LogOut
            </a>
          </li>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>