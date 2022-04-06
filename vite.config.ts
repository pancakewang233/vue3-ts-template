import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 支持 jsx 语法
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  plugins: [vue(), vueJsx()], // vueJsx 支持 vue-jsx 语法
});
