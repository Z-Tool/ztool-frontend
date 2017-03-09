import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import Auth from '../directive/auth'

const index = resolve => require(['components/index'], resolve)
const api = resolve => require(['components/api'], resolve)

const api_time = resolve => require(['components/layout/api/time'], resolve)
const api_jalpc_count = resolve => require(['components/layout/api/jalpc_count'], resolve)
const rss = resolve => require(['components/layout/api/rss'], resolve)
const ip_information = resolve => require(['components/layout/api/ip_information'], resolve)
const domain_name = resolve => require(['components/layout/api/domain_name'], resolve)
const dns = resolve => require(['components/layout/api/dns'], resolve)
const json_format = resolve => require(['components/layout/api/json_format'], resolve)

const login_user = r => require.ensure([], () => r(require('components/user/login')), 'user')
const new_user = r => require.ensure([], () => r(require('components/user/new')), 'user')

const notfound = resolve => require(['components/404'], resolve)

Vue.use(Router)
Vue.use(VueCookie)
Vue.use(VueResource)


const routes = [{
  path: '/',
  name: 'index',
  meta: {
    title: 'Jarrekk',
  },
  component: index
}, {
  path: '/api',
  name: 'api',
  component: api,
  children: [{
    path: '',
    component: api_time,
    meta: {
      title: 'API List | Time',
      auth: true
    }
  }, {
    path: 'time',
    component: api_time,
    meta: {
      title: 'API List | Time',
      auth: true
    }
  }, {
    path: 'jalpc_count',
    component: api_jalpc_count,
    meta: {
      title: 'API List | Jalpc Count',
      auth: true
    }
  }, {
    path: 'rss',
    component: rss,
    meta: {
      title: 'API List | RSS',
      auth: true
    }
  }, {
    path: 'ip_information',
    component: ip_information,
    meta: {
      title: 'API List | IP Information',
      auth: true
    }
  }, {
    path: 'domain_name',
    component: domain_name,
    meta: {
      title: 'API List | Domain Name',
      auth: true
    }
  }, {
    path: 'dns',
    component: dns,
    meta: {
      title: 'API List | DNS Record',
      auth: true
    }
  }, {
    path: 'json_format',
    component: json_format,
    meta: {
      title: 'API List | JSON Format',
      auth: true
    }
  }]
}, {
  path: '/user/login',
  name: 'login',
  meta: {
    title: 'Login user',
  },
  component: login_user
}, {
  path: '/user/new',
  name: 'new',
  meta: {
    title: 'Create user',
  },
  component: new_user
}, {
  path: '*',
  name: '404',
  meta: {
    title: '404 not found',
  },
  component: notfound
}, ]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  Auth.checkAuth()
  if (to.meta.auth && !Auth.user.authenticated) {
    router.push({ name: 'login' })
  } else if (Auth.user.authenticated && to.path.indexOf('/user/') > -1) {
    router.push({ name: 'index' })
  } else {
    next()
  }
})

router.afterEach(route => {
  document.title = route.meta.title;
})

export default router
