import Vue from 'vue'
import App from './examples/views/App.vue'
import router from './examples/router'
import store from './store'
import demoBlock from './examples/components/demo-block'
import katUI from './packages/components/index'
import './packages/default-theme/src/index.css'

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)
Vue.use(katUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
