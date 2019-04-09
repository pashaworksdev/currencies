export const converterCurrencyInput = value => ({
    type: 'INPUT_AMOUNT_CONVERTER_CURRENCY',
    payload: {
        amountCurrency: value
    }
});

export const converterCurrencyOutput = value => ({
    type: 'SELECT_ABBR_CONVERTER_CURRENCY',
    payload: {
        abbreviationCurrency: value
    }
});