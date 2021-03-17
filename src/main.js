import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import AOS from 'aos'
import axios from 'axios'

// Axios config
axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios;

// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'aos/dist/aos.css'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faPen, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPen, faPlus, faTimes, faTrash, faImage)

Vue.component('fas', FontAwesomeIcon)

import './assets/scss/easociados.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  created: function () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
