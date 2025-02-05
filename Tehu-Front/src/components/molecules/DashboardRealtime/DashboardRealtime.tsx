//import { DoughnutChart } from "../../atoms/DoughnutChart/DoughnutChart"
import LineChart from "../../atoms/LineChart/LineChart"

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    },
  ],
};

const DashboardRealtime = () => {
  return (
    <div className='dashboard__realtime'>
    {/* <DoughnutChart/> */}
    <LineChart data={data}/>
  </div>
  )
}

export default DashboardRealtime