export function updateLocalStorage(value) {
    localStorage.setItem('storageOfFavoriteCurrencies', JSON.stringify(value));
}

export function initLocalStorage() {
    if (!localStorage.getItem('storageOfFavoriteCurrencies')) {
        updateLocalStorage([]);
    }
    return JSON.parse(localStorage.getItem('storageOfFavoriteCurrencies'));
}
