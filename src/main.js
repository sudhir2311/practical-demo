import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  setInteractionMode,
} from "vee-validate";
import store from "./store";
import VueConfirmDialog from "vue-confirm-dialog";

Vue.use(VueConfirmDialog);
Vue.component("vue-confirm-dialog", VueConfirmDialog.default);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("extend", extend);
Vue.component("setInteractionMode", setInteractionMode);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
