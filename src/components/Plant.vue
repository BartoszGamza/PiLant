<template>
  <div>
    <v-card 
     width="500px"
     v-for="plant in plants"
    :key="plant.key"           
     >
      <v-card-media :src="plant.image" height="300px">
      </v-card-media>
      <v-card-title primarry>
        <div>
          <div class="class headline">{{plant.name}}</div>
        <span class="grey--text">Current moist: 88% Current temperature: 20C Last watered 3 days ago</span>
        </div>
      </v-card-title>
      <v-card-text v-show="show">
        <moist-temp></moist-temp>
      </v-card-text>
      <v-card-actions>
        <v-btn flat v-show="!show" @click.native="show = !show">Show more</v-btn>
        <v-btn flat v-show="show" @click.native="show = !show">Back</v-btn>
        <v-btn flat>Water me</v-btn>
        <v-btn flat v-show="show">Edit</v-btn>
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
  computed: {
    plants () {
      return this.$store.getters.plants
    }
  },
  components: {
    MoistTemp
  }
}
</script>
