import {connect} from 'react-redux';

import {filterCurrency} from '../../../actions';
import {CurrenciesPickerSearch} from './CurrenciesPickerSearch.component.js';

const mapStateToProps = (state) => {
    return {
        currencyInput: state.chooseCurrency.currencyInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCurrencyInputChange: (target) => dispatch(filterCurrency(target))
    };
};

export const ConnectCurrenciesPickerSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrenciesPickerSearch);