import {createRouter, createWebHashHistory} from 'vue-router';

const Page = () => import('../views/form/Page.vue');
const About = () => import('../views/form/About.vue');
const Login = () => import('../views/Login/Login.vue');
const Home = () =>import('../components/Layout.vue')
const NotFound = ()=>import('../views/404.vue')
const Dashboard = ()=>import('../views/dashboard/index.vue')

const routes = [
  // 只有经过身份验证的用户才能进入首页
  {path: '/login', component: Login},
  {
    path: '/404',
    component: NotFound,
    hidden: true
  },
  { path: '/',
    component: Home,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'Dashboard' }
    }]
  },
  { path: '/form',
    component: Home,
    redirect: '/form/page',
    name:'Form',
    children: [
      {
        path: 'page',
        name: 'Page',
        component: Page,
        meta: { title: 'Page' }
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: { title: 'About' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
  { path: "/:pathMatch(.*)*", redirect: '/404', hidden: true }
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
});

