// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import {ElMessage} from 'element-plus';

type UserInfo = {
  username: string,
  password: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true,
    token:''
  }),

  actions: {
    /**
     * Attempt to login a user
     * @param userInfo
     */
    // user login
    login(userInfo:UserInfo) {
      sessionStorage.setItem('user', JSON.stringify(userInfo))
      this.$patch({name: userInfo.username, ...userInfo})
    },
    // get user info
    getInfo() {
      const data = sessionStorage.getItem('user')
      if (!data) {
        return ElMessage('Verification failed, please Login again.')
      }

    },

    // user logout
    logout() {
      this.$patch({
        name:'',
        isAdmin:false,
        token:''
      })
      sessionStorage.removeItem('user')
      resetRouter()
    },
    // remove token
    resetToken() {
      sessionStorage.removeItem('user')
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
