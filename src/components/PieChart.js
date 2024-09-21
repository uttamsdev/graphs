'use client'
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Green', 'Red', 'Blue', 'Purple'],
        datasets: [
            {
                label: '# of Votes',
                data: [30, 20, 20, 30], // Adjust these values to match your specific needs
                backgroundColor: [
                    'rgba(75, 192, 192, 1)', // Green
                    'rgba(255, 99, 132, 1)', // Red
                    'rgba(54, 162, 235, 1)', // Blue
                    'rgba(153, 102, 255, 1)' // Purple
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Customize or remove legend position as needed
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    }
                }
            }
        }
    };

    return <div style={{ width: '300px', height: '300px' }}>
        <Pie data={data} options={options} />
    </div>;
};

export default PieChart;
