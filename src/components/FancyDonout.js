'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to add shadow for the 3D effect
const shadowPlugin = {
    id: 'shadowPlugin',
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((arc, index) => {
                const value = dataset.data[index];
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // Shadow color for the 3D effect
                ctx.shadowBlur = 10;                   // Adjust for blur
                ctx.shadowOffsetX = 5;                 // Horizontal shadow offset
                ctx.shadowOffsetY = 5;                 // Vertical shadow offset
                ctx.fill();
                ctx.restore();
            });
        });
    }
};

const FancyDoughnutChart = () => {
    const data = {
        labels: ['Purple', 'Gray', 'Blue', 'Green'],
        datasets: [
            {
                data: [20, 15, 30, 35], // Adjust the values based on the proportion in the image
                backgroundColor: [
                    'rgba(153, 102, 255, 1)',  // Purple
                    'rgba(201, 203, 207, 0.5)', // Light gray/transparent white
                    'rgba(54, 162, 235, 1)',    // Blue
                    'rgba(75, 192, 75, 1)',     // Green
                ],
                borderWidth: 0, // No border for clean segments
                hoverOffset: 5, // Adds a bit of hover effect depth
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '70%', // Creates the "doughnut" hole in the center
        plugins: {
            legend: {
                display: false, // Hide legend to match your example
            },
        },
        // Adding rounded corners effect
        elements: {
            arc: {
                borderRadius: 10, // Rounds the edges for a smoother, more 3D-like look
            },
        },
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Doughnut data={data} options={options} plugins={[shadowPlugin]} />
        </div>
    );
};

export default FancyDoughnutChart;
