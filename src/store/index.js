import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    plants: [
      {name: 'Maksymiliana', scpecies: 'monstera', image: 'https://i.imgur.com/LPwnhsB.jpg'}
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    plants (state) {
      return state.plants
    },
    moist () {
      const url = 'http://localhost:8080/static/Moisture.json#/'
      return axios.get(url)
        .then(Response => {
          let str = Response.data
          str = '[' + str.substring(0, str.length - 2) + ']'
          return JSON.parse(str)})
    }
  }
})
