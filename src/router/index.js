import Vue from 'vue'
import Router from 'vue-router'
import deta from '@/pages/deta'
import index from '@/pages/index'
import find from '@/pages/find'
import login from '@/pages/login'
import rego from '@/pages/rego'
import user from '@/pages/user'
import youxuan from '@/pages/youxuan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/deta',
      name: 'deta',
      component: deta
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/rego',
      name: 'rego',
      component: rego
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/youxuan',
      name: 'youxuan',
      component: youxuan
    },
     {
      path: '/decode',
      name: 'decode',
      component: decode
    }
  ]
})
