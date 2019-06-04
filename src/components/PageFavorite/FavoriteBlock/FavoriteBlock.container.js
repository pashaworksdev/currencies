import { connect } from 'react-redux';

import FavoriteBlock from './FavoriteBlock.component.js';
import { selectFavoriteCurrency, removeFavoriteCurrency } from '../../../actions';

const mapStateToProps = state => ({
    selectedFavoriteCurrency: state.favorite.selectedFavoriteCurrency,
    storageOfFavoriteCurrencies: state.common.storageOfFavoriteCurrencies,
});

const mapDispatchToProps = dispatch => ({
    selectFavoriteCurrency: currency =>
        dispatch(selectFavoriteCurrency(currency)),
    removeFavoriteCurrency: currency =>
        dispatch(removeFavoriteCurrency(currency)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FavoriteBlock);
