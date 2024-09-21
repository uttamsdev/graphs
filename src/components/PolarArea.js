'use client';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Purple', 'Green', 'Cyan'],
        datasets: [
            {
                data: [10, 20, 30, 40, 15], // Adjust the values based on the visual proportion from the graph
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)', // Pinkish-red
                    'rgba(54, 162, 235, 0.8)', // Blue
                    'rgba(153, 102, 255, 0.8)', // Purple
                    'rgba(75, 192, 192, 0.8)', // Light cyan
                    'rgba(75, 192, 75, 0.8)',  // Green
                ],
                borderWidth: 0, // Remove the segment borders
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                grid: {
                    display: false, // Removes the circular grid lines
                },
                angleLines: {
                    display: false, // Removes the radial angle lines
                },
                ticks: {
                    display: false, // Removes the labels like 0, 10, 20, etc.
                },
            },
        },
        plugins: {
            legend: {
                display: false, // If you want to hide the labels
            },
            datalabels: false,
        },
    };

    return <div style={{ width: '400px', height: '300px' }}>
        <PolarArea data={data} options={options} />
    </div>;
};

export default PolarAreaChart;
