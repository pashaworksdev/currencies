import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import moment from 'moment';

import rootReducer from '../reducers';
import { initLocalStorage } from '../services/usingLocalStorage.js';

const startDate = moment().add(-10, 'days').toDate();
const endDate = moment().toDate();

const storageOfFavoriteCurrencies = initLocalStorage();

const initialState = {
    common: {
        storageOfCurrencies: [],
        storageOfFavoriteCurrencies,
        enteredCurrency: '',
        selectedCurrency: {},
        startDate,
        endDate,
        changesCurrencyForPeriod: [],
    },
    converter: {
        amountOfConvertibleCurrency: '',
        abbreviationOfConvertibleCurrency: '',
    },
    favorite: {
        selectedFavoriteCurrency: {},
    },
};

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        ),
    );
}
