import {router} from '@/router';
import {ElMessage} from 'element-plus';
import {useUserStore} from '@/store';
import {fnAddDynamicMenuRoutes} from '@/router/getAsyncRouter';

const whiteList = ['/login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  // determine whether the user has logged in
  const user = useUserStore();
  const hasToken = sessionStorage.getItem('user');
  try{
    if (user.dynamicRoutes.length === 0) {
      if (whiteList.indexOf(to.path) !== -1) {
        console.log('44');
        next();
      } else {
        console.log('45',user.username)
        // get user info
        user.getInfo(user.username);
        // @ts-ignore
        let menuRouter = fnAddDynamicMenuRoutes(user.dynamicRoutes[0].children);
        user.setRoute(menuRouter);
        const routerList = JSON.parse(<string>sessionStorage.getItem('route'));
        for (let i = 0; i < routerList.length; i++) {
          // @ts-ignore
          router.addRoute(routerList[i]);
        }
        next({...to, replace: true})
      }
    }else {
      // 路由已存在或已缓存路由
      if (to.meta.requireAuth) {
        if (hasToken) {
          // 判断本地是否存在token
          next()
        } else {
          // 未登录,跳转到登陆页面
          next({path: '/login'})
        }
      } else {
        if (whiteList.indexOf(to.path) !== -1) {
          next()
        } else {
          if (hasToken) {
            // 判断本地是否存在token
            next(`/?redirect=${to.path}`)
          } else {
            next(`/login?redirect=${to.path}`)
          }
        }
      }
    }
  } catch (error) {
    console.log('出错了')
    next(`/login?redirect=${to.path}`)
  }
})
