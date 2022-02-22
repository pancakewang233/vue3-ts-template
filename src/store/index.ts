// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, logout, getInfo } from '@/api/user'
import { resetRouter } from '@/router'
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
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then((response) => {
          const { data } = response
          setToken(data.token)
          this.$patch({
            name: data.name,
            ...data
          })
          // @ts-ignore
          resolve()
        }).catch((error:any) => {
          reject(error)
        })
      })
    },
    // get user info
    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo(this.token).then(response => {
          const { data } = response

          if (!data) {
            return reject('Verification failed, please Login again.')
          }

          const { name, avatar } = data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // user logout
    logout() {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          this.$patch({
            name:'',
            isAdmin:false,
            token:''
          })
          removeToken() // must remove  token  first
          resetRouter()
          // @ts-ignore
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // remove token
    resetToken() {
      return new Promise(resolve => {
        removeToken() // must remove  token  first
        // @ts-ignore
        resolve()
      })
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
