import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
    const chartRef = useRef();
    const chartInstance = useRef(null);

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        // Destroy the previous chart instance before creating a new one
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        label: "",
                        data: [10, 500, 1000, 1500, 2000, 0, 2500, 3000, 3500, 4000, 4500],
                        // fill: true,
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
    }, []);

    return <canvas ref={chartRef} />;
};

export default LineChart;
