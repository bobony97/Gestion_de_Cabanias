import { createRouter, createWebHistory } from "vue-router";
import Main from "../view/MainView.vue";
import Edit from "../components/EditItem.vue";
import Tasks from "../components/TaskItem.vue";
import AddTask from "../components/TaskAdd.vue";
import EditTask from "../components/EditTask.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
    },
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks,
    },
    {
      path: "/addTask",
      name: "AddTask",
      component: AddTask,
    },
    {
      path: "/editTask/:id",
      name: "editTask",
      component: EditTask,
    },
  ],
});

export default router;
