import Vue from "vue";
import VueRouter from "vue-router";
import HomeVoxcomp from "../views/HomeVoxcomp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVoxcomp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
