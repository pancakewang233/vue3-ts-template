import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Login = () => import("@/views/login/Login.vue");
const Home = () => import("@/components/Layout");
const NotFound = () => import("@/views/404.vue");
const Dashboard = () => import("@/views/dashboard");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    redirect: "/dashboard",
    meta:{},
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        meta: { title: "互联网医院" },
      },
    ],
  },
  // 只有经过身份验证的用户才能进入首页
  { path: "/login", component: Login, name: "Login" },
  {
    path: "/404",
    name: "404",
    meta:{ title: "404"},
    component: NotFound,
  },
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
});
