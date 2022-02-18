import {createRouter, createWebHashHistory} from 'vue-router';

const Page = () => import('./views/Page.vue');
const About = () => import('./views/About.vue');
const Login = () => import('./views/Login/Login.vue');
const Register = () => import('./views/Login/Register.vue');
const Home = () =>import('./Home.vue')

const routes = [
  {path: '/', component: Login},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  // 只有经过身份验证的用户才能进入首页
  {path: '/home', component: Home, meta: {requiresAuth: true}, children:[
      {path: '/page', component: Page, meta: {requiresAuth: true}},
      {path: '/about', component: About, meta: {requiresAuth: true}},
    ]},
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
});

