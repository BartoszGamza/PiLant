import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
// import {distanceInWords} from 'date-fns'
// import moment from 'moment'

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
    container: 100,
    lastWatered: ''
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
    },
    setLast (state, payload) {
      state.lastWatered = payload
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
          axios.get(url)
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
    },
    pumpEvents ({commit}, state) {
      const url = 'https://pilant.herokuapp.com/pumpevents'
      axios.get(url)
        .then(Response => {
          let str = Response.data.data
          // let last = str.length - 1
          console.log(str)
          commit('setLast', str[0].date)
        })
        .catch(Err => {
          console.log(Err)
        })
    }
  },
  getters: {
    plants (state) {
      return state.plants
    },
    moist (state) {
      return state.Moist.reverse()
    },
    temp (state) {
      return state.Temp.reverse()
    },
    time (state) {
      return state.Time.reverse()
    },
    currMoist (state) {
      return state.currMoist
    },
    currTemp (state) {
      return state.currTemp
    },
    container (state) {
      return parseInt(state.container)
    },
    lastWatered (state) {
      return state.lastWatered
    }
  }
})
