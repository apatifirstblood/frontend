import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);
let api_url = "http://localhost:5000/api/"
export default new Vuex.Store({
  state: {
    api_url: "http://localhost:5000/api/",
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') || ''
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, payload){
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login({ commit }, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: `${api_url}users/login`, data: user, method: 'POST'})
        .then(resp => {
          if(resp.data.success){
            const token = resp.data.token
            const userData = resp.data.user
            localStorage.setItem('token', token)
            localStorage.setItem('user', userData)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', {token: token, user: userData})
            resolve(resp)
          }else{
            reject(resp.data.message)
          }
        }).catch(err=> {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register({ commit }, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: `${api_url}users/register`, data: user, method: 'POST'})
        .then(resp => {
          if(resp.data.success){
            const token = resp.data.token
            const userData = resp.data.user
            localStorage.setItem('token', token)
            localStorage.setItem('user', userData)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', {token: token, user: userData})
            resolve(resp)
          }else{
            reject(resp.data.message)
          }
        }).catch(err =>{
          commit('auth_error', err)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          reject(err)
        })
      })
    },
    logout({ commit }) {
      return new Promise(async (resolve) => {
        await commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    isAuthenticated: state => !!state.user.authenticated,
    userName: state => state.user.name,
    apiUrl: state => state.api_url,
    userEmail: state => state.user.email,
    isAdmin: state => {
      return state.user.role === 'admin' ? true : false
    }
  }
});
