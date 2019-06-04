export default function common(state = {}, action) {
    switch (action.type) {
        case 'GET_STORAGE_OF_CURRENCIES':
            return { ...state, storageOfCurrencies: action.payload.storageOfCurrencies };
        case 'GET_CHANGES_CURRENCY_FOR_PERIOD':
            return { ...state, changesCurrencyForPeriod: action.payload.changesCurrencyForPeriod };
        case 'ENTER_CURRENCY':
            return { ...state, enteredCurrency: action.payload.enteredCurrency };
        case 'SELECT_CURRENCY':
            return { ...state, selectedCurrency: action.payload.selectedCurrency };
        case 'ADD_FAVORITE_CURRENCY':
            return { ...state, storageOfFavoriteCurrencies: action.payload.storageOfFavoriteCurrencies };
        case 'REMOVE_FAVORITE_CURRENCY':
            return { ...state, storageOfFavoriteCurrencies: action.payload.storageOfFavoriteCurrencies };
        case 'SET_START_DATE':
            return { ...state, startDate: action.payload.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.payload.endDate };
        default:
            return state;
    }
}
