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
      <v-card-text>
        
       </v-card-text>
     </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    plants () {
      return this.$store.getters.plants
    }
  }
}
</script>
