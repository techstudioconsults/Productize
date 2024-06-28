import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { selectAnalyticsGraphData, useShowAnalyticsChartDataMutation } from '@productize/redux';

const LineChart = () => {
    const chartRef = useRef();
    const chartInstance = useRef(null);
    const [showAnalyticsChartData] = useShowAnalyticsChartDataMutation();
    const graphData = useSelector(selectAnalyticsGraphData);

    useEffect(() => {
        showAnalyticsChartData(null).unwrap();
    }, [showAnalyticsChartData]);

    useEffect(() => {
        const data = [graphData?.revForThisWeek, graphData?.revForLastWeek, graphData?.revForTwoWeeksAgo, graphData?.revForThreeWeeksAgo];

        // Destroy the previous chart instance before creating a new one
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Revenue per Week',
                        data,
                        borderColor: `#0266F4`,
                        fill: false,
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
                            text: 'Weeks',
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
    }, [graphData?.revForLastWeek, graphData?.revForThisWeek, graphData?.revForThreeWeeksAgo, graphData?.revForTwoWeeksAgo]);

    return <canvas ref={chartRef} />;
};

export default LineChart;
