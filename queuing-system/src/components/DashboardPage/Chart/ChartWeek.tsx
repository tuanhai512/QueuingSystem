import React, {useState, useEffect} from 'react'
import './lineChart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
function LineChartWeek() {
    const data = [
        {
            name: 'Tuần 1',
            number: 3000,
        },
        {
            name: 'Tuần 2',
            number: 4500,
        },
        {
            name: 'Tuần 3',
            number: 4500,
        },
        {
            name: 'Tuần 4',
            number: 4500,
        },
    ];
    return (
        <div className='line-chart'>
            <ResponsiveContainer width="100%" height="100%" >
                <AreaChart
                    data={data}
                    margin={{
                    top: 10,
                    right: 0,
                    left: 40,
                    bottom: 20,
                    }}
                >   
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#CEDDFF" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#CEDDFF" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid  stroke='#CEDDFF'/>
                    <XAxis dy={20} dataKey="name" stroke="#888888"/>
                    <YAxis dx={-40} stroke="#888888" dataKey="" tickCount={5} domain={[0,'auto']}/>
                    <Tooltip cursor={false}/>
                    <Area strokeWidth={4} radius="12" type="monotone" dataKey="number" stroke="#5185F7" fillOpacity={0.3} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartWeek