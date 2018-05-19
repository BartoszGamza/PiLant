import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  mounted () {
    const url = 'http://localhost:8080/static/Moisture.json#/'
    let Datas = []
    axios.get(url)
      .then(Response => {
        let str = Response.data
        str = '[' + str.substring(0, str.length - 2) + ']'
        Datas = JSON.parse(str)
      })
    const MLabels = Datas.map(function (item) { return item.date })
    const MValues = Datas.map(function (item) { return parseInt(item.value) })
    console.log(Datas)
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: MLabels,
      datasets: [
        {
          label: 'Moist',
          borderColor: '#30B0F6',
          fill: false,
          data: MValues
        }
      ]
    })
  }
}
