export const filterCurrency = value => ({
    type: 'FILTER_CURRENCY',
    payload: {
        currencyInput: value
    }
});

export const selectCurrency = value => ({
    type: 'SELECT_CURRENCY',
    payload: {
        currencySelected: value
    }
});