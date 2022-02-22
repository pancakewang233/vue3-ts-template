<script setup lang="ts">
import SideBar from './SideBar.vue';
import HeaderBar from './HeaderBar.vue';
import Mainner from './Mainner.vue';

</script>

<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <div class="main">
      <SideBar>
<!--        <router-link :to="item.path" v-for="(item,index) in routes" :key="index">{{item}}</router-link>-->
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
