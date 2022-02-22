
import adminRoutes from '@/mock/user-admin';
import { createRouter, createWebHashHistory } from 'vue-router';

const Page = () => import('../views/form/Page.vue');
const About = () => import('../views/form/About.vue');
const Login = () => import('../views/Login/Login.vue');
const Home = () => import('../components/Layout.vue')
const NotFound = () => import('../views/404.vue')
const Dashboard = () => import('../views/dashboard/index.vue')

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      component: Dashboard,
      name: 'Dashboard',
      meta: { title: 'Dashboard' }
    }]
  },
  // 只有经过身份验证的用户才能进入首页
  { path: '/login', component: Login },
  {
    path: '/404',
    component: NotFound,
    hidden: true
  },
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // scroll to id `can~contain-special>characters` + 200px
      return {
        el: '#app',
        // top relative offset
        top: 0
        // instead of `offset: { y: 200 }`
      }
    }
  })
  // @ts-ignore,That is normal as the matcher is not part of the public API. You will have to use a // @ts-ignore before that line
  router.matcher = newRouter.matcher // reset router
}


