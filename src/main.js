import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'


// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './assets/scss/easociados.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
