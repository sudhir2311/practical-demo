import toasts from "../toasts/toasts";
import Vue from "vue";
import router from "@/router";
const ID_TOKEN_KEY = "token";

export const getToken = () => {
  if (window.localStorage.getItem(ID_TOKEN_KEY) !== null)
    return window.localStorage.getItem(ID_TOKEN_KEY);
};
export const saveToken = (token) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const logout = () => {
  Vue.$confirm({
    title: "Are you sure?",
    message: "Are you sure you want to logout?",
    button: {
      yes: "Yes",
      no: "Cancel",
    },
    callback: (confirm) => {
      if (confirm) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("blogs");
        toasts.success("You are successfully logged out");
        router.push("/login");
      }
    },
  });
};
export const email = "sudhir.test@gmail.com";
export const password =  "test@12345";

export default { getToken, saveToken, destroyToken, logout,email,password };
