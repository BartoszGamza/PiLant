import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.$store.dispatch('loadMoist')
    this.$store.dispatch('loadTemp')
    const times = this.$store.getters.time
    const moist = this.$store.getters.moist
    const temp = this.$store.getters.temp
    console.log(times)
    this.renderChart({
      labels: times,
      datasets: [
        {
          label: 'Moist',
          borderColor: '#30B0F6',
          fill: false,
          data: moist
        },
        {
          label: 'Temperature',
          borderColor: '#D0021B',
          fill: false,
          data: temp
        }
      ]
    })
  }
}
