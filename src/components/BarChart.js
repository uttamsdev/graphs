'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BarChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 15, 5, 20, 25, 10, 15],
                backgroundColor: 'rgba(54, 162, 235, 1)', // Placeholder color
                borderWidth: 0, // Removed border
                borderRadius: 10,
                borderSkipped: false,
            },
            {
                label: 'Dataset 2',
                data: [25, 30, 20, 30, 25, 20, 15, 20],
                backgroundColor: 'rgba(255, 99, 132, 1)', // Placeholder color
                borderWidth: 0, // Removed border
                borderRadius: 10,
                borderSkipped: false,
            },
        ],
    });

    // Function to create a gradient for each dataset
    const getGradient = (ctx, chartArea, color1, color2) => {
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    };

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart || !chart.canvas || !chart.chartArea) return;

        const ctx = chart.ctx;
        const chartArea = chart.chartArea;

        // Set different gradients for each dataset
        const updatedData = {
            ...chartData,
            datasets: chartData.datasets.map((dataset, index) => {
                const colors =
                    index === 0
                        ? ['rgba(54, 162, 235, 1)', 'rgba(153, 102, 255, 1)'] // Gradient for Dataset 1
                        : ['rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)']; // Gradient for Dataset 2

                return {
                    ...dataset,
                    backgroundColor: [
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                        getGradient(ctx, chartArea, colors[0], colors[1]),
                    ],
                };
            }),
        };

        setChartData(updatedData);
    }, [chartData]);

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                border: {
                    display: false, // Removes the y-axis left border
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                border: {
                    display: false, // Removes the x-axis bottom border
                },
                // Add these properties to create a gap
                barPercentage: 50, // Adjust this value to increase or decrease the width of the bars
                categoryPercentage: 5, // Adjust this value to create a gap between categories
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend if not needed
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        return `${context.parsed.y}`;
                    },
                },
                animation: {
                    duration: 0, // Disable animation for fast tooltip response
                },
            },
            datalabels: false,
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 10, // Controls the thickness of the bars
        grouped: true, // Adjusts gaps between bars
        animations: false, // Disable animations to avoid slow transitions
    };

    return (
        <div style={{ width: '400px', height: '300px' }}>
            <Bar ref={chartRef} data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
