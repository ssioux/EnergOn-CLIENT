// Chart Type
import { Line } from "react-chartjs-2";

// Important for visualize the graphic even if its not being used
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <Line data={chartData} />;
}

export default BarChart;
