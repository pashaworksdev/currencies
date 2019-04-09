import {connect} from 'react-redux';

import {converterCurrencyInput} from '../../../actions';
import {ConverterInput} from './ConverterInput.component.js';

const mapStateToProps = (state) => {
    return {
        currencySelected: state.chooseCurrency.currencySelected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInputCurrencyChange: (target) => dispatch(converterCurrencyInput(target)),
    };
};

export const ConnectConverterInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConverterInput);