// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import vuemoment from 'vue-moment'
import router from './router'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

const GRAPHCMS_API = 'https://api-apeast.graphcms.com/v1/cjzi37p5w0odf01ef3ouy8599/master'

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

Vue.use(VueApollo)
Vue.use(vuemoment)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
