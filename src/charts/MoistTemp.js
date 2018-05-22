import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    const times = this.$store.getters.time.reverse()
    const moist = this.$store.getters.moist.reverse()
    const temp = this.$store.getters.temp.reverse()
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
