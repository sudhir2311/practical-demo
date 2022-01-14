<template>
  <div class="container py-5 mt-5">
    <div class="row">
      <div class="col-md-10 offset-md-1 col-lg-4 offset-lg-4">
        <ValidationObserver ref="observer">
          <div class="card">
            <div class="card-header">
             
              <div class="row px-3">
                <div class="col-md-12">
                  <h2 class="">Login</h2>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row px-3">
                <div class="col-md-12">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                  </label>
                  <ValidationProvider
                    name="Email"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                  >
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      v-model.trim="user.email"
                      placeholder="Enter email address"
                    />
                    <small class="error text-left">{{ errors[0] }}</small>
                    <br /><br />
                  </ValidationProvider>
                </div>
              </div>
              <div class="row px-3">
                <div class="col-md-12">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                  </label>
                  <ValidationProvider
                    name="Password"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                  >
                    <div class="input-group ">
                      <input
                        :type="type"
                        v-model.trim="user.password"
                        min="6"
                        class="form-control"
                        placeholder="Enter password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <div
                        class="input-group-prepend"
                        style="cursor:pointer"
                        @click="showPassword"
                      >
                        <span class="input-group-text" id="basic-addon1"
                          ><i :class="btnText"></i
                        ></span>
                      </div>
                    </div>
                    <small class="error text-left">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
              </div>
             
            </div>
            <div class="card-footer text-muted">
              <div class="row mb-3 mt-4 px-3">
                <div class="col-md-12">
                  <button
                    type="submit"
                    @click="login()"
                    class="btn btn-secondary btn-block"
                  >
                    Login
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vee-validate/dist/rules";
import { extend, setInteractionMode } from "vee-validate";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
import { mapActions } from "vuex";
export default {
  data() {
    return {
      type: "password",
      btnText: "fa fa-eye",
      user: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    console.log("Created");
    console.log(this.$store.state.blogs);
    this.$store.state.blogs=JSON.parse(localStorage.getItem("blogs"));
    console.log(this.$store.state.blogs);
  },
  methods: {
    ...mapActions(["checkLogin"]),
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btnText = "fa fa-eye-slash";
      } else {
        this.type = "password";
        this.btnText = "fa fa-eye";
      }
    },
    async login() {
      this.$refs.observer.validate().then((valid) => {
        if (valid) {
          this.checkLogin(this.user);
        }
      });
    },
  },
};
</script>

<style scoped>
.card-footer {
  padding-top: 0px !important;
  margin-top: -10px !important;
}
.card {
  -webkit-box-shadow: 0 15px 30px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 15px 30px 0 rgb(0 0 0 / 20%);
  border-radius: 0px !important;
  border: 0px !important;
}
.text-sm {
  font-size: 14px !important;
}
</style>
