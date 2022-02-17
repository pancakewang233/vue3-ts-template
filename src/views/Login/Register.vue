<script setup lang="ts">
import {ref, reactive} from 'vue';
import type {ElForm} from 'element-plus';

type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>();

const validateName = (rule: any, value: string, callback: (error?: string | Error) => void) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else {
    callback();
  }
};

const validatePass = (rule: any, value: string | number, callback: (error?: string | Error) => void) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  name: '',
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
      console.log('submit!');
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
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm">
    <el-form-item label="用户" prop="name">
      <el-input
          v-model="ruleForm.name"
          autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >注册
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>

