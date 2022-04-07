import { defineComponent, ref } from "vue";
import {
  NavigationFailure,
  RouteLocationRaw,
  RouteRecordRaw,
} from "vue-router";
import s from "./SideBar.module.scss";
import SideBarItem from "./SideBarItem";

type MenuItemClicked = {
  index: string;
  indexPath: string[];
  route?: RouteLocationRaw;
};

export default defineComponent({
  setup() {
    const showRouter = JSON.parse(sessionStorage.getItem("route")!);
    const isCollapse = ref(false);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log("?????", key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleSelect = (
      key: string,
      keyPath: string[],
      item: MenuItemClicked,
      routerResult?: Promise<void | NavigationFailure>
    ) => {
      console.log(key, keyPath, item, routerResult);
    };
    return () => (
      <div class={s.sidebar}>
        <el-menu
          default-active="2"
          collapse={isCollapse.value}
          open={handleOpen}
          close={handleClose}
          select={handleSelect}
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
