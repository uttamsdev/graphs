'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, defs, LinearGradient } from 'recharts';

const data = [
    { name: 'Jan', Dataset1: 10, Dataset2: 25 },
    { name: 'Feb', Dataset1: 20, Dataset2: 30 },
    { name: 'Mar', Dataset1: 15, Dataset2: 20 },
    { name: 'Apr', Dataset1: 5, Dataset2: 30 },
    { name: 'May', Dataset1: 20, Dataset2: 25 },
    { name: 'Jun', Dataset1: 25, Dataset2: 20 },
    { name: 'Jul', Dataset1: 10, Dataset2: 15 },
    { name: 'Aug', Dataset1: 15, Dataset2: 20 },
];

const CustomBarChart = () => {
    return (
        <div className='flex justify-center' style={{ width: '400px', height: '300px', padding: '0', margin: '0' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 0, right: 0, left: -50, bottom: 0 }} // Remove all margins
                    barCategoryGap="0%" // Remove category gap between bar groups (left side gap)
                    barGap={4} // Adjust the gap between bars within each group
                >
                    <defs>
                        {/* Gradient for Dataset 1 */}
                        <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#36A2EB" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#9966FF" stopOpacity={0.8} />
                        </linearGradient>

                        {/* Gradient for Dataset 2 */}
                        <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF6384" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#FFCE56" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>

                    {/* XAxis with no bottom border */}
                    <XAxis
                        dataKey="name"
                        axisLine={false}  // Remove the bottom axis line
                        tickLine={false}  // Remove tick lines
                        tick={{ fill: '#8884d8', fontSize: 14 }} // Customize text color and size
                    />

                    {/* YAxis with no data range or border */}
                    <YAxis
                        axisLine={false}  // Remove Y-axis line
                        tickLine={false}  // Remove tick lines
                        tick={false}      // Hide Y-axis labels (data range)
                    />

                    {/* Tooltip */}
                    <Tooltip />

                    {/* Dataset 1 */}
                    <Bar
                        dataKey="Dataset1"
                        fill="url(#gradient1)"
                        radius={[10, 10, 0, 0]} // Rounded top corners
                        barSize={6}            // Make bars thinner
                        minPointSize={2}       // Ensure small bars are visible
                    />

                    {/* Dataset 2 */}
                    <Bar
                        dataKey="Dataset2"
                        fill="url(#gradient2)"
                        radius={[10, 10, 0, 0]} // Rounded top corners
                        barSize={6}            // Make bars thinner
                        minPointSize={2}       // Ensure small bars are visible
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;
