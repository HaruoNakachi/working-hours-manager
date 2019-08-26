import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import ListDate from '@/views/ListDate'
import DetailDate from '@/views/DetailDate'
Vue.use(Router)

const router = new Router({
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
    },
    { path: '*', redirect: '/' }
  ],
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = localStorage.getItem('user')
//   if (authRequired && !loggedIn) {
//     return next('/')
//   }
//   next()
// })

export default router
