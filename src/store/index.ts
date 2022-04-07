import { defineStore, acceptHMRUpdate } from 'pinia';

import { ElMessage } from 'element-plus';
import {RouteRecordRaw} from "vue-router";
import {ref} from "vue";

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
    isCollapse: ref(false)
  }),

  actions: {
    /**
     * Attempt to login a user
     * @param userInfo
     */
    login: function (userInfo: UserInfo) {
      return new Promise(resolve => {
        sessionStorage.setItem('user', JSON.stringify(userInfo));
        this.$patch({ ...userInfo });
      });
    },
    setRoute(value: RouteRecordRaw[]) {
      sessionStorage.setItem('route', JSON.stringify(value));
    },

    // user logout
    logout() {
      this.$patch({
        username: '',
        isAdmin: false,
        token: '',
        isCollapse: true
      });
      sessionStorage.removeItem('user');

    },

    // isCollapse
    setCollapse(){
      this.isCollapse = !this.isCollapse
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
