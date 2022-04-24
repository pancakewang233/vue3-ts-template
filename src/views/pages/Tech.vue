 <template>
<div class="colorChange">
  <el-switch
      v-model="isLight"
      class="ml-2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      @change="switchColor"
  />
</div>
 </template>

 <script lang="ts" setup>
   import {ref} from 'vue'
   const isLight = ref(true)
   const switchColor = ()=>{
     setTheme(isLight.value)
   }

   const darkTheme = 'rgb(51, 50, 50)'
   const lightTheme = '#fff'
   const lightBorderTheme = '#d6d6d6'

   // 获取对应的主题色值
   const getThemeMap = (isLight:boolean) => {
     return {
       'theme-bg': isLight ? lightTheme : darkTheme,
       'theme-color': isLight ? darkTheme : lightTheme,
       'theme-boder-color': isLight ? lightBorderTheme : lightTheme,
     }
   }

   // 设置主题色值
   const setTheme = (isLight = true) => {
     const themeMap = getThemeMap(isLight)
     const body = document.body
     /* 实现方式一 */
     // Object.keys(themeMap).forEach(key => {
     //   body.style.setProperty(`--${key}`, themeMap[key])
     // })

     /* 实现方式二 */
     body.setAttribute('data-theme', isLight ? 'light' : 'dark')
   }
 </script>

 <style scoped lang="scss">
 .colorChange{
   height: 100%;
   width: 100%;
   box-sizing: border-box;
   background-color: var(--theme-bg);
 }
 </style>