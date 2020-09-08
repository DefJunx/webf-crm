import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import AddDev from "@/views/AddDev.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
   {
      path: "/",
      name: "Home",
      component: Home
   },
   {
      path: "/addDev",
      name: "AddDev",
      component: AddDev
   }
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes
});

export default router;
