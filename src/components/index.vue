<template>
  <div class="index">
    <el-carousel :height="height" arrow="never" indicator-position="none">
      <el-carousel-item v-for="item in 9">
      </el-carousel-item>
    </el-carousel>
    <div class="content">
    <img id="avatar" src="../assets/Jack.jpg">
    <h1><a v-bind:href="website" target="_blank">{{ name }}</a></h1>
    <ul>
      <li><a v-bind:href="facebook" target="_blank"><i class="fa fa-facebook-square fa-3x"></i></a></li>
      <li><a v-bind:href="github" target="_blank"><i class="fa fa-github-square fa-3x"></i></a></li>
      <li><a v-bind:href="linkedin" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a></li>
      <li><a v-bind:href="email"><i class="fa fa-envelope-square fa-3x"></i></a></li>
      <br><br><br>
      <li><router-link to="/api"><el-button :plain="true" type="info" >API List</el-button></router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Carousel, CarouselItem } from 'element-ui'
import store from '../store'

Vue.component(Button.name, Button)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)

export default {
  data () {
    return {
      name: 'Kun Jia',
      website: 'http://www.jarrekk.com',
      facebook: 'https://www.facebook.com/jiakunnj',
      github: 'https://github.com/jarrekk',
      linkedin: 'https://www.linkedin.com/in/jarrekk/',
      email: 'mailto:me@jarrekk.com',
      height: ''
    }
  },
  methods: {
  },
  mounted: function () {
    // vuex test code
    console.log(store.state.count)
    this.$nextTick(function () {
      this.height = document.documentElement.clientHeight + 'px'
    })
  },
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

@mixin bg($url) {
   background: url($url);
   background-repeat: no-repeat;
   background-size: 100% 100%;
}
.el-carousel__item:nth-child(7n) {
   @include bg('../assets/bk-1.jpg')
}
.el-carousel__item:nth-child(7n + 1) {
   @include bg('../assets/bk-2.jpg')
}
.el-carousel__item:nth-child(7n + 2) {
   @include bg('../assets/bk-3.jpg')
}
.el-carousel__item:nth-child(7n + 3) {
   @include bg('../assets/bk-4.jpg')
}
.el-carousel__item:nth-child(7n + 4) {
   @include bg('../assets/bk-5.jpg')
}
.el-carousel__item:nth-child(7n + 5) {
   @include bg('../assets/bk-6.jpg')
}
.el-carousel__item:nth-child(7n + 6) {
   @include bg('../assets/bk-7.jpg')
}

.content {
  position: absolute;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  height: 240px;
  width: 70%;
  text-align: center;
  z-index: 9999;
}

#avatar {
  border-radius: 6px;
  width: 80px;
}
h1 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>
