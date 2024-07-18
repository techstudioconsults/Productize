import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { selectDailyAnalyticsGraphData } from '@productize/redux';

// Register the necessary elements with Chart.js
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ data }) => {
    const dataPoint = useSelector(selectDailyAnalyticsGraphData);

    console.log(dataPoint);

    const chartData = {
        labels: data?.map((item) => item.day),
        datasets: [
            {
                label: 'Revenue Per Day',
                data: data?.map((item) => item.revenue),
                backgroundColor: 'rgba(3, 43, 242, 1)',
                hoverOffset: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                title: `Days`,
                beginAtZero: true,
            },
            y: {
                title: `Revenue`,
                beginAtZero: true,
            },
        },
    };

    return <Bar data={chartData} options={options} height={300} width={400} />;
};

export default BarChart;
