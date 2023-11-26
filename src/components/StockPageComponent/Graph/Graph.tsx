import { FC } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'

Chart.register(CategoryScale)

interface GraphProps {
  chartData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      borderColor: string
      borderWidth: number
      pointRadius: number
    }[]
  }
}

const Graph: FC<GraphProps> = ({ chartData }) => (
  <Line
    data={chartData}
    options={{
      plugins: {
        legend: {
          display: false
        }
      }
    }}
  />
)

export default Graph
