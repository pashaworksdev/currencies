import React from 'react';

import {CurrenciesPickerContainer} from '../CurrenciesPicker/CurrenciesPickerContainer';
import {CurrenciesInfoContainer} from '../CurrenciesInfo/CurrenciesInfoContainer';
import './Currencies.styles.css';

export const Currencies = () => (

    <div className="currencies main__currencies">
        <CurrenciesPickerContainer/>
        <CurrenciesInfoContainer/>
    </div>

);