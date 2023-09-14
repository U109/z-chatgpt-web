import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import chat from "@/views/chat/Chat.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: chat,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
