import {defineComponent, ref} from "vue";
import { RouteRecordRaw, RouterLink } from "vue-router";
import s from "./SideBar.module.scss";
import {ArrowDownBold, ArrowUpBold} from "@element-plus/icons-vue";

export default defineComponent({
  setup() {
    const showRouter = JSON.parse(sessionStorage.getItem("route")!);
    const toggle = ref(false);
    const listMenu = ()=>{
        toggle.value = !toggle.value
    }
      return () => (
      <div class={s.sidebar}>
        <ul class={s.list}>
          {showRouter.map((item: RouteRecordRaw) => (
            <li class={s.item}>
              <RouterLink to={item.path}>
                {item.name}
              </RouterLink>
                {item.meta?.hasChildren ? <el-icon size={14} onClick={listMenu}>
                    {toggle.value ? <ArrowUpBold/> : <ArrowDownBold/>}
                </el-icon> : null}
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
