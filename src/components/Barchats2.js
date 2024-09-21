'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 15, 40, 25, 30, 20, 10], // Bottom part of the stacked bars
                backgroundColor: 'rgba(54, 162, 235, 1)', // Darker blue
                borderRadius: {
                    topLeft: 0,
                    topRight: 0,
                    bottomLeft: 4,
                    bottomRight: 4, // Rounded only at the bottom for Dataset 1
                },
                borderSkipped: false, // Ensures no hard edges at the bottom
            },
            {
                label: 'Dataset 2',
                data: [20, 25, 20, 25, 40, 20, 15, 5], // Top part of the stacked bars
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Lighter blue
                borderRadius: {
                    topLeft: 4,
                    topRight: 4,
                    bottomLeft: 0,
                    bottomRight: 0, // Rounded only at the top for Dataset 2
                },
                borderSkipped: false, // Ensures no hard edges at the top
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true, // Enable stacking on the x-axis
                grid: {
                    display: false, // Remove grid lines
                },
                border: {
                    display: false, // Remove the bottom border of x-axis
                },
            },
            y: {
                stacked: true, // Enable stacking on the y-axis
                grid: {
                    display: false, // Remove grid lines
                },
                border: {
                    display: false, // Remove the left border of y-axis
                },
                ticks: {
                    display: false, // Remove y-axis labels (range values)
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hides the legend to match the example
            },
            datalabels: false,
            tooltip: {
                enabled: true, // Enables tooltips
                callbacks: {
                    label: (tooltipItem) => {
                        // Customize tooltip display value
                        return ` ${tooltipItem.raw}`;
                    },
                },
            },
        },
        barThickness: 12, // Adjust bar thickness
        barPercentage: 0.6, // Further adjustment for bar width if needed
    };

    return (
        <div style={{ width: '400px', height: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default StackedBarChart;
