import AreaChart from '@/components/AreaChart'
import DonughtWithLabel from '@/components/DonughtWithLabel'
import DonutChart from '@/components/Donugth'
import React from 'react'


const Graphs = () => {
    return (
        <div className='grid grid-cols-4'>
            <DonutChart />
            <DonughtWithLabel />
            <AreaChart />
        </div>
    )
}

export default Graphs