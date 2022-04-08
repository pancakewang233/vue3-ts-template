import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import Mainner from "@/components/Mainner";
import { defineComponent } from "vue";
import s from "./Layout.module.scss";
import {useUserStore} from "@/store";
export default defineComponent({
  setup() {
      const isCollapse = useUserStore().isCollapse;
    return () => (
      <div class={s.home}>
          <SideBar class={s.sidebar} />
        <div class={s.main}>
            <HeaderBar />
            <Mainner />
        </div>
      </div>
    );
  },
});
