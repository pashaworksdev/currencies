export const enterAmountOfConvertibleCurrency = amount => ({
    type: 'ENTER_AMOUNT_OF_CONVERTIBLE_CURRENCY',
    payload: {
        amountOfConvertibleCurrency: amount,
    },
});
export const selectAbbreviationOfConvertibleCurrency = abbreviation => ({
    type: 'SELECT_ABBREVIATION_OF_CONVERTIBLE_CURRENCY',
    payload: {
        abbreviationOfConvertibleCurrency: abbreviation,
    },
});
