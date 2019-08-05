import gettingCurrencies from '../services/gettingCurrencies.js';

export function getStorageOfCurrencies() {
    return dispatch => gettingCurrencies.getStorageOfCurrencies()
        .then(result => {
            dispatch({
                type: 'GET_STORAGE_OF_CURRENCIES',
                payload: {
                    storageOfCurrencies: result,
                },
            });
        });
}

export function getChangesCurrencyForPeriod(id, startDate, endDate) {
    return dispatch => gettingCurrencies.getChangesCurrencyForPeriod(id, startDate, endDate)
        .then(result => {
            dispatch({
                type: 'GET_CHANGES_CURRENCY_FOR_PERIOD',
                payload: {
                    changesCurrencyForPeriod: result,
                },
            });
        });
}
