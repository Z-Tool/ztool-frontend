<template>
  <div style="margin-top: 20px;">
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="10" :offset="7">
        <el-input placeholder="Domain Name" v-model="domain_name">
          <el-button slot="append" icon="search" @click="get_info"></el-button>
        </el-input>
        <div v-show="result" id="result" style="text-align: left;margin-top: 20px;"></div>
        <el-tooltip v-show="result" effect="dark" content="Copy" placement="right">
          <el-button @click="copy_result" size="small" icon="document"></el-button>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import JSONFormatter from 'json-formatter-js'
  import copy from 'copy-to-clipboard';
  import {Input, Button, Notification, Row, Col, Tooltip, Message} from 'element-ui'
  import http from '../../../directive/http'
  import store from '../../../store'

  Vue.component(Input.name, Input);
  Vue.component(Button.name, Button);
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Tooltip.name, Tooltip);
  Vue.component(Message.name, Message);
  Vue.prototype.$message = Message;

  export default {
    data() {
      return {
        domain_name: '',
        result: ''
      };
    },
    methods: {
      get_info () {
        if (this.domain_name) {
          http.get(this, '/api/v1.0/whois?domain=' + this.domain_name).then(resp => {
            this.result = JSON.stringify(resp.data);
            const formatter = new JSONFormatter(resp.data);
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').appendChild(formatter.render());
            formatter.openAtDepth(2)
          })
        } else {
          this.$message.error('Please input Domain Name!');
        }
      },
      copy_result () {
        copy(this.result);
        this.$message('Copy success!');
      }
    },
    created: function () {
      store.commit('changeMenu', "/api/domain_name")
    }
  }
</script>

<style scoped>

</style>
