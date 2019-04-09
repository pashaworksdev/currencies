import {gettingCurrencies} from "../services/gettingCurrencies";

export function getCurrencies() {
    return (dispatch) => {
        let Promise = gettingCurrencies.getCurrenciesForDate();
        return Promise
            .then(result => {
                dispatch({
                    type: 'GET_CURRENCIES_BASE',
                    payload: {
                        currenciesBase: result
                    }
                });
            });
    };
}

export function getCurrencyForPeriod(id, startDate, endDate) {
    return (dispatch) => {
        let Promise = gettingCurrencies.getCurrencyForPeriod(id, startDate, endDate);
        return Promise
            .then(result => {
                dispatch({
                    type: 'GET_CURRENCY_FOR_PERIOD',
                    payload: {
                        currencyForPeriod: result
                    }
                });
            });
    };
}