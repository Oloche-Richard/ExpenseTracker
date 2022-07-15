import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = () => {
  return(
    <div className="chart">
    {props.dataPoints.map(dataPoint => <ChartBar 
    key={datapoint.label}
    value={datapoint.value}
    maxValue={null}
    label={datapoint.label}
    /> )}
    </div  >
  )
}

export default Chart