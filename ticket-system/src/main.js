import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/App.vue'
import store from './store'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-book-e030b.firebaseio.com'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
