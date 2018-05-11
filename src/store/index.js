import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    plants: [
      {name: 'Maksymiliana', scpecies: 'monstera', image: '@/assets/maks.jpg'},
      {name: 'Zosia', scpecies: 'paprotka', image: '@/assets/maks.jpg'},
      {name: 'Zosia', scpecies: 'paprotka', image: '@/assets/maks.jpg'}
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
