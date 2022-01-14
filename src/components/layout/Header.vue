<template>
  <header class="header_main" style="background-color:#2ba349">
    <div class="container">
      <div class="head_inner">
        <h2 class="font-weight-bold text-capitalize mb-3 navbar-brand text-white">
          Blogs
        </h2>
        <div class="header_right">
          <div class="nav-icons mb-1 mt-1">
            <div class="wallet">
              <div class="dropdown">
                <button
                  class="btn p-0"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  @click="logoutt"
                >
                  <div class="walllet-img">
                    <span class="fa fa-sign-out"></span>
                  </div>
                  <p>{{ userName }}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import jwtService from "../../api-service/jwt.service";
export default {
  data() {
    return {
      userName: "Logout",
    };
  },
  methods: {
    logoutt() {
      jwtService.logout();
    },
  },
};
</script>
