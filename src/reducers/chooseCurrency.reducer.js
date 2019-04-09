export function chooseCurrency(state = {}, action) {
    switch (action.type) {
        case 'FILTER_CURRENCY':
            return {...state, currencyInput: action.payload.currencyInput};
        case 'SELECT_CURRENCY':
            return {...state, currencySelected: action.payload.currencySelected};
        default:
            return state;
    }
}