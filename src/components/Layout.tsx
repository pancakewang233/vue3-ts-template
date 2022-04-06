import SideBar from "./SideBar";
import HeaderBar from "./HeaderBar";
import Mainner from "./Mainner";
import { RouteRecordRaw, RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import s from "./Layout.module.scss";

export default defineComponent({
  setup() {
    const showRouter = JSON.parse(sessionStorage.getItem("route")!);
    console.log("fucing", showRouter);
    return () => (
      <div class={s.home}>
        <HeaderBar></HeaderBar>
        <div class={s.main}>
          <SideBar>
            <div>123</div>
            {showRouter.children.map((item: RouteRecordRaw) => (
              <RouterLink to={item.path}>{item.name}</RouterLink>
            ))}
          </SideBar>
          <Mainner>
            <RouterView></RouterView>
          </Mainner>
        </div>
      </div>
    );
  },
});
