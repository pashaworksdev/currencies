import React from 'react';

import {ConnectCurrenciesPickerSearch} from '../CurrenciesPickerSearch';
import {ConnectCurrenciesPickerTable} from '../CurrenciesPickerTable';
import './CurrenciesPickerContainer.styles.css';

export const CurrenciesPickerContainer = () => (

    <div className="currencies-picker currencies__currencies-picker">
        <ConnectCurrenciesPickerSearch/>
        <ConnectCurrenciesPickerTable/>
    </div>

);
