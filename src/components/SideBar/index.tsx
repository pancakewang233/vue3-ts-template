import {defineComponent} from "vue";
import {
  RouteRecordRaw,
} from "vue-router";
import SideBarItem from "./SideBarItem";
import {useUserStore} from "@/store";
export default defineComponent({
  setup() {
    const showRouter = JSON.parse(sessionStorage.getItem("route")!);
    const user = useUserStore();
    return () => (
      <div>
        <el-menu
          default-active="2"
          collapse={user.isCollapse}
          style={{ width: "100%", height: "100%" }}
        >
          {showRouter.map((item: RouteRecordRaw, index: Number) => (
            <SideBarItem value={item} index={index} />
          ))}
        </el-menu>
      </div>
    );
  },
});
