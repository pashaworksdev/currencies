import {connect} from 'react-redux';

import {getCurrencies} from '../../../actions';
import {selectCurrency} from '../../../actions';
import {CurrenciesPickerTable} from './CurrenciesPickerTable.component.js';

const mapStateToProps = (state) => {
    return {
        currenciesBase: state.getCurrencies.currenciesBase,
        currencyInput: state.chooseCurrency.currencyInput,
        currencySelected: state.chooseCurrency.currencySelected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrencies: () => dispatch(getCurrencies()),
        onCurrencySelectedClick: (target) => dispatch(selectCurrency(target)),
    };
};

export const ConnectCurrenciesPickerTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrenciesPickerTable);