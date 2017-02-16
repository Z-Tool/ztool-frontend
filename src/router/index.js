var Vue = require('vue')
var Router = require('vue-router')
var VueResource = require('vue-resource')
var VueCookie = require('vue-cookie');
import Auth from '../directive/auth'

const index = resolve => require(['components/index'], resolve)
const api = resolve => require(['components/api'], resolve)
const login_user = r => require.ensure([], () => r(require('components/user/login')), 'user')
const new_user = r => require.ensure([], () => r(require('components/user/new')), 'user')
const notfound = resolve => require(['components/404'], resolve)

Vue.use(Router)
Vue.use(VueCookie)
Vue.use(VueResource)


const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: 'Jack003',
      // auth: true
    },
    component: index
  },
  {
    path: '/api',
    name: 'api',
    meta: {
      title: 'API List',
      auth: true
    },
    component: api
  },
  {
    path: '/user/login',
    name: 'login',
    meta: {
      title: 'Login user',
    },
    component: login_user
  },
  {
    path: '/user/new',
    name: 'new',
    meta: {
      title: 'Create user',
    },
    component: new_user
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404 not found',
    },
    component: notfound
  },
]

// export default new Router({
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  Auth.checkAuth()
  if (to.meta.auth && !Auth.user.authenticated) {
    router.push({name: 'login'})
  } else if (Auth.user.authenticated && to.path.indexOf('/user/') > -1) {
    router.push({name: 'index'})
  } else {
    next()
  }
})

router.afterEach(route => {
  document.title = route.meta.title;
})

export default router
