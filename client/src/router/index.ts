import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import AddDev from "@/views/AddDev.vue";
import AssignRemoveTask from "@/views/AssignRemoveTask.vue";
import ShowInProgress from "@/views/ShowInProgress.vue";
import ShowCrossTeam from "@/views/ShowCrossTeam.vue";
import ShowOverdue from "@/views/ShowOverdue.vue";

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
   },
   {
      path: "/assignRemoveTask",
      name: "AssignRemoveTask",
      component: AssignRemoveTask
   },
   {
      path: "/showInProgress",
      name: "ShowInProgress",
      component: ShowInProgress
   },
   {
      path: "/showCrossTeam",
      name: "ShowCrossTeam",
      component: ShowCrossTeam
   },
   {
      path: "/showOverdue",
      name: "ShowOverdue",
      component: ShowOverdue
   }
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes
});

export default router;
