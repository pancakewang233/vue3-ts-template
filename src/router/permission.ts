import {router} from './index';

// 路由拦截器
router.beforeEach((to, from, next) => {
  // 添加动态title
  typeof to.name === 'string' ? window.document.title = to.name : ''

  // 判断是否存在token
  if (Boolean(localStorage.getItem("LOGIN_STATUS"))) {
    if (to.path == '/login' || to.path == '/') {
      next({
        path: '/index'
      })
    } else {
      next();
    }
  } else {
    if (to.matched.length != 0 && !to.meta.requireAuth) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})
