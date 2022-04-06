import { defineComponent } from "vue";
import { RouteRecordRaw, RouterLink } from "vue-router";
import s from "./SideBar.module.scss";
export default defineComponent({
  setup() {
    const showRouter = JSON.parse(sessionStorage.getItem("route")!);
    return () => (
      <div class={s.sidebar}>
        {showRouter.children.map((item: RouteRecordRaw) => (
          <RouterLink to={item.path}>{item.name}</RouterLink>
        ))}
      </div>
    );
  },
});
