
import AreaChart from '@/components/AreaChart'
import BarChart from '@/components/BarChart'
import StackedBarChart from '@/components/Barchats2'
// import BarChart from '@/components/BarChart'
import DonughtWithLabel from '@/components/DonughtWithLabel'
import DonutChart from '@/components/Donugth'
import FancyDoughnutChart from '@/components/FancyDonout'
import PieChart from '@/components/PieChart'
import PolarAreaChart from '@/components/PolarArea'
import React from 'react'


const Graphs = () => {
    return (
        <div className='grid grid-cols-4'>
            <DonutChart />
            <DonughtWithLabel />
            <AreaChart />
            {/* <PieChart /> */}
            <BarChart />
            <PolarAreaChart />
            <FancyDoughnutChart />
            <StackedBarChart />
        </div>
    )
}

export default Graphs