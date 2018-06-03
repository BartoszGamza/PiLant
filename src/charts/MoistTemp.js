import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveData],
  computed: {
    times () {
      return this.$store.getters.time
    },
    moist () {
      return this.$store.getters.moist
    },
    temp () {
      return this.$store.getters.temp
    }
  },
  mounted () {
  }
}
