import Vue from "vue";
import VueRouter from "vue-router";
import EscenaVox from "../components/EscenaVox.vue";
import Bienvenido from "../components/BienvenidoPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: EscenaVox,
  },
  {
    path: "/",
    name: "Bienvenido",
    component: Bienvenido,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
