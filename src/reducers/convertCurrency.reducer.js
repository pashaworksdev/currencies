export function convertCurrency(state = {}, action) {
    switch (action.type) {
        case 'INPUT_AMOUNT_CONVERTER_CURRENCY':
            return {...state, amountCurrency: action.payload.amountCurrency};
        case 'SELECT_ABBR_CONVERTER_CURRENCY':
            return {...state, abbreviationCurrency: action.payload.abbreviationCurrency};
        default:
            return state;
    }
}