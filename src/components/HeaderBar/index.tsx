import {defineComponent, ref} from "vue";
import s from "./HeaderBar.module.scss";
import {Expand} from '@element-plus/icons-vue'
import {useUserStore} from "@/store";

export default defineComponent({
  setup() {
    const user = useUserStore();
    const toggle = ()=>{
      user.setCollapse()
    }
    return () => <div class={s.wrapper}>
      <el-icon size={20} onClick={toggle} class={s.collapseButton}><Expand /></el-icon>
      <span class={s.title}>vue3 + ts 模板</span>
      <el-avatar
       shape="square"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>;
  },
});
