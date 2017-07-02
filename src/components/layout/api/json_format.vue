<template>
  <div style="margin-top: 20px;">
    <el-button @click="format">Format</el-button>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="10" :offset="2">
        <el-input
          type="textarea"
          :autosize="{ minRows: 12}"
          placeholder="Please input JSON String."
          v-model="json_string">
        </el-input>
      </el-col>
      <el-col :span="10">
        <div v-show="result" id="result"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import JSONFormatter from 'json-formatter-js'
  import copy from 'copy-to-clipboard';
  import {Input, Button, Notification, Row, Col, Message} from 'element-ui'
  import store from '../../../store'

  Vue.component(Input.name, Input);
  Vue.component(Button.name, Button);
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Message.name, Message);
  Vue.prototype.$message = Message;

  export default {
    data() {
      return {
        json_string: '',
        result: ''
      };
    },
    methods: {
      format () {
        const json_object = JSON.parse(this.json_string);
        if (this.json_string) {
          try {
          } catch (e) {
            const error_log = e;
          }
          if (error_log) {
            this.result = '';
            this.$message.error(error_log.toString());
          } else {
            this.result = 1;
            const formatter = new JSONFormatter(json_object);
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').appendChild(formatter.render());
            formatter.openAtDepth(2)
          }
        } else {
          this.$message.error('Please input JSON String!');
        }
      },
    },
    created: function () {
      store.commit('changeMenu', "/api/json_format")
    }
  }
</script>

<style scoped>
  #result {
    text-align: left;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
  }
</style>
