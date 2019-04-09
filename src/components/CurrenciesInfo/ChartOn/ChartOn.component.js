import React from 'react';

import {ConnectChartDatepickers} from "../ChartDatepickers";
import {ConnectChartMain} from "../ChartMain";
import './ChartOn.styles.css';

export const ChartOn = () => (

    <div className="chart-container currencies-information__chart-container">
        <ConnectChartDatepickers/>
        <ConnectChartMain/>
    </div>

);
