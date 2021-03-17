import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = process.env.VUE_APP_API_URL

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
    loggedIn(state){
      return state.token != null
    }
  },
  mutations: {
    retreiveToken(state, token) {
      state.token = token
    }
  },
  actions: {
    retreiveToken(context, credentials){
      return new Promise( (resolve, reject) => {
        
        axios.post('/v1/login', {
          user: {
            username: credentials.username,
            password: credentials.password
          }
        }).then(response => {
          let token = response.data.access_token
          //Verificar si utilizar localStorage o Cookies
          localStorage.setItem('access_token', token)
          // Actualizamos la variable con una mutación
          context.commit('retreiveToken', token)
          resolve(response)
        }).catch(error => {
          console.log(error)
          reject(error)
        })

      })
      
    }
  }
})