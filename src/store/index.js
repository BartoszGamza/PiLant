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
    currTemp: '',
    container: 100
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
    },
    waterFall (state) {
      this.state.container -= 20
    },
    waterFill (state) {
      this.state.container = 100
    }
  },
  actions: {
    loadMoist ({commit}) {
      const url = 'https://pilant.herokuapp.com/moistures'
      axios.get(url)
        .then(Response => {
          let str = Response.data.data
          const obj = str
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
      const url = 'https://pilant.herokuapp.com/temperatures'
      axios.get(url)
        .then(Response => {
          let str = Response.data.data
          const obj = str
          let temp = []
          for (var i = obj.length - 1; i >= obj.length - 20; --i) {
            temp.push(parseInt(obj[i].value))
          }
          commit('setTemp', temp)
        })
    },
    water ({commit}, state) {
      if (this.state.container > 20) {
        // shouldn't be there - UI logic belongs to view
        if (confirm('Do you really want to wet me? Do you really want to make me cry?')) {
          // do it!
          const url = 'https://pilant.herokuapp.com/trigger_pump'
          axios.post(url)
            .then(Response => {
              console.log(Response)
            })
            .catch(Err => {
              console.log(Err)
            })
          commit('waterFall')
        } else {
          // Do nothing!
        }
      } else {
        alert('refill the container!')
      }
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
    },
    container (state) {
      return parseInt(state.container)
    }
  }
})
