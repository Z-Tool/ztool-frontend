<template>
<div>
	<h1>Login to Jarrekk</h1>
  <el-row :gutter="20">
  	<el-col :span="6" :offset="9">
			<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
			  <el-form-item prop="username">
			    <el-input v-model="loginForm.username" placeholder="Username"></el-input>
			  </el-form-item>
			  <el-form-item prop="password">
			    <el-input type="password" v-model="loginForm.password" placeholder="Password"></el-input>
			  </el-form-item>
			  <el-form-item style="text-align: center;">
			    <el-button type="primary" @click="submitForm('loginForm')" style="width: 100%;">Login</el-button>
			  </el-form-item>
			  <div class="create">
			  	<router-link to="/"><el-button type="warning" style="width: 100%;">Cancel</el-button></router-link>
			  	<p>Not have an account?</p>
			  	<router-link to="/user/new"><el-button style="width: 100%;">Create an account</el-button></router-link>
			  </div>
			</el-form>
		</el-col>
	</el-row>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import { Row, Col, Input, Button, Form, FormItem, Notification } from 'element-ui'
import constant from '../../constant.js'
import auth from '../../directive/auth'

Vue.use(VueResource);
Vue.use(VueCookie);
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Notification.name, Notification)
Vue.prototype.$notify = Notification

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Please input your username!', trigger: 'blur' },
          { min: 4, max: 20, message: 'Length of username should be from 4 to 20', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input your password!', trigger: 'blur' },
          { min: 6, max: 20, message: 'Length of password should be from 6 to 20', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var authStr = window.btoa(this.loginForm.username + ':' + this.loginForm.password)
          var headers = {
             headers: {Authorization: 'Basic ' + authStr}
          }
          auth.login(this, headers, 'api')
        } else {
          // console.log('error submit!!');
          this.$notify.error({
            title: 'Jarrekk',
            message: 'Please check your input!',
            duration: 3000
          })
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
h1 {
	@extend .center;
	margin-bottom: 60px;
}
.create {
  @extend .center;
}
</style>
