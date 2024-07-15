import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { selectAnalyticsGraphData, useShowAnalyticsChartDataMutation } from '@productize/redux';

const BarChart = (props) => {
    const chartRef = useRef();
    const chartInstance = useRef(null);
    const [showAnalyticsChartData] = useShowAnalyticsChartDataMutation();
    const graphData = useSelector(selectAnalyticsGraphData);

    useEffect(() => {
        showAnalyticsChartData(null).unwrap();
    }, [showAnalyticsChartData]);

    useEffect(() => {
        const data = [`3000`, `4000`, `1000`, `5000`, `1000`, `3400`, `3456`];

        // Destroy the previous chart instance before creating a new one
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7'],
                datasets: [
                    {
                        label: 'Revenue per day',
                        data,
                        backgroundColor: '#6D5DD3',
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    filler: {
                        propagate: false,
                    },
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Days',
                        },
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Revenue',
                        },
                    },
                },
            },
        });

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return <canvas {...props} ref={chartRef} />;
};

export default BarChart;
