import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
// import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

import './GraphicBlockDiagram.styles.scss';

const GraphicBlockDiagram = props => {

    const {
        changesCurrencyForPeriod,
        selectedCurrency,
    } = props;

    const data = {
        labels: changesCurrencyForPeriod.map(currency => moment(currency.date).format('L')),
        datasets: [{
            data: changesCurrencyForPeriod.map(currency => currency.rate),
            label: selectedCurrency.abbreviation,
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(0,139,139)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 20,
        }],
    };

    const options = {
        legend: { position: 'bottom' },
        maintainAspectRatio: false,
    };

    return (
        <div className="chart-container__chart">
            <Line
                data={data}
                options={options}
            />
        </div>
    );

};

export default GraphicBlockDiagram;

// return (
//     <div className="chart-container__chart">
//         <ResponsiveContainer>
//             <LineChart
//                 data={this.props.data}
//                 margin={{
//                     top: 15,
//                     right: 25,
//                     left: 5,
//                     bottom: 15,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3"/>
//                 <XAxis dataKey="Date"/>
//                 <YAxis
//                     domain={['dataMin', 'dataMax']}
//                     tickCount={9}
//                 />
//                 <Tooltip/>
//                 <Legend/>
//                 <Line
//                     type="monotone"
//                     dataKey="Rate"
//                     stroke="#000000"
//                 />
//             </LineChart>
//         </ResponsiveContainer>
//     </div>
// );
