export default function converter(state = {}, action) {
    switch (action.type) {
        case 'ENTER_AMOUNT_OF_CONVERTIBLE_CURRENCY':
            return { ...state, amountOfConvertibleCurrency: action.payload.amountOfConvertibleCurrency };
        case 'SELECT_ABBREVIATION_OF_CONVERTIBLE_CURRENCY':
            return { ...state, abbreviationOfConvertibleCurrency: action.payload.abbreviationOfConvertibleCurrency };
        default:
            return state;
    }
}
