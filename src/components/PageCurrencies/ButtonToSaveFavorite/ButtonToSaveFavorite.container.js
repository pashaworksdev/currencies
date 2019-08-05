import { connect } from 'react-redux';

import ButtonToSaveFavorite from './ButtonToSaveFavorite.component.js';
import { addFavoriteCurrency } from '../../../actions';

const mapStateToProps = state => ({
    selectedCurrency: state.common.selectedCurrency,
});

const mapDispatchToProps = dispatch => ({
    addFavoriteCurrency: currency =>
        dispatch(addFavoriteCurrency(currency)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonToSaveFavorite);
