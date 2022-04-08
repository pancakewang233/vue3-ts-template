import {defineComponent} from "vue";
import {
  RouteRecordRaw,
} from "vue-router";
import SideBarItem from "./SideBarItem";
import {useUserStore} from "@/store";
import s from './SideBar.module.scss'
export default defineComponent({
  setup() {
    const showRouter = JSON.parse(sessionStorage.getItem("route")!);
    const user = useUserStore();
    return () => (
      <div>
        <el-menu
          default-active="2"
          collapse={user.isCollapse}
          class={s.menu}
          collapse-transition
          background-color="#304156"
          text-color="#fff"
          active-text-color="#409eff"
        >
          {showRouter.map((item: RouteRecordRaw, index: Number) => (
            <SideBarItem value={item} index={index} />
          ))}
        </el-menu>
      </div>
    );
  },
});
