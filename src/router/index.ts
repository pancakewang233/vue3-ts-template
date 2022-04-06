import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Login = () => import("../views/Login/Login.vue");
const Home = () => import("../components/Layout");
const NotFound = () => import("../views/404.vue");
const Dashboard = () => import("../views/dashboard/index.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        meta: { title: "Dashboard" },
      },
    ],
  },
  // 只有经过身份验证的用户才能进入首页
  { path: "/login", component: Login, name: "Login" },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
});
