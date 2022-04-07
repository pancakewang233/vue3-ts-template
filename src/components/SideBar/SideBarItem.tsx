import { defineComponent } from "vue";
import { RouteRecordRaw,RouterLink } from "vue-router";
import {Location} from "@element-plus/icons-vue";

type Props = {
  value: RouteRecordRaw,
  index: number,
}

export default defineComponent({
  props:['value', 'index'],
  setup(props:Props, context) {
    const title = () => {
      return <div>
        <el-icon>
          <Location />
        </el-icon>
        <span>{props.value.name}</span>
      </div>
    }
    return () => (
      <div>
        {props.value?.children ? (
          <el-sub-menu index={`${props.index}`} v-slots={{title}}>
              {props.value.children.map((i, cIndex) =>{
                return <RouterLink to={i.path}>
                  <el-menu-item index={`${props.index}-${cIndex}`}>{i.name}</el-menu-item>
                </RouterLink>
              })}
          </el-sub-menu>
        ) : (
            <RouterLink to={props.value.path}>
              <el-menu-item index="2">
                <el-icon>
                  <Location />
                </el-icon>
                <span>{props.value.name}</span>
              </el-menu-item>
            </RouterLink>
        )}
      </div>
    );
  },
});
