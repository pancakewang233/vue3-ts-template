import {defineStore, acceptHMRUpdate} from 'pinia';
import {resetRouter} from '@/router';
import {ElMessage} from 'element-plus';
import adminRoutes from '../../mock/user-admin';
import editorRoutes from '../../mock/user-editor';

type UserInfo = {
  username: string,
  password: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: 'Eduardo',
    isAdmin: true,
    token: '',
    dynamicRoutes: []
  }),

  actions: {
    /**
     * Attempt to login a user
     * @param userInfo
     */
    login: function (userInfo: UserInfo) {
      return new Promise(resolve => {
        sessionStorage.setItem('user', JSON.stringify(userInfo));
        this.$patch({...userInfo});
        // @ts-ignore
        resolve();
      });
    },
    setRoute(value: any) {
      sessionStorage.setItem('route', JSON.stringify(value));
    },
    // get user info
    getInfo(value: string) {
      return new Promise(resolve => {
        if (!value) {
          return ElMessage('Verification failed, please Login again.');
        } else {
          if (value === 'admin') {
            // @ts-ignore
            this.$patch({
              username: value,
              isAdmin: true,
              dynamicRoutes: adminRoutes
            });
          } else {
            // @ts-ignore
            this.$patch({
              username: value,
              isAdmin: false,
              dynamicRoutes: editorRoutes
            });
          }
        }
      });
    },

    // user logout
    logout() {
      this.$patch({
        username: '',
        isAdmin: false,
        token: ''
      });
      sessionStorage.removeItem('user');
      resetRouter();
    },
    // remove token
    resetToken() {
      sessionStorage.removeItem('user');
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
