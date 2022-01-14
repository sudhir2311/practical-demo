import router from "@/router";
import toasts from "@/toasts/toasts";
import jwtService from "../../api-service/jwt.service";
const state = {};
const getters = {};

const actions = {
  async checkLogin({ dispatch }, loginDetails) {
    dispatch("blog/clearBlogs");
    if(loginDetails.email ===jwtService.email && loginDetails.password ===jwtService.password){
      jwtService.saveToken(Math.random().toString(36).slice(2));
      toasts.success("Welcome, you are successfully logged in ");
      router.push("/home");
    }else{
      toasts.error("Invalid login credential");
    }
    // await CommonApi.postData("login", loginDetails)
    //   .then((response) => {
    //     if (response) {
    //         console.log(response);
    //         localStorage.setItem("token", response.data.token);
    //         toasts.success("Welcome, you are successfully logged in ");
    //         dispatch("loader/addLoader", false);
    
    //     } else {
    //       toasts.error(response);
    //       dispatch("loader/addLoader", false);
    //     }
    //   })
    //   .catch((error) => {
    //     toasts.error(error.response);
    //     dispatch("loader/addLoader", false);
    //   });
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
