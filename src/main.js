import Vue from 'vue'
import App from './App'
import vuemoment from 'vue-moment'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import apolloProvider from '@/plugins/apollo'
import GAuth from 'vue-google-oauth2'
Vue.config.productionTip = false
const gauthOption = {
  clientId: '44605991414-3ocjrvcku2a6ahl13pqes2mea9gdtf11.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(vuemoment)

/* get token */
const to = localStorage.getItem('user')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  vuetify,
  data: {
    token: to
  },
  components: { App },
  template: '<App/>'
})
