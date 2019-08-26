import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://api-apeast.graphcms.com/v1/cjzi37p5w0odf01ef3ouy8599/master'
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: GRAPHCMS_API,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

// Install the vue plugin
Vue.use(VueApollo)

export default apolloProvider
