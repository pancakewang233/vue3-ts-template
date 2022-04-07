import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Mainner.module.scss";
export default defineComponent({
  setup() {
    return () => (
      <div class={s.main}>
        <RouterView />
      </div>
    );
  },
});
