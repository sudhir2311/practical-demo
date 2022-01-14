import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index/Index.vue";
import Home from "../views/home/Home.vue";
import Error from "../views/error/Error.vue";
import Login from "../views/Login/Login.vue";

Vue.use(VueRouter);

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  //this is just an example. You will have to find a better or
  // centralised way to handle you localstorage data handling
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/login"); // go to '/login';
  }
}

const routes = [
  {
    path: "/index",
    name: "index",
    component: Index,
    beforeEnter: guardMyroute,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/home",
        name: "home",
        component: Home,
      },
    ],
  },
  {
    path: "",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  
  { path: "*", component: Error },
];
export default new VueRouter({ mode: "history", routes });
