import { defineComponent } from "vue";
import s from "./HeaderBar.module.scss";

export default defineComponent({
  setup() {
    return () => <div class={s.wrapper}>vue3 + ts 模板</div>;
  },
});
