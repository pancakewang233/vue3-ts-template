<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import HeaderBar from './components/HeaderBar.vue';
</script>

<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <div class="main">
      <SideBar>
        <router-link to="/page">Home</router-link>
        <router-link to="/about">About</router-link>
      </SideBar>
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
