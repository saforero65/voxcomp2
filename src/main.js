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
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
