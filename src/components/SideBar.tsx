import { defineComponent } from "vue";
import s from "./SideBar.module.scss";
export default defineComponent({
  setup() {
    return () => (
      <div class={s.sidebar}>
        <slot></slot>
      </div>
    );
  },
});
