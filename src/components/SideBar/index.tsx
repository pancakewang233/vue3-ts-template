import { Menu, Document, Setting, Location } from "@element-plus/icons-vue";
import { defineComponent, ref } from "vue";
import { RouteRecordRaw, RouterLink } from "vue-router";
import s from "./SideBar.module.scss";
import SideBarItem from "./SideBarItem";

export default defineComponent({
  setup() {
    const showRouter = JSON.parse(sessionStorage.getItem("route")!);
    const isCollapse = ref(false);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log('?????', key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return () => (
      <div class={s.sidebar}>
        <el-menu
          default-active="2"
          collapse={isCollapse.value}
          open={handleOpen}
          close={handleClose}
          style={{ width: "100%", height: "100%" }}
        >
          {showRouter.map((item: RouteRecordRaw, index:Number) => (
            <SideBarItem value={item} index={index} />
          ))}
        </el-menu>
      </div>
    );
  },
});
