import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugins/element'
import './styles/main'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
