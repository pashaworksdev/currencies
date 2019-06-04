export const enterCurrency = currency => ({
    type: 'ENTER_CURRENCY',
    payload: {
        enteredCurrency: currency,
    },
});

export const selectCurrency = currency => ({
    type: 'SELECT_CURRENCY',
    payload: {
        selectedCurrency: currency,
    },
});
