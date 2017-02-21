<template>
  <div class="api">
    <div class="head">
      <h1>{{ title }}</h1>
      <span><router-link to="/"><el-button :plain="true" type="info" size="small">Back</el-button></router-link></span>
      <span v-if="!user">&emsp;<router-link to="/user/login"><el-button :plain="true" type="info" size="small">Login</el-button></router-link></span>
      <span v-if="user">&emsp;<el-button :plain="true" type="info" size="small" @click="logout">Logout</el-button></span>
    </div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <div class="grid-content bg-purple">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="item in api_list" :title="item.name" :name="item.id">
              <ul>
              <li>Description: {{ item.desc }}</li>
              <li>URL: <a :href="item.url" target="_blank">{{ item.url }}</a></li>
              <li>Methods: {{ item.method }}</li>
              <li>Parameters:</li>
              <ul>
                <li v-for="parameter in item.parameters" v-html="parameter"></li>
              </ul>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
    <div class="foot">
      <el-tooltip effect="dark" content="Magic!" placement="right">
        <el-button @click="increaseCount">Increase count!</el-button>
      </el-tooltip>
      <p>You have viewed this page {{count}} times.</p>
      <p>{{ workApis }}</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import { Button, Notification, Row, Col, Collapse, CollapseItem, Tooltip } from 'element-ui'
import constant from '../constant.js'
import http from '../directive/http'
import Auth from '../directive/auth'
import router from '../router'
import store from '../store'

Vue.use(VueResource);
Vue.component(Button.name, Button)
Vue.component(Notification.name, Notification)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(Collapse.name, Collapse)
Vue.component(Tooltip.name, Tooltip)
Vue.prototype.$notify = Notification

export default {
  name: 'api',
  data () {
    return {
      user: false,
      title: 'API List',
      activeName: 'time',
      api_list: []
    }
  },
  methods: {
    increaseCount () {
      // vuex test code
      store.commit('increment')
      http.get(this, '/api/v1.0/test').then(resp => {
        if (resp.status == 200) {
          this.$notify({
            title: 'Welcome to Jack003 VPS',
            message: 'Hope you enjoy API time!',
            duration: 3000
          })
        }
      })
    },
    logout () {
      Auth.logout()
      router.push({name: 'index'})
    }
  },
  computed: {
    count () {
      return store.state.count
    },
    workApis () {
      return store.getters.workApis
    }
  },
  created: function () {
    Auth.checkAuth()
    this.user = Auth.user.authenticated
    http.get(this, '/api/v1.0/').then(resp => {
      this.api_list = resp.body.data
    })
    // vuex test code
    store.commit('increment')
  }
}
</script>

<style scoped>
.head, .foot {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
