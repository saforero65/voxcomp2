import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faExpand,
  faForward,
  faGear,
  faHatWizard,
  faMinimize,
  faShapes,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import GAuth from "vue-google-oauth2";
import App from "./App.vue";
import router from "./router";

library.add(
  faHatWizard,
  faGear,
  faExpand,
  faVolumeHigh,
  faMinimize,
  faForward,
  faShapes
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const gauthOption = {
  clientId:
    "580411293057-pi7ogq2e69lqjsm51j65gses0asq4lm6.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "consent",
  fetch_basic_profile: true,
};
Vue.use(GAuth, gauthOption);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
