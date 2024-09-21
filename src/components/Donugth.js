'use client';

import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const DonutChart = () => {
    const data = {
        datasets: [{
            data: [60, 40, 20],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'black'
            ],
            borderWidth: 0, // Removes space between items
        }]
    };

    const options = {
        cutout: '50%', // Controls the center space of the donut
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 0, // Ensure no extra padding around the chart
        },
        plugins: {
            legend: {
                display: false, // Hide legend if not needed
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#fff', // White background
                titleColor: '#000', // Text color
                titleFont: { size: 16, weight: 'bold' },
                bodyColor: '#000', // Body text color
                bodyFont: { size: 14 },
                borderColor: '#ccc', // Border color for the tooltip
                borderWidth: 1, // Border width
                cornerRadius: 10, // Rounded corners
                displayColors: false, // Hide color box in the tooltip
                padding: 8,
                callbacks: {
                    // Display percentage
                    label: (tooltipItem) => {
                        const total = tooltipItem.dataset.data.reduce((sum, value) => sum + value, 0);
                        const currentValue = tooltipItem.raw;
                        const percentage = ((currentValue / total) * 100).toFixed(1);
                        return `${percentage}%`;
                    }
                },
                caretPadding: 10,
                caretSize: 8,
                usePointStyle: true,
            }
        }
    };

    return (
        <div className='w-[400px] bg-red-100'>
            <div style={{ width: '150px', height: '150px', padding: 0, margin: 0 }}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default DonutChart;
