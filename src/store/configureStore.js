import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const startDate = new Date();
startDate.setDate(startDate.getDate() - 30);
const endDate = new Date();

const initialState = {
    chooseCurrency: {
        currencyInput: '',
        currencySelected: {}
    },
    getCurrencies: {
        currenciesBase: [],
        currencyForPeriod: [],
    },
    getPeriodDate: {
        startDate: startDate,
        endDate: endDate
    },
    convertCurrency: {
        amountCurrency: '',
        abbreviationCurrency: ''
    }
};

export function configureStore() {

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );

}