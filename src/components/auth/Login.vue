<template>
  <div class="container">
    <div class="row justify-content-center mt-5 pt-5">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title">Login</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitLoginForm()">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="bmd-label-floating">Email</label>
                    <input
                      type="email"
                      v-model="form.email"
                      name="email"
                      placeholder="Email"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="bmd-label-floating">Password</label>
                    <input
                      type="password"
                      v-model="form.password"
                      name="password"
                      placeholder="Password"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary pull-right">
                Submit
              </button>
              <div class="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      errors: {},
    };
  },
  methods: {
    submitLoginForm() {
      this.$http
        .post("auth/login", this.form)
        .then((results) => {
          localStorage.setItem("accessToken", results.data.access_token);
          this.$store.dispatch("setAccessToken");
          this.$store.dispatch("setUserAuthenticate", true);
          this.$router.push({ name: "root" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>