import { updateLocalStorage } from '../services/usingLocalStorage.js';

export const selectFavoriteCurrency = currency => ({
    type: 'SELECT_FAVORITE_CURRENCY',
    payload: {
        selectedFavoriteCurrency: currency,
    },
});

export function addFavoriteCurrency(currency) {
    return (dispatch, getState) => {
        const state = getState();
        const { storageOfFavoriteCurrencies } = state.common;
        const repeatCurrency = storageOfFavoriteCurrencies.some(favoriteCurrency => favoriteCurrency.id === currency.id);
        if (!repeatCurrency) {
            storageOfFavoriteCurrencies.push(currency);
            updateLocalStorage(storageOfFavoriteCurrencies);
            dispatch({
                type: 'ADD_FAVORITE_CURRENCY',
                payload: {
                    storageOfFavoriteCurrencies,
                },
            });
        }
    };
}

export function removeFavoriteCurrency(currency) {
    return (dispatch, getState) => {
        const state = getState();
        const { storageOfFavoriteCurrencies } = state.common;
        const newStorage = storageOfFavoriteCurrencies.filter(favoriteCurrency => favoriteCurrency !== currency);
        updateLocalStorage(newStorage);
        dispatch({
            type: 'REMOVE_FAVORITE_CURRENCY',
            payload: {
                storageOfFavoriteCurrencies: newStorage,
            },
        });
    };
}
