import { createRouter,createWebHashHistory } from 'vue-router';

const Page = () => import('./views/Page.vue');
const About = () => import('./views/About.vue');
const Login = () => import('./views/Login/Login.vue')
const Register = () => import('./views/Login/Register.vue')

const routes = [
    { path: '/page', component: Page },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]

export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
})
