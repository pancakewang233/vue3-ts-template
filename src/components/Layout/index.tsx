import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import Mainner from "@/components/Mainner";
import { defineComponent } from "vue";
import s from "./Layout.module.scss";

export default defineComponent({
  setup() {
    return () => (
      <div class={s.home}>
        <HeaderBar />
        <div class={s.main}>
          <SideBar />
          <Mainner class={s.right}/>
        </div>
      </div>
    );
  },
});
