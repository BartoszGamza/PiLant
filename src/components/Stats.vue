<template>
  <div>
    <v-card v-for="plant in plants" :key="plant.key">
      <v-card-title>
        <h3>{{plant.name}}</h3>
      </v-card-title>
      <v-card-text>
        <v-progress-linear v-model="container"></v-progress-linear>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="refilled" flat>Reffiled</v-btn>
      </v-card-actions>
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
    },
    container () {
      return this.$store.getters.container
    }
  },
  methods: {
    refilled () {
      this.$store.commit('waterFill')
    }
  }
}
</script>
