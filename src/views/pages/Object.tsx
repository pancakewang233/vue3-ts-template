import { defineComponent, reactive, ref, Ref } from "vue";
import { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;
import s from "./object.module.scss";

export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
      name: "",
      region: "",
      date1: "",
      delivery: false,
    });
    const rules = reactive({
      name: [
        { required: true, message: "Please input name", trigger: "blur" },
        { min: 2, max: 5, message: "Length should be 2 to 5", trigger: "blur" },
      ],
      region: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      date1: [
        {
          type: "date",
          required: true,
          message: "Please pick a date",
          trigger: "change",
        },
      ],
    });
    const submitForm = (formEl: Ref<FormInstance | undefined>) => {
      if (!formEl) return;
      formEl.value?.validate((valid: boolean) => {
        if (valid) {
          console.log("submit!", ruleForm);
        } else {
          console.log("error submit!");
        }
      });
    };
    return () => (
      <div class={s.wrapper}>
        <el-form
          rules={rules}
          model={ruleForm}
          label-width={"100px"}
          ref={ruleFormRef}
        >
          <el-form-item label={"姓名"} prop={"name"}>
            <el-input v-model={ruleForm.name} />
          </el-form-item>
          <el-form-item label={"地址"} prop={"region"}>
            <el-select
              v-model={ruleForm.region}
              placeholder={"Please select city"}
            >
              <el-option label={"上海"} value={"Shanghai"} />
              <el-option label={"北京"} value={"Beijing"} />
              <el-option label={"深圳"} value={"Shenzhen"} />
              <el-option label={"广州"} value={"Guangzhou"} />
            </el-select>
          </el-form-item>
          <el-form-item label={"日期"} prop={"date1"}>
            <el-date-picker
              v-model={ruleForm.date1}
              type={"date"}
              placeholder={"Select date"}
            />
          </el-form-item>
          <el-form-item label={"性别"} prop={"delivery"}>
            <el-switch
              v-model={ruleForm.delivery}
              active-text={"女"}
              inactive-text={"男"}
            />
          </el-form-item>
          <el-form-item>
            <el-button type={"primary"} onClick={() => submitForm(ruleFormRef)}>
              {"提交"}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    );
  },
});
