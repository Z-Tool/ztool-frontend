<template>
  <div>
    <h1>Create account</h1>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-form :model="createForm" :rules="rules" ref="createForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model.text="createForm.username" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="createForm.password" auto-complete="off"
                      placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input type="password" v-model="createForm.confirmPassword" auto-complete="off"
                      placeholder="Confirm password"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;">
            <el-button type="primary" @click="submitForm('createForm')" style="width: 100%;">Create</el-button>
          </el-form-item>
          <p style="text-align: center;">Already have an account?</p>
          <router-link to="/user/login">
            <el-button type="warning" style="width: 100%;">Login</el-button>
          </router-link>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Row, Col, Input, Button, Form, FormItem} from 'element-ui'

  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Input.name, Input);
  Vue.component(Button.name, Button);
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);

  export default {
    data() {
      const checkPassword = (rule, value, callback) => {
        if (value !== this.createForm.pass) {
          callback(new Error('Password is not matched!'));
        } else {
          callback();
        }
      };
      return {
        createForm: {
          password: '',
          confirmPassword: '',
          username: ''
        },
        rules: {
          password: [
            {required: true, message: 'Please input your password!', trigger: 'blur'},
            {min: 6, max: 16, message: 'Length of password should be from 6 to 16', trigger: 'blur'}
          ],
          confirmPassword: [
            {required: true, message: 'Please repeat your password!', trigger: 'blur'},
            {validator: checkPassword, trigger: 'blur'}
          ],
          username: [
            {required: true, message: 'Please input your username!', trigger: 'blur'},
            {min: 4, max: 10, message: 'Length of username should be from 4 to 10', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
