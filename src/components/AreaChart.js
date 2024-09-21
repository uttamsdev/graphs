'use client';

import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

const AreaChart = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [30, 50, 40, 60, 70, 50, 80, 60],
                borderColor: 'rgba(54, 162, 235, 1)', // Blue line
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return null;
                    }
                    // Adjust gradient opacity here
                    return getGradient(ctx, chartArea, 'rgba(54, 162, 235, 0.1)', 'rgba(54, 162, 235, 0)');
                },
                fill: true,
                tension: 0.4, // Smooth curves
                borderWidth: 2, // Adjust line border width
                pointRadius: 0, // Hide points by default
                pointHoverRadius: 6, // Show larger points on hover
                pointBackgroundColor: 'white', // Point color
                pointBorderColor: 'rgba(54, 162, 235, 1)', // Point border color
            },
            {
                label: 'Dataset 2',
                data: [40, 30, 50, 45, 65, 40, 60, 50],
                borderColor: 'rgba(255, 99, 132, 1)', // Red line
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return null;
                    }
                    // Adjust gradient opacity here
                    return getGradient(ctx, chartArea, 'rgba(255, 99, 132, 0.1)', 'rgba(255, 99, 132, 0)');
                },
                fill: true,
                tension: 0.4, // Smooth curves
                borderWidth: 2, // Adjust line border width
                pointRadius: 0, // Hide points by default
                pointHoverRadius: 6, // Show larger points on hover
                pointBackgroundColor: 'white', // Point color
                pointBorderColor: 'rgba(255, 99, 132, 1)', // Point border color
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'nearest', // Show the nearest point
            axis: 'xy', // Detect nearest point across both x and y axis
            intersect: false, // Show points even when not directly intersecting
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove x-axis gridlines
                },
                ticks: {
                    color: '#888', // Set x-axis label text color
                    font: {
                        size: 12, // Adjust x-axis label text size
                    },
                },
                border: {
                    display: false, // Remove x-axis border line
                },
            },
            y: {
                grid: {
                    display: false, // Remove y-axis gridlines
                },
                ticks: {
                    display: false, // Hide y-axis labels
                },
                border: {
                    display: false, // Remove y-axis border line
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            datalabels: false,
            tooltip: {
                enabled: true, // Enable tooltip on hover
                backgroundColor: '#fff', // White background
                titleColor: '#000', // Title text color
                bodyColor: '#000', // Body text color
                borderColor: '#ccc', // Tooltip border color
                borderWidth: 1, // Tooltip border width
                cornerRadius: 5, // Tooltip border radius
                padding: 10, // Padding inside the tooltip
                displayColors: false, // Hide color box in tooltip
            },
        },
    };

    // Function to create the gradient
    const getGradient = (ctx, chartArea, color1, color2) => {
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, color1); // Start color (with opacity)
        gradient.addColorStop(1, color2); // End color (fully transparent)
        return gradient;
    };

    return (
        <div className='w-full h-[300px]'>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default AreaChart;
