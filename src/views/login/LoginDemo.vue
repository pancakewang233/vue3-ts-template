<script lang="ts" setup>
import {ref, reactive} from 'vue';
import type {ElForm} from 'element-plus';
import {validateName, validatePass} from './validate';
import { useRouter } from "vue-router";
import {useUserStore} from '@/store';

const user = useUserStore()
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>();
const router = useRouter();

const ruleForm = reactive({
  username: '',
  password: ''
});

const rules = reactive({
  name: [{validator: validateName, trigger: 'blur'}],
  password: [{validator: validatePass, trigger: 'blur'}]
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      user.login(ruleForm).then(() => {
        router.push('/dashboard')
      })
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

</script>
<template>
  <div class="wrap">
    <div class="title">Vue3+ts后台管理系统</div>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        label-width="120px"
        status-icon>
      <el-form-item label="用户" prop="username">
        <el-input
            v-model="ruleForm.username"
            autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="ruleForm.password"
            autocomplete="off"
            type="password"
            @keyup.enter = "submitForm(ruleFormRef)"
        ></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="submitForm(ruleFormRef)"
        >
          <slot></slot>
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
@import "login.css";
</style>
