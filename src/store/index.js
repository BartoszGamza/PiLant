import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    plants: [
      {name: 'Maksymiliana', scpecies: 'monstera', image: 'https://i.imgur.com/LPwnhsB.jpg'}
    ],
    Moist: [],
    Temp: [],
    Time: [],
    currMoist: '',
    currTemp: ''
  },
  mutations: {
    setMoist (state, payload) {
      state.Moist = payload
      state.currMoist = payload[0]
    },
    setTemp (state, payload) {
      state.Temp = payload
      state.currTemp = payload[0]
    },
    setTime (state, payload) {
      state.Time = payload
    }
  },
  actions: {
    loadMoist ({commit}) {
      const url = 'http://localhost:8080/static/Moisture.json#/'
      // const url = 'http://localhost:4000/moistures'
      axios.get(url)
        .then(Response => {
          let str = Response.data
          str = '[' + str.substring(0, str.length - 2) + ']'
          const obj = JSON.parse(str)
          let time = []
          let moist = []
          for (var i = obj.length - 1; i >= obj.length - 20; --i) {
            time.push(obj[i].date)
            moist.push(parseInt(obj[i].value))
          }
          commit('setTime', time)
          commit('setMoist', moist)
        })
    },
    loadTemp ({commit}) {
      const url = 'http://localhost:8080/static/Temperature.json#/'
      // const url = 'http://localhost:4000/temperatures'
      axios.get(url)
        .then(Response => {
          let str = Response.data
          str = '[' + str.substring(0, str.length - 2) + ']'
          const obj = JSON.parse(str)
          let temp = []
          for (var i = obj.length - 1; i >= obj.length - 20; --i) {
            temp.push(parseInt(obj[i].value))
          }
          commit('setTemp', temp)
        })
    }
  },
  getters: {
    plants (state) {
      return state.plants
    },
    moist (state) {
      return state.Moist
    },
    temp (state) {
      return state.Temp
    },
    time (state) {
      return state.Time
    },
    currMoist (state) {
      return state.currMoist
    },
    currTemp (state) {
      return state.currTemp
    }
  }
})
