import Vue from 'vue'
import App from './examples/views/App.vue'
import router from './examples/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
