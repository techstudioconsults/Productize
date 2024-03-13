import React, { useCallback, useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { selectAllOrders } from '@productize/redux';

const LineChart = () => {
    const chartRef = useRef();
    const chartInstance = useRef(null);
    const orders = useSelector(selectAllOrders);
    // state by months
    const [mondayOrders, setMondayOrders] = useState([]);
    const [tuesdayOrders, setTuesdayOrders] = useState([]);
    const [wednesdayOrders, setWednesdayOrders] = useState([]);
    const [thursdayOrders, setThursdayOrders] = useState([]);
    const [fridayOrders, setFridayOrders] = useState([]);
    const [saturdayOrders, setSaturdayOrders] = useState([]);
    const [sundayOrders, setSundayOrders] = useState([]);

    // revenue data set
    const [revenueDataSet, setRevenuDataSet] = useState([]);

    function calculateAverage(numbers) {
        if (numbers.length === 0) {
            return 0;
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        return average;
    }

    function getDayOfWeek(dateString) {
        const dateObject = new Date(dateString);
        const options = { weekday: 'long' };
        const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(dateObject);
        return dayOfWeek;
    }

    const averageRevenuePerWeek = useCallback((ordersPerWeek) => {
        if (!Array.isArray(ordersPerWeek)) {
            return 0;
        }
        let priceData = [];
        let average = 0;
        ordersPerWeek.forEach((data) => {
            priceData.push(data.product_price);
        });
        average = calculateAverage(priceData);
        return average;
    }, []);

    useEffect(() => {
        const updateOrdersByDay = (order, daySetter) => {
            daySetter((prevOrders) => {
                // Check if the order with the same id already exists
                if (!prevOrders.some((prevOrder) => prevOrder.id === order.id)) {
                    return [...prevOrders, order];
                }
                return prevOrders;
            });
        };

        orders?.forEach((order) => {
            const dayOfWeek = getDayOfWeek(order?.date);

            switch (dayOfWeek) {
                case 'Monday':
                    updateOrdersByDay(order, setMondayOrders);
                    break;
                case 'Tuesday':
                    updateOrdersByDay(order, setTuesdayOrders);
                    break;
                case 'Wednesday':
                    updateOrdersByDay(order, setWednesdayOrders);
                    break;
                case 'Thursday':
                    updateOrdersByDay(order, setThursdayOrders);
                    break;
                case 'Friday':
                    updateOrdersByDay(order, setFridayOrders);
                    break;
                case 'Saturday':
                    updateOrdersByDay(order, setSaturdayOrders);
                    break;
                case 'Sunday':
                    updateOrdersByDay(order, setSundayOrders);
                    break;
                default:
                // Handle default case if needed
            }
        });
        // Create a new array with the updated values for each day
        const updatedDataSet = [
            averageRevenuePerWeek(mondayOrders),
            averageRevenuePerWeek(tuesdayOrders),
            averageRevenuePerWeek(wednesdayOrders),
            averageRevenuePerWeek(thursdayOrders),
            averageRevenuePerWeek(fridayOrders),
            averageRevenuePerWeek(saturdayOrders),
            averageRevenuePerWeek(sundayOrders),
        ];

        // Set the revenuDataSet once with the updated values
        setRevenuDataSet(updatedDataSet);
    }, [averageRevenuePerWeek, fridayOrders, mondayOrders, orders, saturdayOrders, sundayOrders, thursdayOrders, tuesdayOrders, wednesdayOrders]);

    useEffect(() => {
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
                        data: revenueDataSet,
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
    }, [revenueDataSet]);

    return <canvas ref={chartRef} />;
};

export default LineChart;
