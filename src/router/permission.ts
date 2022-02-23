import {router} from './index';
import adminRoutes from '@/mock/user-admin';
import editorRoutes from '@/mock/user-editor';

// 路由拦截器
router.beforeEach((to, from, next) => {
  let obj = sessionStorage.getItem('user')
  let token = obj ? JSON.parse(obj) : null
  // 判断是否存在token
  if (token) {
    if(token.username === 'admin'){
      sessionStorage.setItem('route', JSON.stringify(adminRoutes))
      router.addRoute(adminRoutes);
    }else{
      sessionStorage.setItem('route', JSON.stringify(editorRoutes))
      router.addRoute(editorRoutes)
    }
    if (to.path == '/login' || to.path == '/') {
      next({
        path: '/dashboard'
      });
    } else {
      next();
    }
  } else {
    if(to.path == '/login'){
      next()
    }else{
      next({
        path: '/login'
      });
    }
  }
});

