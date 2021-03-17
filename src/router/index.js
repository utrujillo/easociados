import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { 
      path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {
        requiresAuth: true
      } 
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // !store.getters.isLoggedIn
    if (!localStorage.getItem('access_token')) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
