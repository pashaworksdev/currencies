import {combineReducers} from 'redux';

import {chooseCurrency} from './chooseCurrency.reducer.js';
import {getCurrencies} from './getCurrencies.reducer.js';
import {getPeriodDate} from './getPeriodDate.reducer.js';
import {convertCurrency} from './convertCurrency.reducer.js';

export default combineReducers({
    chooseCurrency: chooseCurrency,
    getCurrencies: getCurrencies,
    getPeriodDate: getPeriodDate,
    convertCurrency: convertCurrency
});

