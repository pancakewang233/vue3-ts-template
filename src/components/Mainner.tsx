import { defineComponent } from "vue";
import s from "./Mainner.module.scss";
export default defineComponent({
  setup() {
    return () => (
      <div class={s.main}>
        <slot></slot>
      </div>
    );
  },
});
