import {router} from '@/router'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth' // get token from cookie
import {useUserStore} from '@/store'
import {fnAddDynamicMenuRoutes} from '@/router/getAsyncRouter'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()
  const user = useUserStore()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      const hasGetUserInfo = user.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await user.getInfo()
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await user.resetToken()
          // @ts-ignore
          ElMessage.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})
