import { createApp } from 'vue'
import App from './App.vue'
import getters from './getters'
import user from './modules/user'
import { createPinia } from 'pinia';

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store
