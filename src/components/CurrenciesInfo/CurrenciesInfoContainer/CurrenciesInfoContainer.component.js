import React from 'react';
import {ConverterForm} from '../Converterform';
import {ChartContainer} from '../ChartContainer';
import './CurrenciesInfoContainer.styles.css';

export const CurrenciesInfoContainer = (props) => (

    <div className="currencies-information currencies__currencies-information">
        <ConverterForm
            currencySelected={props.currencySelected}
            currenciesBase={props.currenciesBase}
        />
        <ChartContainer
            currencySelected={props.currencySelected}
        />
    </div>

);
