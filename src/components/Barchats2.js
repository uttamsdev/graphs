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
                data: [10, 20, 15, 40, 25, 30, 20, 10],
                backgroundColor: 'rgba(54, 162, 235, 1)',
                borderRadius: {
                    topLeft: 0,
                    topRight: 0,
                    bottomLeft: 4,
                    bottomRight: 4,
                },
                borderSkipped: false,
            },
            {
                label: 'Dataset 2',
                data: [20, 25, 20, 25, 40, 20, 15, 5],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderRadius: {
                    topLeft: 4,
                    topRight: 4,
                    bottomLeft: 0,
                    bottomRight: 0,
                },
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Disable aspect ratio maintenance
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                stacked: true,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: false,
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => {
                        return ` ${tooltipItem.raw}`;
                    },
                },
            },
        },
        barThickness: 12,
        barPercentage: 0.6,
    };

    return (
        <div style={{ width: '400px', height: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default StackedBarChart;
