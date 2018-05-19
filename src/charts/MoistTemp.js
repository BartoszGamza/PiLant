import { Line } from 'vue-chartjs'
import axios from 'axios'

const url = 'http://localhost:8080/static/Moisture.json#/'
let Moist = []
axios.get(url)
  .then(Response => {
    let str = Response.data
    str = '[' + str.substring(0, str.length - 2) + ']'
    Moist = JSON.parse(str)
  })
console.log(Moist)

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      datasets: [
        {
          label: 'Moist',
          borderColor: '#30B0F6',
          fill: false,
          data: [70, 60, 55, 62, 67, 80, 79, 69, 50, 45, 40, 60]
        },
        {
          label: 'Temperature',
          borderColor: '#D0021B',
          fill: false,
          data: [21, 22, 19, 25, 27, 16, 18, 22, 19, 23, 28, 26]
        }
      ]
    })
  }
}
