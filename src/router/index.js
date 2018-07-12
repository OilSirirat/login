import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home1 from '@/components/home1'
import addAdmin from '@/components/addAdmin'
import log from '@/components/log'
import report from '@/components/report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home1',
      name: 'home1',
      component: home1
    },
    {
      path: '/addAdmin',
      name: 'addAdmin',
      component: addAdmin
    },
    {
      path: '/log',
      name: 'log',
      component: log
    },
    {
      path: '/report',
      name: 'report',
      component: report
    }
  ]
})
