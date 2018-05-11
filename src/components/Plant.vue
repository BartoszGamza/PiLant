<template>
  <div>
    <v-card 
     width="500px"
     v-for="plant in plants"
    :key="plant.key"           
     >
      <v-card-media :src="plant.image">
      </v-card-media>
      <v-card-title><h3>{{plant.name}}</h3></v-card-title>
      <v-card-text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum harum corrupti architecto animi veniam, impedit porro dolorum libero numquam quibusdam reiciendis voluptates totam. Reiciendis asperiores mollitia fugiat voluptate dolor ex!
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
