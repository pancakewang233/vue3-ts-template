<script setup lang="ts">
import SideBar from './SideBar.vue';
import HeaderBar from './HeaderBar.vue';
import Mainner from './Mainner.vue';
import adminRoutes from '@/mock/user-admin'
</script>

<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <div class="main">
      <SideBar>
        123
      </SideBar>
      <Mainner>
        <router-view></router-view>
      </Mainner>
    </div>
  </div>
</template>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.home .main{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
