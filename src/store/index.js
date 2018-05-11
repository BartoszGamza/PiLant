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
    }
  }
})
