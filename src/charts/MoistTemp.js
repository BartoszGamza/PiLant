import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  mounted () {
    const url = 'http://localhost:8080/static/Moisture.json#/'
    let datas = []
    let vals = []
    axios.get(url)
      .then(Response => {
        let str = Response.data
        str = '[' + str.substring(0, str.length - 2) + ']'
        const obj = JSON.parse(str)
        for (var i = obj.length - 1; i >= obj.length - 5; --i) {
          datas.push(obj[i].date)
          vals.push(obj[i].value)
        }
      })
    // let cats = Object.keys(datas).map((k) => datas.data[k])
    // let vals = Object.keys(datas).map((k) => datas[k])
    console.log(vals)
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: datas,
      datasets: [
        {
          label: 'Moist',
          borderColor: '#30B0F6',
          fill: false,
          data: vals
        }
      ]
    })
  }
}
