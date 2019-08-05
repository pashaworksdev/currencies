import React from 'react';

import CurrenciesPickerSearch from '../CurrenciesPickerSearch';
import CurrenciesPickerTable from '../CurrenciesPickerTable';

import './CurrenciesPicker.styles.scss';

const CurrenciesPicker = () => (

    <div className="currencies-picker main__currencies-picker">
        <CurrenciesPickerSearch />
        <CurrenciesPickerTable />
    </div>

);

export default CurrenciesPicker;
