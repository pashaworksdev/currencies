export function getCurrencies(state = {}, action) {
    switch (action.type) {
        case 'GET_CURRENCIES_BASE':
            return {...state, currenciesBase: action.payload.currenciesBase};
        case 'GET_CURRENCY_FOR_PERIOD':
            return {...state, currencyForPeriod: action.payload.currencyForPeriod};
        default:
            return state;
    }
}