import { defineComponent,toRefs } from "vue";
import { RouteRecordRaw } from "vue-router";
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
                return <el-menu-item index={`${props.index}-${cIndex}`}>{i.name}</el-menu-item>
              })}
          </el-sub-menu>
        ) : (
          <el-menu-item index="2">
            <el-icon>
              <Location />
            </el-icon>
            <span>{props.value.name}</span>
          </el-menu-item>
        )}
      </div>
    );
  },
});
