<template>
  <div>
    <v-card
     v-for="plant in plants"
    :key="plant.key"           
     >
      <v-card-media :src="plant.image" height="300px">
      </v-card-media>
      <v-card-title primarry>
        <div>
          <div class="class headline">{{plant.name}}</div>
        <span class="grey--text">Current moist: {{currMoist}}% Current temperature: {{currTemp}}C Last watered {{lastWatered}}</span>
        </div>
      </v-card-title>
      <v-card-text v-show="show">
        <moist-temp v-if="temp.length == 20"></moist-temp>
      </v-card-text>
      <v-card-actions>
        <v-btn flat v-show="!show" @click.native="show = !show">Show more</v-btn>
        <v-btn flat v-show="show" @click.native="show = !show">Back</v-btn>
        <v-btn flat @click="water">Water me</v-btn>
      </v-card-actions>
     </v-card>
  </div>
</template>

<script>
import MoistTemp from '../charts/MoistTemp'
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    water () {
      this.$store.dispatch('water')
      console.log('pump triggered')
    }
  },
  created () {
    this.$store.dispatch('loadMoist')
    this.$store.dispatch('loadTemp')
    this.$store.dispatch('pumpEvents')
  },
  computed: {
    plants () {
      return this.$store.getters.plants
    },
    currMoist () {
      return this.$store.getters.currMoist
    },
    currTemp () {
      return this.$store.getters.currTemp
    },
    temp () {
      return this.$store.getters.temp
    },
    lastWatered () {
      return this.$store.getters.lastWatered
    }
  },
  components: {
    MoistTemp
  }
}
</script>
