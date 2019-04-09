import {connect} from 'react-redux';

import {converterCurrencyOutput} from '../../../actions';
import {ConverterOutput} from './ConverterOutput.component.js';

const mapStateToProps = (state) => {
    return {
        currenciesBase: state.getCurrencies.currenciesBase,
        amountCurrency: state.convertCurrency.amountCurrency,
        abbreviationCurrency: state.convertCurrency.abbreviationCurrency,
        currencySelected: state.chooseCurrency.currencySelected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOutputCurrencyChange: (target) => dispatch(converterCurrencyOutput(target))
    };
};

export const ConnectConverterOutput = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConverterOutput);