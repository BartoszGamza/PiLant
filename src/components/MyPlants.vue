<template>
  <div>
     <v-container>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex
          v-for="plant in plants"
          :key="plant.key"
          xs12
          sm12
          md6
          lg6
        >
        <v-card width="500px">
          <v-card-media :src="plant.image">
          </v-card-media>
          <v-card-tittle><h3>{{plant.name}}</h3></v-card-tittle>
          <v-card-text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum harum corrupti architecto animi veniam, impedit porro dolorum libero numquam quibusdam reiciendis voluptates totam. Reiciendis asperiores mollitia fugiat voluptate dolor ex!
          </v-card-text>
        </v-card>
      </v-flex>
      </v-layout>
     </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      plants: [
        {name: 'Maksymiliana', scpecies: 'monstera', image: '../../assets/maks.jpg'},
        {name: 'Zosia', scpecies: 'paprotka', image: '../../assets/maks.jpg'},
        {name: 'Zosia', scpecies: 'paprotka', image: '../../assets/maks.jpg'}
      ]
    }
  }
}
</script>


        
