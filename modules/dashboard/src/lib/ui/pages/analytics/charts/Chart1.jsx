import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { selectAnalyticsGraphData, useShowAnalyticsChartDataMutation } from '@productize/redux';

const LineChart = () => {
    const chartRef = useRef();
    const chartInstance = useRef(null);
    const [showAnalyticsChartData] = useShowAnalyticsChartDataMutation();
    const graphData = useSelector(selectAnalyticsGraphData);

    // const resData = { revForLastWeek: 5000, revForThisWeek: 3000, revForThreeWeeksAgo: 100, revForTwoWeeksAgo: 25000 };

    useEffect(() => {
        const analytics = async () => {
            await showAnalyticsChartData(null).unwrap();
        };
        analytics();
    }, [showAnalyticsChartData]);

    useEffect(() => {
        const data = [
            graphData?.revForThisWeek || 2000,
            graphData?.revForLastWeek || 5000,
            graphData?.revForTwoWeeksAgo || 1300,
            graphData?.revForThreeWeeksAgo || 3989,
        ];
        const myChartRef = chartRef.current.getContext('2d');
        // Destroy the previous chart instance before creating a new one
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Revenue per Week',
                        // data: graphData,
                        data,
                        borderColor: `#0266F4`,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    filler: {
                        propagate: false,
                    },
                },
                interaction: {
                    intersect: false,
                },
            },
        });

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [graphData]);

    return <canvas ref={chartRef} />;
};

export default LineChart;
