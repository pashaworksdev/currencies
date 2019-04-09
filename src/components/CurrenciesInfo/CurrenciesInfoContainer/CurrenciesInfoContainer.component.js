import React from 'react';

import {ConverterForm} from '../Converterform';
import {ConnectChartContainer} from '../ChartContainer';
import './CurrenciesInfoContainer.styles.css';

export const CurrenciesInfoContainer = () => (

    <div className="currencies-information currencies__currencies-information">
        <ConverterForm/>
        <ConnectChartContainer/>
    </div>

);
