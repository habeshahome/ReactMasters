import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from 'recharts'

import { format, parseISO, subDays } from 'date-fns'

const data: any[] = []

for (let num = 30; num >= 0; num--) {
    data.push({
        date: subDays(new Date(), num).toISOString(),
        value: 1 + Math.random()
    })
}

// console.log(data)

// function CustomTooltip(active: boolean, payload: any[], label: string) {
//     if (active) {
//         return (
//             <div className='tooltips'>
//                 <h4> {format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
//                 <p> {payload[0].value} </p>
//             </div>
//         )
//     }
//     return <></>
// }
console.log(data)
export default function App() {
    return (
        <ResponsiveContainer minWidth={500} minHeight={500}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='0%' stopColor='#fff' stopOpacity={0.4} />
                        <stop offset='75%' stopColor='#fff' stopOpacity={0.05} />
                    </linearGradient>
                </defs>
                <Area dataKey='value' stroke='#fff' fill='url(#color)' />
                <XAxis dataKey='date' axisLine={false} tickLine={false} tickFormatter={str => {
                    const date = parseISO(str)
                    if (date.getDate() % 0 === 0) {
                        return format(date, "MMM, d")
                    }
                    return ""
                }} />
                <YAxis dataKey='value' axisLine={false} tickLine={false} tickCount={8} tickFormatter={(number) => `AED ${number}`} />
                <Tooltip />
                <CartesianGrid opacity={0.5} vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

