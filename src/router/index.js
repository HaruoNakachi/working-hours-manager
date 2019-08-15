import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import ListDate from '@/views/ListDate'
import DetailDate from '@/views/DetailDate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'ListDate',
      component: ListDate
    },
    {
      path: '/detail',
      name: 'DetailDate',
      component: DetailDate
    }
  ]
})
