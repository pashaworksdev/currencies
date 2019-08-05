export default function favorite(state = {}, action) {
    switch (action.type) {
        case 'SELECT_FAVORITE_CURRENCY':
            return { ...state, selectedFavoriteCurrency: action.payload.selectedFavoriteCurrency };
        default:
            return state;
    }
}
