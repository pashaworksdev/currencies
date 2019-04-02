import React from 'react';
import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';
import './ChartMain.styles.css';

export const ChartMain = (props) => {

    return (
        <div className="chart-container__chart">
            <ResponsiveContainer height="99%">
                <LineChart
                    data={props.data}
                    margin={{top: 50, right: 50, left: 50, bottom: 50}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="Date"/>
                    <YAxis
                        domain={['dataMin', 'dataMax']}
                        tickCount={9}
                    />
                    <Tooltip/>
                    <Legend/>
                    <Line
                        type="monotone"
                        dataKey="Rate"
                        stroke="#000000"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

};
