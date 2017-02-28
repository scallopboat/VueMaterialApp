import 'babel-polyfill'
import 'material-design-lite'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import storeSet from './store'
import routes from './routes'

import App from './components/app.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

var store = new Vuex.Store(storeSet)

var router = new VueRouter({
routes})

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('app')
