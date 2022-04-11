import { defineComponent } from "vue";
import { RouteRecordRaw, RouterLink } from "vue-router";
import { Location } from "@element-plus/icons-vue";
import { useUserStore } from "@/store";

type Props = {
  value: RouteRecordRaw;
  index: number;
};

const SideBarItem = defineComponent({
  props: ["value", "index"],
  setup(props: Props, context) {
    const isCollapse = useUserStore().isCollapse;
    const title = () => (
      <div>
        <el-icon>
          <Location />
        </el-icon>
        {!isCollapse ? <span>{props.value.meta?.title}</span> : null}
      </div>
    );
    return () => (
      <div>
        {props.value?.children ? (
          <el-sub-menu index={`${props.index}`} v-slots={{ title }}>
            {props.value.children.map((i, cIndex) => {
              return i?.children ? (
                <SideBarItem value={i} index={cIndex} />
              ) : (
                <RouterLink to={i.path}>
                  <el-menu-item index={`${props.index}-${cIndex}`}>
                    {i.meta?.title}
                  </el-menu-item>
                </RouterLink>
              );
            })}
          </el-sub-menu>
        ) : (
          <RouterLink to={props.value.path}>
            <el-menu-item index="2" v-slots={title}></el-menu-item>
          </RouterLink>
        )}
      </div>
    );
  },
});

export default SideBarItem;
