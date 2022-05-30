import React, {useState, useEffect} from 'react'
import './lineChart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
function LineChartDay() {
    const data = [
        {
            name: '1',
            uv: 3000,
        },
        {
            name: '2',
            uv: 4500,
        },
        {
            name: '3',
            uv: 4000,
        },
        {
            name: '4',
            uv: 3200,
        },
        {
            name: '5',
            uv: 2200,
        },
        {
            name: '6',
            uv: 3000,
        },
        {
            name: '7',
            uv: 2288,
        },
        {
            name: '8',
            uv: 4288,
        },
        {
            name: '9',
            uv: 3288,
        },
        {
            name: '10',
            uv: 1288,
        },
        {
            name: '11',
            uv: 2288,
        },
        {
            name: '12',
            uv: 3288,
        },
        {
            name: '13',
            uv: 2288,
        },
        {
            name: '14',
            uv: 4288,
        },
        {
            name: '15',
            uv: 2288,
        },
        {
            name: '16',
            uv: 1288,
        },
        {
            name: '17',
            uv: 2288,
        },
        {
            name: '18',
            uv: 4288,
        },
        {
            name: '19',
            uv: 1288,
        },
        {
            name: '20',
            uv: 4288,
        },
        {
            name: '21',
            uv: 3288,
        },
        {
            name: '22',
            uv: 2288,
        },
        {
            name: '23',
            uv: 1288,
        },
        {
            name: '24',
            uv: 3288,
        },
        {
            name: '25',
            uv: 4288,
        },
        {
            name: '26',
            uv: 2288,

        },
        {
            name: '27',
            uv: 3288,
        },
        {
            name: '28',
            uv: 4288,
        },
        {
            name: '29',
            uv: 3288,
        },
        {
            name: '30',
            uv: 3288,
        },
        {
            name: '31',
            uv: 4288,
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
                    <Area strokeWidth={4} radius="12" type="monotone" dataKey="uv" stroke="#5185F7" fillOpacity={0.3} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartDay