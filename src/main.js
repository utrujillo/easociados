import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import AOS from 'aos'



// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'aos/dist/aos.css'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPen, faPlus, faTimes, faTrash)

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
