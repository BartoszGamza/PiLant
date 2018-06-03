import { Line } from 'vue-chartjs'

export default {
  extends: Line,
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
    // console.log(this.temp)
    // console.log(this.moist)
    // console.log(this.times)
    this.renderChart({
      labels: this.times,
      datasets: [
        {
          label: 'Moist',
          borderColor: '#30B0F6',
          fill: false,
          data: this.moist
        },
        {
          label: 'Temperature',
          borderColor: '#D0021B',
          fill: false,
          data: this.temp
        }
      ]
    })
  }
}
