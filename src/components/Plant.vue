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
        <span class="grey--text">Current moist: {{currMoist}}% Current temperature: {{currTemp}}C Last watered 3 days ago</span>
        </div>
      </v-card-title>
      <v-card-text v-show="show">
        <moist-temp></moist-temp>
      </v-card-text>
      <v-card-actions>
        <v-btn flat v-show="!show" @click.native="show = !show">Show more</v-btn>
        <v-btn flat v-show="show" @click.native="show = !show">Back</v-btn>
        <v-btn flat @click="water">Water me</v-btn>
        <v-btn flat @click="check">Check</v-btn>
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
    },
    check () {
      console.log(this.temp)
      console.log(this.temp.length)
    }
  },
  created () {
    this.$store.dispatch('loadMoist')
    this.$store.dispatch('loadTemp')
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
    }
  },
  components: {
    MoistTemp
  }
}
</script>
