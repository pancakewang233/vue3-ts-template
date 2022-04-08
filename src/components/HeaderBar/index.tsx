import {defineComponent, ref} from "vue";
import s from "./HeaderBar.module.scss";
import {Edit,Share,Expand} from '@element-plus/icons-vue'
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
      <el-icon size={24}><Share /></el-icon>
    </div>;
  },
});
