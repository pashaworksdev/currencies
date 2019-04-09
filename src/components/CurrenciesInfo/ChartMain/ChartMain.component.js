import React, {Component} from 'react';
import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';

import './ChartMain.styles.css';

export class ChartMain extends Component {

    componentDidMount() {
        this.props.getCurrencies(this.props.currencySelected.Id, this.props.startDate, this.props.endDate);
    };

    componentDidUpdate(previousProps) {
        if (previousProps.currencySelected !== this.props.currencySelected ||
            previousProps.startDate !== this.props.startDate ||
            previousProps.endDate !== this.props.endDate) {
            this.props.getCurrencies(this.props.currencySelected.Id, this.props.startDate, this.props.endDate);
        }
    }

    render() {
        return (
            <div className="chart-container__chart">
                <ResponsiveContainer height="99%">
                    <LineChart
                        data={this.props.data}
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

}
